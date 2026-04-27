import { createClient } from "@/lib/supabase/server";
import { decryptValue, encryptValue } from "@/lib/security/encryption";

export type SettingItem = { key: string; value: string };

export async function listSettings() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("settings")
    .select("key,value")
    .order("key", { ascending: true });
  if (error) throw new Error(error.message);
  return (data ?? []) as SettingItem[];
}

export async function upsertSettings(items: SettingItem[]) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("settings")
    .upsert(items, { onConflict: "key", ignoreDuplicates: false });
  if (error) throw new Error(error.message);
}

export async function saveSmtpSettings(email: string, appPassword: string) {
  await upsertSettings([
    { key: "smtp_email", value: email },
    { key: "smtp_password_encrypted", value: encryptValue(appPassword) },
  ]);
}

export async function resetSmtpSettings() {
  const supabase = await createClient();
  const { error } = await supabase
    .from("settings")
    .delete()
    .in("key", ["smtp_email", "smtp_password_encrypted"]);
  if (error) throw new Error(error.message);
}

export async function loadSmtpSettings() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("settings")
    .select("key,value")
    .in("key", ["smtp_email", "smtp_password_encrypted"]);
  if (error) throw new Error(error.message);

  const email = data?.find((v) => v.key === "smtp_email")?.value ?? "";
  const encrypted = data?.find((v) => v.key === "smtp_password_encrypted")?.value ?? "";
  return {
    email,
    password: encrypted ? decryptValue(encrypted) : "",
  };
}
