import { notFound } from "next/navigation";
import { getOfferById } from "@/lib/queries/offers";
import { listCustomers } from "@/lib/queries/customers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OfferWizard } from "@/components/offers/offer-wizard";
import { OfferDeleteButton, OfferStatusSelect } from "@/components/offers/offer-actions";
import { BackButton } from "@/components/common/back-button";
import { getServerLocale } from "@/lib/locale";
import { SendOfferModal } from "@/components/offers/send-offer-modal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function formatDisplayDate(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
}

export default async function OfferDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const locale = await getServerLocale();
  const { id } = await params;
  const [offer, customers] = await Promise.all([getOfferById(id), listCustomers()]);
  if (!offer) return notFound();
  const selectedCustomer = customers.find((customer) => customer.id === offer.customer_id);
  const canViewPdf = Boolean(offer.sent_at) || offer.status === "gesendet";

  return (
    <div className="space-y-6">
      <BackButton fallbackHref="/offers" label={locale === "de" ? "Zurück" : "Geri dön"} />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-semibold">{offer.offer_number}</h1>
        <div className="flex items-center gap-2">
          {canViewPdf ? (
            <>
              <a
                href={`/api/offers/${offer.id}/pdf`}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                {locale === "de" ? "PDF ansehen" : "PDF görüntüle"}
              </a>
              <a
                href={`/api/offers/${offer.id}/pdf?download=1`}
                className={cn(buttonVariants({ variant: "ghost" }))}
              >
                {locale === "de" ? "PDF herunterladen" : "PDF indir"}
              </a>
            </>
          ) : null}
          <SendOfferModal
            defaultTo={selectedCustomer?.email ?? ""}
            offerId={offer.id}
            customerCompany={selectedCustomer?.firma ?? ""}
            customerContact={selectedCustomer?.yetkili ?? ""}
            projectName={offer.projekt}
            customerLanguage={selectedCustomer?.language ?? "tr"}
            initialMailLanguage={offer.sent_language ?? null}
          />
          <OfferStatusSelect id={offer.id} status={offer.status} />
          <OfferDeleteButton id={offer.id} />
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{offer.projekt}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {!offer.customer_id || !selectedCustomer ? (
            <div className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
              {locale === "de"
                ? "Dieser Kunde wurde gelöscht. Das Angebot bleibt erhalten."
                : "Bu müşteri silinmiş. Teklif kayıtlı kalır."}
            </div>
          ) : null}
          <p>{offer.etkinlik}</p>
          <p>
            {formatDisplayDate(offer.tarih_von)} {locale === "de" ? "bis" : "ile"}{" "}
            {formatDisplayDate(offer.tarih_bis)}
          </p>
          <p>{offer.konum}</p>
          <p className="font-semibold">
            {locale === "de" ? "Gesamt" : "Toplam"}: {offer.gesamt} EUR
          </p>
        </CardContent>
      </Card>
      <OfferWizard customers={customers} initial={offer} />
    </div>
  );
}
