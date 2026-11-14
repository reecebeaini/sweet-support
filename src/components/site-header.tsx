import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DonutMark } from "@/components/donut-mark";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/impact", label: "Impact" },
  { to: "/bakeries", label: "Bakeries" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/start-a-chapter", label: "Start a Chapter" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-cream/85 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-b border-border/60 shadow-soft" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3.5">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <DonutMark className="h-9 w-9 shrink-0" />
          <span className="font-display text-base font-semibold leading-tight text-brown sm:text-lg">
            Zero Crumbs <span className="hidden sm:inline">Initiative</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-cream-deep text-brown font-semibold" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-3 py-2 text-sm transition-colors hover:bg-cream-deep hover:text-brown"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link to="/donate">
            <Button className="rounded-full bg-brown px-5 text-cream shadow-soft transition hover:bg-brown-soft">
              Donate
            </Button>
          </Link>
        </div>

        <button
          className="rounded-full p-2 text-brown transition hover:bg-cream-deep lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-cream-deep font-semibold text-brown" }}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-foreground transition hover:bg-cream-deep"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/donate" onClick={() => setOpen(false)} className="mt-2">
              <Button className="w-full rounded-full bg-brown text-cream hover:bg-brown-soft">
                Donate
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
