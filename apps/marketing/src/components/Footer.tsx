import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";

const links = [
  { to: "/#hakkimizda", key: "about" as const },
  { to: "/#hizmetler", key: "services" as const },
  { to: "/#galeri", key: "gallery" as const },
  { to: "/#iletisim", key: "contact" as const },
];

export default function Footer() {
  const { lang } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark-section text-[hsl(25_26%_87%)]">
      <div className="container-tight py-14">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          <div>
            <div className="flex items-center">
              <BrandLogo variant="footer" />
            </div>
            <p className="mt-3 text-sm opacity-70">{tr(t.footer.tagline, lang)}</p>
          </div>
          <nav className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm opacity-80 hover:text-accent transition-colors">
                  {tr(t.nav[l.key], lang)}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-background/10 pt-4 text-xs uppercase tracking-wider opacity-80">
              <Link to="/impressum" className="hover:text-accent transition-colors">
                {tr(t.footer.imprint, lang)}
              </Link>
              <span className="opacity-40" aria-hidden>
                |
              </span>
              <Link to="/datenschutz" className="hover:text-accent transition-colors">
                {tr(t.footer.privacy, lang)}
              </Link>
            </div>
          </nav>
          <div className="md:text-right text-sm opacity-70 space-y-1">
            <p><a href="tel:+491727532501" className="hover:text-accent">+49 172 7532501</a></p>
            <p><a href="mailto:ajanskoeln@gmail.com" className="hover:text-accent">ajanskoeln@gmail.com</a></p>
          </div>
        </div>
        <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs opacity-60">
          © {year} Ajans Köln. {tr(t.footer.rights, lang)}
        </div>
      </div>
    </footer>
  );
}
