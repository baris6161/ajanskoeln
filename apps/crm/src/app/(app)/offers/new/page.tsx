import { OfferWizard } from "@/components/offers/offer-wizard";
import { listCustomers } from "@/lib/queries/customers";
import { BackButton } from "@/components/common/back-button";
import { getServerLocale } from "@/lib/locale";

export default async function NewOfferPage() {
  const locale = await getServerLocale();
  const customers = await listCustomers();
  return (
    <div className="space-y-4">
      <BackButton fallbackHref="/offers" label={locale === "de" ? "Zurück" : "Geri dön"} />
      <h1 className="text-3xl font-semibold">
        {locale === "de" ? "Neues Angebot" : "Yeni Teklif"}
      </h1>
      <OfferWizard customers={customers} />
    </div>
  );
}
