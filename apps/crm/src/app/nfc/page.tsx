import Link from "next/link";
import { Phone, Mail, Download, Building2 } from "lucide-react";
import { withBasePath } from "@/lib/with-base-path";

export default function NfcLandingPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4">
      <div className="mx-auto mt-16 w-full max-w-[380px]">
        <header className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
            <Building2 className="h-7 w-7 text-[#666666]" />
          </div>
          <h1 className="text-2xl font-bold leading-tight text-[#111111]">Ajans Köln</h1>
          <p className="mt-2 text-sm text-[#666666]">Fuar Organizasyonu</p>
        </header>

        <section className="mt-5 rounded-2xl bg-white p-5 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 shrink-0 text-[#666666]" />
              <p className="text-base text-[#111111]">Funda Ekiz</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#666666]" />
              <a href="tel:+491727532501" className="text-base text-[#111111]">
                +49 172 7532501
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-[#666666]" />
              <a href="mailto:ajanskoeln@gmail.com" className="text-base text-[#111111]">
                ajanskoeln@gmail.com
              </a>
            </div>
          </div>
        </section>

        <Link
          href={withBasePath("/api/nfc/vcf")}
          prefetch={false}
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#4a2a1f] px-5 py-3 text-base font-medium text-white transition hover:opacity-95 active:scale-[0.99]"
        >
          <Download className="h-4 w-4" />
          Kişiyi kaydet
        </Link>
      </div>
    </main>
  );
}
