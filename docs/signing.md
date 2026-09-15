# Private agreement signing

This feature is not live merely because the code builds. Apply the migration, configure runtime secrets, deploy and verify delivery before issuing a real agreement. No client contracts, emails, private links or signatures belong in this public repository.

## Flow

1. Staff prepare and approve the exact final PDF, including provider signature, start date and client contact details. Remove draft text; replace the empty client signature block with “Completed electronically — see signing record” if using an appended certificate.
2. Staff run the local issue command with a private manifest and PDF. A random 256-bit token is written to a private local file; only its SHA-256 is stored in the database. No invitation is automatically sent.
3. The client opens `/sign/<token>` and receives a one-time code at the preconfigured email. The link alone cannot reveal/download/sign the document. Codes last 10 minutes, are single-use and limited to five guesses, one send per minute and three sends per hour per agreement.
4. Email verification creates a one-hour HttpOnly, SameSite=Strict session. HTTPS cookies are Secure. The client reviews/downloads the frozen PDF and explicitly consents using their full name and company role.
5. The server appends a signing record (name, verified email, role, consent, UTC timestamp, original hash, provider details). Original pages are unchanged. The database atomically freezes the completed PDF and creates separate notification jobs for client/provider. Duplicate submissions cannot replace it.
6. Each email attaches the exact stored PDF. A cron retries failures; database leases and Resend idempotency keys prevent ordinary duplicate sends. Resend acceptance is not proof of inbox delivery. The UI says “queued” until both receipts are accepted. Keys expire after 24 hours, so an unusual prolonged outage after acceptance but before receipt persistence can still produce duplicate notifications, never a second signature.

This records a typed electronic signature and email possession; it is not identity-document verification or a qualified cryptographic signature. Legal adequacy depends on the document, authority and circumstances. No payment is collected by signing.

## Deployment

Apply `supabase/migrations/202609150001_signing.sql` to the intended Supabase project after review. It creates only signing-specific tables, functions and indexes. RLS is on; public/anon/authenticated privileges are revoked; only service-role backend access is allowed. Do not add public storage or client-side service keys.

Runtime variables (Vercel Production and a separate test project for Preview):

- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`: server-only; this repo already uses these names for its SEO worker, but GitHub Actions secrets do not automatically exist in Vercel.
- `RESEND_API_KEY`: authorised for the verified sender domain.
- `SIGNING_EMAIL_FROM`: optional; default `Saunders Simmons <hello@saunders-simmons.co.uk>`.
- `SIGNING_PUBLIC_ORIGIN`: `https://www.saunders-simmons.co.uk` in production. Must exactly match the page origin for CSRF protection. Local tests use `http://localhost:3000`.
- `SIGNING_SECRET`: independently generated random value of at least 32 characters, used to HMAC the short verification codes. Generate in a secure secret manager; never commit it.
- `CRON_SECRET`: independent strong secret. Vercel supplies it as the cron Authorization bearer token.

`vercel.json` retries email every ten minutes (check the deployment plan supports that frequency; otherwise arrange an authenticated external scheduler). `assets/signing/NotoSans-Regular.ttf` is bundled in the completion function; the OFL licence is included. The signing route is standalone HTML and bypasses all marketing-layout scripts, with no-referrer, no-store, noindex and a nonce-based CSP. No signing URLs belong in sitemaps, marketing emails with click tracking, or analytics.

## Issue an agreement (staff only)

Use `.env.local` locally (ignored by git) or export secrets from your secret manager. `tsx` does not auto-load `.env.local`; `node --env-file=.env.local --import tsx scripts/signing/manage.ts ...` can load it explicitly.

Save a manifest **outside the repository**, for example in the private proposal folder:

```json
{
  "approvedForSigning": true,
  "providerSignatureApproved": true,
  "approvedPdfSha256": "SHA256_OF_THE_EXACT_APPROVED_FINAL_PDF",
  "pdfPath": "/absolute/private/path/Service-Agreement-Final.pdf",
  "title": "Business Growth Partnership service agreement",
  "revision": "final-1",
  "clientName": "CLIENT_FULL_NAME",
  "clientCompany": "CLIENT_LEGAL_COMPANY",
  "clientEmail": "CLIENT_EMAIL",
  "providerEmail": "hello@saunders-simmons.co.uk",
  "providerName": "Nicholas Saunders",
  "providerSignedAt": "2026-09-15T00:00:00Z",
  "startDate": "YYYY-MM-DD",
  "linkExpiresInDays": 30
}
```

Provider date should match the approved PDF; do not claim an independently verified provider signing timestamp. Get the hash with `shasum -a 256 /absolute/private/path/Service-Agreement-Final.pdf`. Manually inspect every page: the CLI cannot recognise every draft watermark or blank field.

```sh
npm run signing -- issue /absolute/private/manifest.json /absolute/private/signing-link.txt
npm run signing -- status AGREEMENT_UUID
npm run signing -- revoke AGREEMENT_UUID
```

Issue is immutable: changes require revoking a pending agreement and issuing a fresh link. Signed agreements cannot be edited/revoked by this command. A change to signed terms needs a new agreed document. Treat link output as confidential. If file writing fails after creation, use the printed/administrative record to revoke the unusable pending record rather than guessing a token.

## Operations and retention

- Restrict staff access to the Supabase project and provider inbox; protect service keys and backups. Never log raw tokens, codes, cookies, PDFs or full request bodies. Hosting access logs may still contain token URLs: limit access/retention and disable third-party log exports for these paths.
- Monitor unsent `signing_outbox` rows, retry errors, cron execution and Resend bounces. The first attempt runs synchronously after saving; cron is needed for automatic recovery. Signing remains valid in storage if email fails.
- No IP address is collected; a bounded browser user-agent is included in the signing event. Set an appropriate documented contract-record retention period with legal advice and perform a controlled retention cleanup, including backups. This initial implementation does not auto-delete legal records.
- Links expire after 30 days by default, including subsequent online downloads. Email attachments remain available in each recipient’s mailbox. If a link expires, staff can securely provide the retained copy after verifying the requester.
- A provider with database-owner access could bypass application safeguards. This is application-level immutability, not an external tamper-proof timestamp authority. Keep access controls and database backups/auditing in place.

## Checks before real use

Run `npm run test:signing`, `npx tsc --noEmit`, targeted ESLint and `npm run build`. Test a separate non-client agreement and controlled recipient inboxes in staging: wrong/expired codes, five-guess lockout, resend limits, forbidden origin, unauthorised PDF access, successful signing, duplicate submissions, matching download/email checksums, failed delivery and cron retry. Confirm mobile PDF fallback and that no trackers receive the private URL. Never test by signing Greg’s live record.

Sources: [Resend attachments](https://resend.com/docs/dashboard/emails/attachments), [Resend idempotency](https://resend.com/docs/dashboard/emails/idempotency-keys), [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [Supabase functions](https://supabase.com/docs/guides/database/functions), [Law Commission electronic execution](https://lawcom.gov.uk/project/electronic-execution-of-documents/).
