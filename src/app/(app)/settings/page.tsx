import { SmtpForm } from "@/components/settings/smtp-form";
import { listSettings } from "@/lib/queries/settings";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SettingsEditor } from "@/components/settings/settings-editor";
import { getServerLocale } from "@/lib/locale";

export default async function SettingsPage() {
  const locale = await getServerLocale();
  const settings = await listSettings();
  const txt =
    locale === "de"
      ? { title: "Einstellungen", company: "Firmendaten" }
      : { title: "Ayarlar", company: "Firma Bilgileri" };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">{txt.title}</h1>
      <SmtpForm />
      <Card>
        <CardHeader>
          <CardTitle>{txt.company}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <SettingsEditor initial={settings} />
        </CardContent>
      </Card>
    </div>
  );
}
