"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export type ServiceRow = {
  hizmet: string;
  gun: number;
  adet: number;
  fiyat: number;
};

type Props = {
  rows: ServiceRow[];
  onChange: (rows: ServiceRow[]) => void;
  disabled?: boolean;
};

export function ServicesTable({ rows, onChange, disabled = false }: Props) {
  const { locale } = useI18n();
  const txt =
    locale === "de"
      ? { service: "Leistung", day: "Tage", qty: "Menge", price: "Preis (EUR)", del: "Löschen", add: "+ Zeile" }
      : { service: "Hizmet", day: "Gün", qty: "Adet", price: "Fiyat (EUR)", del: "Sil", add: "+ Satır" };

  const update = (index: number, key: keyof ServiceRow, value: string) => {
    const next = [...rows];
    next[index] = { ...next[index], [key]: key === "hizmet" ? value : Number(value) };
    onChange(next);
  };

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-muted-foreground">
        <div className="col-span-5">{txt.service}</div>
        <div className="col-span-2 text-center">{txt.day}</div>
        <div className="col-span-2 text-center">{txt.qty}</div>
        <div className="col-span-2 text-center">{txt.price}</div>
        <div className="col-span-1 text-center">{txt.del}</div>
      </div>
      {rows.map((row, index) => (
        <div key={index} className="grid grid-cols-12 gap-2">
          <Input
            className="col-span-5"
            placeholder="Hizmet"
            value={row.hizmet}
            disabled={disabled}
            onChange={(e) => update(index, "hizmet", e.target.value)}
          />
          <Input
            className="col-span-2"
            type="number"
            value={row.gun}
            disabled={disabled}
            onChange={(e) => update(index, "gun", e.target.value)}
          />
          <Input
            className="col-span-2"
            type="number"
            value={row.adet}
            disabled={disabled}
            onChange={(e) => update(index, "adet", e.target.value)}
          />
          <Input
            className="col-span-2"
            type="number"
            value={row.fiyat}
            disabled={disabled}
            onChange={(e) => update(index, "fiyat", e.target.value)}
          />
          <Button
            variant="outline"
            className="col-span-1"
            disabled={disabled}
            onClick={() => onChange(rows.filter((_, i) => i !== index))}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button
        variant="secondary"
        disabled={disabled}
        onClick={() => onChange([...rows, { hizmet: "", gun: 1, adet: 1, fiyat: 0 }])}
      >
        {txt.add}
      </Button>
    </div>
  );
}
