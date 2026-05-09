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
        value: { tr: "10+", de: "10+", en: "10+" },
        label: { tr: "Yıllık deneyim", de: "Jahre Erfahrung", en: "Years of experience" },
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
  stats: {
    label: { tr: "Rakamlarla Ajans Köln", de: "Ajans Köln in Zahlen", en: "Ajans Köln in Numbers" },
    items: [
      { value: { tr: "50+", de: "50+", en: "50+" }, label: { tr: "Tamamlanan Etkinlik", de: "Abgeschlossene Events", en: "Completed Events" } },
      { value: { tr: "10+", de: "10+", en: "10+" }, label: { tr: "Yıllık Deneyim", de: "Jahre Erfahrung", en: "Years of Experience" } },
      { value: { tr: "3", de: "3", en: "3" }, label: { tr: "Çalışma Dili", de: "Arbeitssprachen", en: "Working Languages" } },
      { value: { tr: "DE", de: "DE", en: "DE" }, label: { tr: "Almanya Geneli Hizmet", de: "Deutschlandweiter Service", en: "Nationwide Service" } },
    ],
  },
  usp: {
    label: { tr: "Neden Biz?", de: "Warum wir?", en: "Why us?" },
    title: { tr: "Neden Ajans Köln?", de: "Warum Ajans Köln?", en: "Why Ajans Köln?" },
    sub: {
      tr: "Etkinliğiniz için doğru ekibi seçmek kritik. İşte bizi farklı kılan özellikler.",
      de: "Die Wahl des richtigen Teams für Ihre Veranstaltung ist entscheidend. Das macht uns besonders.",
      en: "Choosing the right team for your event is critical. Here is what sets us apart.",
    },
    items: [
      {
        title: { tr: "Çok Dilli Ekip", de: "Mehrsprachiges Team", en: "Multilingual Team" },
        desc: { tr: "Türkçe, Almanca ve İngilizce — dil bariyeri olmadan profesyonel hizmet.", de: "Türkisch, Deutsch und Englisch — professioneller Service ohne Sprachbarriere.", en: "Turkish, German and English — professional service without language barriers." },
      },
      {
        title: { tr: "Almanya Geneli", de: "Deutschlandweit", en: "Nationwide" },
        desc: { tr: "Köln'den Hannover'e, Frankfurt'tan Berlin'e — tüm Almanya'da görev alıyoruz.", de: "Von Köln bis Hannover, von Frankfurt bis Berlin — wir sind in ganz Deutschland im Einsatz.", en: "From Cologne to Hannover, Frankfurt to Berlin — we operate across all of Germany." },
      },
      {
        title: { tr: "Kısa Sürede Hazır", de: "Kurzfristig verfügbar", en: "Available at Short Notice" },
        desc: { tr: "Acil durumlarda da çözüm üretiyoruz. Kısa süre içinde görev alabilecek ekibimiz hazır.", de: "Auch in dringenden Fällen finden wir eine Lösung. Unser Team ist kurzfristig einsatzbereit.", en: "We deliver solutions even in urgent situations. Our team is ready to deploy on short notice." },
      },
      {
        title: { tr: "Messe Deneyimi", de: "Messeerfahrung", en: "Trade Fair Expertise" },
        desc: { tr: "Hannover Messe gibi büyük fuar alanlarında yıllarca edinilen saha deneyimi.", de: "Jahrelange Felderfahrung auf großen Messegeländen wie der Hannover Messe.", en: "Years of on-site experience at major trade fair venues including Hannover Messe." },
      },
      {
        title: { tr: "Sabit İletişim Kişisi", de: "Fester Ansprechpartner", en: "Dedicated Contact Person" },
        desc: { tr: "Her etkinlik için tek bir iletişim noktası — başından sonuna kadar yanınızda.", de: "Ein fester Ansprechpartner für jede Veranstaltung — von Anfang bis Ende an Ihrer Seite.", en: "One dedicated contact for each event — by your side from start to finish." },
      },
      {
        title: { tr: "Profesyonel Görünüm", de: "Professionelles Auftreten", en: "Professional Appearance" },
        desc: { tr: "Kıyafet kurallarına uyum, zamanında gelme ve eksiksiz brifing ile her zaman hazır.", de: "Dresscode-konform, pünktlich und vollständig gebrieft — immer bereit.", en: "Dresscode-compliant, punctual and fully briefed — always ready." },
      },
      {
        title: { tr: "Esnek Planlama", de: "Flexible Einsatzplanung", en: "Flexible Scheduling" },
        desc: { tr: "Küçük etkinlikten büyük fuara — ekip büyüklüğü ve program ihtiyacınıza göre şekillenir.", de: "Von kleinen Events bis zu großen Messen — Teamgröße und Zeitplan passen sich Ihren Bedürfnissen an.", en: "From small events to large trade fairs — team size and schedule adapt to your needs." },
      },
    ],
  },
  process: {
    label: { tr: "Nasıl Çalışıyoruz?", de: "Wie wir arbeiten", en: "How we work" },
    title: { tr: "Süreç Nasıl İşliyor?", de: "Wie läuft der Ablauf?", en: "What is the process?" },
    sub: {
      tr: "Başından sonuna kadar şeffaf ve planlı bir süreç. Siz rahat edin, biz halledelim.",
      de: "Ein transparenter, geplanter Ablauf von Anfang bis Ende. Lehnen Sie sich zurück, wir übernehmen.",
      en: "A transparent, planned process from start to finish. Sit back and let us handle it.",
    },
    steps: [
      { title: { tr: "Talep Gönderin", de: "Anfrage senden", en: "Send Request" }, desc: { tr: "Telefon, WhatsApp veya form aracılığıyla bize ulaşın. Etkinlik detaylarınızı paylaşın.", de: "Kontaktieren Sie uns per Telefon, WhatsApp oder Formular. Teilen Sie Ihre Veranstaltungsdetails mit.", en: "Reach us by phone, WhatsApp or form. Share your event details with us." } },
      { title: { tr: "Brifing & Planlama", de: "Briefing & Planung", en: "Briefing & Planning" }, desc: { tr: "Rol, kıyafet ve zaman çizelgesini birlikte netleştiriyoruz. Hiçbir detay gözden kaçmaz.", de: "Gemeinsam klären wir Rolle, Dresscode und Ablauf. Kein Detail bleibt offen.", en: "Together we clarify role, dress code and schedule. No detail is left open." } },
      { title: { tr: "Personel Seçimi", de: "Personalauswahl", en: "Staff Selection" }, desc: { tr: "Etkinliğinize en uygun ekibi belirliyor, dil ve deneyim gereksinimlerinizi karşılıyoruz.", de: "Wir wählen das am besten geeignete Team für Ihre Veranstaltung und erfüllen Ihre Sprach- und Erfahrungsanforderungen.", en: "We select the most suitable team for your event, meeting your language and experience requirements." } },
      { title: { tr: "Hazırlık", de: "Vorbereitung", en: "Preparation" }, desc: { tr: "Ekibimiz etkinlik öncesinde detaylı brifing alır. Pünktlichkeit ve professional görünüm garantili.", de: "Unser Team wird vor der Veranstaltung detailliert gebrieft. Pünktlichkeit und professionelles Erscheinungsbild garantiert.", en: "Our team is thoroughly briefed before the event. Punctuality and professional appearance guaranteed." } },
      { title: { tr: "Etkinlik & Destek", de: "Einsatz & Betreuung", en: "On-site & Support" }, desc: { tr: "Etkinlik süresince ekibimiz yerinde. Herhangi bir sorun için her zaman ulaşılabilir bir koordinatör.", de: "Unser Team ist während der gesamten Veranstaltung vor Ort. Ein erreichbarer Koordinator für alle Fragen.", en: "Our team is on-site throughout the event. A reachable coordinator for any questions." } },
    ],
  },
  testimonials: {
    label: { tr: "Müşteri Görüşleri", de: "Kundenstimmen", en: "Testimonials" },
    title: { tr: "Müşterilerimiz Ne Diyor?", de: "Was unsere Kunden sagen", en: "What our clients say" },
    items: [
      {
        quote: { tr: "Güvenilir, profesyonel ve esnek — fuarımız için tam ihtiyacımız olan buydu.", de: "Zuverlässig, professionell und flexibel — genau das, was wir für unsere Messe gebraucht haben.", en: "Reliable, professional and flexible — exactly what we needed for our trade fair." },
        author: { tr: "Event Yöneticisi", de: "Event Managerin", en: "Event Manager" },
        company: { tr: "Hannover Messe", de: "Hannover Messe", en: "Hannover Messe" },
      },
      {
        quote: { tr: "İletişim hızlı ve kollaydı. Ekip her zaman ulaşılabilirdi.", de: "Die Kommunikation war schnell und unkompliziert. Das Team war immer ansprechbar.", en: "Communication was fast and straightforward. The team was always reachable." },
        author: { tr: "Pazarlama Müdürü", de: "Marketingleiterin", en: "Marketing Director" },
        company: { tr: "Düsseldorf", de: "Düsseldorf", en: "Düsseldorf" },
      },
      {
        quote: { tr: "Dakik, iyi giyimli ve tam brifingdi. Kesinlikle tekrar çalışacağız.", de: "Pünktlich, gut gekleidet und vollständig gebrieft. Wir buchen definitiv wieder.", en: "Punctual, well dressed and fully briefed. We will definitely book again." },
        author: { tr: "Fuar Sorumlusu", de: "Messebeauftragter", en: "Trade Fair Manager" },
        company: { tr: "Frankfurt", de: "Frankfurt", en: "Frankfurt" },
      },
    ],
  },
  faq: {
    label: { tr: "Sık Sorulan Sorular", de: "Häufige Fragen", en: "FAQ" },
    title: { tr: "Sık Sorulan Sorular", de: "Häufig gestellte Fragen", en: "Frequently Asked Questions" },
    items: [
      {
        q: { tr: "Hangi şehirlerde hizmet veriyorsunuz?", de: "In welchen Städten sind Sie tätig?", en: "Which cities do you serve?" },
        a: { tr: "Almanya genelinde hizmet veriyoruz: Köln, Düsseldorf, Hannover, Frankfurt, Berlin, Münih, Hamburg ve diğer şehirler.", de: "Wir sind deutschlandweit tätig: Köln, Düsseldorf, Hannover, Frankfurt, Berlin, München, Hamburg und weitere Städte.", en: "We operate nationwide across Germany: Cologne, Düsseldorf, Hannover, Frankfurt, Berlin, Munich, Hamburg and more." },
      },
      {
        q: { tr: "Hostesler Almanca konuşuyor mu?", de: "Sprechen die Hostessen Deutsch?", en: "Do the hostesses speak German?" },
        a: { tr: "Evet. Ekibimiz Almanca, Türkçe ve İngilizce konuşabilmektedir. Dil gereksiniminizi önceden belirtebilirsiniz.", de: "Ja. Unser Team spricht Deutsch, Türkisch und Englisch. Sprachliche Anforderungen können Sie vorab angeben.", en: "Yes. Our team speaks German, Turkish and English. Language requirements can be specified in advance." },
      },
      {
        q: { tr: "Kısa sürede rezervasyon yapılabilir mi?", de: "Gibt es kurzfristige Buchungen?", en: "Are short-notice bookings possible?" },
        a: { tr: "Evet, kısa süre içinde görev alabilecek ekibimiz hazırdır. Bize mümkün olan en erken sürede ulaşmanızı öneririz.", de: "Ja, unser Team ist auch kurzfristig einsatzbereit. Wir empfehlen, uns so früh wie möglich zu kontaktieren.", en: "Yes, our team is available at short notice. We recommend reaching out as early as possible." },
      },
      {
        q: { tr: "Küçük etkinliklerde de çalışıyor musunuz?", de: "Arbeiten Sie auch bei kleinen Events?", en: "Do you work at smaller events?" },
        a: { tr: "Evet. Küçük kurumsal davetlerden büyük fuar katılımlarına kadar her ölçekte görev alıyoruz.", de: "Ja. Wir übernehmen Einsätze aller Größen — von kleinen Firmenveranstaltungen bis zu großen Messebeteiligungen.", en: "Yes. We take on assignments of all sizes — from small corporate events to large trade fair participations." },
      },
      {
        q: { tr: "Kıyafet ve dresscode özelleştirilebilir mi?", de: "Können Kleidung und Dresscode angepasst werden?", en: "Can clothing and dress code be customised?" },
        a: { tr: "Kesinlikle. Kıyafet ve görünüm brifing sürecinde sizinle birlikte netleştirilir.", de: "Absolut. Kleidung und Erscheinungsbild werden im Briefing gemeinsam mit Ihnen festgelegt.", en: "Absolutely. Clothing and appearance are agreed with you during the briefing." },
      },
    ],
  },
  cta: {
    eyebrow: { tr: "Hazır mısınız?", de: "Bereit?", en: "Ready?" },
    title: { tr: "Bir Messe veya Etkinlik Planlıyor Musunuz?", de: "Planen Sie eine Messe oder Veranstaltung in Deutschland?", en: "Planning a Trade Fair or Event in Germany?" },
    sub: { tr: "Ekibimizle konuşun — hızlı, kolay ve güvenilir.", de: "Sprechen Sie mit unserem Team — schnell, unkompliziert, zuverlässig.", en: "Speak with our team — fast, straightforward and reliable." },
    whatsapp: { tr: "WhatsApp'tan Yaz", de: "WhatsApp schreiben", en: "Message on WhatsApp" },
    call: { tr: "Hemen Ara", de: "Jetzt anrufen", en: "Call Now" },
    form: { tr: "Mesaj Gönder", de: "Nachricht senden", en: "Send Message" },
    citiesLabel: { tr: "Hizmet Verdiğimiz Şehirler", de: "Unsere Einsatzorte", en: "Cities we serve" },
    cities: { tr: "Köln · Düsseldorf · Hannover · Frankfurt · Berlin · Münih · Hamburg", de: "Köln · Düsseldorf · Hannover · Frankfurt · Berlin · München · Hamburg", en: "Cologne · Düsseldorf · Hannover · Frankfurt · Berlin · Munich · Hamburg" },
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
