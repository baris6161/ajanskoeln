import type { JsonLdNode } from "@/lib/documentSeo";

/** Türkçe SEO metinleri (organik arama odaklı, tek dil). */
export const TR_SEO = {
  home: {
    title: "Ajans Köln | Almanya’da fuar hostesi ve etkinlik cateringi",
    description:
      "Almanya genelinde fuar, kurumsal etkinlik ve özel organizasyonlar için Türkçe, Almanca ve İngilizce hostes ile catering koordinasyonu.",
    ogTitle: "Ajans Köln | Hostes ve catering, Almanya",
    ogDescription:
      "Fuar ve kurumsal etkinlikler için Türkçe, Almanca ve İngilizce hostes, ikram ve stand desteği.",
  },
  impressum: {
    title: "Künye ve yasal bilgiler | Ajans Köln",
    description:
      "Ajans Köln iletişim, künye, yasal sorumluluk ve bağlantı bilgileri. Türkiye ve Almanya’daki müşteriler için şeffaf bilgilendirme.",
  },
  datenschutz: {
    title: "Gizlilik bildirimi | Ajans Köln",
    description:
      "Web sitemizde kişisel verilerin işlenmesi, iletişim formu, barındırma ve haklarınız hakkında bilgi. Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) çerçevesinde.",
  },
  notFound: {
    title: "Sayfa bulunamadı | Ajans Köln",
    description: "Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönerek hizmetlerimizi inceleyebilirsiniz.",
    robots: "noindex, follow",
  },
} as const;

/** JSON-LD: Organization, WebSite, LocalBusiness. TODO: Çalışma saatleri netleşince LocalBusiness içine openingHoursSpecification ekleyin. */
export function buildMainJsonLd(origin: string): JsonLdNode {
  const orgId = `${origin}/#organization`;
  const siteId = `${origin}/#website`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Ajans Köln",
        url: origin,
        logo: `${origin}/logo-ajans-koeln.png`,
        email: "ajanskoeln@gmail.com",
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: origin,
        name: "Ajans Köln",
        inLanguage: "tr",
        publisher: { "@id": orgId },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${origin}/#local`,
        name: "Ajans Köln",
        url: origin,
        image: `${origin}/logo-ajans-koeln.png`,
        email: "ajanskoeln@gmail.com",
        areaServed: { "@type": "Country", name: "DE" },
        availableLanguage: ["Turkish", "German", "English"],
        knowsAbout: [
          "Fuar hostesi",
          "Etkinlik cateringi",
          "Stand koordinasyonu",
        ],
      },
    ],
  };
}

export function buildBreadcrumbJsonLd(origin: string, items: { name: string; path: string }[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path === "/" ? `${origin}/` : `${origin}${it.path}`,
    })),
  };
}

export function mergeSchemaGraph(...parts: JsonLdNode[]): JsonLdNode {
  const graph: unknown[] = [];
  for (const part of parts) {
    const inner = part["@graph"];
    if (Array.isArray(inner)) graph.push(...inner);
    else graph.push(part);
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
