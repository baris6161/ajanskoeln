/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Canonical, OG, sitemap ve robots için kök URL (örn. https://www.ajanskoeln.de), sonda slash yok. */
  readonly VITE_PRODUCTION_SITE_URL?: string;
  readonly VITE_CONTACT_ENDPOINT?: string;
  /** Optional override for soft-launch admin (default in code: baris / Gewerbe2022 if unset). */
  readonly VITE_SITE_PREVIEW_USER?: string;
  readonly VITE_SITE_PREVIEW_PASSWORD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
