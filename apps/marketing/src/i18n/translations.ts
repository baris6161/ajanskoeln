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
    homeAria: { tr: "Ajans Köln ana sayfa", de: "Ajans Köln Startseite", en: "Ajans Köln home" },
    closeMenu: { tr: "Menüyü kapat", de: "Menü schließen", en: "Close menu" },
    langAria: { tr: "Dil seç", de: "Sprache wählen", en: "Choose language" },
  },
  hero: {
    eyebrow: { tr: "Almanya genelinde", de: "Deutschlandweit", en: "Across Germany" },
    title: {
      tr: "Profesyonel Hostes & Catering Hizmetleri",
      de: "Professionelle Hostess & Catering-Dienstleistungen",
      en: "Professional Hostess & Catering Services",
    },
    sub: {
      tr: "Fuarlar, kurumsal etkinlikler ve özel davetler için hostes, ikram ve stand desteği.",
      de: "Hostess-, Bewirtungs- und Stand-Support für Messen, Firmenevents und private Anlässe in ganz Deutschland.",
      en: "Hostess, catering and stand support for trade fairs, corporate events and private occasions across Germany.",
    },
    cta1: { tr: "Hizmetlerimizi Keşfedin", de: "Unsere Leistungen entdecken", en: "Discover Our Services" },
    cta2: { tr: "İletişime Geçin",          de: "Kontakt aufnehmen",           en: "Get in Touch" },
    slideAlts: [
      {
        tr: "Fuar veya etkinlik ortamında servis tepsisi taşıyan hostes görseli",
        de: "Hostess mit Serviertablett auf Messe oder Event",
        en: "Hostess carrying a serving tray at a fair or event",
      },
      {
        tr: "Davet veya fuar alanında ikram hazırlığı görseli",
        de: "Bewirtung und Vorbereitung im Veranstaltungsbereich",
        en: "Refreshment preparation at an event venue",
      },
      {
        tr: "Misafir karşılama ve sunum için etkinlik alanı görseli",
        de: "Gästeempfang und Präsentation im Veranstaltungsraum",
        en: "Guest reception and presentation at an event space",
      },
      {
        tr: "Kurumsal etkinlikte servis ve düzen görseli",
        de: "Service und Organisation bei einem Firmenevent",
        en: "Service and setup at a corporate event",
      },
    ],
    slideDotAria: {
      tr: "Slayt",
      de: "Folie",
      en: "Slide",
    },
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
      tr: "Ekibimiz Türkçe, Almanca ve İngilizce iletişim kurabilen profesyonellerden oluşur. Etkinlik öncesi kısa bir brifing ile rol, kıyafet ve zaman çizelgesini netleştirmeyi tercih ederiz.",
      de: "Unser Team kommuniziert auf Türkisch, Deutsch und Englisch. Vor dem Einsatz klären wir Rolle, Dresscode und Ablauf gern kurz im Briefing.",
      en: "Our team communicates in Turkish, German and English. Before an assignment we prefer a short briefing on role, dress code and schedule.",
    },
    p3: {
      tr: "Hannover Messe dahil Almanya'daki büyük fuar alanlarında ve kurumsal etkinlik mekânlarında görev alıyoruz.",
      de: "Wir arbeiten auf großen Messegeländen in Deutschland, einschließlich Hannover Messe, sowie bei Firmenveranstaltungen.",
      en: "We work at large fairgrounds in Germany including Hannover Messe, and at corporate event venues.",
    },
    badge: { tr: "Almanya genelinde", de: "Deutschlandweit", en: "Across Germany" },
    portraitAlt: {
      tr: "Ajans Köln ekibinden bir temsilci portresi",
      de: "Porträt einer Vertretung des Ajans Köln Teams",
      en: "Portrait of an Ajans Köln team representative",
    },
    highlights: [
      {
        value: { tr: "3", de: "3", en: "3" },
        label: { tr: "Türkçe, Almanca, İngilizce", de: "Türkisch, Deutsch, Englisch", en: "Turkish, German, English" },
      },
      {
        value: { tr: "DE", de: "DE", en: "DE" },
        label: { tr: "Görev alanı: Almanya", de: "Einsatzgebiet: Deutschland", en: "Service area: Germany" },
      },
      {
        value: { tr: "·", de: "·", en: "·" },
        label: {
          tr: "Hostes ve ikram koordinasyonu",
          de: "Hostess- und Catering-Koordination",
          en: "Hostess and catering coordination",
        },
      },
    ],
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
          tr: "Sıcak ve soğuk içecekler, atıştırmalıklar ve menü planı etkinlik süresine ve mekân kurallarına göre birlikte netleştirilir.",
          de: "Warme und kalte Getränke, Snacks und Menüplanung stimmen wir mit Ihnen nach Laufzeit und Location-Vorgaben ab.",
          en: "Hot and cold drinks, snacks and menu timing are agreed with you for the venue rules and event length.",
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
      tr: "Nerede ve nasıl çalışıyoruz",
      de: "Wo und wie wir arbeiten",
      en: "Where and how we work",
    },
    intro: {
      tr: "Bazı iş ortaklarımızın logoları aşağıdadır. Diğer referanslar veya detay için iletişime geçebilirsiniz.",
      de: "Unten finden Sie Logos ausgewählter Partner. Für weitere Referenzen oder Details kontaktieren Sie uns.",
      en: "Below are logos of selected partners. Contact us for further references or details.",
    },
    bullets: [
      {
        tr: "Ulusal ve uluslararası fuar ortamlarında hostes ve misafir karşılama",
        de: "Hostess und Gästeempfang auf nationalen und internationalen Messen",
        en: "Hostess and guest reception at national and international trade fairs",
      },
      {
        tr: "Hannover Messe gibi büyük fuar alanlarında saha deneyimi",
        de: "Erfahrung auf großen Messegeländen wie der Hannover Messe",
        en: "On-site experience at large fairgrounds such as Hannover Messe",
      },
      {
        tr: "Kurumsal davet ve özel günlerde ikram ve servis koordinasyonu",
        de: "Bewirtung und Service-Koordination bei Firmenfeiern und privaten Anlässen",
        en: "Catering and service coordination for corporate and private occasions",
      },
    ],
    logoAlts: [
      { tr: "OKT Trailer logosu", de: "OKT Trailer Logo", en: "OKT Trailer logo" },
      { tr: "İş ortağı logosu", de: "Partnerlogo", en: "Partner logo" },
      { tr: "Rentoya logosu", de: "Rentoya Logo", en: "Rentoya logo" },
      { tr: "Elit logosu", de: "Elit Logo", en: "Elit logo" },
      {
        tr: "The Land of Legends logosu",
        de: "The Land of Legends Logo",
        en: "The Land of Legends logo",
      },
    ],
  },
  gallery: {
    label: { tr: "Galeri", de: "Galerie", en: "Gallery" },
    title: { tr: "Etkinliklerden Kareler", de: "Impressionen", en: "Moments from our events" },
    openImageAria: { tr: "Görseli büyüt", de: "Bild vergrößern", en: "Open image larger" },
    closeLightboxAria: { tr: "Görseli kapat", de: "Bild schließen", en: "Close image" },
    prevAria: { tr: "Önceki görsel", de: "Vorheriges Bild", en: "Previous image" },
    nextAria: { tr: "Sonraki görsel", de: "Nächstes Bild", en: "Next image" },
    imageAlts: [
      {
        tr: "Davet masasında çiçek ve mum ile süslenmiş düzen",
        de: "Gedeckter Tisch mit Blumen und Kerzen",
        en: "Table setting with flowers and candles",
      },
      {
        tr: "Şampanya kadehi ve kutlama ortamı",
        de: "Sektglas und festliche Atmosphäre",
        en: "Champagne glass in a festive setting",
      },
      {
        tr: "Etkinlik alanında peçete ve çatal düzeni",
        de: "Servietten- und Besteckdekor am Veranstaltungsort",
        en: "Napkin and cutlery styling at an event",
      },
      {
        tr: "İkram tepsisi ve sunum detayı",
        de: "Serviertablett und Präsentationsdetail",
        en: "Serving tray and presentation detail",
      },
      {
        tr: "Kurumsal davet için uzun masa düzeni",
        de: "Langer Tisch für einen Firmenanlass",
        en: "Long table setup for a corporate dinner",
      },
      {
        tr: "Kadehler ve davet masası genel görünüm",
        de: "Gläser und Überblick über den Festtisch",
        en: "Glassware and overview of the banquet table",
      },
    ],
  },
  contact: {
    label: { tr: "İletişim", de: "Kontakt", en: "Contact" },
    title: {
      tr: "Bir sonraki etkinliğinizi konuşalım",
      de: "Sprechen wir über Ihre nächste Veranstaltung",
      en: "Let's talk about your next event",
    },
    sub: {
      tr: "Mesajınızı aldığımızda mümkün olan en kısa sürede size döneriz. Acil durumlarda telefon veya WhatsApp daha hızlı olabilir.",
      de: "Wir melden uns so schnell wie möglich. In dringenden Fällen sind Telefon oder WhatsApp oft am schnellsten.",
      en: "We reply as soon as we can. For urgent matters, phone or WhatsApp is often fastest.",
    },
    whatsapp: { tr: "WhatsApp'tan Yaz", de: "WhatsApp schreiben", en: "Message on WhatsApp" },
    instagramAria: { tr: "Ajans Köln Instagram", de: "Ajans Köln auf Instagram", en: "Ajans Köln on Instagram" },
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
        tr: "Gönderilemedi, lütfen tekrar deneyin veya WhatsApp kullanın.",
        de: "Senden fehlgeschlagen, bitte erneut versuchen oder WhatsApp nutzen.",
        en: "Could not send, please try again or use WhatsApp.",
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
