import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PDFDocument } from 'pdf-lib';
import { PGlite } from '@electric-sql/pglite';
import { Agreement, codeHash, CONSENT, newToken, sha256, signatureFields } from '../src/lib/signing/core';
import { signedPdf } from '../src/lib/signing/pdf';
import { signingPage } from '../src/lib/signing/page';
import { signedEmailHtml, verificationEmailHtml } from '../src/lib/signing/email-template';
import { NextRequest } from 'next/server';
import { bodyJson, checkOrigin } from '../src/lib/signing/server';

test('tokens, intent and input validation', () => {
  assert.match(newToken(), /^[a-f0-9]{64}$/);
  assert.notEqual(newToken(), newToken());
  assert.notEqual(codeHash('one','123456','secret'), codeHash('two','123456','secret'));
  assert.throws(() => signatureFields({ name: 'Greg Taylor', role: 'Director', consent: false, sourceHash: 'a'.repeat(64) }));
  assert.throws(() => signatureFields({ name: 'Greg\nTaylor', role: 'Director', consent: true, sourceHash: 'a'.repeat(64) }));
  assert.equal(signatureFields({ name: ' Greg Taylor ', role: 'Director', consent: true, sourceHash: 'a'.repeat(64) }).name, 'Greg Taylor');
});
test('signing UI has no marketing trackers or external scripts', () => {
  const page = signingPage('test-nonce');
  assert(!/facebook|googletagmanager|localStorage|fbevents/.test(page));
  assert(page.includes(CONSENT));
  assert(page.includes('noindex,nofollow,noarchive'));
  assert(page.includes('nonce="test-nonce"'));
});
test('signing emails are branded and safely escape agreement data', () => {
  const verification = verificationEmailHtml('123456');
  assert(verification.includes('/logos/logo.png'));
  assert(verification.includes('123456'));
  assert(verification.includes('10 minutes'));
  assert(verification.includes('SAUNDERS SIMMONS LTD'));
  assert.throws(() => verificationEmailHtml('<script>'));
  const signed = signedEmailHtml({ title: '<script>alert(1)</script>', signerName: 'Nick & Co',
    company: 'Test "Company"', signedAt: '2026-09-15', startDate: '2026-10-01', id: 'test', hash: 'a'.repeat(64) });
  assert(!signed.includes('<script>'));
  assert(signed.includes('&lt;script&gt;'));
  assert(signed.includes('Nick &amp; Co'));
  assert(signed.includes('Your signed PDF is attached.'));
});
test('mutating requests reject foreign origins and oversized bodies', async () => {
  const old = process.env.SIGNING_PUBLIC_ORIGIN;
  process.env.SIGNING_PUBLIC_ORIGIN = 'https://www.saunders-simmons.co.uk';
  try {
    assert.throws(() => checkOrigin(new NextRequest('https://www.saunders-simmons.co.uk/api/signing/test', {
      method: 'POST', headers: { origin: 'https://untrusted.example' },
    })));
    await assert.rejects(bodyJson(new NextRequest('https://www.saunders-simmons.co.uk/api/signing/test', {
      method: 'POST', headers: { origin: 'https://www.saunders-simmons.co.uk', 'content-type':'application/json' },
      body: JSON.stringify({ name: 'a'.repeat(5000) }),
    })));
  } finally { if (old === undefined) delete process.env.SIGNING_PUBLIC_ORIGIN; else process.env.SIGNING_PUBLIC_ORIGIN = old; }
});

test('signed PDF preserves original pages and appends signing evidence', async () => {
  const source = await PDFDocument.create(); source.addPage().drawText('Test agreement only');
  const bytes = Buffer.from(await source.save());
  const a = { id:'00000000-0000-0000-0000-000000000001', title:'Test agreement', revision:'test-1',
    client_company:'Test Client Ltd', client_email:'test@example.invalid', start_date:'2026-09-15',
    source_pdf:bytes.toString('base64'), source_hash:sha256(bytes), provider_name:'Test Provider', provider_signed_at:'2026-09-15T10:00:00Z',
  } as Agreement;
  const signed = await signedPdf(a, 'Grégory Taylor', 'Director', '2026-09-15T11:00:00Z','2026-09-15T10:59:00Z');
  assert.equal((await PDFDocument.load(signed)).getPageCount(), 2);
  assert.notEqual(sha256(signed), a.source_hash);
  await assert.rejects(signedPdf({ ...a, source_hash:'f'.repeat(64) }, 'Greg','Director','2026-09-15T11:00:00Z','2026-09-15T10:59:00Z'));
});

