import { useState, FormEvent, useEffect } from "react";
import { Lock, Sparkles, Instagram } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BrandLogo from "@/components/BrandLogo";
import { checkPreviewCredentials, unlockSitePreview } from "@/lib/sitePreview";
import {
  COMING_SOON_LANGS,
  csTr,
  type ComingSoonLang,
} from "@/i18n/comingSoonTranslations";

const INSTAGRAM_URL = "https://www.instagram.com/ajanskoeln/";

type Props = { onUnlock: () => void };

export default function ComingSoon({ onUnlock }: Props) {
  const [lang, setLang] = useState<ComingSoonLang>("tr");
  const [adminOpen, setAdminOpen] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const s = csTr(lang);

  useEffect(() => {
    document.documentElement.lang = lang === "tr" ? "tr" : lang === "de" ? "de" : "en";
  }, [lang]);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    if (checkPreviewCredentials(user, password)) {
      unlockSitePreview();
      setAdminOpen(false);
      setUser("");
      setPassword("");
      onUnlock();
      return;
    }
    setError(true);
  };

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--accent) / 0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, hsl(var(--primary) / 0.12), transparent)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      {/* Sprache — Standard TR */}
      <div
        className="fixed left-4 top-4 z-[200] flex items-center gap-1 rounded-full border border-primary/15 bg-background/90 px-1 py-1 shadow-[var(--shadow-soft)] backdrop-blur-sm md:left-8 md:top-6"
        role="group"
        aria-label="Dil / Language"
      >
        {COMING_SOON_LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider transition md:px-3.5 md:text-sm ${
              lang === l.code
                ? "bg-accent text-accent-foreground"
                : "text-primary/70 hover:bg-primary/5 hover:text-primary"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          setAdminOpen(true);
          setError(false);
        }}
        className="fixed right-4 top-4 z-[200] flex items-center gap-2 rounded-full border border-primary/15 bg-background/90 px-3 py-2 text-xs font-medium tracking-wide text-primary shadow-[var(--shadow-soft)] backdrop-blur-sm transition hover:border-accent hover:bg-card md:right-8 md:top-6 md:px-4 md:text-sm"
      >
        <Lock className="h-3.5 w-3.5 opacity-70" aria-hidden />
        {s.admin}
      </button>

      <main className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pb-28 pt-24 text-center md:px-8 md:pb-32 md:pt-28">
        <div className="mb-10 flex animate-in fade-in slide-in-from-bottom-4 flex-col items-center duration-700">
          <BrandLogo variant="comingSoon" />
        </div>

        <p className="animate-in fade-in slide-in-from-bottom-3 font-body text-xs font-semibold uppercase tracking-[0.28em] text-accent duration-700 delay-100">
          {s.tagline}
        </p>

        <h1
          className="animate-in fade-in slide-in-from-bottom-2 mt-6 max-w-3xl font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-primary md:text-5xl lg:text-6xl duration-700 delay-150"
          style={{ textWrap: "balance" }}
        >
          {s.title}
        </h1>

        <p className="animate-in fade-in slide-in-from-bottom-2 mx-auto mt-8 max-w-lg text-pretty font-body text-base leading-relaxed text-muted-foreground md:text-lg duration-700 delay-200">
          {s.body}
        </p>

        <div className="animate-in fade-in zoom-in-95 mt-12 max-w-md duration-700 delay-250">
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">{s.instagramLead}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mx-auto mt-5 inline-flex gap-2 shadow-[var(--shadow-soft)]"
          >
            <Instagram className="h-4 w-4" aria-hidden />
            {s.instagramCta}
          </a>
        </div>

        <div className="animate-in fade-in zoom-in-95 mt-12 flex items-center gap-2 text-sm text-primary/60 duration-700 delay-300">
          <Sparkles className="h-4 w-4 text-accent" aria-hidden />
          <span className="font-medium tracking-wide">{s.region}</span>
        </div>

        <div className="mt-14 h-px w-24 max-w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent md:mt-16" aria-hidden />

        <p className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground/90">
          {s.emailLead}{" "}
          <a href="mailto:ajanskoeln@gmail.com" className="font-medium text-accent underline-offset-2 hover:underline">
            ajanskoeln@gmail.com
          </a>
        </p>
      </main>

      <Dialog open={adminOpen} onOpenChange={setAdminOpen}>
        <DialogContent className="border-border bg-card sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-primary">{s.dialogTitle}</DialogTitle>
            <DialogDescription>{s.dialogDesc}</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLogin} className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="preview-user">{s.labelUser}</Label>
              <Input
                id="preview-user"
                name="username"
                autoComplete="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preview-pass">{s.labelPass}</Label>
              <Input
                id="preview-pass"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background"
              />
            </div>
            {error && (
              <p className="text-sm text-destructive" role="alert">
                {s.error}
              </p>
            )}
            <Button type="submit" className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
              {s.submit}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
