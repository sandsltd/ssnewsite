import { copyFile } from 'node:fs/promises';

// Next serves this file-based icon ahead of public/favicon.ico.
// Keep it identical to the existing, branded multi-size logo asset.
await copyFile(new URL('../public/favicon.ico', import.meta.url), new URL('../src/app/favicon.ico', import.meta.url));
console.log('App favicon synced with the Saunders Simmons logo.');
