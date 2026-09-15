// UI smoke test against a running Next server. API responses are deliberately mocked;
// no client data is used, no real signature is recorded and no email is sent.
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import { mkdtemp } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { PDFDocument } from 'pdf-lib';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.SIGNING_PLAYWRIGHT_PATH || 'playwright');
const origin = process.env.SIGNING_TEST_ORIGIN || 'http://localhost:3100';
const token = 'a'.repeat(64);
const browser = await chromium.launch({ headless: true });
const output = await mkdtemp(path.join(os.tmpdir(), 'ss-signing-browser-'));
try {
  const page = await browser.newPage();
  let verified = false, signed = false, signedPayload;
  const external = [], errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('request', r => { if (!r.url().startsWith(origin)) external.push(r.url()); });
  const pdf = await PDFDocument.create(); pdf.addPage().drawText('TEST AGREEMENT - UI TEST ONLY');
  const pdfBytes = Buffer.from(await pdf.save());
  await page.route('**/api/signing/**', async route => {
    const url = new URL(route.request().url());
    if (url.pathname.endsWith('/request-code')) return route.fulfill({ json: { ok: true } });
    if (url.pathname.endsWith('/verify-code')) {
      assert.equal(route.request().postDataJSON().code, '123456'); verified = true;
      return route.fulfill({ json: { ok: true } });
    }
    if (url.pathname.endsWith('/complete')) {
      signedPayload = route.request().postDataJSON(); signed = true;
      return route.fulfill({ json: { ok: true } });
    }
    if (url.pathname.endsWith('/pdf')) return route.fulfill({ contentType: 'application/pdf', body: pdfBytes });
    return route.fulfill({ json: verified ? { verified: true, title: 'Test service agreement', company: 'Test Client Ltd',
      name: 'Test Signer', email: 'test@example.invalid', startDate: '2026-10-01', revision: 'test-1',
      sourceHash: 'b'.repeat(64), status: signed ? 'signed' : 'pending', signedAt: signed ? '2026-09-15T12:00:00Z' : null,
      signedHash: 'c'.repeat(64), emailsAccepted: false,
    } : { verified: false, emailHint: 't***@example.invalid' } });
  });
  const response = await page.goto(`${origin}/sign/${token}`);
  assert.equal(response.status(), 200);
  const headers = response.headers();
  assert.equal(headers['referrer-policy'], 'no-referrer');
  assert.match(headers['cache-control'], /no-store/);
  assert.match(headers['content-security-policy'], /script-src 'nonce-/);
  assert(!headers['content-security-policy'].includes('facebook'));
  await page.getByRole('button', { name: 'Email me a code' }).click();
  await page.getByLabel('Six-digit email code').fill('123456');
  await page.getByRole('button', { name: 'Verify and view agreement' }).click();
  await page.getByRole('heading', { name: 'Test service agreement' }).waitFor();
  await page.getByLabel('Your role or position').fill('Director');
  await page.screenshot({ path: path.join(output, 'review-desktop.png'), fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: path.join(output, 'review-mobile.png'), fullPage: true });
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth));
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Sign agreement', exact: true }).click();
  await page.getByRole('heading', { name: 'Your agreement is signed' }).waitFor();
  assert.equal(signedPayload.consent, true);
  assert.equal(signedPayload.sourceHash, 'b'.repeat(64));
  assert.equal(signedPayload.name, 'Test Signer');
  assert.match(await page.locator('#emailStatus').textContent(), /queued/);
  assert.equal(await page.locator('#signForm').isVisible(), false);
  await page.screenshot({ path: path.join(output, 'signed-mobile.png'), fullPage: true });
  assert.deepEqual(errors, []);
  assert.deepEqual(external, []);
  const invalid = await page.request.get(`${origin}/sign/not-a-token`);
  assert.equal(invalid.status(), 404);
  console.log(JSON.stringify({ status: 'passed', output, api: 'mocked; no real email or signature', externalRequests: external.length }));
} finally { await browser.close(); }
