"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n-context";
import { withBasePath } from "@/lib/with-base-path";

export function CustomerDeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const { locale } = useI18n();
  const txt =
    locale === "de"
      ? {
          confirm: "Kunden wirklich löschen?",
          fail: "Löschen fehlgeschlagen",
          ok: "Kunde gelöscht",
          label: "Kunde löschen",
        }
      : {
          confirm: "Müşteri silinsin mi?",
          fail: "Silme işlemi başarısız",
          ok: "Müşteri silindi",
          label: "Müşteriyi sil",
        };

  async function onDelete() {
    const ok = window.confirm(txt.confirm);
    if (!ok) return;
    const res = await fetch(withBasePath(`/api/customers/${id}`), { method: "DELETE" });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      toast.error(data.error ?? txt.fail);
      return;
    }
    toast.success(txt.ok);
    router.push("/customers");
    router.refresh();
  }

  return (
    <Button variant="destructive" onClick={onDelete}>
      {txt.label}
    </Button>
  );
}
