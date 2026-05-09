import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";

export default function FAQ() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {tr(t.faq.label, lang)}
          </p>
          <h2
            className="reveal mt-4 font-display font-semibold text-primary text-balance leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", transitionDelay: "100ms" }}
          >
            {tr(t.faq.title, lang)}
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="reveal rounded-2xl border border-border bg-card overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-primary leading-snug">
                    {tr(item.q, lang)}
                  </span>
                  <ChevronDown
                    className={`shrink-0 h-5 w-5 text-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] text-foreground/75 leading-relaxed">
                      {tr(item.a, lang)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
