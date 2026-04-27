"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ServicesTable, ServiceRow } from "@/components/offers/services-table";
import { toast } from "sonner";
import { Customer, Offer } from "@/lib/types";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n-context";
import { cn } from "@/lib/utils";

type Props = {
  customers: Customer[];
  initial?: Partial<Offer>;
};

export function OfferWizard({ customers, initial }: Props) {
  const router = useRouter();
  const { locale } = useI18n();
  const isLocked = initial?.status === "angenommen" || initial?.status === "abgelehnt";
  const txt =
    locale === "de"
      ? {
          title: "Neues Angebot",
          customer: "Kunde",
          chooseCustomer: "Kunde auswahlen",
          project: "Projektname",
          event: "Veranstaltung",
          startDate: "Startdatum",
          endDate: "Enddatum",
          location: "Ort",
          serviceItems: "Leistungspositionen",
          serviceHint: "Tragen Sie pro Zeile Leistung, Tage, Menge und Preis ein.",
          offerText: "Angebotstext",
          total: "Gesamt",
          saveDraft: "Entwurf speichern",
          saving: "Wird gespeichert...",
          saveFail: "Speichern fehlgeschlagen",
          okCreate: "Angebot erstellt",
          okUpdate: "Angebot aktualisiert",
          lockedTitle: "Bearbeitung gesperrt",
          lockedHint:
            "Dieses Angebot kann im aktuellen Status nicht bearbeitet werden. Bitte Status auf Entwurf oder Gesendet ändern, um es erneut zu bearbeiten.",
        }
      : {
          title: "Yeni Teklif",
          customer: "Müşteri",
          chooseCustomer: "Müşteri seçin",
          project: "Proje Adi",
          event: "Etkinlik",
          startDate: "Başlangıç Tarihi",
          endDate: "Bitiş Tarihi",
          location: "Konum",
          serviceItems: "Hizmet Kalemleri",
          serviceHint: "Her satırda hizmet tanımını ve ilgili gün, adet, fiyat değerlerini girin.",
          offerText: "Teklif Metni",
          total: "Toplam",
          saveDraft: "Taslağı kaydet",
          saving: "Kaydediliyor...",
          saveFail: "Kaydetme başarısız",
          okCreate: "Teklif oluşturuldu",
          okUpdate: "Teklif güncellendi",
          lockedTitle: "Düzenleme kilitli",
          lockedHint:
            "Bu teklif mevcut durumda düzenlenemez. Tekrar düzenlemek için durumu Taslak veya Gönderildi olarak değiştirin.",
        };
  const [customerId, setCustomerId] = useState(initial?.customer_id ?? "");
  const [projekt, setProjekt] = useState(initial?.projekt ?? "");
  const [eventName, setEventName] = useState(initial?.etkinlik ?? "");
  const [dateFrom, setDateFrom] = useState(initial?.tarih_von ?? "");
  const [dateTo, setDateTo] = useState(initial?.tarih_bis ?? "");
  const [location, setLocation] = useState(initial?.konum ?? "");
  const [rows, setRows] = useState<ServiceRow[]>(
    initial?.leistungen ?? [{ hizmet: "", gun: 1, adet: 1, fiyat: 0 }],
  );
  const [text, setText] = useState(initial?.angebotstext ?? "");
  const [loading, setLoading] = useState(false);
  const selectedCustomer = customers.find((c) => c.id === customerId);

  const total = useMemo(
    () => rows.reduce((acc, row) => acc + row.gun * row.adet * row.fiyat, 0),
    [rows],
  );

  async function saveOffer() {
    if (isLocked) {
      toast.info(txt.lockedHint);
      return;
    }
    setLoading(true);
    const payload = {
      customer_id: customerId,
      projekt,
      etkinlik: eventName,
      tarih_von: dateFrom,
      tarih_bis: dateTo,
      konum: location,
      angebotstext: text,
      leistungen: rows,
      gesamt: total,
      status: initial?.status ?? "entwurf",
    };
    const isEdit = Boolean(initial?.id);
    const offerId = initial?.id;
    const url = isEdit && offerId ? `/api/offers/${offerId}` : "/api/offers";
    const method = isEdit ? "PATCH" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      toast.error(data.error ?? txt.saveFail);
      return;
    }
    const data = await res.json();
    toast.success(isEdit ? txt.okUpdate : txt.okCreate);
    router.push(`/offers/${data.id}`);
    router.refresh();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{txt.title}</CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-6">
        {isLocked ? (
          <>
            <div className="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
              <p className="font-semibold">{txt.lockedTitle}</p>
              <p className="mt-1">{txt.lockedHint}</p>
            </div>
            <div
              className="absolute inset-0 z-10 cursor-not-allowed"
              onClick={() => toast.info(txt.lockedHint)}
            />
          </>
        ) : null}
        <div className="space-y-2">
          <Label>{txt.customer}</Label>
          <Select
            value={customerId}
            disabled={isLocked}
            onValueChange={(value) => setCustomerId(value ?? "")}
          >
            <SelectTrigger>
              <span className={cn("line-clamp-1", !selectedCustomer && "text-muted-foreground")}>
                {selectedCustomer?.firma ?? txt.chooseCustomer}
              </span>
            </SelectTrigger>
            <SelectContent>
              {customers.map((customer) => (
                <SelectItem key={customer.id} value={customer.id}>
                  {customer.firma}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>{txt.project}</Label>
            <Input disabled={isLocked} value={projekt} onChange={(e) => setProjekt(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>{txt.event}</Label>
            <Input disabled={isLocked} value={eventName} onChange={(e) => setEventName(e.target.value)} />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>{txt.startDate}</Label>
            <Input
              disabled={isLocked}
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>{txt.endDate}</Label>
            <Input
              disabled={isLocked}
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>{txt.location}</Label>
          <Input disabled={isLocked} value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label>{txt.serviceItems}</Label>
          <p className="text-xs text-muted-foreground">
            {txt.serviceHint}
          </p>
          <ServicesTable rows={rows} onChange={setRows} disabled={isLocked} />
        </div>

        <div className="space-y-2">
          <Label>{txt.offerText}</Label>
          <Textarea disabled={isLocked} rows={5} value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="rounded-lg border border-border bg-secondary/50 p-3 font-medium">
          {txt.total}: {total.toLocaleString(locale === "de" ? "de-DE" : "tr-TR")} EUR
        </div>
        <Button
          onClick={saveOffer}
          disabled={
            loading ||
            !customerId ||
            !projekt.trim() ||
            !eventName.trim() ||
            !dateFrom ||
            !dateTo ||
            !location.trim() ||
            isLocked
          }
        >
          {loading ? txt.saving : txt.saveDraft}
        </Button>
      </CardContent>
    </Card>
  );
}
