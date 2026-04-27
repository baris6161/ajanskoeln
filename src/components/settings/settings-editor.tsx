"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { SettingItem } from "@/lib/queries/settings";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n-context";

export function SettingsEditor({ initial }: { initial: SettingItem[] }) {
  const router = useRouter();
  const { locale } = useI18n();
  const txt =
    locale === "de"
      ? {
          add: "Feld hinzufügen",
          saveAll: "Alle speichern",
          saving: "Wird gespeichert...",
          saveOk: "Einstellungen gespeichert",
          saveFail: "Einstellungen konnten nicht gespeichert werden",
          keyPlaceholder: "Schlüssel",
          valuePlaceholder: "Wert",
        }
      : {
          add: "Alan ekle",
          saveAll: "Tümünü kaydet",
          saving: "Kaydediliyor...",
          saveOk: "Ayarlar kaydedildi",
          saveFail: "Ayarlar kaydedilemedi",
          keyPlaceholder: "Anahtar",
          valuePlaceholder: "Değer",
        };
  const [items, setItems] = useState<SettingItem[]>(initial);
  const [loading, setLoading] = useState(false);

  function updateValue(index: number, value: string) {
    const next = [...items];
    next[index] = { ...next[index], value };
    setItems(next);
  }

  function addItem() {
    setItems((prev) => [...prev, { key: "", value: "" }]);
  }

  async function saveAll() {
    setLoading(true);
    const filtered = items.filter((item) => item.key.trim());
    const res = await fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: filtered }),
    });
    setLoading(false);
    if (!res.ok) {
      toast.error(txt.saveFail);
      return;
    }
    toast.success(txt.saveOk);
    router.refresh();
  }

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={`${item.key}-${idx}`} className="grid grid-cols-2 gap-2">
          <Input
            placeholder={txt.keyPlaceholder}
            value={item.key}
            onChange={(e) => {
              const next = [...items];
              next[idx] = { ...next[idx], key: e.target.value };
              setItems(next);
            }}
          />
          <Input
            placeholder={txt.valuePlaceholder}
            value={item.value}
            onChange={(e) => updateValue(idx, e.target.value)}
          />
        </div>
      ))}
      <div className="flex gap-2">
        <Button variant="outline" onClick={addItem}>
          {txt.add}
        </Button>
        <Button onClick={saveAll} disabled={loading}>
          {loading ? txt.saving : txt.saveAll}
        </Button>
      </div>
    </div>
  );
}
