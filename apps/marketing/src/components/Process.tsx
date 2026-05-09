import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";

export default function Process() {
  const { lang } = useLang();
  return (
    <section id="ablauf" className="bg-primary text-primary-foreground py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" aria-hidden />

      <div className="container-tight relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {tr(t.process.label, lang)}
          </p>
          <h2
            className="reveal mt-4 font-display font-semibold text-balance leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", transitionDelay: "100ms" }}
          >
            {tr(t.process.title, lang)}
          </h2>
          <p
            className="reveal mt-5 text-primary-foreground/75 text-[15px] leading-relaxed"
            style={{ transitionDelay: "160ms" }}
          >
            {tr(t.process.sub, lang)}
          </p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-start gap-0 md:gap-4">
          {t.process.steps.map((step, i) => (
            <div
              key={i}
              className="reveal relative flex md:flex-col flex-1 gap-5 md:gap-4 md:text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line between steps */}
              {i < t.process.steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-px bg-accent/30" aria-hidden />
              )}
              {/* Step number */}
              <div className="shrink-0 flex h-12 w-12 md:mx-auto items-center justify-center rounded-full border-2 border-accent/60 bg-accent/10 text-accent font-display font-bold text-lg z-10">
                {i + 1}
              </div>
              <div className="pb-8 md:pb-0">
                <h3 className="font-display text-lg font-semibold mb-2">
                  {tr(step.title, lang)}
                </h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {tr(step.desc, lang)}
                </p>
              </div>
              {/* Mobile connector */}
              {i < t.process.steps.length - 1 && (
                <div className="md:hidden absolute left-6 top-12 bottom-0 w-px bg-accent/30" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
