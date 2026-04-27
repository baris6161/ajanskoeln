import { Locale } from "@/lib/i18n";

const pool = {
  tr: ["Sayın Müşteri, ekte teklifimizi bulabilirsiniz."],
  de: ["Dear Customer, please find our offer attached."],
};

export function randomMailText(locale: Locale) {
  const list = pool[locale];
  return list[Math.floor(Math.random() * list.length)];
}
