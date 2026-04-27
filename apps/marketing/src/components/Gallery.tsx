import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { t, tr } from "@/i18n/translations";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [g1, g2, g3, g4, g5, g6];

export default function Gallery() {
  const { lang } = useLang();
  const [idx, setIdx] = useState<number | null>(null);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => ((i ?? 0) + 1) % images.length);
      if (e.key === "ArrowLeft") setIdx((i) => ((i ?? 0) - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [idx]);

  return (
    <section id="galeri" className="bg-secondary/40 py-24 md:py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-accent">{tr(t.gallery.label, lang)}</p>
          <h2 className="reveal mt-4 font-display font-semibold text-primary text-balance leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", transitionDelay: "100ms" }}>
            {tr(t.gallery.title, lang)}
          </h2>
        </div>

        <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIdx(i)}
              className="reveal group relative mb-5 block w-full overflow-hidden rounded-2xl bg-primary"
              style={{ transitionDelay: `${i * 80}ms` }}
              aria-label={`Open image ${i + 1}`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {idx !== null && (
        <div className="fixed inset-0 z-[60] bg-dark-section/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button onClick={() => setIdx(null)} className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setIdx((i) => ((i ?? 0) - 1 + images.length) % images.length); }}
            className="absolute left-4 md:left-8 flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img src={images[idx]} alt="" className="max-h-[88vh] max-w-[88vw] object-contain rounded-lg shadow-2xl" />
          <button
            onClick={(e) => { e.stopPropagation(); setIdx((i) => ((i ?? 0) + 1) % images.length); }}
            className="absolute right-4 md:right-8 flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
