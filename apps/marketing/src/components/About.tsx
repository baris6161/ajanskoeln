import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";
import portrait from "@/assets/about-portrait.jpg";

export default function About() {
  const { lang } = useLang();

  return (
    <section id="hakkimizda" className="bg-background py-24 md:py-32">
      <div className="container-tight">
        <div className="grid gap-12 md:gap-20 md:grid-cols-12 items-center">
          <div className="reveal md:col-span-5">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-accent/40" aria-hidden />
              <img
                src={portrait}
                alt={tr(t.about.portraitAlt, lang)}
                width={900}
                height={1100}
                loading="lazy"
                className="relative rounded-[2rem] object-cover w-full aspect-[4/5] shadow-[var(--shadow-elegant)]"
              />
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-accent px-5 py-3 text-accent-foreground shadow-[var(--shadow-elegant)] hidden sm:block">
                <p className="font-display text-sm font-semibold leading-tight tracking-wide">{tr(t.about.badge, lang)}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-accent">{tr(t.about.label, lang)}</p>
            <h2
              className="reveal mt-4 font-display font-semibold text-primary text-balance leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", transitionDelay: "100ms" }}
            >
              {tr(t.about.title, lang)}
            </h2>
            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
              <p className="reveal" style={{ transitionDelay: "180ms" }}>{tr(t.about.p1, lang)}</p>
              <p className="reveal" style={{ transitionDelay: "260ms" }}>{tr(t.about.p2, lang)}</p>
              <p className="reveal" style={{ transitionDelay: "340ms" }}>{tr(t.about.p3, lang)}</p>
            </div>

            <div className="reveal mt-12 grid grid-cols-3 gap-4 md:gap-8 border-t border-border pt-10" style={{ transitionDelay: "420ms" }}>
              {t.about.highlights.map((s) => (
                <div key={tr(s.label, lang)}>
                  <p className="font-display font-semibold text-primary" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>{tr(s.value, lang)}</p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground tracking-wide">{tr(s.label, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
