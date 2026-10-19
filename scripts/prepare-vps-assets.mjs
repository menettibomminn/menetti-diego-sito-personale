import { readdir, readFile, mkdir, writeFile, copyFile, mkdtemp, rm } from "node:fs/promises";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";

// Build-time only: ship image bytes at the paths already used by the pointers.
const origin = new URL(process.env.VPS_ASSET_ORIGIN || "https://id-preview--978df7c9-5ef6-4ac1-86c6-f1a1dba63f97.lovable.app");
if (origin.protocol !== "https:") throw new Error("VPS_ASSET_ORIGIN must use HTTPS");
const staging = await mkdtemp(join(tmpdir(), "menetti-vps-assets-"));
try {
  for (const filename of await readdir("src/assets")) {
    if (!filename.endsWith(".asset.json")) continue;
    const asset = JSON.parse(await readFile(join("src/assets", filename), "utf8"));
    if (!/^\/__l5e\/assets-v1\/[a-zA-Z0-9-]+\/[a-zA-Z0-9_.-]+$/.test(asset.url)) {
      throw new Error(`Unsupported asset path in ${filename}`);
    }
    const response = await fetch(new URL(asset.url, origin), { signal: AbortSignal.timeout(60000) });
    if (!response.ok) throw new Error(`Asset download failed for ${filename}: HTTP ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length !== asset.size || response.headers.get("content-type")?.split(";")[0] !== asset.content_type) {
      throw new Error(`Unexpected image response for ${filename}; check the asset source`);
    }
    const temporary = join(staging, filename);
    await writeFile(temporary, bytes);
    const destination = join("public", asset.url.slice(1));
    await mkdir(dirname(destination), { recursive: true });
    await copyFile(temporary, destination);
    console.log(`Prepared VPS image: ${asset.original_filename}`);
  }
} finally {
  await rm(staging, { recursive: true, force: true });
}