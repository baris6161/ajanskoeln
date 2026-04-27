import { Locale } from "@/lib/i18n";

const pool = {
  tr: [
    "[Proje] etkinligi boyunca ekibimizle yaninizda olmaktan mutluluk duyariz.",
    "[Proje] icin hazirladigimiz teklifi incelemenizi dileriz.",
  ],
  de: [
    "We are pleased to present our offer for [Proje].",
    "Please find attached our detailed offer for [Proje].",
  ],
};

export function randomOfferText(locale: Locale) {
  const list = pool[locale];
  return list[Math.floor(Math.random() * list.length)];
}
