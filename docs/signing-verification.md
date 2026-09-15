# Signing implementation verification — 15 September 2026

## Passed locally

- Production build on Next.js 16.3.5; all existing public routes still build.
- TypeScript checking and targeted ESLint for signing routes, libraries, staff CLI and unit tests.
- Five automated test groups: tokens/consent/validation; tracker-free HTML; CSRF/body limits; original-PDF integrity and signing-record generation; executable PostgreSQL migration/OTP/signing/outbox behaviour using isolated PGlite.
- SQL tests exercise anonymous/authenticated denial, code reuse/expiry/five-guess lockout, send throttling, document immutability, invalid/expired sessions, document-version mismatch, repeat completion, single signing event, two email jobs and exclusive email leases.
- Playwright desktop/mobile smoke flow against the actual production HTTP server with **mocked signing APIs**. It verifies email-code UI, explicit consent, submitted document hash, success/download UI, queued-email messaging, no horizontal overflow, invalid URL 404, no external requests, no-referrer/no-store and nonce CSP.
- Existing homepage returns HTTP 200; unconfigured signing API fails closed with HTTP 503.
- Completion function tracing includes the licensed Noto font.

## Deployed and verified on production

- Deployed through the Saunders Simmons Vercel project. Production runtime variables are configured and the team's Pro plan supports the ten-minute retry cron.
- The additive signing migration is applied to the existing Saunders Simmons database. All four tables have RLS enabled, with anonymous/authenticated public access denied. No credentials were committed.
- Controlled integration runs against both the local production server and `https://www.saunders-simmons.co.uk`, using the live database and Resend's test sinks, passed. Checks covered actual verification-email retrieval, invalid-code/CSRF/hash rejection, authenticated download, atomic signing, repeat completion, matching stored/downloaded PDF hashes, one signing event, and two accepted signed-copy email jobs with simulated delivered events.
- No real customer emails were sent and no customer agreement was signed in testing. Test-sink delivery does not establish delivery to Greg's mailbox.
- Production homepage returns HTTP 200. Signing pages return private/no-store, noindex/nofollow/noarchive, no-referrer and nonce-based CSP headers.
- The approved start date is 1 October 2026. The private five-page PDF has been rendered for electronic signing; a certificate is appended when signed.

## Outstanding and limitations

- The user subsequently supplied Greg's email and his approved agreement was issued. Its unique link and manifest are stored outside this public repository. Read-only live checks confirmed that verification is required and the PDF is inaccessible before verification. No invitation or verification email was sent to Greg during setup; the agreement remains unsigned pending his action.
- Next.js and Resend were updated within the existing declared major-version ranges after npm reported direct-package advisories. Production audit has no critical/direct-package advisories after that update, but existing transitive production warnings remain (4 moderate, 6 high); this was not a full-site security audit.

Browser smoke tests are not represented as live end-to-end delivery tests. Database-owner access can bypass application immutability; production access control, backups, retention and monitoring still matter.
