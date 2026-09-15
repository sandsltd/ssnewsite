-- Private agreement records. Only the server's service-role key may access these.
begin;
create table public.signing_agreements (
 id uuid primary key default gen_random_uuid(), token_hash text not null unique check(length(token_hash)=64),
 title text not null, revision text not null, client_name text not null, client_company text not null,
 client_email text not null, provider_email text not null, start_date date not null,
 provider_name text not null, provider_signed_at timestamptz not null,
 source_pdf text not null check(length(source_pdf)<=6000000), source_hash text not null check(length(source_hash)=64),
 created_at timestamptz not null default now(), expires_at timestamptz not null,
 status text not null default 'pending' check(status in ('pending','signed','revoked')),
 signed_at timestamptz, signer_name text, signer_role text, consent_text text,
 signed_pdf text, signed_hash text,
 otp_hash text, otp_expires_at timestamptz, otp_attempts int not null default 0,
 otp_last_sent timestamptz, otp_window timestamptz, otp_sends int not null default 0,
 check ((status='signed') = (signed_at is not null and signed_pdf is not null and signed_hash is not null))
);
create table public.signing_sessions (
 session_hash text primary key, agreement_id uuid not null references public.signing_agreements(id),
 verified_at timestamptz not null default now(), expires_at timestamptz not null
);
create table public.signing_events (
 id bigint generated always as identity primary key, agreement_id uuid not null references public.signing_agreements(id),
 kind text not null, created_at timestamptz not null default now(), details jsonb not null default '{}'
);
create table public.signing_outbox (
 id uuid primary key default gen_random_uuid(), agreement_id uuid not null references public.signing_agreements(id),
 recipient text not null, recipient_kind text not null check(recipient_kind in ('client','provider')),
 attempts int not null default 0, next_attempt timestamptz not null default now(),
 lease_until timestamptz, sent_at timestamptz, resend_id text, last_error text,
 unique(agreement_id,recipient_kind)
);
create index signing_outbox_due on public.signing_outbox(next_attempt) where sent_at is null;
alter table public.signing_agreements enable row level security;
alter table public.signing_sessions enable row level security;
alter table public.signing_events enable row level security;
alter table public.signing_outbox enable row level security;
revoke all on public.signing_agreements, public.signing_sessions, public.signing_events, public.signing_outbox from public, anon, authenticated;
grant select,insert,update on public.signing_agreements to service_role;
grant select,insert on public.signing_sessions, public.signing_events to service_role;
grant select,update on public.signing_outbox to service_role;
grant usage,select on sequence public.signing_events_id_seq to service_role;

-- Freeze issued terms. Signed records cannot be silently replaced or re-signed.
create function public.signing_guard() returns trigger language plpgsql set search_path = public as $$
begin
 if old.status='signed' and (to_jsonb(new)-array['otp_hash','otp_expires_at','otp_attempts','otp_last_sent','otp_window','otp_sends'])
   is distinct from (to_jsonb(old)-array['otp_hash','otp_expires_at','otp_attempts','otp_last_sent','otp_window','otp_sends']) then
   raise exception 'Signed agreement is immutable';
 end if;
 if (to_jsonb(new)-array['status','signed_at','signer_name','signer_role','consent_text','signed_pdf','signed_hash','otp_hash','otp_expires_at','otp_attempts','otp_last_sent','otp_window','otp_sends'])
   is distinct from (to_jsonb(old)-array['status','signed_at','signer_name','signer_role','consent_text','signed_pdf','signed_hash','otp_hash','otp_expires_at','otp_attempts','otp_last_sent','otp_window','otp_sends']) then
   raise exception 'Issued agreement terms are immutable; revoke and issue a new agreement';
 end if;
 return new;
end $$;
create trigger signing_guard before update on public.signing_agreements for each row execute function public.signing_guard();

