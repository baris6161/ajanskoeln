import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import fs from "node:fs";
import path from "node:path";
import { Customer, Offer } from "@/lib/types";

const BROWN = "#3D1F0E";
const ROSE_GOLD = "#C4956A";
const BROWN_LIGHT = "#F8F2ED";
const GRAY = "#555555";
const BLACK = "#1A1A1A";
const LOGO_BASE64 = (() => {
  try {
    const filePath = path.join(process.cwd(), "public", "ajans-koeln-logo.png");
    const base64 = fs.readFileSync(filePath, "base64");
    return `data:image/png;base64,${base64}`;
  } catch {
    return "";
  }
})();

Font.register({
  family: "NotoSans",
  src: "https://raw.githubusercontent.com/googlefonts/noto-fonts/main/hinted/ttf/NotoSans/NotoSans-Regular.ttf",
});
Font.register({
  family: "NotoSans",
  src: "https://raw.githubusercontent.com/googlefonts/noto-fonts/main/hinted/ttf/NotoSans/NotoSans-Bold.ttf",
  fontWeight: "bold",
});

const COMPANY = {
  name: "Ajans Köln",
  yetkili: "Funda Ekiz",
  adres: "Dieselweg 1, 30926 Seelze, DE",
  tel: "+49 172 7532501",
  mail: "ajanskoeln@gmail.com",
};

const BANK = {
  hesapSahibi: "Zafer Ekiz",
  ytlIban: "TR36 0001 0023 2844 6985 4350 08",
  eurIban: "TR79 0001 0023 2844 6985 4350 10",
  bank: "Ziraat Bankası",
};

const TAX = {
  daire: "Y.Galip Vergi Dairesi Müd.",
  tckn: "13601583636",
};

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 36,
    paddingTop: 28,
    paddingBottom: 28,
    fontSize: 10,
    color: BLACK,
    fontFamily: "NotoSans",
  },
  row: { flexDirection: "row" },
  headerBlock: { width: "33.33%" },
  headerCenter: { width: "33.33%", alignItems: "center", justifyContent: "center", paddingHorizontal: 8 },
  logo: { width: 190, height: 78, objectFit: "contain" },
  headerLabel: { fontSize: 8, color: BROWN, fontWeight: "bold", marginBottom: 4 },
  headerText: { fontSize: 9, color: BLACK, lineHeight: 1.45 },
  divider: { marginTop: 12, marginBottom: 12, height: 1.2, backgroundColor: ROSE_GOLD },
  metaRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  metaText: { fontSize: 9, color: GRAY, fontWeight: "bold" },
  title: { fontSize: 16, color: BROWN, fontWeight: "bold", marginBottom: 4 },
  subtitle: { fontSize: 9.5, color: BROWN, marginBottom: 10 },
  bodyText: { fontSize: 9.5, lineHeight: 1.5, marginBottom: 12 },
  table: { borderWidth: 0.6, borderColor: ROSE_GOLD, borderRadius: 6, overflow: "hidden" },
  tableHeader: { backgroundColor: BROWN, color: "#FFFFFF", fontSize: 9, fontWeight: "bold" },
  tableRow: { flexDirection: "row", borderTopWidth: 0.5, borderTopColor: ROSE_GOLD },
  tableCell: { paddingVertical: 6, paddingHorizontal: 6, fontSize: 9 },
  colService: { width: "50%" },
  colDay: { width: "15%", textAlign: "center" },
  colQty: { width: "15%", textAlign: "center" },
  colPrice: { width: "20%", textAlign: "right", paddingRight: 10 },
  totalRow: { backgroundColor: BROWN_LIGHT, borderTopWidth: 0.5, borderTopColor: ROSE_GOLD },
  closing: { marginTop: 14, marginBottom: 12, fontSize: 8.5, color: BROWN, textAlign: "center" },
  infoBox: {
    marginTop: 2,
    marginBottom: 12,
    borderWidth: 0.6,
    borderColor: ROSE_GOLD,
    borderRadius: 6,
    backgroundColor: BROWN_LIGHT,
    paddingVertical: 8,
    paddingHorizontal: 10,
    gap: 4,
  },
  infoText: { fontSize: 8.5, color: GRAY, lineHeight: 1.35 },
  footerDivider: { height: 0.8, backgroundColor: ROSE_GOLD, marginBottom: 6 },
  footerCol: { width: "65%" },
  footerColRight: { width: "35%" },
  footerLabel: { fontSize: 7.5, color: BROWN, fontWeight: "bold", marginBottom: 2 },
  footerText: { fontSize: 7.5, color: GRAY, lineHeight: 1.4 },
});

