import { Quote } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";

const logos = ["Anadolu", "Mercator", "Bosphorus", "Messe Expo", "Rheinhaus", "Levante", "NordTech", "Marmara"];

export default function References() {
  const { lang } = useLang();
  return (
    <section id="referanslar" className="bg-background py-24 md:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-accent">{tr(t.refs.label, lang)}</p>
          <h2 className="reveal mt-4 font-display font-semibold text-primary text-balance leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", transitionDelay: "100ms" }}>
            {tr(t.refs.title, lang)}
          </h2>
        </div>

        {/* Marquee */}
        <div className="reveal mt-14 overflow-hidden relative" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
          <div className="flex w-max animate-marquee">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex h-16 w-44 items-center justify-center mx-4 rounded-lg border border-border bg-card grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <span className="font-display text-lg font-semibold text-primary tracking-wide">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.refs.testimonials.map((q, i) => (
            <figure
              key={i}
              className="reveal relative rounded-2xl bg-card p-8 border border-border shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Quote className="absolute -top-4 left-6 h-10 w-10 text-accent fill-accent" />
              <blockquote className="text-foreground/80 leading-relaxed text-[15px] mt-2">
                {tr(q.quote, lang)}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <p className="font-display font-semibold text-primary">{q.name}</p>
                <p className="text-sm text-muted-foreground">{q.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
