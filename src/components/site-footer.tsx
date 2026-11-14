import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonutMark } from "@/components/donut-mark";

const explore = [
  { to: "/about", label: "About Us" },
  { to: "/impact", label: "Impact" },
  { to: "/bakeries", label: "Partner Bakeries" },
] as const;

const takeAction = [
  { to: "/get-involved", label: "Volunteer" },
  { to: "/start-a-chapter", label: "Start a Chapter" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <DonutMark className="h-9 w-9 shrink-0" />
              <span className="font-display text-lg font-semibold text-brown">
                Zero Crumbs Initiative
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Making a difference, one donut at a time. We rescue surplus pastries from local
              bakeries and deliver them to neighbors who need them.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-brown">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-brown">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-brown">Take action</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {takeAction.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-brown">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-brown">Get in touch</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:zerocrumbsiniative@gmail.com"
                  className="flex items-start gap-2 break-all transition-colors hover:text-brown"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  zerocrumbsiniative@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:5622355520"
                  className="flex items-center gap-2 transition-colors hover:text-brown"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (562) 235-5520
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/zerocrumbinitiative"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-brown"
                >
                  <Instagram className="h-4 w-4 shrink-0" />
                  @zerocrumbinitiative
                </a>
              </li>
            </ul>
            <Link to="/donate" className="mt-5 inline-block">
              <Button className="rounded-full bg-brown text-cream hover:bg-brown-soft">
                Donate
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Zero Crumbs Initiative. All rights reserved.</p>
          <p>Rescuing pastries across Southern California.</p>
        </div>
      </div>
    </footer>
  );
}
