import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Agreement, CONSENT, sha256 } from './core';

export async function signedPdf(a: Agreement, name: string, role: string, signedAt: string, verifiedAt: string) {
  const original = Buffer.from(a.source_pdf, 'base64');
  if (sha256(original) !== a.source_hash) throw new Error('Source document integrity check failed');
  const pdf = await PDFDocument.load(original);
  pdf.registerFontkit(fontkit);
  const font = await pdf.embedFont(await readFile(path.join(process.cwd(), 'assets/signing/NotoSans-Regular.ttf')), { subset: true });
  // Fail rather than silently substitute glyphs in a person's signature.
  const supported = new Set(font.getCharacterSet());
  for (const value of [name, role]) for (const character of value) {
    if (!supported.has(character.codePointAt(0)!)) throw new Error('Name contains a character not supported by the signing font');
  }
  let page = pdf.addPage([595.28, 841.89]);
  const navy = rgb(.067, .18, .28), blue = rgb(.09, .43, .61);
  page.drawRectangle({ x: 0, y: 831, width: 595.28, height: 11, color: blue });
  let y = 785;
  function line(text: string, size = 10, colour = navy) {
    function draw(row: string) {
      if (y < 65) { page = pdf.addPage([595.28, 841.89]); y = 785; }
      page.drawText(row, { x: 51, y, size, font, color: colour }); y -= size * 1.6;
    }
    let row = '';
    for (const character of text) {
      if (font.widthOfTextAtSize(row + character, size) > 493 && row) { draw(row); row = ''; }
      row += character;
    }
    if (row) draw(row);
    y -= 8;
  }
  line('SAUNDERS SIMMONS LTD', 11, blue);
  line('Electronic signing record', 24);
  line('This record forms part of the attached agreement. The preceding pages are the exact document presented for acceptance.');
  line(`Agreement: ${a.title}`);
  line(`Client: ${a.client_company}`);
  line(`Reference: ${a.id} | Revision: ${a.revision}`);
  line(`Service start date: ${a.start_date}`);
  line('Signed for the client', 15, blue);
  line(name, 24);
  line(`Role: ${role}`);
  line(`Verified email: ${a.client_email}`);
  line(`Email verified: ${verifiedAt} (UTC)`);
  line(`Signed: ${signedAt} (UTC)`);
  line(CONSENT);
  line('Provider signature', 15, blue);
  line(`${a.provider_name} — typed signature already included in the agreement. Date recorded: ${a.provider_signed_at.slice(0, 10)}.`);
  line('Document verification', 15, blue);
  line(`Original PDF SHA-256: ${a.source_hash}`, 8);
  line('The signed PDF and its checksum are stored with the signing event. This is a typed electronic signature with email verification, not a qualified digital certificate.', 9);
  pdf.setTitle(`${a.title} — signed`);
  pdf.setModificationDate(new Date(signedAt));
  return Buffer.from(await pdf.save());
}
