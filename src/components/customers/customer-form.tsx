"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Customer } from "@/lib/types";
import { useI18n } from "@/lib/i18n-context";

type Props = {
  initial?: Partial<Customer>;
};

export function CustomerForm({ initial }: Props) {
  const router = useRouter();
  const { locale } = useI18n();
  const txt =
    locale === "de"
      ? {
          company: "Firma",
          contact: "Ansprechpartner",
          address: "Adresse",
          phone: "Telefon",
          language: "Sprache",
          notes: "Notizen",
          save: "Speichern",
          saving: "Wird gespeichert...",
          fail: "Speichern fehlgeschlagen",
          okCreate: "Kunde erstellt",
          okUpdate: "Kunde aktualisiert",
        }
      : {
          company: "Şirket",
          contact: "Yetkili",
          address: "Adres",
          phone: "Tel",
          language: "Dil",
          notes: "Notlar",
          save: "Kaydet",
          saving: "Kaydediliyor...",
          fail: "Kaydetme başarısız",
          okCreate: "Müşteri eklendi",
          okUpdate: "Müşteri güncellendi",
        };
  const [firma, setFirma] = useState(initial?.firma ?? "");
  const [yetkili, setYetkili] = useState(initial?.yetkili ?? "");
  const [adres, setAdres] = useState(initial?.adres ?? "");
  const [tel, setTel] = useState(initial?.tel ?? "");
  const [email, setEmail] = useState(initial?.email ?? "");
  const [language, setLanguage] = useState<"tr" | "de" | "en">(initial?.language ?? "tr");
  const [notizen, setNotizen] = useState(initial?.notizen ?? "");
  const [loading, setLoading] = useState(false);

  async function saveCustomer() {
    setLoading(true);
    const payload = { firma, yetkili, adres, tel, email, language, notizen };
    const isEdit = Boolean(initial?.id);
    const url = isEdit ? `/api/customers/${initial?.id}` : "/api/customers";
    const method = isEdit ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      toast.error(data.error ?? txt.fail);
      return;
    }

    const data = await res.json();
    toast.success(isEdit ? txt.okUpdate : txt.okCreate);
    router.push(isEdit ? `/customers/${data.id}` : "/customers");
    router.refresh();
  }

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="space-y-2">
          <Label>{txt.company}</Label>
          <Input value={firma} onChange={(e) => setFirma(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>{txt.contact}</Label>
          <Input value={yetkili} onChange={(e) => setYetkili(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>{txt.address}</Label>
          <Textarea value={adres} onChange={(e) => setAdres(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>{txt.phone}</Label>
          <Input value={tel} onChange={(e) => setTel(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>E-Mail</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>{txt.language}</Label>
          <Select
            value={language}
            onValueChange={(value) => setLanguage(value === "de" || value === "en" ? value : "tr")}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tr">TR</SelectItem>
              <SelectItem value="de">DE</SelectItem>
              <SelectItem value="en">EN</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>{txt.notes}</Label>
          <Textarea value={notizen ?? ""} onChange={(e) => setNotizen(e.target.value)} />
        </div>
        <Button
          onClick={saveCustomer}
          disabled={!firma.trim() || !yetkili.trim() || loading}
        >
          {loading ? txt.saving : txt.save}
        </Button>
      </CardContent>
    </Card>
  );
}
