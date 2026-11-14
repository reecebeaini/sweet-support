import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared header band for interior pages so every page opens with the
 * same rhythm: eyebrow, display heading, optional lede and actions.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("bg-gradient-hero bg-dots relative overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-pastel/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="animate-fade-up-delay-1 mt-4 font-display text-4xl leading-[1.08] text-brown sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {lede && (
          <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {lede}
          </p>
        )}
        {children && <div className="animate-fade-up-delay-2 mt-8">{children}</div>}
      </div>
    </section>
  );
}
