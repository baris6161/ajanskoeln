"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n-context";
import { CustomerLanguage } from "@/lib/types";

type Props = {
  defaultTo?: string;
  offerId?: string;
  customerCompany?: string;
  customerContact?: string;
  projectName?: string;
  customerLanguage?: CustomerLanguage;
  initialMailLanguage?: "tr" | "en" | "de" | null;
};

export function SendOfferModal({
  defaultTo = "",
  offerId,
  customerCompany = "",
  customerContact = "",
  projectName = "",
  customerLanguage = "tr",
  initialMailLanguage = null,
}: Props) {
  const router = useRouter();
  const { locale } = useI18n();
  const [mailLanguage, setMailLanguage] = useState<"tr" | "en" | "de">(() => {
    if (initialMailLanguage === "tr" || initialMailLanguage === "en" || initialMailLanguage === "de") {
      return initialMailLanguage;
    }
    if (customerLanguage === "de") return "de";
    if (customerLanguage === "en") return "en";
    return "tr";
  });
  const txt =
    locale === "de"
      ? {
          trigger: "Per Gmail senden",
          title: "Angebot senden",
          to: "An",
          send: "Senden",
          fail: "Mailversand fehlgeschlagen",
          ok: "Mail wurde gesendet",
          subject: "Angebot - Ajans Köln",
          close: "Abbrechen",
          sending: "Wird gesendet...",
          language: "Sprache für Mail & PDF",
        }
      : {
          trigger: "Gmail ile gönder",
          title: "Teklif gönder",
          to: "Alıcı",
          send: "Gönder",
          fail: "Mail gönderimi başarısız",
          ok: "Mail gönderildi",
          subject: "Teklif - Ajans Köln",
          close: "Vazgeç",
          sending: "Gönderiliyor...",
          language: "Mail ve PDF Dili",
        };
  const buildMailSubject = (lang: "tr" | "en" | "de") =>
    lang === "en"
      ? `Offer - ${projectName || "Project"} - Ajans Köln`
      : lang === "de"
        ? `Angebot - ${projectName || "Projekt"} - Ajans Köln`
        : `Teklif - ${projectName || "Proje"} - Ajans Köln`;

  const buildMailMessage = (lang: "tr" | "en" | "de") => {
    if (lang === "en") {
      return [
        `Dear ${customerContact || "Sir/Madam"},`,
        "",
        `Please find attached our professional offer prepared for the project "${projectName || "Your Project"}".`,
        `This proposal has been prepared for ${customerCompany || "your company"} and is attached as a PDF.`,
        "Please note: Prices are currently stated without VAT.",
        "This offer is valid for 2 weeks from the offer date.",
        "",
        "If you need any revisions or have questions, we are happy to support you at any time.",
        "",
        "Best regards,",
        "Ajans Köln",
        "Funda Ekiz",
        "Tel: +49 172 7532501",
        "Mail: ajanskoeln@gmail.com",
      ].join("\n");
    }
    if (lang === "de") {
      return [
        `Sehr geehrte/r ${customerContact || "Damen und Herren"},`,
        "",
        `anbei senden wir Ihnen unser professionelles Angebot für das Projekt "${projectName || "Ihr Projekt"}" als PDF.`,
        `Das Angebot wurde für ${customerCompany || "Ihr Unternehmen"} vorbereitet.`,
        "Hinweis: Die Preise verstehen sich derzeit ohne MwSt.",
        "Dieses Angebot ist ab Angebotsdatum 2 Wochen gültig.",
        "",
        "Für Rückfragen oder Anpassungen stehen wir Ihnen jederzeit gerne zur Verfügung.",
        "",
        "Mit freundlichen Grüßen",
        "Ajans Köln",
        "Funda Ekiz",
        "Tel: +49 172 7532501",
        "Mail: ajanskoeln@gmail.com",
      ].join("\n");
    }
    return [
      `Sayın ${customerContact || "Yetkili"},`,
      "",
      `"${projectName || "Projeniz"}" projesi için hazırladığımız profesyonel teklifimizi ekte PDF olarak iletiyoruz.`,
      `${customerCompany || "Firmanız"} için en uygun kapsam ve detaylar dikkate alınarak hazırlanmıştır.`,
      "Bilginize: Fiyatlar KDV (vergi) dahil olarak hesaplanmıştır.",
      "Bu teklif, teklif tarihinden itibaren 2 hafta geçerlidir.",
      "",
      "Sorularınız, revize talepleriniz veya ek ihtiyaçlarınız için her zaman memnuniyetle destek oluruz.",
      "",
      "Saygılarımızla",
      "Ajans Köln",
      "Funda Ekiz",
      "Tel: +49 172 7532501",
      "Mail: ajanskoeln@gmail.com",
    ].join("\n");
  };

  const initialMessage = buildMailMessage(mailLanguage);

  const initialSubject = buildMailSubject(mailLanguage);

  const [open, setOpen] = useState(false);
  const [to, setTo] = useState(defaultTo);
  const [subject, setSubject] = useState(initialSubject || txt.subject);
  const [message, setMessage] = useState(initialMessage);
  const [sending, setSending] = useState(false);

  async function sendMail() {
    setSending(true);
    const res = await fetch("/api/send-offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, subject, message, offerId, mailLanguage }),
    });
    setSending(false);
    const data = await res.json().catch(() => null);
    if (!res.ok || !data?.ok) {
      toast.error(txt.fail);
      return;
    }
    if (data.warning) {
      toast.warning(data.warning);
    }
    toast.success(txt.ok);
    setOpen(false);
    router.refresh();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button type="button" />}>{txt.trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{txt.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="text-sm font-medium">{txt.language}</div>
            <Select
              value={mailLanguage}
              onValueChange={(value) => {
                const next = value === "en" || value === "de" ? value : "tr";
                setMailLanguage(next);
                setSubject(buildMailSubject(next));
                setMessage(buildMailMessage(next));
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tr">Türkçe</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input placeholder={txt.to} value={to} onChange={(e) => setTo(e.target.value)} />
          <Input value={subject} onChange={(e) => setSubject(e.target.value)} />
          <Textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              {txt.close}
            </Button>
            <Button onClick={sendMail} disabled={sending || !to || !subject || !message}>
              {sending ? txt.sending : txt.send}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
