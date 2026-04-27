"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n-context";

export function SmtpForm() {
  const router = useRouter();
  const { locale } = useI18n();
  const txt =
    locale === "de"
      ? {
          email: "Gmail-Adresse",
          password: "App-Passwort",
          save: "Speichern",
          saving: "Wird gespeichert...",
          test: "Testen",
          testing: "Wird getestet...",
          reset: "Zurücksetzen",
          resetConfirm:
            "Möchten Sie die gespeicherten Gmail/SMTP-Daten wirklich löschen? Dieser Schritt kann nicht rückgängig gemacht werden.",
          resetting: "Wird zurückgesetzt...",
          resetOk: "Gmail/SMTP-Daten wurden gelöscht",
          resetFail: "Zurücksetzen fehlgeschlagen",
          saveOk: "SMTP-Konfiguration gespeichert",
          saveFail: "Speichern fehlgeschlagen",
          testOk: "SMTP-Verbindung erfolgreich",
          testFail: "SMTP-Test fehlgeschlagen",
        }
      : {
          email: "Gmail Adresi",
          password: "App Şifresi",
          save: "Kaydet",
          saving: "Kaydediliyor...",
          test: "Test et",
          testing: "Test ediliyor...",
          reset: "Sıfırla",
          resetConfirm:
            "Kayıtlı Gmail/SMTP bilgilerini silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.",
          resetting: "Sıfırlanıyor...",
          resetOk: "Gmail/SMTP bilgileri silindi",
          resetFail: "Sıfırlama başarısız",
          saveOk: "SMTP ayarları kaydedildi",
          saveFail: "Kaydetme başarısız",
          testOk: "SMTP bağlantısı başarılı",
          testFail: "SMTP testi başarısız",
        };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [testing, setTesting] = useState(false);
  const [resetting, setResetting] = useState(false);

  async function saveSmtp() {
    setLoading(true);
    const res = await fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ smtpEmail: email, smtpPassword: password }),
    });
    setLoading(false);
    if (!res.ok) {
      toast.error(txt.saveFail);
      return;
    }
    toast.success(txt.saveOk);
    router.refresh();
  }

  async function testSmtp() {
    setTesting(true);
    const res = await fetch("/api/settings/test-smtp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ smtpEmail: email, smtpPassword: password }),
    });
    setTesting(false);

    if (!res.ok) {
      toast.error(txt.testFail);
      return;
    }
    toast.success(txt.testOk);
  }

  async function resetSmtp() {
    const ok = window.confirm(txt.resetConfirm);
    if (!ok) return;
    setResetting(true);
    const res = await fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resetSmtp: true }),
    });
    setResetting(false);
    if (!res.ok) {
      toast.error(txt.resetFail);
      return;
    }
    setEmail("");
    setPassword("");
    toast.success(txt.resetOk);
    router.refresh();
  }

  return (
    <Card>
      <CardContent className="space-y-3 pt-6">
        <div className="space-y-2">
          <Label>{txt.email}</Label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>{txt.password}</Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={testSmtp} disabled={testing || !email || !password}>
            {testing ? txt.testing : txt.test}
          </Button>
          <Button variant="outline" onClick={resetSmtp} disabled={resetting}>
            {resetting ? txt.resetting : txt.reset}
          </Button>
          <Button onClick={saveSmtp} disabled={loading || !email || !password}>
            {loading ? txt.saving : txt.save}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
