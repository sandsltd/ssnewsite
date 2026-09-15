const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[character]!));

function brandedEmail(title: string, preview: string, content: string) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:#f1f5f7;font-family:Arial,sans-serif;color:#20313f">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all">${escapeHtml(preview)}</div>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f1f5f7"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border:1px solid #d4dde1;border-top:6px solid #176d9b">
<tr><td style="padding:28px 28px 20px;border-bottom:1px solid #d4dde1"><img src="https://www.saunders-simmons.co.uk/logos/logo.png" width="80" height="80" alt="Saunders Simmons logo" style="display:block;border:0;margin-bottom:14px"><strong style="font-size:18px;color:#112e48">SAUNDERS SIMMONS LTD</strong><br><span style="font-size:13px;color:#586976">Private agreement signing</span></td></tr>
<tr><td style="padding:28px;font-size:16px;line-height:1.65"><h1 style="margin:0 0 18px;font-family:Georgia,serif;font-size:28px;line-height:1.2;color:#112e48">${escapeHtml(title)}</h1>${content}</td></tr>
<tr><td style="padding:22px 28px;border-top:3px solid #70aa50;background:#f8fafb;font-size:13px;line-height:1.7;color:#586976">Saunders Simmons Ltd<br><a href="mailto:hello@saunders-simmons.co.uk" style="color:#176d9b">hello@saunders-simmons.co.uk</a><br><a href="tel:03300436608" style="color:#176d9b">0330 043 6608</a></td></tr>
</table></td></tr></table></body></html>`;
}

export function verificationEmailHtml(code: string) {
  if (!/^\d{6}$/.test(code)) throw new Error('Invalid verification code');
  return brandedEmail('Your verification code', 'Use this code to open your agreement. It expires in 10 minutes.', `
<p style="margin:0 0 20px">Enter this code on the signing page you opened:</p>
<div style="padding:20px 12px;background:#edf4f7;border:1px solid #d4dde1;border-radius:8px;text-align:center;font-size:36px;letter-spacing:7px;font-weight:bold;color:#112e48">${code}</div>
<p style="margin:20px 0">It expires in <strong>10 minutes</strong>.</p>
<p style="margin:0;color:#586976;font-size:14px">Keep this code private. If you didn’t request it, you can ignore this email.</p>`);
}

export function signedEmailHtml(details: { title: string; signerName: string; company: string; signedAt: string; startDate: string; id: string; hash: string }) {
  const d = Object.fromEntries(Object.entries(details).map(([key, value]) => [key, escapeHtml(value)]));
  return brandedEmail('Your signed agreement', 'Your signed PDF and signing record are attached.', `
<p style="margin:0 0 20px">${d.signerName} has signed the ${d.title} agreement on behalf of ${d.company}.</p>
<div style="padding:18px;background:#edf4f7;border-left:4px solid #70aa50"><strong>Your signed PDF is attached.</strong><br>It includes the signing record. Please keep a copy for your records.</div>
<p style="margin:20px 0;font-size:14px"><strong>Signed:</strong> ${d.signedAt}<br><strong>Service start:</strong> ${d.startDate}<br><strong>Reference:</strong> ${d.id}</p>
<p style="color:#586976;font-size:14px">This confirms signing only; it is not confirmation of payment.</p>
<p style="margin:20px 0 0;font-size:11px;color:#586976;word-break:break-all"><strong>Signed PDF SHA-256:</strong><br>${d.hash}</p>`);
}
