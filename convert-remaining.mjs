import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const dir = join(process.cwd(), 'public', 'toolimages');
const files = (await readdir(dir)).filter(f => f.endsWith('.jpg'));

console.log(`Found ${files.length} JPG files to convert`);

let count = 0;
for (const file of files) {
  const filePath = join(dir, file);
  const before = (await stat(filePath)).size;
  try {
    const webpPath = filePath.replace('.jpg', '.webp');
    await sharp(filePath)
      .resize({ width: 480, withoutEnlargement: true })
      .webp({ quality: 65 })
      .toFile(webpPath);
    count++;
    if (count % 20 === 0) console.log(`  ${count}/${files.length}...`);
  } catch (e) {
    console.error(`  SKIP ${file}: ${e.message}`);
  }
}
console.log(`Done: ${count} converted`);