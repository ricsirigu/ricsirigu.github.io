import { copyFile, mkdir } from 'node:fs/promises';

await mkdir(new URL('../dist/404/', import.meta.url), { recursive: true });
await copyFile(
  new URL('../dist/404.html', import.meta.url),
  new URL('../dist/404/index.html', import.meta.url),
);
await copyFile(
  new URL('../dist/sitemap-0.xml', import.meta.url),
  new URL('../dist/sitemap.xml', import.meta.url),
);
