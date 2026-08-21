import { readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import sharp from "sharp";

const roots = [
  "public/portfolio",
  "public/case-credit",
  "public/case-mts",
  "public/case-cs-money",
  "public/case-design-system",
];

async function pngFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await pngFiles(path));
    else if (extname(entry.name).toLowerCase() === ".png") files.push(path);
  }

  return files;
}

const files = ["public/ava.png", ...(await Promise.all(roots.map(pngFiles))).flat()];

await Promise.all(files.map(async (source) => {
  const target = source.replace(/\.png$/i, ".webp");
  await sharp(source)
    .webp({ quality: 92, alphaQuality: 100, effort: 6, smartSubsample: true })
    .toFile(target);
}));

console.log(`Optimized ${files.length} images.`);
