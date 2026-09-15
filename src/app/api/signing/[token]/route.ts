import { NextRequest } from 'next/server';
import { maskEmail } from '@/lib/signing/core';
import { agreementFor, failure, json, sessionFor, signingDb } from '@/lib/signing/server';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET(request: NextRequest, context: { params: Promise<{ token: string }> }) {
  try {
    const { token } = await context.params;
    const a = await agreementFor(token);
    if (!await sessionFor(request, token, a)) return json({ verified: false, emailHint: maskEmail(a.client_email) });
    const { data: receipts, error } = await signingDb().from('signing_outbox').select('recipient_kind,sent_at').eq('agreement_id', a.id);
    if (error) throw new Error('Receipt lookup failed');
    return json({ verified: true, title: a.title, company: a.client_company, name: a.client_name, email: a.client_email,
      startDate: a.start_date, revision: a.revision, sourceHash: a.source_hash, status: a.status,
      signedAt: a.signed_at, signedHash: a.signed_hash, emailsAccepted: a.status === 'signed' && receipts?.length === 2 && receipts.every(r => r.sent_at),
    });
  } catch (error) { return failure(error); }
}
