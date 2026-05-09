import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";

export default function Stats() {
  const { lang } = useLang();
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container-tight">
        <p className="reveal text-center text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-10">
          {tr(t.stats.label, lang)}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {t.stats.items.map((item, i) => (
            <div
              key={i}
              className="reveal text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p
                className="font-display font-bold text-accent leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                {tr(item.value, lang)}
              </p>
              <p className="mt-3 text-sm text-primary-foreground/70 tracking-wide">
                {tr(item.label, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
