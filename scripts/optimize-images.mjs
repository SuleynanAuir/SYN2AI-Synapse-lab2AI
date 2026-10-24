import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const outputDir = path.join(publicDir, "assets/optimized");
const sourceDir = path.join(publicDir, "assets/web_page");
await mkdir(outputDir, { recursive: true });

const sources = (await readdir(sourceDir)).filter((name) => /\.(png|jpe?g)$/i.test(name)).sort()
  .map((name) => `/assets/web_page/${name}`);
sources.push("/assets/web_bg_poster.jpg");
const manifest = {};
let originalBytes = 0;
let optimizedBytes = 0;

for (const source of sources) {
  const input = await readFile(path.join(publicDir, source));
  const metadata = await sharp(input).metadata();
  const logo = source.endsWith("/logo.png");
  const avatar = source.endsWith("/head_img.jpeg");
  const background = source.endsWith("/web_bg_poster.jpg");
  const widths = [...new Set((logo ? [96] : avatar ? [168] : background ? [960, 1920] : [480, 960, 1600])
    .map((width) => Math.min(width, metadata.width)))];

  const variants = await Promise.all(widths.map(async (width) => {
    const { data, info } = await sharp(input).rotate().resize({ width, withoutEnlargement: true })
      .webp({ quality: background ? 80 : 86, effort: 4 }).toBuffer({ resolveWithObject: true });
    const hash = createHash("sha256").update(data).digest("hex").slice(0, 12);
    const name = `${path.parse(source).name}-${info.width}-${hash}.webp`;
    await writeFile(path.join(outputDir, name), data);
    return { src: `/assets/optimized/${name}`, width: info.width, height: info.height, bytes: data.length, data };
  }));
  const fallback = variants.find((variant) => variant.width >= 960) ?? variants.at(-1);
  const entry = {
    src: fallback.src,
    width: fallback.width,
    height: fallback.height,
    srcSet: variants.map((variant) => `${variant.src} ${variant.width}w`).join(", "),
  };

  if (logo || avatar) {
    // Small first-screen portraits are part of the HTML: no separate image request.
    entry.inline = `data:image/webp;base64,${fallback.data.toString("base64")}`;
  } else if (!background) {
    const placeholder = await sharp(input).rotate().resize({ width: 24 }).webp({ quality: 35 }).toBuffer();
    entry.placeholder = `data:image/webp;base64,${placeholder.toString("base64")}`;
  }
  if (logo) {
    for (const [key, width] of [["favicon", 64], ["apple", 180]]) {
      const data = await sharp(input).resize({ width }).png().toBuffer();
      const hash = createHash("sha256").update(data).digest("hex").slice(0, 12);
      const name = `logo-${width}-${hash}.png`;
      await writeFile(path.join(outputDir, name), data);
      if (key === "favicon") {
        // Next also publishes its file-based icon, independently of metadata.icons.
        await writeFile(path.join(root, "src/app/icon.png"), data);
      }
      entry[key] = `/assets/optimized/${name}`;
    }
  }
  manifest[source] = entry;
  originalBytes += input.length;
  optimizedBytes += fallback.bytes;
}

await writeFile(path.join(root, "src/data/image-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Optimized ${sources.length} images: ${(originalBytes / 1024 / 1024).toFixed(2)} MB → ${(optimizedBytes / 1024 / 1024).toFixed(2)} MB (default variants, ${Math.round((1 - optimizedBytes / originalBytes) * 100)}% smaller).`);
