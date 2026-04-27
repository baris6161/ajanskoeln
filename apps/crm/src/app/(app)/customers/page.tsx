import Link from "next/link";
import { listCustomers } from "@/lib/queries/customers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getServerLocale } from "@/lib/locale";

export default async function CustomersPage() {
  const locale = await getServerLocale();
  const customers = await listCustomers();
  const txt =
    locale === "de"
      ? { title: "Kunden", new: "Neuer Kunde", list: "Kundenliste" }
      : { title: "Müşteriler", new: "Yeni Müşteri", list: "Müşteri Listesi" };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">{txt.title}</h1>
        <Link href="/customers/new">
          <Button>{txt.new}</Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{txt.list}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {customers.map((customer) => (
            <Link
              key={customer.id}
              href={`/customers/${customer.id}`}
              className="block rounded-lg border border-border p-3 hover:bg-secondary"
            >
              <p className="font-medium">{customer.firma}</p>
              <p className="text-sm text-muted-foreground">{customer.yetkili}</p>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
