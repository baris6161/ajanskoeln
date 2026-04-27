import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDashboardStats } from "@/lib/queries/dashboard";
import { getServerLocale } from "@/lib/locale";
import { t } from "@/lib/i18n";
import Link from "next/link";

export default async function DashboardPage() {
  const locale = await getServerLocale();
  const tx = t(locale);
  const stats = await getDashboardStats();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">{tx.dashboard.title}</h1>
        <p className="text-muted-foreground">{tx.dashboard.subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/customers" className="block">
          <Card className="transition hover:bg-secondary/40">
            <CardHeader>
              <CardTitle>{tx.dashboard.customers}</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold">{stats.customerCount}</CardContent>
          </Card>
        </Link>
        <Link href="/offers" className="block">
          <Card className="transition hover:bg-secondary/40">
            <CardHeader>
              <CardTitle>{tx.dashboard.offers}</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-bold">{stats.offerCount}</CardContent>
          </Card>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{tx.dashboard.recent}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {stats.recentOffers.map((offer) => (
            <Link
              key={offer.id}
              href={`/offers/${offer.id}`}
              className="block rounded-lg border border-border p-3 hover:bg-secondary"
            >
              <p className="font-medium">{offer.offer_number}</p>
              <p className="text-sm text-muted-foreground">{offer.projekt}</p>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
