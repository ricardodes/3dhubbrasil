import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, 'public', 'toolimages');

const jpgs = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));
console.log(`Found ${jpgs.length} JPG files to convert`);

let converted = 0;
let skipped = 0;

for (const file of jpgs) {
  const filePath = path.join(dir, file);
  const webpPath = filePath.replace('.jpg', '.webp');
  
  if (fs.existsSync(webpPath)) {
    skipped++;
    continue;
  }
  
  try {
    await sharp(filePath)
      .resize({ width: 480, withoutEnlargement: true })
      .webp({ quality: 65 })
      .toFile(webpPath);
    converted++;
    if (converted % 10 === 0) console.log(`  ${converted}/${jpgs.length}...`);
  } catch (e) {
    console.error(`  SKIP ${file}: ${e.message}`);
  }
}

console.log(`Done: ${converted} converted, ${skipped} already existed`);