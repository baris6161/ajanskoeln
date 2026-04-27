import { useState, FormEvent } from "react";
import { Phone, Mail, MessageCircle, Instagram, Send, CheckCircle2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";
import { toast } from "sonner";

const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT ?? "";

export default function Contact() {
  const { lang } = useLang();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Contact form rejected");
      } else {
        // No endpoint configured — simulate success for now
        await new Promise((r) => setTimeout(r, 800));
      }
      setSent(true);
      form.reset();
      toast.success(tr(t.contact.form.success, lang));
    } catch {
      toast.error(tr(t.contact.form.error, lang));
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="iletisim" className="bg-background py-24 md:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-accent">{tr(t.contact.label, lang)}</p>
          <h2 className="reveal mt-4 font-display font-semibold text-primary text-balance leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", transitionDelay: "100ms" }}>
            {tr(t.contact.title, lang)}
          </h2>
          <p className="reveal mt-4 text-muted-foreground" style={{ transitionDelay: "180ms" }}>{tr(t.contact.sub, lang)}</p>
        </div>

        <div className="mt-16 grid gap-10 md:gap-14 md:grid-cols-2">
          {/* Info */}
          <div className="reveal space-y-6">
            <a href="tel:+491727532501" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent hover:shadow-[var(--shadow-soft)]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent"><Phone className="h-5 w-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Telefon</p>
                <p className="mt-1 font-medium text-primary">+49 172 7532501</p>
              </div>
            </a>
            <a href="mailto:ajanskoeln@gmail.com" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent hover:shadow-[var(--shadow-soft)]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent"><Mail className="h-5 w-5" /></span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">E-Mail</p>
                <p className="mt-1 font-medium text-primary">ajanskoeln@gmail.com</p>
              </div>
            </a>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://wa.me/491727532501" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] hover:opacity-90 transition min-h-[44px]">
                <MessageCircle className="h-4 w-4" /> {tr(t.contact.whatsapp, lang)}
              </a>
              <a href="https://www.instagram.com/ajanskoeln/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-border bg-card h-11 w-11 text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent transition" aria-label="Instagram — Ajans Köln">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)] space-y-5" style={{ transitionDelay: "120ms" }}>
            <Field name="name" label={tr(t.contact.form.name, lang)} required />
            <Field name="email" label={tr(t.contact.form.email, lang)} type="email" required />
            <Field name="subject" label={tr(t.contact.form.subject, lang)} required />
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {tr(t.contact.form.message, lang)}
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 resize-none"
              />
            </div>
            <button type="submit" disabled={sending} className="btn-primary w-full sm:w-auto">
              {sent ? <><CheckCircle2 className="mr-2 h-4 w-4" /> ✓</> : sending ? tr(t.contact.form.sending, lang) : <>{tr(t.contact.form.send, lang)} <Send className="ml-2 h-4 w-4" /></>}
            </button>
            {sent && (
              <p className="text-sm text-green-700 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> {tr(t.contact.form.success, lang)}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 min-h-[44px]"
      />
    </div>
  );
}
