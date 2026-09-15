import { NextRequest } from 'next/server';
import { CONSENT, sha256, signatureFields } from '@/lib/signing/core';
import { signedPdf } from '@/lib/signing/pdf';
import { deliverCopies } from '@/lib/signing/email';
import { agreementFor, bodyJson, failure, json, requireSession, SigningError, signingDb } from '@/lib/signing/server';
export const runtime = 'nodejs';
export const maxDuration = 60;
export async function POST(request: NextRequest, context: { params: Promise<{ token: string }> }) {
  try {
    const body = await bodyJson(request), { token } = await context.params;
    const a = await agreementFor(token), session = await requireSession(request, token, a);
    if (a.status === 'signed') return json({ ok: true, alreadySigned: true });
    let fields;
    try { fields = signatureFields(body); } catch (error) { throw new SigningError((error as Error).message); }
    if (fields.sourceHash !== a.source_hash) throw new SigningError('The document version does not match. Reload and review it before signing.', 409);
    const signedAt = new Date().toISOString();
    const pdf = await signedPdf(a, fields.name, fields.role, signedAt, session.verifiedAt);
    const { data, error } = await signingDb().rpc('signing_complete', { p_id: a.id, p_session_hash: session.hash,
      p_source_hash: fields.sourceHash, p_name: fields.name, p_role: fields.role, p_consent: CONSENT,
      p_signed_at: signedAt, p_pdf: pdf.toString('base64'), p_hash: sha256(pdf),
      p_evidence: { method: 'email-otp-and-typed-signature', email_verified_at: session.verifiedAt,
        user_agent: (request.headers.get('user-agent') || '').slice(0, 500) },
    });
    if (error) throw new Error('Could not save signature');
    if (!data) throw new SigningError('Your session expired or the agreement is unavailable. Please verify again.', 409);
    // A saved signature must never become an error just because email is unavailable.
    try { await deliverCopies(); } catch { console.error('Signed-copy queue needs a retry'); }
    return json({ ok: true });
  } catch (error) { return failure(error); }
}
