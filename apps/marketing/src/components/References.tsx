import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";

const REF_LOGOS = [
  { src: "/ref/okt-trailer.png", wide: false },
  { src: "/ref/partner-symbol.png", wide: false },
  { src: "/ref/rentoya.png", wide: false },
  { src: "/ref/elit.png", wide: false },
  { src: "/ref/land-of-legends.png", wide: true },
] as const;

export default function References() {
  const { lang } = useLang();
  return (
    <section id="referanslar" className="bg-muted py-24 md:py-32">
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

        <div
          className="reveal mx-auto mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 md:gap-10 items-center justify-items-center"
          style={{ transitionDelay: "200ms" }}
        >
          {REF_LOGOS.map((logo, i) => {
            const altNode = t.refs.logoAlts[i];
            if (!altNode) return null;
            return (
              <div
                key={logo.src}
                className={`flex h-[72px] w-full items-center justify-center px-2 py-2 md:h-[88px] ${logo.wide ? "max-w-[260px]" : "max-w-[140px]"}`}
              >
                <img
                  src={logo.src}
                  alt={tr(altNode, lang)}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain mix-blend-multiply opacity-[0.85] transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
