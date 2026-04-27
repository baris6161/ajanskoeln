import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "apps", "marketing", "dist");
const pub = path.join(root, "apps", "crm", "public");

if (!fs.existsSync(dist)) {
  console.error("apps/marketing/dist fehlt. Zuerst: npm run build -w @ajans/marketing");
  process.exit(1);
}

for (const name of fs.readdirSync(dist)) {
  fs.cpSync(path.join(dist, name), path.join(pub, name), { recursive: true });
}

console.log("Marketing-Build nach apps/crm/public kopiert.");
