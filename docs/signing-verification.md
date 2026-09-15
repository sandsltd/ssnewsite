# Signing implementation verification — 15 September 2026

## Passed locally

- Production build on Next.js 16.3.5; all existing public routes still build.
- TypeScript checking and targeted ESLint for signing routes, libraries, staff CLI and unit tests.
- Five automated test groups: tokens/consent/validation; tracker-free HTML; CSRF/body limits; original-PDF integrity and signing-record generation; executable PostgreSQL migration/OTP/signing/outbox behaviour using isolated PGlite.
- SQL tests exercise anonymous/authenticated denial, code reuse/expiry/five-guess lockout, send throttling, document immutability, invalid/expired sessions, document-version mismatch, repeat completion, single signing event, two email jobs and exclusive email leases.
- Playwright desktop/mobile smoke flow against the actual production HTTP server with **mocked signing APIs**. It verifies email-code UI, explicit consent, submitted document hash, success/download UI, queued-email messaging, no horizontal overflow, invalid URL 404, no external requests, no-referrer/no-store and nonce CSP.
- Existing homepage returns HTTP 200; unconfigured signing API fails closed with HTTP 503.
- Completion function tracing includes the licensed Noto font.

## Not yet verified / not live

Update during deployment: the correct Saunders Simmons Vercel account has now been connected separately from the pre-existing Greysurface login. The signing migration has been applied to the existing Saunders Simmons database and live RLS/public-access denial checked. Production runtime variables have been configured. A controlled integration run against the local production server, live database and Resend's documented test sinks passed: actual verification email retrieval, invalid-code/CSRF/hash checks, authenticated download, atomic signing, replay protection, matching stored/downloaded PDF hashes, two accepted email jobs and two simulated delivered events. No real customer email was sent. This supersedes the corresponding earlier blockers below; a production-domain test and Greg's actual email are still outstanding.

- No remote signing migration has been applied. No credentials were copied out of GitHub secrets or committed.
- No real Resend verification/completion email has been sent; inbox acceptance/delivery and live retry behaviour need a controlled staging test.
- No agreement has been issued for Greg and no live private link has been created. His email/start date and approval of a completed non-draft PDF are still needed.
- Saved local Vercel credentials returned HTTP 403, so production configuration/deployment could not be performed. Check the plan supports the ten-minute cron or configure an authenticated external scheduler.
- Next.js and Resend were updated within the existing declared major-version ranges after npm reported direct-package advisories. Production audit has no critical/direct-package advisories after that update, but existing transitive production warnings remain (4 moderate, 6 high); this was not a full-site security audit.

Browser smoke tests are not represented as live end-to-end delivery tests. Database-owner access can bypass application immutability; production access control, backups, retention and monitoring still matter.
