import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { LANGS, t, tr } from "@/i18n/translations";
import BrandLogo from "@/components/BrandLogo";

const links = [
  { href: "#hakkimizda", key: "about" as const },
  { href: "#hizmetler",  key: "services" as const },
  { href: "#referanslar", key: "refs" as const },
  { href: "#galeri",     key: "gallery" as const },
  { href: "#iletisim",   key: "contact" as const },
];

export default function Navigation() {
  const { lang, setLang } = useLang();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = location.pathname === "/";
  const lookScrolled = scrolled || !isHome;
  const logoVariant = isHome && !lookScrolled ? "nav-inverse" : "nav";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNav = (hash: string) => {
    setOpen(false);
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    if (!isHome) {
      void navigate({ pathname: "/", hash: id });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        lookScrolled ? "bg-background/95 backdrop-blur-md shadow-[var(--shadow-soft)]" : "bg-transparent"
      }`}
    >
      <nav className="container-tight flex h-16 md:h-20 items-center justify-between">
        {isHome ? (
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xl"
            aria-label={tr(t.nav.homeAria, lang)}
          >
            <BrandLogo variant={logoVariant} />
          </a>
        ) : (
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xl"
            aria-label={tr(t.nav.homeAria, lang)}
          >
            <BrandLogo variant="nav" />
          </Link>
        )}

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${lookScrolled ? "text-primary" : "text-background/90"}`}
              >
                {tr(t.nav[l.key], lang)}
              </a>
            </li>
          ))}
        </ul>

        {/* Lang + mobile button */}
        <div className="flex items-center gap-3">
          <div className={`hidden sm:flex items-center gap-1 rounded-full border px-1 py-1 transition-colors ${lookScrolled ? "border-border bg-background" : "border-background/30 bg-background/10 backdrop-blur-sm"}`}>
            <Globe className={`ml-2 h-3.5 w-3.5 ${lookScrolled ? "text-muted-foreground" : "text-background/80"}`} />
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wider transition-colors ${
                  lang === l.code
                    ? "bg-accent text-accent-foreground"
                    : lookScrolled ? "text-primary/70 hover:text-primary" : "text-background/80 hover:text-background"
                }`}
                aria-label={`${tr(t.nav.langAria, lang)} ${l.label}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className={`md:hidden flex h-11 w-11 items-center justify-center rounded-full transition-colors ${lookScrolled ? "text-primary" : "text-background"}`}
            aria-label={tr(t.nav.menu, lang)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>

      {/* Außerhalb des Headers: vermeidet backdrop-blur-Bugs (transparentes Panel nach Scroll) */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-dark-section/70 backdrop-blur-sm" />
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-background shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex h-16 items-center justify-between px-6 border-b border-border bg-background">
            <BrandLogo variant="drawer" />
            <button type="button" onClick={() => setOpen(false)} className="flex h-11 w-11 items-center justify-center text-primary" aria-label={tr(t.nav.closeMenu, lang)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col bg-background px-6 py-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                  className="block py-4 font-display text-2xl text-primary border-b border-border/60 hover:text-accent transition-colors"
                >
                  {tr(t.nav[l.key], lang)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 bg-background px-6 pb-8 pt-2">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={`flex-1 rounded-full border py-2.5 text-sm font-semibold tracking-wider transition-colors ${
                  lang === l.code ? "bg-accent text-accent-foreground border-accent" : "border-border text-primary"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
