export type Lang = "tr" | "de" | "en";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

export const t = {
  nav: {
    about:    { tr: "Hakkımızda",  de: "Über uns",      en: "About" },
    services: { tr: "Hizmetler",   de: "Leistungen",    en: "Services" },
    refs:     { tr: "Referanslar", de: "Referenzen",    en: "References" },
    gallery:  { tr: "Galeri",      de: "Galerie",       en: "Gallery" },
    contact:  { tr: "İletişim",    de: "Kontakt",       en: "Contact" },
    menu:     { tr: "Menü",        de: "Menü",          en: "Menu" },
  },
  hero: {
    eyebrow: { tr: "Almanya genelinde", de: "Deutschlandweit", en: "Across Germany" },
    title: {
      tr: "Profesyonel Hostes & Catering Hizmetleri",
      de: "Professionelle Hostess & Catering-Dienstleistungen",
      en: "Professional Hostess & Catering Services",
    },
    sub: {
      tr: "Fuarlar, kurumsal etkinlikler ve özel organizasyonlar için güvenilir çözüm ortağınız.",
      de: "Ihr zuverlässiger Partner für Messen, Firmenevents und besondere Veranstaltungen.",
      en: "Your reliable partner for trade fairs, corporate events and special occasions.",
    },
    cta1: { tr: "Hizmetlerimizi Keşfedin", de: "Unsere Leistungen entdecken", en: "Discover Our Services" },
    cta2: { tr: "İletişime Geçin",          de: "Kontakt aufnehmen",           en: "Get in Touch" },
  },
  about: {
    label: { tr: "Hakkımızda", de: "Über uns", en: "About us" },
    title: { tr: "Ajans Köln Hakkında", de: "Über Ajans Köln", en: "About Ajans Köln" },
    p1: {
      tr: "Ajans Köln olarak, Almanya'nın dört bir yanında düzenlenen fuarlarda, kurumsal etkinliklerde ve özel organizasyonlarda profesyonel hostes ve catering hizmetleri sunuyoruz.",
      de: "Ajans Köln bietet professionelle Hostess- und Catering-Dienstleistungen auf Messen, Firmenevents und Sonderveranstaltungen in ganz Deutschland.",
      en: "Ajans Köln provides professional hostess and catering services at trade fairs, corporate events and special occasions across Germany.",
    },
    p2: {
      tr: "Ekibimiz; Türkçe, Almanca ve İngilizce dillerinde hizmet verebilen, deneyimli ve dinamik profesyonellerden oluşmaktadır. Müşterilerimizin her isteğini titizlikle karşılıyor, etkinliklerini unutulmaz kılmak için var gücümüzle çalışıyoruz.",
      de: "Unser Team besteht aus erfahrenen Fachkräften, die auf Türkisch, Deutsch und Englisch kommunizieren können. Wir erfüllen jeden Kundenwunsch mit größter Sorgfalt und sorgen dafür, dass jede Veranstaltung unvergesslich wird.",
      en: "Our team consists of experienced professionals who communicate in Turkish, German and English. We fulfill every client's wishes with the utmost care and work hard to make every event unforgettable.",
    },
    p3: {
      tr: "Hannover Messe başta olmak üzere Almanya'nın önde gelen fuar ve etkinlik mekanlarında güvenle tercih edilen bir marka olmaktan gurur duyuyoruz.",
      de: "Wir sind stolz darauf, ein vertrauensvoller Partner auf der Hannover Messe und anderen führenden Veranstaltungsorten in Deutschland zu sein.",
      en: "We are proud to be a trusted partner at Hannover Messe and other leading event venues in Germany.",
    },
    stats: {
      events:    { tr: "Etkinlik",            de: "Veranstaltungen",     en: "Events" },
      languages: { tr: "Dil",                 de: "Sprachen",            en: "Languages" },
      satisfaction: { tr: "Müşteri Memnuniyeti", de: "Kundenzufriedenheit", en: "Client Satisfaction" },
    },
  },
  services: {
    label: { tr: "Hizmetlerimiz", de: "Unsere Leistungen", en: "Our Services" },
    title: {
      tr: "Etkinliğinize değer katan hizmetler",
      de: "Leistungen, die Ihre Veranstaltung aufwerten",
      en: "Services that elevate your event",
    },
    cards: [
      {
        title: { tr: "Hostes Hizmetleri", de: "Hostess-Service", en: "Hostess Services" },
        desc: {
          tr: "Fuarlar ve etkinlikler için çok dilli, profesyonel hostes kadrosu. Türkçe, Almanca ve İngilizce hizmet.",
          de: "Mehrsprachiges, professionelles Hostess-Team für Messen und Events. Service auf Türkisch, Deutsch und Englisch.",
          en: "Multilingual, professional hostess team for fairs and events. Service in Turkish, German and English.",
        },
      },
      {
        title: { tr: "Catering & İkram", de: "Catering & Bewirtung", en: "Catering & Refreshments" },
        desc: {
          tr: "Sıcak ve soğuk içecekler, atıştırmalıklar ve özel ikram çözümleri. Her bütçeye uygun.",
          de: "Warme und kalte Getränke, Snacks und individuelle Bewirtungslösungen. Für jedes Budget.",
          en: "Hot and cold drinks, snacks and tailored catering solutions. For every budget.",
        },
      },
      {
        title: { tr: "Stand Yönetimi", de: "Stand-Management", en: "Stand Management" },
        desc: {
          tr: "Fuar standınızın eksiksiz yönetimi. Kurulum desteği, temizlik, misafir karşılama ve organizasyon.",
          de: "Vollständiges Management Ihres Messestands. Aufbau-Support, Reinigung, Gästeempfang und Organisation.",
          en: "Complete management of your trade fair stand. Setup support, cleaning, guest reception and organisation.",
        },
      },
    ],
  },
  refs: {
    label: { tr: "Referanslar", de: "Referenzen", en: "References" },
    title: {
      tr: "Birlikte çalıştığımız markalar",
      de: "Marken, mit denen wir arbeiten",
      en: "Brands we work with",
    },
    testimonials: [
      {
        quote: {
          tr: "Ajans Köln ekibi ITB Berlin fuarımızda son derece profesyonel ve güler yüzlü bir hizmet sundu. Kesinlikle tavsiye ediyoruz.",
          de: "Das Team von Ajans Köln hat auf unserer ITB Berlin hervorragende Arbeit geleistet. Sehr empfehlenswert.",
          en: "The Ajans Köln team delivered an extremely professional and warm service at our ITB Berlin fair. Highly recommended.",
        },
        name: "M. Yılmaz", company: "Anadolu Travel GmbH",
      },
      {
        quote: {
          tr: "Standımızda görev alan hostes ekibi her dilde misafirlerimizi büyük bir özenle karşıladı. Tekrar çalışacağız.",
          de: "Das Hostess-Team an unserem Stand hat unsere Gäste in jeder Sprache mit größter Sorgfalt empfangen. Wir arbeiten gerne wieder zusammen.",
          en: "The hostess team at our stand welcomed every guest in every language with great care. We'll work together again.",
        },
        name: "S. Klein", company: "Mercator Industries AG",
      },
      {
        quote: {
          tr: "Catering kalitesi ve zamanlama mükemmeldi. Misafirlerimizden çok güzel geri dönüşler aldık.",
          de: "Die Catering-Qualität und das Timing waren perfekt. Wir haben sehr positives Feedback unserer Gäste erhalten.",
          en: "The catering quality and timing were perfect. We received excellent feedback from our guests.",
        },
        name: "E. Demir", company: "Bosphorus Events",
      },
    ],
  },
  gallery: {
    label: { tr: "Galeri", de: "Galerie", en: "Gallery" },
    title: { tr: "Etkinliklerden Kareler", de: "Impressionen", en: "Moments from our events" },
  },
  contact: {
    label: { tr: "İletişim", de: "Kontakt", en: "Contact" },
    title: {
      tr: "Bir sonraki etkinliğinizi konuşalım",
      de: "Sprechen wir über Ihre nächste Veranstaltung",
      en: "Let's talk about your next event",
    },
    sub: {
      tr: "24 saat içinde geri dönüş yapıyoruz.",
      de: "Wir melden uns innerhalb von 24 Stunden zurück.",
      en: "We respond within 24 hours.",
    },
    whatsapp: { tr: "WhatsApp'tan Yaz", de: "WhatsApp schreiben", en: "Message on WhatsApp" },
    form: {
      name:    { tr: "Ad Soyad",  de: "Name",      en: "Name" },
      email:   { tr: "E-posta",   de: "E-Mail",    en: "Email" },
      subject: { tr: "Konu",      de: "Betreff",   en: "Subject" },
      message: { tr: "Mesaj",     de: "Nachricht", en: "Message" },
      send:    { tr: "Gönder",    de: "Senden",    en: "Send" },
      sending: { tr: "Gönderiliyor…", de: "Senden…", en: "Sending…" },
      success: {
        tr: "Mesajınız alındı. Kısa süre içinde dönüş yapacağız.",
        de: "Ihre Nachricht ist eingegangen. Wir melden uns in Kürze.",
        en: "Your message has been received. We'll be in touch shortly.",
      },
      error: {
        tr: "Gönderilemedi — lütfen tekrar deneyin veya WhatsApp kullanın.",
        de: "Senden fehlgeschlagen — bitte erneut versuchen oder WhatsApp nutzen.",
        en: "Could not send — please try again or use WhatsApp.",
      },
    },
  },
  footer: {
    tagline: { tr: "Fair Organisation",  de: "Fair Organisation", en: "Fair Organisation" },
    rights:  { tr: "Tüm hakları saklıdır.", de: "Alle Rechte vorbehalten.", en: "All rights reserved." },
    imprint: { tr: "Künye", de: "Impressum", en: "Imprint" },
    privacy: { tr: "Gizlilik", de: "Datenschutz", en: "Privacy" },
  },
} as const;

export function tr<T extends Record<Lang, string>>(node: T, lang: Lang): string {
  return node[lang];
}
