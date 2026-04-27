import { createClient } from "@/lib/supabase/server";

export async function getDashboardStats() {
  const supabase = await createClient();
  const [{ count: customerCount, error: customerError }, { count: offerCount, error: offerError }, { data: recentOffers, error: recentError }] =
    await Promise.all([
      supabase.from("customers").select("*", { count: "exact", head: true }),
      supabase.from("offers").select("*", { count: "exact", head: true }),
      supabase.from("offers").select("*").order("created_at", { ascending: false }).limit(5),
    ]);

  if (customerError) throw new Error(customerError.message);
  if (offerError) throw new Error(offerError.message);
  if (recentError) throw new Error(recentError.message);

  return {
    customerCount: customerCount ?? 0,
    offerCount: offerCount ?? 0,
    recentOffers: recentOffers ?? [],
  };
}
