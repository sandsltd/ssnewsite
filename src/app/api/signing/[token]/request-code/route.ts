import { NextRequest } from 'next/server';
import { randomInt } from 'node:crypto';
import { codeHash } from '@/lib/signing/core';
import { sendCode } from '@/lib/signing/email';
import { agreementFor, bodyJson, failure, json, required, SigningError, signingDb } from '@/lib/signing/server';
export const runtime = 'nodejs';
export async function POST(request: NextRequest, context: { params: Promise<{ token: string }> }) {
  try {
    await bodyJson(request);
    const a = await agreementFor((await context.params).token);
    required('RESEND_API_KEY');
    const secret = required('SIGNING_SECRET');
    if (secret.length < 32) throw new Error('Signing secret is too short');
    const code = randomInt(0, 1000000).toString().padStart(6, '0');
    const { data, error } = await signingDb().rpc('signing_request_code', { p_id: a.id, p_hash: codeHash(a.id, code, secret) });
    if (error) throw new Error('Code request failed');
    if (!data) throw new SigningError('Please wait before requesting another code. Maximum three codes per hour.', 429);
    await sendCode(a, code);
    return json({ ok: true });
  } catch (error) { return failure(error); }
}
