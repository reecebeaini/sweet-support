import { BadgeCheck } from "lucide-react";
import { ORG } from "@/lib/org";
import { cn } from "@/lib/utils";

/**
 * States only what the organization's documents confirm: its incorporation
 * and EIN. 501(c)(3) wording is added only once `ORG.taxExempt` is set, so
 * the site never claims federal tax-exempt status that has not been granted.
 */
export function NonprofitBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex flex-wrap items-center gap-x-2 gap-y-0.5 rounded-2xl bg-cream px-4 py-2 text-xs font-medium leading-snug text-brown shadow-soft",
        className,
      )}
    >
      <BadgeCheck className="h-4 w-4 shrink-0 text-brown-soft" />
      {ORG.taxExempt ?? ORG.incorporation}
      <span className="text-muted-foreground">· EIN {ORG.ein}</span>
    </span>
  );
}
