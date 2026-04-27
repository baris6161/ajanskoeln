import { Users, UtensilsCrossed, Tent } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";

const icons = [Users, UtensilsCrossed, Tent];

export default function Services() {
  const { lang } = useLang();
  return (
    <section id="hizmetler" className="bg-primary text-primary-foreground py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" aria-hidden />

      <div className="container-tight relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {tr(t.services.label, lang)}
          </p>
          <h2
            className="reveal mt-4 font-display font-semibold text-balance leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", transitionDelay: "100ms" }}
          >
            {tr(t.services.title, lang)}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:gap-8 md:grid-cols-3">
          {t.services.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <article
                key={i}
                className="reveal group relative rounded-2xl border border-background/10 bg-background/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-background/10 hover:border-accent/40 hover:shadow-[var(--shadow-elegant)]"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">
                  {tr(card.title, lang)}
                </h3>
                <p className="text-primary-foreground/75 leading-relaxed text-[15px]">
                  {tr(card.desc, lang)}
                </p>
                <div className="mt-6 h-px w-12 bg-accent/60 transition-all duration-300 group-hover:w-24" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
