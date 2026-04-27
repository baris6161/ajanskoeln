import { OfferStatus } from "@/lib/types";
import { Locale } from "@/lib/i18n";

export function getOfferStatusLabel(status: OfferStatus, locale: Locale) {
  const map: Record<OfferStatus, { tr: string; de: string }> = {
    entwurf: { tr: "Taslak", de: "Entwurf" },
    gesendet: { tr: "Gönderildi", de: "Gesendet" },
    angenommen: { tr: "Kabul edildi", de: "Angenommen" },
    abgelehnt: { tr: "Reddedildi", de: "Abgelehnt" },
  };

  return map[status][locale];
}
