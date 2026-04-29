import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";

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
          <p className="reveal mt-6 text-foreground/80 leading-relaxed text-[15px] text-pretty" style={{ transitionDelay: "160ms" }}>
            {tr(t.refs.intro, lang)}
          </p>
        </div>

        <ul className="reveal mx-auto mt-12 max-w-2xl list-disc space-y-3 pl-5 text-left text-foreground/85 text-[15px] leading-relaxed" style={{ transitionDelay: "220ms" }}>
          {t.refs.bullets.map((b) => (
            <li key={tr(b, lang)}>{tr(b, lang)}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
