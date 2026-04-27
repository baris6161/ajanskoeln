export type ComingSoonLang = "tr" | "de" | "en";

export const COMING_SOON_LANGS: { code: ComingSoonLang; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

const t = {
  tagline: {
    tr: "Hostes & Catering",
    de: "Hostess & Catering",
    en: "Hostess & Catering",
  },
  title: {
    tr: "Çok yakında yanınızdayız!",
    de: "Wir sind bald für euch da!",
    en: "We'll be with you very soon!",
  },
  body: {
    tr: "Sizin için yepyeni bir web sitemiz üzerinde çalışıyoruz — çok yakında yayında olacak. Bu süreçte sabrınız için içten teşekkürler: fuarlarda ve etkinliklerde görüşmek dileğiyle.",
    de: "Wir arbeiten an einer neuen Website für euch — bald geht sie online. Danke für eure Geduld bis dahin; wir freuen uns auf die Messe und euer nächstes Event.",
    en: "We're building a brand-new website for you — it'll be online very soon. Thank you for your patience; we look forward to seeing you at fairs and your next event.",
  },
  region: {
    tr: "Almanya genelinde",
    de: "Deutschlandweit",
    en: "Across Germany",
  },
  instagramLead: {
    tr: "Bu arada bizi Instagram'dan takip edebilir, neler yaptığımıza göz atabilirsiniz — çok seviniriz.",
    de: "In der Zwischenzeit könnt ihr uns gern auf Instagram beobachten und schauen, was wir so tun — das freut uns riesig.",
    en: "In the meantime, feel free to follow us on Instagram and see what we're up to — we'd love that.",
  },
  instagramCta: {
    tr: "Instagram'da bizi takip et",
    de: "Auf Instagram folgen",
    en: "Follow on Instagram",
  },
  emailLead: {
    tr: "Sorularınız mı var? Bize yazın:",
    de: "Fragen? Schreibt uns gern:",
    en: "Questions? Drop us a line:",
  },
  admin: {
    tr: "Admin",
    de: "Admin",
    en: "Admin",
  },
  dialogTitle: {
    tr: "Dahili erişim",
    de: "Interner Zugang",
    en: "Internal access",
  },
  dialogDesc: {
    tr: "Yalnızca ekip — giriş yaptıktan sonra tam siteyi görürsünüz.",
    de: "Nur für das Team — nach dem Login siehst du die reguläre Website.",
    en: "Team only — after signing in you'll see the full website.",
  },
  labelUser: {
    tr: "Kullanıcı adı",
    de: "Name",
    en: "Username",
  },
  labelPass: {
    tr: "Şifre",
    de: "Passwort",
    en: "Password",
  },
  error: {
    tr: "Bilgiler doğru değil.",
    de: "Zugangsdaten stimmen nicht.",
    en: "Those details don't match.",
  },
  submit: {
    tr: "Giriş yap",
    de: "Anmelden",
    en: "Sign in",
  },
} as const;

function pick<L extends ComingSoonLang, T extends Record<L, string>>(node: T, lang: L): string {
  return node[lang];
}

export function csTr(lang: ComingSoonLang) {
  return {
    tagline: pick(t.tagline, lang),
    title: pick(t.title, lang),
    body: pick(t.body, lang),
    region: pick(t.region, lang),
    instagramLead: pick(t.instagramLead, lang),
    instagramCta: pick(t.instagramCta, lang),
    emailLead: pick(t.emailLead, lang),
    admin: pick(t.admin, lang),
    dialogTitle: pick(t.dialogTitle, lang),
    dialogDesc: pick(t.dialogDesc, lang),
    labelUser: pick(t.labelUser, lang),
    labelPass: pick(t.labelPass, lang),
    error: pick(t.error, lang),
    submit: pick(t.submit, lang),
  };
}
