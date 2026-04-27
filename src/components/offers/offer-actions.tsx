"use client";

import { useRouter } from "next/navigation";
import { OfferStatus } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { useI18n } from "@/lib/i18n-context";
import { getOfferStatusLabel } from "@/lib/status-label";
import { cn } from "@/lib/utils";

export function OfferDeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const { locale } = useI18n();
  const txt =
    locale === "de"
      ? {
          confirm: "Angebot wirklich löschen?",
          fail: "Löschen fehlgeschlagen",
          ok: "Angebot gelöscht",
          label: "Angebot löschen",
        }
      : {
          confirm: "Teklif silinsin mi?",
          fail: "Silme işlemi başarısız",
          ok: "Teklif silindi",
          label: "Teklifi sil",
        };

  async function onDelete() {
    const ok = window.confirm(txt.confirm);
    if (!ok) return;
    const res = await fetch(`/api/offers/${id}`, { method: "DELETE" });
    if (!res.ok) {
      toast.error(txt.fail);
      return;
    }
    toast.success(txt.ok);
    router.push("/offers");
    router.refresh();
  }

  return (
    <Button variant="destructive" onClick={onDelete}>
      {txt.label}
    </Button>
  );
}

export function OfferStatusSelect({
  id,
  status,
}: {
  id: string;
  status: OfferStatus;
}) {
  const router = useRouter();
  const { locale } = useI18n();
  const txt =
    locale === "de"
      ? { fail: "Status konnte nicht aktualisiert werden", ok: "Status aktualisiert" }
      : { fail: "Durum güncellenemedi", ok: "Durum güncellendi" };

  async function onChange(next: OfferStatus | null) {
    if (!next) return;
    const res = await fetch(`/api/offers/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    if (!res.ok) {
      toast.error(txt.fail);
      return;
    }
    toast.success(txt.ok);
    router.refresh();
  }

  return (
    <Select value={status} onValueChange={onChange}>
      <SelectTrigger className="w-[220px]">
        <span className={cn("line-clamp-1")}>{getOfferStatusLabel(status, locale)}</span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="entwurf">{getOfferStatusLabel("entwurf", locale)}</SelectItem>
        <SelectItem value="gesendet">{getOfferStatusLabel("gesendet", locale)}</SelectItem>
        <SelectItem value="angenommen">{getOfferStatusLabel("angenommen", locale)}</SelectItem>
        <SelectItem value="abgelehnt">{getOfferStatusLabel("abgelehnt", locale)}</SelectItem>
      </SelectContent>
    </Select>
  );
}
