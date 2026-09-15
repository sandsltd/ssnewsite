import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'node:crypto';
import { signingPage } from '@/lib/signing/page';
import { TOKEN_PATTERN } from '@/lib/signing/core';
import { privateHeaders } from '@/lib/signing/server';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET(_request: NextRequest, context: { params: Promise<{ token: string }> }) {
  const { token } = await context.params;
  if (!TOKEN_PATTERN.test(token)) return new NextResponse('This private link is not available.', { status: 404, headers: privateHeaders });
  const nonce = randomBytes(18).toString('base64');
  return new NextResponse(signingPage(nonce), { headers: { ...privateHeaders, 'Content-Type': 'text/html; charset=utf-8',
    'Content-Security-Policy': `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'nonce-${nonce}'; img-src 'self'; connect-src 'self'; frame-src 'self'; object-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'`,
    'X-Frame-Options': 'DENY',
  } });
}
