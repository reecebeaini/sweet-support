import { cn } from "@/lib/utils";

/**
 * Brand mark: a glazed donut drawn inline so it inherits brand colors
 * and stays crisp at any size (the legacy logo.png carries old branding).
 */
export function DonutMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-cream-deep",
        className,
      )}
    >
      <svg viewBox="0 0 48 48" className="h-[70%] w-[70%]" role="presentation">
        <circle cx="24" cy="24" r="19" className="fill-orange-pastel" />
        <path
          d="M24 5c10.5 0 19 8.5 19 19s-8.5 19-19 19S5 34.5 5 24 13.5 5 24 5Zm0 13a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
          className="fill-pink-soft"
        />
        <circle cx="24" cy="24" r="19" className="fill-none stroke-brown" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="6" className="fill-cream stroke-brown" strokeWidth="2.5" />
        {/* sprinkles */}
        <g className="stroke-brown" strokeWidth="2" strokeLinecap="round">
          <line x1="15" y1="13" x2="17" y2="16" />
          <line x1="32" y1="14" x2="30" y2="17" />
          <line x1="12" y1="26" x2="15" y2="27" />
          <line x1="35" y1="27" x2="32" y2="28" />
          <line x1="20" y1="35" x2="22" y2="33" />
          <line x1="28" y1="35" x2="27" y2="32" />
        </g>
      </svg>
    </span>
  );
}
