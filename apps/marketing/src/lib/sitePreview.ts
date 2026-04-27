export const SITE_PREVIEW_STORAGE_KEY = "ajans-site-preview-auth" as const;

/** Nur für lokales `npm run dev` — niemals Produktions-Geheimnisse hierher. */
function getExpectedCredentials(): { user: string; pass: string } {
  if (!import.meta.env.DEV) return { user: "", pass: "" };
  const u = import.meta.env.VITE_SITE_PREVIEW_USER?.trim();
  const p = import.meta.env.VITE_SITE_PREVIEW_PASSWORD;
  if (u && p) return { user: u, pass: p };
  return { user: "baris", pass: "Gewerbe2022" };
}

export function isSitePreviewUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(SITE_PREVIEW_STORAGE_KEY) === "1";
}

export function unlockSitePreview(): void {
  localStorage.setItem(SITE_PREVIEW_STORAGE_KEY, "1");
}

export function lockSitePreview(): void {
  localStorage.removeItem(SITE_PREVIEW_STORAGE_KEY);
}

export function checkPreviewCredentials(username: string, password: string): boolean {
  if (!import.meta.env.DEV) return false;
  const { user, pass } = getExpectedCredentials();
  return username.trim() === user && password === pass;
}
