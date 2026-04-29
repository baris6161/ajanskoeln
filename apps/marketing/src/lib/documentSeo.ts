/** Open Graph: logo boyutu (public/logo-ajans-koeln.png değişirse güncelleyin). */
const OG_IMAGE_WIDTH = "327";
const OG_IMAGE_HEIGHT = "312";

export type JsonLdNode = Record<string, unknown>;

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  robots?: string;
  jsonLd?: JsonLdNode | JsonLdNode[];
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Zentrale Head-Updates für SPA (türkische Meta- und Social-Tags für organische Suche).
 */
export function applyDocumentSeo(origin: string, input: PageSeoInput) {
  const path = input.path === "/" ? "/" : input.path.startsWith("/") ? input.path : `/${input.path}`;
  const canonical = path === "/" ? `${origin}/` : `${origin}${path}`;

  document.title = input.title;
  upsertMeta("name", "description", input.description);
  upsertMeta("name", "robots", input.robots ?? "index, follow");
  upsertLink("canonical", canonical);

  const ogTitle = input.ogTitle ?? input.title;
  const ogDesc = input.ogDescription ?? input.description;
  upsertMeta("property", "og:title", ogTitle);
  upsertMeta("property", "og:description", ogDesc);
  upsertMeta("property", "og:url", canonical);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:site_name", "Ajans Köln");
  upsertMeta("property", "og:locale", "tr_TR");
  upsertMeta("property", "og:locale:alternate", "de_DE");
  const ogImage = `${origin}/logo-ajans-koeln.png`;
  upsertMeta("property", "og:image", ogImage);
  upsertMeta("property", "og:image:secure_url", ogImage);
  upsertMeta("property", "og:image:type", "image/png");
  upsertMeta("property", "og:image:width", OG_IMAGE_WIDTH);
  upsertMeta("property", "og:image:height", OG_IMAGE_HEIGHT);
  upsertMeta("property", "og:image:alt", "Ajans Köln logosu");

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", ogTitle);
  upsertMeta("name", "twitter:description", ogDesc);
  upsertMeta("name", "twitter:image", ogImage);

  const existing = document.getElementById("ajans-jsonld");
  if (existing) existing.remove();
  if (input.jsonLd) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ajans-jsonld";
    const payload = Array.isArray(input.jsonLd) ? input.jsonLd : input.jsonLd;
    script.textContent = JSON.stringify(payload);
    document.head.appendChild(script);
  }
}
