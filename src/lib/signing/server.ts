import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { Agreement, sha256, TOKEN_PATTERN } from './core';

export const privateHeaders = {
  'Cache-Control': 'private, no-store, max-age=0', 'Referrer-Policy': 'no-referrer',
  'X-Robots-Tag': 'noindex, nofollow, noarchive', 'X-Content-Type-Options': 'nosniff',
};
export class SigningError extends Error {
  constructor(message: string, public status = 400) { super(message); }
}
export function required(name: string) {
  const value = process.env[name];
  if (!value) throw new SigningError('Signing is temporarily unavailable. Please contact Saunders Simmons.', 503);
  return value;
}
export function signingDb() {
  return createClient(required('SUPABASE_URL'), required('SUPABASE_SERVICE_ROLE_KEY'), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
export function json(value: unknown, status = 200) { return NextResponse.json(value, { status, headers: privateHeaders }); }
export function failure(error: unknown) {
  if (error instanceof SigningError) return json({ error: error.message }, error.status);
  // Deliberately do not log URLs, request bodies, cookies or confidential document data.
  console.error('Signing operation failed');
  return json({ error: 'We could not complete that step. Please try again or contact Saunders Simmons.' }, 503);
}
export function checkOrigin(request: NextRequest) {
  const origin = new URL(required('SIGNING_PUBLIC_ORIGIN')).origin;
  if (request.headers.get('origin') !== origin) throw new SigningError('Request origin not allowed.', 403);
}
export async function bodyJson(request: NextRequest) {
  checkOrigin(request);
  if (!request.headers.get('content-type')?.includes('application/json')) throw new SigningError('JSON required.', 415);
  const reader = request.body?.getReader();
  if (!reader) throw new SigningError('Request body required.');
  let text = '', size = 0;
  const decoder = new TextDecoder();
  while (true) {
    const chunk = await reader.read();
    if (chunk.done) break;
    size += chunk.value.byteLength;
    if (size > 4096) { await reader.cancel(); throw new SigningError('Request is too large.', 413); }
    text += decoder.decode(chunk.value, { stream: true });
  }
  try {
    const data = JSON.parse(text + decoder.decode());
    if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error();
    return data as Record<string, unknown>;
  } catch { throw new SigningError('Invalid request.'); }
}
export async function agreementFor(token: string) {
  if (!TOKEN_PATTERN.test(token)) throw new SigningError('This private link is not available.', 404);
  const { data, error } = await signingDb().from('signing_agreements').select('*').eq('token_hash', sha256(token)).maybeSingle();
  if (error) throw new Error('Database unavailable');
  if (!data || data.status === 'revoked') throw new SigningError('This private link is not available.', 404);
  if (Date.parse(data.expires_at) <= Date.now()) throw new SigningError('This link has expired. Please ask Saunders Simmons for help.', 410);
  return data as Agreement;
}
export function cookieName(token: string) { return `ss_sign_${sha256(token).slice(0, 16)}`; }
export async function sessionFor(request: NextRequest, token: string, agreement: Agreement) {
  const secret = request.cookies.get(cookieName(token))?.value;
  if (!secret || !TOKEN_PATTERN.test(secret)) return null;
  const hash = sha256(secret);
  const { data, error } = await signingDb().from('signing_sessions').select('verified_at').eq('agreement_id', agreement.id)
    .eq('session_hash', hash).gt('expires_at', new Date().toISOString()).maybeSingle();
  if (error) throw new Error('Session store unavailable');
  return data ? { hash, verifiedAt: data.verified_at as string } : null;
}
export async function requireSession(request: NextRequest, token: string, agreement: Agreement) {
  const session = await sessionFor(request, token, agreement);
  if (!session) throw new SigningError('Please verify your email to continue.', 401);
  return session;
}
