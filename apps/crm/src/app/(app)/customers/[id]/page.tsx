import { notFound } from "next/navigation";
import { getCustomerById } from "@/lib/queries/customers";
import { listOffers } from "@/lib/queries/offers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomerForm } from "@/components/customers/customer-form";
import { CustomerDeleteButton } from "@/components/customers/customer-actions";
import { BackButton } from "@/components/common/back-button";
import Link from "next/link";
import { getServerLocale } from "@/lib/locale";

export default async function CustomerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const locale = await getServerLocale();
  const { id } = await params;
  const customer = await getCustomerById(id);
  if (!customer) return notFound();
  const offers = (await listOffers()).filter((o) => o.customer_id === id);

  return (
    <div className="space-y-6">
      <BackButton fallbackHref="/customers" label={locale === "de" ? "Zurück" : "Geri dön"} />
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-3xl font-semibold">{customer.firma}</h1>
        <CustomerDeleteButton id={customer.id} />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{locale === "de" ? "Kundendaten" : "Müşteri Bilgileri"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm">
          <p>{customer.yetkili}</p>
          <p>{customer.email}</p>
          <p>{customer.tel}</p>
          <p>{customer.adres}</p>
        </CardContent>
      </Card>
      <CustomerForm initial={customer} />
      <Card>
        <CardHeader>
          <CardTitle>{locale === "de" ? "Angebote" : "Teklifler"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              href={`/offers/${offer.id}`}
              className="block rounded border border-border p-3 hover:bg-secondary"
            >
              {offer.offer_number} - {offer.projekt}
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
