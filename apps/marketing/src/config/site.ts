/**
 * Öffentliche Basis-URL für Canonical, Open Graph und Sitemap.
 * Vercel: VITE_PRODUCTION_SITE_URL=https://ajanskoeln.de (ohne Slash am Ende, mit https).
 */
export function getSiteOrigin(): string {
  const raw = import.meta.env.VITE_PRODUCTION_SITE_URL as string | undefined;
  if (raw && /^https?:\/\//i.test(raw.trim())) {
    return raw.trim().replace(/\/$/, "");
  }
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "https://ajanskoeln.de";
}
