import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

export const CONSENT = 'I have read this agreement and agree to its terms on behalf of the client company. I am authorised to sign for that company and intend my typed name to be my electronic signature.';
export const TOKEN_PATTERN = /^[a-f0-9]{64}$/;
export const sha256 = (value: string | Uint8Array) => createHash('sha256').update(value).digest('hex');
export const newToken = () => randomBytes(32).toString('hex');
export const codeHash = (id: string, code: string, secret: string) => createHmac('sha256', secret).update(`${id}:${code}`).digest('hex');
export function safeEqual(a: string, b: string) {
  const x = Buffer.from(a), y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}
export function maskEmail(email: string) {
  const [local, domain] = email.split('@');
  return `${local.slice(0, 1)}***@${domain}`;
}
export function signatureFields(body: Record<string, unknown>) {
  const name = typeof body.name === 'string' ? body.name.trim().normalize('NFC') : '';
  const role = typeof body.role === 'string' ? body.role.trim().normalize('NFC') : '';
  if (body.consent !== true || ![name, role].every(s => s.length >= 2 && s.length <= 100 && !/[\p{Cc}\p{Cf}]/u.test(s))) {
    throw new Error('Enter your full name and role, and confirm that you agree to sign.');
  }
  if (typeof body.sourceHash !== 'string' || !TOKEN_PATTERN.test(body.sourceHash)) throw new Error('Please reload and review the agreement again.');
  return { name, role, sourceHash: body.sourceHash };
}

export interface Agreement {
  id: string; title: string; revision: string; client_name: string; client_company: string;
  client_email: string; provider_email: string; start_date: string; provider_name: string;
  provider_signed_at: string; source_pdf: string; source_hash: string; expires_at: string;
  status: 'pending' | 'signed' | 'revoked'; signed_at: string | null; signed_pdf: string | null;
  signed_hash: string | null; signer_name: string | null; signer_role: string | null;
}
