import { cookies } from "next/headers";
import { Locale } from "@/lib/i18n";

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get("locale")?.value;
  if (value === "de") return "de";
  return "tr";
}
