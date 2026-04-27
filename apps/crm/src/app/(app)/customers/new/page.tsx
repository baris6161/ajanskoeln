import { CustomerForm } from "@/components/customers/customer-form";
import { BackButton } from "@/components/common/back-button";
import { getServerLocale } from "@/lib/locale";

export default async function NewCustomerPage() {
  const locale = await getServerLocale();
  return (
    <div className="space-y-4">
      <BackButton fallbackHref="/customers" label={locale === "de" ? "Zurück" : "Geri dön"} />
      <h1 className="text-3xl font-semibold">{locale === "de" ? "Neuer Kunde" : "Yeni Müşteri"}</h1>
      <CustomerForm />
    </div>
  );
}
