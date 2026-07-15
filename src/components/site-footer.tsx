import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Making a difference, one donut at a time.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-brown">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-brown">About Us</Link></li>
              <li><Link to="/impact" className="hover:text-brown">Impact</Link></li>
              <li><Link to="/bakeries" className="hover:text-brown">Partner Bakeries</Link></li>
              <li><Link to="/get-involved" className="hover:text-brown">Get Involved</Link></li>
              <li><Link to="/donate" className="hover:text-brown">Donate</Link></li>
              <li><Link to="/contact" className="hover:text-brown">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-brown">Connect</h4>
            <div className="mt-3 flex gap-3">
              <a href="https://instagram.com/zerocrumbinitiative" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-brown shadow-soft transition hover:bg-orange-pastel">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="mailto:zerocrumbsiniative@gmail.com" aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-brown shadow-soft transition hover:bg-orange-pastel">
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">zerocrumbsiniative@gmail.com</p>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Page Order. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
