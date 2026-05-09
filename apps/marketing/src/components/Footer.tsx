import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";

const links = [
  { to: "/#hakkimizda", key: "about" as const },
  { to: "/#hizmetler", key: "services" as const },
  { to: "/#referanslar", key: "refs" as const },
  { to: "/#galeri", key: "gallery" as const },
  { to: "/#iletisim", key: "contact" as const },
];

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark-section text-[hsl(25_26%_87%)]">
      <div className="container-tight py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center">
              <BrandLogo variant="footer" />
            </div>
            <p className="mt-3 text-sm opacity-70">{tr(t.footer.tagline, lang)}</p>
          </div>
          <nav className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2 whitespace-nowrap">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm opacity-80 hover:text-accent transition-colors">
                  {tr(t.nav[l.key], lang)}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-x-5 border-t border-background/10 pt-4 text-xs tracking-wide opacity-80">
              <Link to="/impressum" className="hover:text-accent transition-colors">
                {tr(t.footer.imprint, lang)}
              </Link>
              <span className="opacity-40" aria-hidden>|</span>
              <Link to="/datenschutz" className="hover:text-accent transition-colors">
                {tr(t.footer.privacy, lang)}
              </Link>
            </div>
          </nav>
        </div>
        <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs opacity-60">
          © {year} Ajans Köln. {tr(t.footer.rights, lang)}
        </div>
      </div>
    </footer>
  );
}
