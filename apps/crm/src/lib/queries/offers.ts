import { createClient } from "@/lib/supabase/server";
import { Offer, OfferStatus } from "@/lib/types";

export async function listOffers() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("offers")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []) as Offer[];
}

export async function getOfferById(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("offers").select("*").eq("id", id).single();
  if (error) return null;
  return data as Offer;
}

export async function createOffer(
  input: Omit<Offer, "id" | "created_at" | "sent_at" | "sent_language">,
) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("offers").insert(input).select("*").single();
  if (error) throw new Error(error.message);
  return data as Offer;
}

export async function updateOffer(
  id: string,
  input: Partial<Omit<Offer, "id" | "created_at" | "sent_at" | "sent_language">>,
) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("offers")
    .update(input)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return data as Offer;
}

export async function updateOfferStatus(
  id: string,
  status: OfferStatus,
  sentLanguage?: "tr" | "en" | "de",
) {
  const supabase = await createClient();
  const payload: { status: OfferStatus; sent_at?: string; sent_language?: "tr" | "en" | "de" | null } = {
    status,
  };
  if (status === "gesendet") {
    payload.sent_at = new Date().toISOString();
    payload.sent_language = sentLanguage ?? null;
  }
  const { data, error } = await supabase
    .from("offers")
    .update(payload)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return data as Offer;
}

export async function deleteOffer(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("offers").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function nextOfferNumber() {
  const supabase = await createClient();
  const year = new Date().getFullYear();
  const prefix = `AK-${year}-`;
  const { data, error } = await supabase
    .from("offers")
    .select("offer_number")
    .ilike("offer_number", `${prefix}%`)
    .order("created_at", { ascending: false })
    .limit(1);
  if (error) throw new Error(error.message);

  const last = data?.[0]?.offer_number;
  const lastNumber = last ? Number(last.split("-")[2]) : 0;
  const next = String(lastNumber + 1).padStart(3, "0");
  return `${prefix}${next}`;
}
