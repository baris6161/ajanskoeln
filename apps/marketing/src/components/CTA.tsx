import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";

export default function CTA() {
  const { lang } = useLang();
  const scrollToContact = () =>
    document.getElementById("iletisim")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(22_100%_5%)]" aria-hidden />
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className="container-tight relative text-center">
        <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {tr(t.cta.eyebrow, lang)}
        </p>
        <h2
          className="reveal mt-4 font-display font-semibold text-balance leading-[1.1]"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", transitionDelay: "100ms" }}
        >
          {tr(t.cta.title, lang)}
        </h2>
        <p
          className="reveal mt-5 text-primary-foreground/75 text-[15px] leading-relaxed max-w-xl mx-auto"
          style={{ transitionDelay: "180ms" }}
        >
          {tr(t.cta.sub, lang)}
        </p>

        <div className="reveal mt-10 flex flex-wrap justify-center gap-4" style={{ transitionDelay: "260ms" }}>
          <a
            href="https://wa.me/491727532501"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white shadow-[var(--shadow-elegant)] hover:opacity-90 transition min-h-[44px]"
          >
            <MessageCircle className="h-4 w-4" /> {tr(t.cta.whatsapp, lang)}
          </a>
          <a
            href="tel:+491727532501"
            className="inline-flex items-center gap-2 rounded-full border-2 border-background/60 bg-transparent px-6 py-3.5 text-sm font-medium text-background hover:bg-background hover:text-primary transition min-h-[44px]"
          >
            <Phone className="h-4 w-4" /> {tr(t.cta.call, lang)}
          </a>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition min-h-[44px] group"
          >
            {tr(t.cta.form, lang)} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="reveal mt-14 pt-10 border-t border-background/10" style={{ transitionDelay: "340ms" }}>
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 mb-3">
            {tr(t.cta.citiesLabel, lang)}
          </p>
          <p className="text-sm text-primary-foreground/70 tracking-wide">
            {tr(t.cta.cities, lang)}
          </p>
        </div>
      </div>
    </section>
  );
}
