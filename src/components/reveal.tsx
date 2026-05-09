import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "up" | "left" | "right" | "zoom";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  delay?: 0 | 100 | 200 | 300 | 400;
  as?: "div" | "section" | "article";
  once?: boolean;
}

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  once = true,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [once]);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
        ? "reveal-right"
        : variant === "zoom"
          ? "reveal-zoom"
          : "";

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        variantClass,
        delay && `delay-${delay}`,
        visible && "in-view",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}