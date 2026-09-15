/** Staff-only local CLI. Never accepts credentials or private PDFs from a public route. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createClient } from '@supabase/supabase-js';
import { PDFDocument } from 'pdf-lib';
import { newToken, sha256 } from '../../src/lib/signing/core';

function env(name: string) { const value = process.env[name]; if (!value) throw new Error(`Missing ${name}`); return value; }
function requiredText(value: unknown, field: string, max = 150): string {
  if (typeof value !== 'string' || value.trim().length < 2 || value.length > max || /[\p{Cc}\p{Cf}]/u.test(value)) throw new Error(`Invalid ${field}`);
  return value.trim();
}
async function main() {
  const [action, filename, outputFile] = process.argv.slice(2);
  if (!filename || !['issue', 'status', 'revoke'].includes(action)) throw new Error('Usage: npm run signing -- issue /private/manifest.json /private/link.txt | status <uuid> | revoke <uuid>');
  const db = createClient(env('SUPABASE_URL'), env('SUPABASE_SERVICE_ROLE_KEY'), { auth: { persistSession: false } });
  if (action === 'status') {
    const { data, error } = await db.from('signing_agreements').select('id,title,revision,status,signed_at,source_hash,signed_hash,expires_at').eq('id', filename).single();
    if (error) throw new Error(error.message);
    const { data: emails, error: emailError } = await db.from('signing_outbox').select('recipient_kind,attempts,sent_at,last_error').eq('agreement_id', filename);
    if (emailError) throw new Error(emailError.message);
    console.log(JSON.stringify({ agreement: data, emails }, null, 2)); return;
  }
  if (action === 'revoke') {
    const { data, error } = await db.from('signing_agreements').update({ status: 'revoked' }).eq('id', filename).eq('status', 'pending').select('id');
    if (error) throw new Error(error.message);
    if (!data?.length) throw new Error('No pending agreement was revoked; signed agreements cannot be revoked this way.');
    console.log('Pending link revoked.'); return;
  }
  if (!outputFile || !path.isAbsolute(filename) || !path.isAbsolute(outputFile)) throw new Error('Use absolute paths outside the public repository for the manifest and link output.');
  const root = path.resolve(process.cwd()) + path.sep;
  if ([filename, outputFile].some(f => path.resolve(f).startsWith(root))) throw new Error('Keep private signing data outside this public repository.');
  const m = JSON.parse(await readFile(filename, 'utf8'));
  if (m.approvedForSigning !== true || m.providerSignatureApproved !== true) throw new Error('Staff must approve the exact final document and provider signature. Drafts must not be issued.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(m.startDate) || new Date(m.startDate).toISOString().slice(0, 10) !== m.startDate) throw new Error('A valid agreed start date is required.');
  const text = Object.fromEntries(['title','revision','clientName','clientCompany','providerName'].map(k => [k, requiredText(m[k], k)]));
  for (const key of ['clientEmail','providerEmail']) {
    const email = requiredText(m[key], key, 254).toLowerCase();
    if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) throw new Error(`Invalid ${key}`);
    text[key] = email;
  }
  const origin = new URL(env('SIGNING_PUBLIC_ORIGIN'));
  if (origin.protocol !== 'https:' || origin.pathname !== '/' || origin.search || origin.hash) throw new Error('Issuing live links requires a bare HTTPS origin.');
  if (!path.isAbsolute(m.pdfPath) || path.resolve(m.pdfPath).startsWith(root)) throw new Error('The approved PDF must be outside the public repository.');
  const bytes = await readFile(m.pdfPath);
  if (bytes.length > 4000000 || bytes.subarray(0, 5).toString() !== '%PDF-') throw new Error('Use a valid PDF smaller than 4 MB.');
  if (sha256(bytes) !== m.approvedPdfSha256) throw new Error('The PDF changed after approval. Check the document and update its approved hash.');
  const pdf = await PDFDocument.load(bytes);
  if (/draft/i.test(pdf.getTitle() || '') || /draft/i.test(path.basename(m.pdfPath))) throw new Error('Cannot issue a PDF marked DRAFT. Prepare and approve the final copy first.');
  const providerSignedAt = new Date(m.providerSignedAt).toISOString();
  const ttl = m.linkExpiresInDays ?? 30;
  if (!Number.isInteger(ttl) || ttl < 1 || ttl > 90) throw new Error('Link lifetime must be 1–90 days.');
  const token = newToken();
  // Reserve an output file without overwriting an existing private link.
  await writeFile(outputFile, 'Preparing agreement; no link issued yet.\n', { flag: 'wx', mode: 0o600 });
  const { data, error } = await db.from('signing_agreements').insert({ token_hash: sha256(token), title: text.title,
    revision: text.revision, client_name: text.clientName, client_company: text.clientCompany,
    client_email: text.clientEmail, provider_email: text.providerEmail, start_date: m.startDate,
    provider_name: text.providerName, provider_signed_at: providerSignedAt,
    source_pdf: bytes.toString('base64'), source_hash: sha256(bytes), expires_at: new Date(Date.now() + ttl * 86400000).toISOString(),
  }).select('id').single();
  if (error) throw new Error(error.message);
  const link = `${origin.origin}/sign/${token}`;
  await writeFile(outputFile, `Agreement ID: ${data.id}\nPrivate signing link: ${link}\nSource SHA-256: ${sha256(bytes)}\n`, { mode: 0o600 });
  console.log(`Agreement issued: ${data.id}. Private link saved to ${outputFile}. No invitation email was sent.`);
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
