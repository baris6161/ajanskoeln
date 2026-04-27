export type Locale = "tr" | "de";

export const i18n = {
  tr: {
    appName: "Ajans Köln CRM",
    nav: {
      dashboard: "Panel",
      customers: "Müşteriler",
      offers: "Teklifler",
      new: "Yeni",
      settings: "Ayarlar",
    },
    common: {
      save: "Kaydet",
      cancel: "Iptal",
      search: "Ara",
      loading: "Yukleniyor...",
      noData: "Veri bulunamadi",
      status: "Durum",
    },
    dashboard: {
      title: "Dashboard",
      subtitle: "Genel gorunum ve son aktiviteler",
      customers: "Müşteri Sayısı",
      offers: "Teklif Sayısı",
      recent: "Son 5 Teklif",
    },
  },
  de: {
    appName: "Ajans Köln CRM",
    nav: {
      dashboard: "Dashboard",
      customers: "Kunden",
      offers: "Angebote",
      new: "Neu",
      settings: "Einstellungen",
    },
    common: {
      save: "Speichern",
      cancel: "Abbrechen",
      search: "Suchen",
      loading: "Wird geladen...",
      noData: "Keine Daten gefunden",
      status: "Status",
    },
    dashboard: {
      title: "Dashboard",
      subtitle: "Übersicht und letzte Aktivitäten",
      customers: "Anzahl Kunden",
      offers: "Anzahl Angebote",
      recent: "Letzte 5 Angebote",
    },
  },
} as const;

export function t<L extends Locale>(locale: L) {
  return i18n[locale];
}
