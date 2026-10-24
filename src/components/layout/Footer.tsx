import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

import { temple, news } from "@/content/temple";

import { sevas } from "@/content/experiences";

import { Logo, navLinks } from "@/components/temple/Header";

export function Footer() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 text-sm text-forest-foreground/70">
            A sacred home of devotion, where faith, tradition and divine grace come together.
          </p>
        </div>
        <div>
          <h3 className="text-xl">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-forest-foreground/70">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl">Temple Information</h3>
          <ul className="mt-4 space-y-2 text-sm text-forest-foreground/70">
            <li>
              <Link to="/sevas" className="hover:text-primary">
                Sevas & Offerings
              </Link>
            </li>
            <li>
              <Link to="/festivals" className="hover:text-primary">
                Festivals
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-primary">
                News & Updates
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-forest-foreground/70">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />{" "}
              {temple.address ?? "Address — TBC"}
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" /> {temple.phone ?? "Phone — TBC"}
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" /> {temple.email ?? "Email — TBC"}
            </li>
          </ul>
          {temple.social.length > 0 && (
            <ul className="mt-4 flex gap-3">
              {temple.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="hover:text-primary">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-t border-forest-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-forest-foreground/60 md:flex-row">
          <p>© 2026 Sri Veerabhadrakali Temple. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-primary">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
