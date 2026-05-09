import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";

export default function Testimonials() {
  const { lang } = useLang();
  return (
    <section className="bg-secondary/40 py-24 md:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {tr(t.testimonials.label, lang)}
          </p>
          <h2
            className="reveal mt-4 font-display font-semibold text-primary text-balance leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", transitionDelay: "100ms" }}
          >
            {tr(t.testimonials.title, lang)}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <figure
              key={i}
              className="reveal rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-4xl text-accent/40 font-display leading-none mb-4" aria-hidden>"</span>
              <blockquote className="flex-1 text-foreground/85 leading-relaxed text-[15px] italic">
                {tr(item.quote, lang)}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <p className="font-semibold text-primary text-sm">{tr(item.author, lang)}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{tr(item.company, lang)}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
