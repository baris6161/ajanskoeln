import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";
import heroImg from "@/assets/hero-1.jpg";

export default function Hero() {
  const { lang } = useLang();
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const onScroll = () => setParallax(Math.min(window.scrollY * 0.3, 200));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-dark-section">
      {/* Single hero image with parallax */}
      <div className="absolute inset-0" style={{ transform: `translate3d(0, ${parallax}px, 0) scale(1.08)` }}>
        <img
          src={heroImg}
          alt={tr(t.hero.slideAlts[0]!, lang)}
          width={1920}
          height={1280}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-dark-section/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-section/80 via-transparent to-dark-section/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container-tight w-full">
          <div className="max-w-3xl">
            <p className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-background/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {tr(t.hero.eyebrow, lang)}
            </p>
            <h1
              className="reveal font-display font-semibold text-background text-balance leading-[1.05]"
              style={{ fontSize: "clamp(2.4rem, 6vw, 4.75rem)", transitionDelay: "120ms" }}
            >
              {tr(t.hero.title, lang)}
            </h1>
            <p
              className="reveal mt-6 max-w-2xl text-background/85 text-balance"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", transitionDelay: "240ms" }}
            >
              {tr(t.hero.sub, lang)}
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4" style={{ transitionDelay: "360ms" }}>
              <button onClick={() => scrollTo("#hizmetler")} className="btn-primary group">
                {tr(t.hero.cta1, lang)}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => scrollTo("#iletisim")} className="btn-outline">
                {tr(t.hero.cta2, lang)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
