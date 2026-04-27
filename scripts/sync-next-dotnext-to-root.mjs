/**
 * Auf Vercel kann das Projekt am Repo-Root hängen; Next legt `.next` unter `apps/crm/.next`.
 * Dann fehlt `routes-manifest` am erwarteten Ort — wir spiegeln den Build-Output nach `./.next`.
 * Wenn im Dashboard Root Directory = `apps/crm` gesetzt ist, ist dieser Schritt redundant, schadet aber nicht.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

if (process.env.VERCEL !== "1") {
  process.exit(0);
}

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "apps", "crm", ".next");
const dst = path.join(root, ".next");

if (!fs.existsSync(src)) {
  console.error("sync-next-dotnext-to-root: fehlt", src);
  process.exit(1);
}

if (fs.existsSync(dst)) {
  fs.rmSync(dst, { recursive: true, force: true });
}
fs.cpSync(src, dst, { recursive: true });
console.log("sync-next-dotnext-to-root: apps/crm/.next -> .next (Vercel)");