function formatDate(dateStr?: string, locale: "tr" | "en" | "de" = "tr") {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(locale === "en" ? "en-US" : locale === "de" ? "de-DE" : "tr-TR");
}

function formatCurrency(amount: number, locale: "tr" | "en" | "de" = "tr") {
  const resolvedLocale = locale === "en" ? "en-GB" : locale === "de" ? "de-DE" : "tr-TR";
  const formatted = new Intl.NumberFormat(resolvedLocale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
  return `${formatted} EUR`;
}

type Props = {
  offer: Offer;
  customer?: Customer | null;
  localeOverride?: "tr" | "en" | "de";
};

export function OfferDocument({ offer, customer, localeOverride }: Props) {
  const locale: "tr" | "en" | "de" =
    localeOverride ?? (customer?.language === "tr" ? "tr" : customer?.language === "de" ? "de" : "en");
  const labels =
    locale === "en"
      ? {
          customer: "CUSTOMER",
          offerNo: "Offer",
          date: "Date",
          project: "Project",
          subtitle: "Catering – Offer",
          service: "Service",
          day: "Days",
          qty: "Qty",
          price: "Price",
          total: "Total",
          closing:
            "Thank you for your interest. For any revisions or questions, we are always happy to support.",
          bank: "Bank Details",
          tax: "Tax",
          note: "Note: Prices are currently stated without VAT.",
          validity: "Validity: This offer is valid for 2 weeks from the offer date.",
        }
      : locale === "de"
        ? {
            customer: "KUNDE",
            offerNo: "Angebot",
            date: "Datum",
            project: "Projekt",
            subtitle: "Catering – Angebot",
            service: "Leistung",
            day: "Tage",
            qty: "Menge",
            price: "Preis",
            total: "Gesamt",
            closing:
              "Vielen Dank für Ihr Interesse. Für Rückfragen und Anpassungen stehen wir Ihnen jederzeit gerne zur Verfügung.",
            bank: "Bankverbindung",
            tax: "Steuer",
            note: "Hinweis: Preise sind derzeit ohne MwSt. angegeben.",
            validity: "Gültigkeit: Dieses Angebot ist ab Angebotsdatum 2 Wochen gültig.",
          }
      : {
          customer: "MÜŞTERİ",
          offerNo: "Teklif",
          date: "Tarih",
          project: "Proje",
          subtitle: "Catering – Teklif",
          service: "Hizmetimiz",
          day: "Gün",
          qty: "Adet",
          price: "Fiyat",
          total: "Toplam",
          closing:
            "Teklifimizi değerlendirdiğiniz için teşekkür ederiz. Sorularınız ve revize talepleriniz için her zaman destek oluruz.",
          bank: "Banka",
          tax: "Vergi",
          note: "Not: Tüm fiyatlar vergi dahil olarak hesaplanmıştır.",
          validity: "Geçerlilik: Bu teklif teklif tarihinden itibaren 2 hafta geçerlidir.",
        };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.row}>
          <View style={styles.headerBlock}>
            <Text style={styles.headerLabel}>{labels.customer}</Text>
            <Text style={styles.headerText}>{customer?.firma || "-"}</Text>
            <Text style={styles.headerText}>{customer?.yetkili || "-"}</Text>
            <Text style={styles.headerText}>{customer?.adres || "-"}</Text>
            <Text style={styles.headerText}>{customer?.tel || "-"}</Text>
            <Text style={styles.headerText}>{customer?.email || "-"}</Text>
          </View>

          <View style={styles.headerCenter}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={LOGO_BASE64} style={styles.logo} />
          </View>

          <View style={[styles.headerBlock, { alignItems: "flex-end" }]}>
            <Text style={styles.headerLabel}>{COMPANY.name}</Text>
            <Text style={styles.headerText}>{COMPANY.yetkili}</Text>
            <Text style={styles.headerText}>{COMPANY.adres}</Text>
            <Text style={styles.headerText}>{COMPANY.tel}</Text>
            <Text style={styles.headerText}>{COMPANY.mail}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.metaRow}>
          <Text style={styles.metaText}>
            {labels.offerNo}: {offer.offer_number}
          </Text>
          <Text style={styles.metaText}>
            {labels.date}: {formatDate(offer.created_at, locale)}
          </Text>
        </View>

        <Text style={styles.title}>
          {labels.project}: {offer.projekt}
        </Text>
        <Text style={styles.subtitle}>{labels.subtitle}</Text>
        <Text style={styles.bodyText}>{offer.angebotstext}</Text>

        <View style={styles.table}>
          <View style={[styles.tableRow, { borderTopWidth: 0, backgroundColor: BROWN }]}>
            <Text style={[styles.tableCell, styles.colService, styles.tableHeader]}>{labels.service}</Text>
            <Text style={[styles.tableCell, styles.colDay, styles.tableHeader]}>{labels.day}</Text>
            <Text style={[styles.tableCell, styles.colQty, styles.tableHeader]}>{labels.qty}</Text>
            <Text style={[styles.tableCell, styles.colPrice, styles.tableHeader]}>{labels.price}</Text>
          </View>
          {offer.leistungen.map((line, idx) => (
            <View
              key={idx}
              style={[
                styles.tableRow,
                { backgroundColor: idx % 2 === 0 ? BROWN_LIGHT : "#FFFFFF" },
              ]}
            >
              <Text style={[styles.tableCell, styles.colService]}>{line.hizmet}</Text>
              <Text style={[styles.tableCell, styles.colDay]}>{line.gun}</Text>
              <Text style={[styles.tableCell, styles.colQty]}>{line.adet}</Text>
              <Text style={[styles.tableCell, styles.colPrice]}>
                {formatCurrency(Number(line.fiyat || 0), locale)}
              </Text>
            </View>
          ))}
          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={[styles.tableCell, styles.colService]} />
            <Text style={[styles.tableCell, styles.colDay]} />
            <Text style={[styles.tableCell, styles.colQty, { fontWeight: "bold", color: BROWN }]}>
              {labels.total}
            </Text>
            <Text style={[styles.tableCell, styles.colPrice, { fontWeight: "bold", color: BROWN }]}>
              {formatCurrency(Number(offer.gesamt || 0), locale)}
            </Text>
          </View>
        </View>

        <Text style={styles.closing}>{labels.closing}</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{labels.note}</Text>
          <Text style={styles.infoText}>{labels.validity}</Text>
        </View>

        <View style={styles.footerDivider} />
        <View style={styles.row}>
          <View style={styles.footerCol}>
            <Text style={styles.footerLabel}>{labels.bank}</Text>
            <Text style={styles.footerText}>{BANK.hesapSahibi}</Text>
            <Text style={styles.footerText}>
              YTL - {BANK.ytlIban} ({BANK.bank})
            </Text>
            <Text style={styles.footerText}>
              EUR - {BANK.eurIban} ({BANK.bank})
            </Text>
          </View>
          <View style={styles.footerColRight}>
            <Text style={styles.footerLabel}>{labels.tax}</Text>
            <Text style={styles.footerText}>{TAX.daire}</Text>
            <Text style={styles.footerText}>TCKN: {TAX.tckn}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
