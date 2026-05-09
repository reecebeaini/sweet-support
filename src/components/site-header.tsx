import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/impact", label: "Impact" },
  { to: "/bakeries", label: "Bakeries" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-pastel text-brown font-display text-lg font-bold">P</span>
          <span className="font-display text-xl font-semibold text-brown">Page Order</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-brown font-semibold" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm transition-colors hover:text-brown"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/donate" className="hidden md:inline-flex">
          <Button className="rounded-full bg-brown text-cream hover:bg-brown/90">Donate</Button>
        </Link>
        <button
          className="md:hidden text-brown"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-foreground hover:bg-cream-deep"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}