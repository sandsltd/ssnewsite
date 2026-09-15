// Opt-in integration test: real database + Resend's documented test sinks only.
// Never accepts a real recipient or signs a customer agreement.
import assert from 'node:assert/strict';
import { randomBytes, createHash } from 'node:crypto';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { PDFDocument } from 'pdf-lib';
if (process.env.SIGNING_RUN_LIVE_TEST !== '1') throw new Error('Set SIGNING_RUN_LIVE_TEST=1 to run the controlled integration test.');
const origin = process.env.SIGNING_TEST_ORIGIN || 'http://localhost:3100';
const db = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);
const hash = value => createHash('sha256').update(value).digest('hex');
const token = randomBytes(32).toString('hex'), label = randomBytes(6).toString('hex');
const client = `delivered+ss-client-${label}@resend.dev`, provider = `delivered+ss-provider-${label}@resend.dev`;
const source = await PDFDocument.create(); source.addPage().drawText('INTEGRATION TEST ONLY - NOT A CUSTOMER CONTRACT');
const bytes = Buffer.from(await source.save()), sourceHash = hash(bytes);
const { data: agreement, error } = await db.from('signing_agreements').insert({
  token_hash: hash(token), title: 'Integration test agreement - no legal engagement', revision: `test-${label}`,
  client_name: 'Test Signer', client_company: 'TEST ONLY - Not a real client', client_email: client,
  provider_email: provider, start_date: '2026-10-01', provider_name: 'TEST PROVIDER', provider_signed_at: new Date().toISOString(),
  source_pdf: bytes.toString('base64'), source_hash: sourceHash, expires_at: new Date(Date.now()+3600000).toISOString(),
}).select('id').single();
if (error) throw new Error(error.message);
console.log(`Test record created: ${agreement.id}; recipients restricted to Resend test sinks.`);
let cookie;
async function request(suffix='', body, overrides={}) {
  return fetch(`${origin}/api/signing/${token}${suffix}`, { method: body ? 'POST' : 'GET',
    headers: { ...(body ? { origin, 'content-type':'application/json' } : {}), ...(cookie ? {cookie} : {}), ...overrides },
    body: body ? JSON.stringify(body) : undefined });
}
assert.equal((await request('/pdf')).status,401);
assert.equal((await request('/request-code',{}, { origin:'https://untrusted.example' })).status,403);
assert.equal((await request()).status,200);
assert.equal((await request('/request-code',{})).status,200);
assert.equal((await request('/request-code',{})).status,429);
let code;
for (let attempt=0;attempt<8&&!code;attempt++) {
  await new Promise(resolve=>setTimeout(resolve,1500));
  const list=await resend.emails.list();
  if (list.error) continue;
  const sent=list.data?.data?.find(e=>e.to?.includes(client)&&e.subject==='Your Saunders Simmons agreement verification code');
  if (sent) { const detail=await resend.emails.get(sent.id); code=detail.data?.text?.match(/code is (\d{6})/)?.[1]; }
}
if (!code) throw new Error('Test verification email body was not retrievable through Resend; test did not sign.');
const wrong=((Number(code)+1)%1000000).toString().padStart(6,'0');
assert.equal((await request('/verify-code',{code:wrong})).status,401);
const verified=await request('/verify-code',{code});
assert.equal(verified.status,200);
cookie=verified.headers.getSetCookie()[0].split(';')[0];
assert.match(verified.headers.getSetCookie()[0],/HttpOnly/i);
assert.match(verified.headers.getSetCookie()[0],/SameSite=strict/i);
const before=await request('/pdf'); assert.equal(before.status,200); assert.equal(hash(Buffer.from(await before.arrayBuffer())),sourceHash);
assert.equal((await request('/complete',{name:'Test Signer',role:'Test Director',consent:false,sourceHash})).status,400);
assert.equal((await request('/complete',{name:'Test Signer',role:'Test Director',consent:true,sourceHash:'f'.repeat(64)})).status,409);
const signed=await request('/complete',{name:'Test Signer',role:'Test Director',consent:true,sourceHash});
assert.equal(signed.status,200, await signed.text());
const duplicate=await request('/complete',{name:'Different Name',role:'Other',consent:true,sourceHash});
assert.equal(duplicate.status,200);
const {data:saved}=await db.from('signing_agreements').select('status,signer_name,signed_hash,signed_pdf').eq('id',agreement.id).single();
assert.equal(saved.status,'signed'); assert.equal(saved.signer_name,'Test Signer');
const download=await request('/pdf?download=1'), completed=Buffer.from(await download.arrayBuffer());
assert.equal(hash(completed),saved.signed_hash); assert.equal(completed.toString('base64'),saved.signed_pdf);
assert.equal((await PDFDocument.load(completed)).getPageCount(),2);
let receipts;
for(let attempt=0;attempt<4;attempt++) {
  const result=await db.from('signing_outbox').select('id,sent_at,resend_id,recipient_kind').eq('agreement_id',agreement.id);
  receipts=result.data;
  if(receipts?.length===2&&receipts.every(r=>r.sent_at)) break;
  await new Promise(resolve=>setTimeout(resolve,2500));
  await db.from('signing_outbox').update({next_attempt:new Date().toISOString(),lease_until:null}).eq('agreement_id',agreement.id).is('sent_at',null);
  const retry=await fetch(`${origin}/api/signing/retry-emails`,{headers:{authorization:`Bearer ${process.env.CRON_SECRET}`}});
  assert.equal(retry.status,200);
}
assert.equal(receipts?.length,2); assert(receipts.every(r=>r.sent_at));
const {data:events}=await db.from('signing_events').select('kind').eq('agreement_id',agreement.id).eq('kind','signed');
assert.equal(events.length,1);
const statuses=[];
for(const receipt of receipts) {
  await new Promise(resolve=>setTimeout(resolve,800));
  const email=await resend.emails.get(receipt.resend_id);
  assert(!email.error);
  statuses.push({recipient:receipt.recipient_kind,event:email.data?.last_event});
}
console.log(JSON.stringify({status:'passed',agreementId:agreement.id,sourceAndDownloadHashMatch:true,singleSignature:true,
  signedPdfPages:2,emailsAccepted:receipts.length,resendEvents:statuses,realCustomerEmailsSent:0}));
