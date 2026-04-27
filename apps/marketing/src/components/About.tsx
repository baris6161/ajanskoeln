import { useEffect, useRef, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";
import portrait from "@/assets/about-portrait.jpg";

function useCountUp(target: number, suffix = "", trigger: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, duration]);
  return `${val}${suffix}`;
}

export default function About() {
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const events = useCountUp(50, "+", inView);
  const langs = useCountUp(3, "", inView);
  const sat = useCountUp(100, "%", inView);

  return (
    <section id="hakkimizda" className="bg-background py-24 md:py-32">
      <div className="container-tight">
        <div className="grid gap-12 md:gap-20 md:grid-cols-12 items-center">
          {/* Image */}
          <div className="reveal md:col-span-5">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-accent/40" aria-hidden />
              <img
                src={portrait}
                alt=""
                width={900}
                height={1100}
                loading="lazy"
                className="relative rounded-[2rem] object-cover w-full aspect-[4/5] shadow-[var(--shadow-elegant)]"
              />
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-accent px-5 py-3 text-accent-foreground shadow-[var(--shadow-elegant)] hidden sm:block">
                <p className="font-display text-sm font-semibold leading-tight tracking-wide">Trusted Partner</p>
              </div>
            </div>
          </div>

          {/* Text */}
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

            {/* Stats */}
            <div ref={ref} className="reveal mt-12 grid grid-cols-3 gap-4 md:gap-8 border-t border-border pt-10" style={{ transitionDelay: "420ms" }}>
              {[
                { v: events, label: tr(t.about.stats.events, lang) },
                { v: langs,  label: tr(t.about.stats.languages, lang) },
                { v: sat,    label: tr(t.about.stats.satisfaction, lang) },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-semibold text-primary" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>{s.v}</p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
