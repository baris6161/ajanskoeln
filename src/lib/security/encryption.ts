import crypto from "crypto";

const algorithm = "aes-256-cbc";

function getKey() {
  const raw = process.env.SETTINGS_ENCRYPTION_KEY ?? "";
  return crypto.createHash("sha256").update(raw).digest();
}

export function encryptValue(value: string) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, getKey(), iv);
  const encrypted = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]);
  return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
}

export function decryptValue(payload: string) {
  const [ivHex, encryptedHex] = payload.split(":");
  const decipher = crypto.createDecipheriv(algorithm, getKey(), Buffer.from(ivHex, "hex"));
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedHex, "hex")),
    decipher.final(),
  ]);
  return decrypted.toString("utf8");
}
