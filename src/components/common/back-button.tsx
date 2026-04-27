"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Props = {
  fallbackHref: string;
  label?: string;
};

export function BackButton({ fallbackHref, label = "Geri dön" }: Props) {
  const router = useRouter();

  function onBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }
    router.push(fallbackHref);
  }

  return (
    <Button type="button" variant="outline" onClick={onBack} className="inline-flex items-center gap-2">
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Button>
  );
}
