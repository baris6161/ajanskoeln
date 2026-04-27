import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [hero1, hero2, hero3, hero4];

export default function Hero() {
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setParallax(Math.min(window.scrollY * 0.3, 200));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-dark-section">
      {/* Slideshow */}
      <div className="absolute inset-0" style={{ transform: `translate3d(0, ${parallax}px, 0) scale(1.08)` }}>
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            width={1920}
            height={1280}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            style={{ transitionDuration: "1500ms" }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity ease-out ${active === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
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

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-500 ${active === i ? "w-10 bg-accent" : "w-5 bg-background/40 hover:bg-background/70"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
