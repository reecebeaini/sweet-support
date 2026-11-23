import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonutMark } from "@/components/donut-mark";
import { NonprofitBadge } from "@/components/nonprofit-badge";
import { ORG } from "@/lib/org";

const explore = [
  { to: "/about", label: "About" },
  { to: "/impact", label: "Impact" },
  { to: "/donate", label: "Donate" },
] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <DonutMark className="h-9 w-9 shrink-0" />
              <span className="font-display text-lg font-semibold text-brown">{ORG.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Making a difference, one donut at a time. Based in {ORG.location}.
            </p>
            <NonprofitBadge className="mt-5" />
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
              <li>
                <Link
                  to="/get-involved"
                  search={{ tab: "volunteer" }}
                  className="transition-colors hover:text-brown"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  search={{ tab: "bakery" }}
                  className="transition-colors hover:text-brown"
                >
                  Partner your bakery
                </Link>
              </li>
              <li>
                <Link to="/start-a-chapter" className="transition-colors hover:text-brown">
                  Start a chapter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-brown">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${ORG.email}`}
                  className="flex items-start gap-2 break-all transition-colors hover:text-brown"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  {ORG.email}
                </a>
              </li>
              <li>
                <a
                  href={ORG.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-brown"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {ORG.phone}
                </a>
              </li>
              <li>
                <a
                  href={ORG.instagram.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-brown"
                >
                  <Instagram className="h-4 w-4 shrink-0" />
                  {ORG.instagram.handle}
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

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {ORG.name}. All rights reserved. EIN {ORG.ein}.
          </p>
          {ORG.transparency.length > 0 && (
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {ORG.transparency.map((t) => (
                <li key={t.href}>
                  <a href={t.href} className="underline-offset-4 hover:text-brown hover:underline">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
