import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n-context";
import { Toaster } from "sonner";
import { getServerLocale } from "@/lib/locale";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajans Köln CRM",
  description: "Interne CRM-Web-App fur Ajans Köln",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localePromise = getServerLocale();

  return (
    <RootLayoutInner localePromise={localePromise}>{children}</RootLayoutInner>
  );
}

async function RootLayoutInner({
  children,
  localePromise,
}: {
  children: React.ReactNode;
  localePromise: Promise<"tr" | "de">;
}) {
  const locale = await localePromise;

  return (
    <html
      lang={locale}
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <I18nProvider initialLocale={locale}>
          {children}
          <Toaster richColors position="top-right" />
        </I18nProvider>
      </body>
    </html>
  );
}
