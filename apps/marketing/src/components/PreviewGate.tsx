import { type ReactNode, useEffect, useState } from "react";
import ComingSoon from "@/components/ComingSoon";
import {
  isSitePreviewUnlocked,
  lockSitePreview,
  SITE_PREVIEW_STORAGE_KEY,
} from "@/lib/sitePreview";

const isDev = import.meta.env.DEV;

/**
 * Lokal (Vite): Coming Soon + localStorage — wie bisher.
 * Produktion (Vercel): Schutz nur per Edge Middleware + HttpOnly-Cookie (kein Client-Bypass).
 */
export default function PreviewGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(() => (isDev ? isSitePreviewUnlocked() : true));

  useEffect(() => {
    if (!isDev) return;
    const sp = new URLSearchParams(window.location.search);
    if (sp.get("preview_logout") === "1") {
      lockSitePreview();
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
      setUnlocked(false);
    }
  }, []);

  useEffect(() => {
    if (!isDev) return;
    const onStorage = (e: StorageEvent) => {
      if (e.key === SITE_PREVIEW_STORAGE_KEY) {
        setUnlocked(e.newValue === "1");
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (isDev && !unlocked) {
    return <ComingSoon onUnlock={() => setUnlocked(true)} />;
  }

  return <>{children}</>;
}
