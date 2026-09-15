import { NextRequest } from 'next/server';
import { safeEqual } from '@/lib/signing/core';
import { deliverCopies } from '@/lib/signing/email';
import { failure, json, required, SigningError } from '@/lib/signing/server';
export const runtime = 'nodejs';
export const maxDuration = 60;
export async function GET(request: NextRequest) {
  try {
    if (!safeEqual(request.headers.get('authorization') || '', `Bearer ${required('CRON_SECRET')}`)) throw new SigningError('Unauthorised', 401);
    return json(await deliverCopies());
  } catch (error) { return failure(error); }
}