test('database security, OTP limits, expiry, immutability, atomic signing and outbox', async () => {
  const db = new PGlite();
  try {
    await db.exec('create role anon; create role authenticated; create role service_role;');
    await db.exec(await readFile('supabase/migrations/202609150001_signing.sql','utf8'));
    const insert = await db.query<{id:string}>(`insert into signing_agreements(token_hash,title,revision,client_name,client_company,client_email,provider_email,start_date,provider_name,provider_signed_at,source_pdf,source_hash,expires_at)
      values($1,'Test','1','Greg','Client Ltd','client@example.invalid','provider@example.invalid','2026-09-15','Nick',now(),'pdf',$2,now()+interval '1 day') returning id`, ['a'.repeat(64),'b'.repeat(64)]);
    const id = insert.rows[0].id;
    for (const role of ['anon','authenticated']) {
      await db.exec(`set role ${role}`);
      await assert.rejects(db.query('select * from signing_agreements'));
      await assert.rejects(db.query('select signing_request_code($1,$2)',[id,'hash']));
      await db.exec('reset role');
    }
    const rpc = async (query:string,args:unknown[]) => (await db.query<{ok:boolean}>(query,args)).rows[0].ok;
    assert(await rpc('select signing_request_code($1,$2) as ok',[id,'correct']));
    assert(!await rpc('select signing_request_code($1,$2) as ok',[id,'replacement']));
    for(let i=0;i<5;i++) assert(!await rpc('select signing_verify_code($1,$2,$3) as ok',[id,'wrong','session']));
    assert(!await rpc('select signing_verify_code($1,$2,$3) as ok',[id,'correct','session']));
    await db.query("update signing_agreements set otp_last_sent=now()-interval '61 seconds' where id=$1",[id]);
    assert(await rpc('select signing_request_code($1,$2) as ok',[id,'correct2']));
    await db.query("update signing_agreements set otp_expires_at=now()-interval '1 second',otp_last_sent=now()-interval '61 seconds' where id=$1",[id]);
    assert(!await rpc('select signing_verify_code($1,$2,$3) as ok',[id,'correct2','session']));
    assert(await rpc('select signing_request_code($1,$2) as ok',[id,'correct3']));
    assert(await rpc('select signing_verify_code($1,$2,$3) as ok',[id,'correct3','session']));
    assert(!await rpc('select signing_verify_code($1,$2,$3) as ok',[id,'correct3','replay-session']));
    await db.query("update signing_agreements set otp_last_sent=now()-interval '61 seconds' where id=$1",[id]);
    assert(!await rpc('select signing_request_code($1,$2) as ok',[id,'fourth-request-in-hour']));
    await assert.rejects(db.query("update signing_agreements set source_pdf='tampered' where id=$1",[id]));
    const args=[id,'session','b'.repeat(64),'Greg Taylor','Director',CONSENT,new Date().toISOString(),'signed-pdf','c'.repeat(64),'{}'];
    const complete='select signing_complete($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) as ok';
    assert(!await rpc(complete,[id,'invalid',...args.slice(2)]));
    assert(!await rpc(complete,[...args.slice(0,2),'d'.repeat(64),...args.slice(3)]));
    assert(await rpc(complete,args));
    assert(await rpc(complete,[...args.slice(0,7),'replacement-pdf',...args.slice(8)]));
    assert.equal((await db.query<{signed_pdf:string}>('select signed_pdf from signing_agreements where id=$1',[id])).rows[0].signed_pdf,'signed-pdf');
    assert.equal((await db.query('select * from signing_outbox')).rows.length,2);
    assert.equal((await db.query("select * from signing_events where kind='signed'")).rows.length,1);
    assert.equal((await db.query('select * from signing_claim_emails(5)')).rows.length,2);
    assert.equal((await db.query('select * from signing_claim_emails(5)')).rows.length,0);
    await db.query("update signing_sessions set expires_at=now()-interval '1 second' where agreement_id=$1",[id]);
    assert(!await rpc(complete,args));
    await assert.rejects(db.query("update signing_agreements set signed_pdf='changed' where id=$1",[id]));
    await assert.rejects(db.query("update signing_agreements set status='revoked' where id=$1",[id]));
  } finally { await db.close(); }
});
