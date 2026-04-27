import crypto from "crypto";

const algorithm = "aes-256-gcm";

function getKey() {
  const raw = process.env.SETTINGS_ENCRYPTION_KEY ?? "";
  if (!raw) {
    throw new Error("Missing SETTINGS_ENCRYPTION_KEY");
  }
  return crypto.createHash("sha256").update(raw).digest();
}

export function encryptValue(value: string) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, getKey(), iv);
  const encrypted = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString("hex")}:${tag.toString("hex")}:${encrypted.toString("hex")}`;
}

export function decryptValue(payload: string) {
  const parts = payload.split(":");
  if (parts.length === 3) {
    const [ivHex, tagHex, encryptedHex] = parts;
    const decipher = crypto.createDecipheriv(algorithm, getKey(), Buffer.from(ivHex, "hex"));
    decipher.setAuthTag(Buffer.from(tagHex, "hex"));
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(encryptedHex, "hex")),
      decipher.final(),
    ]);
    return decrypted.toString("utf8");
  }

  // Backward compatibility for older AES-256-CBC payloads.
  if (parts.length === 2) {
    const [ivHex, encryptedHex] = parts;
    const decipher = crypto.createDecipheriv("aes-256-cbc", getKey(), Buffer.from(ivHex, "hex"));
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(encryptedHex, "hex")),
      decipher.final(),
    ]);
    return decrypted.toString("utf8");
  }

  throw new Error("Invalid encrypted payload format");
}
