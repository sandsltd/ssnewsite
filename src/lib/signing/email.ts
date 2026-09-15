import { Resend } from 'resend';
import { Agreement, sha256 } from './core';
import { required, signingDb } from './server';

const sender = () => process.env.SIGNING_EMAIL_FROM || 'Saunders Simmons <hello@saunders-simmons.co.uk>';
export async function sendCode(a: Agreement, code: string) {
  const { error } = await new Resend(required('RESEND_API_KEY')).emails.send({
    from: sender(), to: [a.client_email], subject: 'Your Saunders Simmons agreement verification code',
    text: `Your verification code is ${code}.\n\nIt expires in 10 minutes. Enter it on the signing page you opened.\n\nDo not share this code. If you did not request it, ignore this email.\n\nSaunders Simmons Ltd\n0330 043 6608`,
  });
  if (error) throw new Error('Verification email not accepted');
}

export async function deliverCopies() {
  const resend = new Resend(required('RESEND_API_KEY'));
  const db = signingDb();
  const { data: jobs, error } = await db.rpc('signing_claim_emails', { p_limit: 5 });
  if (error) throw new Error('Notification queue unavailable');
  let sent = 0, pending = 0;
  for (const job of jobs || []) {
    try {
      const { data: a, error: readError } = await db.from('signing_agreements').select('*').eq('id', job.agreement_id).single();
      if (readError || !a?.signed_pdf) throw new Error('Signed document unavailable');
      const pdf = Buffer.from(a.signed_pdf, 'base64');
      if (sha256(pdf) !== a.signed_hash) throw new Error('Signed document integrity check failed');
      const { data, error: sendError } = await resend.emails.send({
        from: sender(), to: [job.recipient], replyTo: a.provider_email,
        subject: `Signed agreement — ${a.client_company}`,
        text: `The ${a.title} agreement has been signed by ${a.signer_name} on behalf of ${a.client_company}.\n\nThe signed PDF is attached, including the signing record. Please keep this copy.\n\nSigned: ${a.signed_at}\nService start: ${a.start_date}\nReference: ${a.id}\nSigned PDF SHA-256: ${a.signed_hash}\n\nThis confirms signing only; it is not confirmation of payment.\n\nSaunders Simmons Ltd\n0330 043 6608`,
        attachments: [{ filename: 'Saunders-Simmons-Signed-Agreement.pdf', content: pdf }],
      }, { idempotencyKey: `signed-copy/${job.id}` });
      if (sendError || !data?.id) throw new Error('Email provider did not accept the message');
      const { error: saveError } = await db.from('signing_outbox').update({ sent_at: new Date().toISOString(), resend_id: data.id, lease_until: null, last_error: null }).eq('id', job.id);
      if (saveError) throw new Error('Email receipt could not be saved');
      sent++;
    } catch {
      pending++;
      await db.from('signing_outbox').update({ lease_until: null, last_error: 'Delivery attempt failed; retry scheduled',
        next_attempt: new Date(Date.now() + Math.min(360, 2 ** Math.min(job.attempts, 8)) * 60000).toISOString(),
      }).eq('id', job.id).is('sent_at', null);
    }
  }
  return { sent, pending };
}