create function public.signing_request_code(p_id uuid,p_hash text) returns boolean
language plpgsql security definer set search_path = public as $$
declare a public.signing_agreements; n timestamptz:=clock_timestamp();
begin
 select * into a from public.signing_agreements where id=p_id for update;
 if not found or a.status='revoked' or a.expires_at<=n then return false; end if;
 if a.otp_last_sent>n-interval '60 seconds' then return false; end if;
 if a.otp_window>n-interval '1 hour' and a.otp_sends>=3 then return false; end if;
 update public.signing_agreements set otp_hash=p_hash,otp_expires_at=n+interval '10 minutes',otp_attempts=0,
 otp_last_sent=n,otp_window=case when a.otp_window>n-interval '1 hour' then a.otp_window else n end,
 otp_sends=case when a.otp_window>n-interval '1 hour' then a.otp_sends+1 else 1 end where id=p_id;
 insert into public.signing_events(agreement_id,kind) values(p_id,'verification_requested');
 return true;
end $$;

create function public.signing_verify_code(p_id uuid,p_hash text,p_session_hash text) returns boolean
language plpgsql security definer set search_path = public as $$
declare a public.signing_agreements; n timestamptz:=clock_timestamp();
begin
 select * into a from public.signing_agreements where id=p_id for update;
 if not found or a.status='revoked' or a.expires_at<=n or a.otp_hash is null or a.otp_expires_at<=n or a.otp_attempts>=5 then return false; end if;
 update public.signing_agreements set otp_attempts=otp_attempts+1 where id=p_id;
 if a.otp_hash<>p_hash then return false; end if;
 update public.signing_agreements set otp_hash=null where id=p_id;
 insert into public.signing_sessions(session_hash,agreement_id,expires_at) values(p_session_hash,p_id,least(a.expires_at,n+interval '1 hour'));
 insert into public.signing_events(agreement_id,kind) values(p_id,'email_verified');
 return true;
end $$;

create function public.signing_complete(p_id uuid,p_session_hash text,p_source_hash text,p_name text,p_role text,
 p_consent text,p_signed_at timestamptz,p_pdf text,p_hash text,p_evidence jsonb) returns boolean
language plpgsql security definer set search_path = public as $$
declare a public.signing_agreements;
begin
 select * into a from public.signing_agreements where id=p_id for update;
 if not found or a.status='revoked' or a.expires_at<=clock_timestamp() then return false; end if;
 if not exists(select 1 from public.signing_sessions where agreement_id=p_id and session_hash=p_session_hash and expires_at>clock_timestamp()) then return false; end if;
 if a.status='signed' then return true; end if;
 if p_source_hash<>a.source_hash or length(p_name)<2 or length(p_name)>100 or length(p_role)<2 or length(p_role)>100
 or length(p_pdf)>8000000 or length(p_hash)<>64 or length(p_consent)<20 then return false; end if;
 update public.signing_agreements set status='signed',signed_at=p_signed_at,signer_name=p_name,signer_role=p_role,
 consent_text=p_consent,signed_pdf=p_pdf,signed_hash=p_hash,otp_hash=null where id=p_id;
 insert into public.signing_events(agreement_id,kind,details) values(p_id,'signed',p_evidence||jsonb_build_object('source_hash',a.source_hash,'signed_hash',p_hash));
 insert into public.signing_outbox(agreement_id,recipient,recipient_kind) values(p_id,a.client_email,'client'),(p_id,a.provider_email,'provider');
 return true;
end $$;

create function public.signing_claim_emails(p_limit int default 5) returns setof public.signing_outbox
language sql security definer set search_path = public as $$
 update public.signing_outbox set lease_until=now()+interval '5 minutes',attempts=attempts+1
 where id in (select id from public.signing_outbox where sent_at is null and next_attempt<=now()
 and (lease_until is null or lease_until<now()) order by next_attempt limit least(greatest(p_limit,1),10) for update skip locked)
 returning *;
$$;
revoke all on function public.signing_guard() from public,anon,authenticated;
revoke all on function public.signing_request_code(uuid,text), public.signing_verify_code(uuid,text,text),
 public.signing_complete(uuid,text,text,text,text,text,timestamptz,text,text,jsonb),public.signing_claim_emails(int) from public,anon,authenticated;
grant execute on function public.signing_request_code(uuid,text), public.signing_verify_code(uuid,text,text),
 public.signing_complete(uuid,text,text,text,text,text,timestamptz,text,text,jsonb),public.signing_claim_emails(int) to service_role;
commit;
