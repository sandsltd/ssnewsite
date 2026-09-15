import { NextRequest } from 'next/server';
import { codeHash, newToken, sha256 } from '@/lib/signing/core';
import { agreementFor, bodyJson, cookieName, failure, json, required, SigningError, signingDb } from '@/lib/signing/server';
export const runtime = 'nodejs';
export async function POST(request: NextRequest, context: { params: Promise<{ token: string }> }) {
  try {
    const body = await bodyJson(request);
    if (typeof body.code !== 'string' || !/^\d{6}$/.test(body.code)) throw new SigningError('Enter the six-digit code from your email.');
    const { token } = await context.params;
    const a = await agreementFor(token), session = newToken();
    const { data, error } = await signingDb().rpc('signing_verify_code', { p_id: a.id,
      p_hash: codeHash(a.id, body.code, required('SIGNING_SECRET')), p_session_hash: sha256(session) });
    if (error) throw new Error('Code verification unavailable');
    if (!data) throw new SigningError('That code is incorrect, expired or already used. Request a new code if needed.', 401);
    const response = json({ ok: true });
    response.cookies.set(cookieName(token), session, { httpOnly: true, secure: new URL(required('SIGNING_PUBLIC_ORIGIN')).protocol === 'https:',
      sameSite: 'strict', path: `/api/signing/${token}`, maxAge: 3600 });
    return response;
  } catch (error) { return failure(error); }
}
