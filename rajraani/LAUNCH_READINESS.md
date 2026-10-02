# Launch review — 2 October 2026

The code has been hardened, but the shop is not ready to accept real payments
until the configuration and deployed checkout checks below are completed.
The visual design and product photographs have been preserved.

## Changes made

- Replaced simulated payment orders with Razorpay's server-side Orders API.
  Removed the browser's instant demo-payment fallback. Missing keys now disable
  checkout safely. The SDK loads when checkout starts, rather than on every page.
- Payment confirmation requires a valid HMAC signature and a captured INR
  payment fetched from Razorpay. Amounts are checked against the saved order.
  The gateway requests have a 15-second timeout and do not cache responses.
- Added `/api/payments/webhook` for signed `payment.captured` and `order.paid`
  notifications. This records payments even when a shopper closes the browser.
- Protected receipts with a signed, HttpOnly cookie, made order references
  random, disabled receipt caching/indexing, and stopped claiming an email was
  sent when no email service exists. Receipt access lasts seven days in the
  browser used for checkout; customer accounts are not implemented.
- Validated delivery and cart inputs, merged duplicate product quantities
  before stock checks, and limited checkout, newsletter and contact requests.
  Rate-limit storage has a fixed capacity and expires old entries.
- Bounded admin upload bodies and image pixel counts, checked upload origin,
  and changed media reads to asynchronous filesystem reads.
- Escaped catalogue JSON embedded in script tags, protected spreadsheet exports
  from formula injection, and added security response headers.
- Enabled responsive AVIF/WebP optimization for product images. Prevented
  admin/legacy fonts from preloading on customer pages. Paused video/slideshow
  autoplay in hidden tabs and explicitly cleaned up responsive animation hooks.
- Added SQLite's five-second busy timeout. Empty database/media environment
  values now use the documented defaults.
- Removed accidental whole-project tracing: database and uploaded media are
  runtime content that must be provisioned separately on persistent storage.
- Updated the two vulnerable development dependency packages, without a forced
  dependency upgrade. Added ignore rules for builds, dependencies, secrets and
  runtime data. Files already tracked by Git remain tracked.

## Video optimization

The homepage film was reduced from 822,171,279 bytes (784 MiB) to
278,889,919 bytes (266 MiB), a 66% reduction. It retains the full approximately
8:53 duration, 1920×1080 resolution, 25 fps, stereo audio and original scenes.
The MP4 metadata is placed at the beginning for streaming playback. Encoding
completed successfully; metadata and decoding/seeking checks passed. Compression
is lossy, so this preserves the film's content rather than identical encoded
pixels. The film remains large; a video CDN is preferable for substantial traffic.

Both originals are archived in the `*-launch-backups` folder under
`C:\Users\sanja\.codex\tmp\` as
`loom-homepage-original.mp4` and `loom-reference-original.mp4`. The unused duplicate
was removed from `public/reference-only/`; product photographs remain there and
were not removed. The homepage still uses `/homepage/video/loom.mp4`.

## Required before launch

1. Select a host with Node.js and persistent writable storage. [Hostinger VPS](https://www.hostinger.com/nodejs-hosting) is
   suitable for this architecture. Its managed Node.js plans require confirmation
   of SQLite support and storage persistence across redeployments. Vercel needs a
   database/media-storage migration for this application.
2. Use Node.js 24 LTS, install with `npm ci`, build with `npm run build`, and run
   the production server with `npm start`. Run one application process initially;
   the request limits are in-process. Never expose `npm run dev` as the live shop.
3. Set `DATABASE_PATH` and `MEDIA_PATH` to persistent paths outside the release
   directory. Provision the existing catalogue database and media there. Do not
   run `db:reset` on the production database.
4. Set `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` and
   `RAZORPAY_WEBHOOK_SECRET` privately on the server. Enable automatic payment
   capture. Configure the public HTTPS webhook URL and both events above in
   Razorpay. Never put the secrets in a public environment variable or Git.
5. Create a real admin with `scripts/create-admin.mjs`; none existed locally at
   this review. Exercise the real login with `ADMIN_AUTH=strict` locally, and
   verify unauthenticated admin requests are refused in production.
6. Replace the placeholder email/phone through Admin → Text, and update
   `src/lib/brand.ts` and any seeded editorial/contact copy still containing the
   defaults. No real support details were configured locally at this review.
7. Customer account creation/login/reset are unfinished. The page now says so
   instead of promising a password-reset email. Guest checkout is implemented.
   Either keep the guest-only notice or finish accounts before promoting them.
8. Use HTTPS and a reverse proxy. Keep the Node port private. The proxy must
   overwrite `X-Forwarded-For` and `X-Real-IP` with trusted connection information;
   accepting a client's supplied IP headers permits rate-limit evasion. Apply
   request/body/time limits at the proxy too. Verify the media origin check
   behind the actual proxy with a real admin upload.
9. Schedule database/media backups outside the release directory and test a
   restore. Use a SQLite-aware snapshot/backup: copying only a live `.db` file
   can omit transactions still in its WAL. Keep data, backups and secrets out
   of public URLs and repository-based deployment archives. The existing DB
   was already tracked; adding `.gitignore` does not remove it from Git history.
10. Complete Razorpay test-mode checkout, cancellation, invalid signature,
    duplicate/retried webhooks, payment confirmation after browser closure,
    receipt privacy, and refund checks on staging. Then switch to live keys and
    verify the live payment/refund flow with the owner. No real payment was
    submitted during this review.

## Stock and operational limits

Stock is decremented atomically only after confirmed payment. Two customers can
pay for the same final piece before either confirmation reaches the server. The
second transaction cannot oversell or decrement stock, but its captured payment
needs review and refund. Monitor webhook errors and reconcile Razorpay payments
against Admin → Orders. There is no automatic refund or expiring stock-reservation
workflow in this build. This concurrency case is covered by an isolated database
regression test, and must also be exercised on staging.

Contact enquiries and newsletter signups are stored in the database. There is no
transactional email transport; staff must monitor the admin inbox and payment
dashboard. A webhook is not an email notification.

## Verification

446 tests passed. ESLint, TypeScript, taxonomy/originality checks and the
production build passed; heading order passed across 54 prerendered pages.
The final build passed without tracing warnings. One preceding attempt hit a
Windows diagnostics-file access error and succeeded on retry.
The full `npm audit` and production-only audit both report zero known
vulnerabilities after the dependency fixes.

`npm run verify` runs taxonomy checks, originality checks, tests, ESLint,
TypeScript, production build and static heading checks. New tests cover forged
signatures, payment state/currency mismatches, unsafe quantities and duplicate
cart lines, server pricing, payment idempotency, stock rollback, rate-limit
capacity/expiry, JSON script injection and spreadsheet injection.

`npm run check:launch` reports missing local production configuration without
printing secrets. It currently requires payment credentials, an admin account,
and real contact information. Run it again on the production host after setup.
Passing this command does not replace the deployed manual checks.

No production-host load test, mobile/browser checkout, heap profiling or live
gateway transaction has been performed. Memory improvements are based on code
inspection and regression tests; this is not a guarantee of leak-free operation
or a measured page-speed score.
