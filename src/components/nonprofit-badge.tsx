import { BadgeCheck } from "lucide-react";
import { ORG } from "@/lib/org";
import { cn } from "@/lib/utils";

/**
 * Shows the organization's tax status and EIN. Renders nothing until
 * `ORG.taxStatus` is set, so the site never asserts a status that has not
 * been confirmed.
 */
export function NonprofitBadge({ className }: { className?: string }) {
  if (!ORG.taxStatus) return null;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 text-xs font-medium text-brown shadow-soft",
        className,
      )}
    >
      <BadgeCheck className="h-4 w-4 text-brown-soft" />
      {ORG.taxStatus}
      {ORG.ein && <span className="text-muted-foreground">· EIN {ORG.ein}</span>}
    </span>
  );
}
