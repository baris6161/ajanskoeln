import { type ReactNode, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Props = { title: string; children: ReactNode };

export default function LegalLayout({ title, children }: Props) {
  useEffect(() => {
    document.title = `${title} — Ajans Köln`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="container-tight flex-1 pt-28 pb-16 md:pt-32">
        <article className="mx-auto max-w-3xl space-y-6 text-[15px] leading-relaxed text-muted-foreground">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-primary md:text-4xl">{title}</h1>
          <div className="space-y-6 [&_h2]:mt-10 [&_h2]:scroll-mt-28 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:first:mt-0 [&_p]:text-pretty [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:text-accent [&_a]:underline-offset-2 hover:[&_a]:text-primary">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
