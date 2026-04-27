import { cn } from "@/lib/utils";

const LOGO_SRC = "/logo-ajans-koeln.png";

export type BrandLogoVariant = "nav" | "nav-inverse" | "footer" | "comingSoon" | "drawer";

type Props = {
  variant?: BrandLogoVariant;
  className?: string;
};

/**
 * Offizielles Markenlogo (PNG, 327×312). Varianten für helle/dunkle Flächen und Lesbarkeit.
 */
export default function BrandLogo({ variant = "nav", className }: Props) {
  const shell =
    variant === "nav-inverse"
      ? "rounded-xl bg-background/[0.94] p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)] ring-1 ring-white/15"
      : variant === "nav"
        ? "rounded-xl bg-background/95 p-1.5 shadow-[var(--shadow-soft)] ring-1 ring-primary/[0.07]"
        : variant === "footer"
          ? "rounded-xl bg-background p-2.5 shadow-[var(--shadow-soft)] ring-1 ring-white/12"
          : variant === "drawer"
            ? "rounded-lg bg-background p-1.5 ring-1 ring-border"
            : "rounded-2xl bg-card p-4 shadow-[var(--shadow-elegant)] ring-1 ring-primary/[0.08] md:p-5";

  const imgClass =
    variant === "comingSoon"
      ? "h-[6.75rem] w-auto md:h-[8.25rem] lg:h-[9.25rem]"
      : variant === "footer"
        ? "h-[3rem] w-auto sm:h-[3.25rem]"
        : variant === "drawer"
          ? "h-8 w-auto sm:h-9"
          : "h-[2.35rem] w-auto md:h-[2.7rem]";

  return (
    <span className={cn("inline-flex shrink-0 items-center justify-center", shell, className)}>
      <img
        src={LOGO_SRC}
        alt="Ajans Köln Fair Organisation"
        width={327}
        height={312}
        decoding="async"
        fetchPriority={variant === "comingSoon" ? "high" : "auto"}
        className={cn("object-contain object-center", imgClass)}
        loading="eager"
      />
    </span>
  );
}
