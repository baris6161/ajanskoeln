import { Globe, MapPin, Zap, Award, User, Star, Calendar, Briefcase } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";

const icons = [Globe, MapPin, Zap, Award, User, Star, Calendar, Briefcase];

export default function USP() {
  const { lang } = useLang();
  return (
    <section id="warum-wir" className="bg-background py-24 md:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {tr(t.usp.label, lang)}
          </p>
          <h2
            className="reveal mt-4 font-display font-semibold text-primary text-balance leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", transitionDelay: "100ms" }}
          >
            {tr(t.usp.title, lang)}
          </h2>
          <p
            className="reveal mt-5 text-foreground/75 text-[15px] leading-relaxed"
            style={{ transitionDelay: "160ms" }}
          >
            {tr(t.usp.sub, lang)}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.usp.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <article
                key={i}
                className="reveal group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-elegant)]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  {tr(item.title, lang)}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {tr(item.desc, lang)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
