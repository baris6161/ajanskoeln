import { createClient } from "@/lib/supabase/server";
import { Customer } from "@/lib/types";

export async function listCustomers(search = "") {
  const supabase = await createClient();
  let query = supabase
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false });

  if (search.trim()) {
    query = query.or(`firma.ilike.%${search}%,yetkili.ilike.%${search}%`);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return (data ?? []) as Customer[];
}

export async function getCustomerById(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("customers").select("*").eq("id", id).single();
  if (error) return null;
  return data as Customer;
}

export async function createCustomer(input: Omit<Customer, "id" | "created_at">) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("customers")
    .insert(input)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return data as Customer;
}

export async function updateCustomer(
  id: string,
  input: Partial<Omit<Customer, "id" | "created_at">>,
) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("customers")
    .update(input)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(error.message);
  return data as Customer;
}

export async function deleteCustomer(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("customers").delete().eq("id", id);
  if (error) throw new Error(error.message);
}
