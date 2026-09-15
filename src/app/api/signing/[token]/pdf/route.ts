import { NextRequest, NextResponse } from 'next/server';
import { sha256 } from '@/lib/signing/core';
import { agreementFor, failure, privateHeaders, requireSession } from '@/lib/signing/server';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET(request: NextRequest, context: { params: Promise<{ token: string }> }) {
  try {
    const { token } = await context.params;
    const a = await agreementFor(token);
    await requireSession(request, token, a);
    const signed = a.status === 'signed';
    const bytes = Buffer.from((signed ? a.signed_pdf : a.source_pdf)!, 'base64');
    if (sha256(bytes) !== (signed ? a.signed_hash : a.source_hash)) throw new Error('Document integrity check failed');
    return new NextResponse(new Uint8Array(bytes), { headers: { ...privateHeaders, 'Content-Type': 'application/pdf',
      'Content-Disposition': `${request.nextUrl.searchParams.has('download') ? 'attachment' : 'inline'}; filename="Saunders-Simmons-${signed ? 'Signed-' : ''}Agreement.pdf"`,
    } });
  } catch (error) { return failure(error); }
}
