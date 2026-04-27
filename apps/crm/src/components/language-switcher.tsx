"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";

export function LanguageSwitcher() {
  const router = useRouter();
  const { locale, setLocale } = useI18n();
  const changeLocale = (next: "tr" | "de") => {
    document.cookie = `locale=${next}; path=/; max-age=31536000; samesite=lax`;
    setLocale(next);
    router.refresh();
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card p-1">
      <Button
        size="sm"
        variant={locale === "tr" ? "default" : "ghost"}
        onClick={() => changeLocale("tr")}
      >
        TR
      </Button>
      <Button
        size="sm"
        variant={locale === "de" ? "default" : "ghost"}
        onClick={() => changeLocale("de")}
      >
        DE
      </Button>
    </div>
  );
}
