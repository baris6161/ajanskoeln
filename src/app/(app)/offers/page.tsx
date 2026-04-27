import Link from "next/link";
import { listOffers } from "@/lib/queries/offers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getServerLocale } from "@/lib/locale";
import { getOfferStatusLabel } from "@/lib/status-label";

export default async function OffersPage() {
  const locale = await getServerLocale();
  const offers = await listOffers();
  const txt =
    locale === "de"
      ? { title: "Angebote", new: "Neues Angebot", list: "Angebotsliste" }
      : { title: "Teklifler", new: "Yeni Teklif", list: "Teklif Listesi" };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">{txt.title}</h1>
        <Link href="/offers/new">
          <Button>{txt.new}</Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{txt.list}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              href={`/offers/${offer.id}`}
              className="flex items-center justify-between rounded-lg border border-border p-3"
            >
              <div>
                <p className="font-medium">{offer.offer_number}</p>
                <p className="text-sm text-muted-foreground">{offer.projekt}</p>
                {offer.customer_id ? null : (
                  <p className="text-xs text-amber-700">
                    {locale === "de" ? "Kunde wurde gelöscht" : "Müşteri silinmiş"}
                  </p>
                )}
              </div>
              <Badge>{getOfferStatusLabel(offer.status, locale)}</Badge>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
