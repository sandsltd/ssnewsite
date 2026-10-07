import { mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// The outlined SVGs keep the artwork identical on every machine without fonts.
// Root layout metadata references these public files; do not create app/favicon.ico.
const publicDirectory = new URL('../public/', import.meta.url);
const icon = await readFile(new URL('brand-mark.svg', publicDirectory));
for (const [name, size] of [
  ['favicon-16x16.png', 16],
  ['favicon-32x32.png', 32],
  ['apple-touch-icon.png', 180],
  ['android-chrome-192x192.png', 192],
  ['android-chrome-512x512.png', 512],
]) {
  await sharp(icon).resize(size, size).png().toFile(new URL(name, publicDirectory).pathname);
}

// ICO supports embedded PNG frames. Include the three common browser sizes.
const sizes = [16, 32, 48];
const frames = await Promise.all(sizes.map((size) => sharp(icon).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + 16 * frames.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);
let offset = header.length;
frames.forEach((frame, index) => {
  const entry = 6 + 16 * index;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(frame.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await writeFile(new URL('favicon.ico', publicDirectory), Buffer.concat([header, ...frames]));

await mkdir(new URL('social/', publicDirectory), { recursive: true });
const socialCard = await readFile(new URL('../assets/brand/social-card.svg', import.meta.url));
await sharp(socialCard).png().toFile(new URL('social/saunders-simmons-v1.png', publicDirectory).pathname);
console.log('Updated the Saunders Simmons favicon family and social share image.');
