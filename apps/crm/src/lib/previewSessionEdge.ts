/** Edge-kompatible Preview-Session (HMAC). Nur Middleware + API — nicht im Client-Bundle. */

export const PREVIEW_COOKIE_NAME = "ajans_preview_sess";

function base64UrlEncodeBytes(bytes: Uint8Array): string {
  let bin = "";
  bytes.forEach((b) => {
    bin += String.fromCharCode(b);
  });
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecodeToString(b64: string): string {
  const pad = b64.length % 4 === 0 ? "" : "=".repeat(4 - (b64.length % 4));
  return atob(b64.replace(/-/g, "+").replace(/_/g, "/") + pad);
}

async function hmacSha256B64Url(message: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return base64UrlEncodeBytes(new Uint8Array(sig));
}

export async function mintPreviewSession(secret: string, ttlSec: number): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + ttlSec;
  const payload = JSON.stringify({ exp, v: 1 });
  const b64Payload = base64UrlEncodeBytes(new TextEncoder().encode(payload));
  const sig = await hmacSha256B64Url(b64Payload, secret);
  return `${b64Payload}.${sig}`;
}

export async function verifyPreviewSessionCookie(token: string | undefined, secret: string): Promise<boolean> {
  if (!token || !secret) return false;
  const lastDot = token.lastIndexOf(".");
  if (lastDot <= 0) return false;
  const b64Payload = token.slice(0, lastDot);
  const sig = token.slice(lastDot + 1);
  const expected = await hmacSha256B64Url(b64Payload, secret);
  if (sig.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
  if (diff !== 0) return false;
  try {
    const json = base64UrlDecodeToString(b64Payload);
    const payload = JSON.parse(json) as { exp?: number; v?: number };
    if (payload.v !== 1 || typeof payload.exp !== "number") return false;
    return payload.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export function readCookie(cookieHeader: string | null, name: string): string | undefined {
  if (!cookieHeader) return undefined;
  for (const part of cookieHeader.split(";")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    const k = part.slice(0, idx).trim();
    if (k === name) return part.slice(idx + 1).trim();
  }
  return undefined;
}
