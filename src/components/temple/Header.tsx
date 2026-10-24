import { useEffect, useState } from "react";
import { Menu, X, Phone, Search } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { PublicPath } from "@/components/layout/TempleLink";

export const navLinks: { label: string; href: PublicPath }[] = [
  { label: "Home", href: "/" },
  { label: "About Temple", href: "/about" },
  { label: "Darshan", href: "/darshan" },
  { label: "Festivals", href: "/festivals" },
  { label: "Gallery", href: "/gallery" },
  { label: "Temple History", href: "/history" },
  { label: "Contact", href: "/contact" },
];

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="flex min-w-0 items-center gap-2.5"
      aria-label="Sri Veerabhadrakali Temple home"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-card shadow-card">
        <img src={logo} alt="" width={36} height={36} className="h-8 w-8" />
      </span>
      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            "block truncate font-serif text-lg font-bold",
            light ? "text-forest-foreground" : "text-foreground",
          )}
        >
          Sri Veerabhadrakali
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
          Temple
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "bg-background/95 shadow-card backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 xl:flex xl:justify-between">
        <Logo light={!solid} />
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  activeOptions={{ exact: true }}
                  activeProps={{ "aria-current": "page" }}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === l.href
                      ? "text-primary"
                      : solid
                        ? "text-foreground"
                        : "text-forest-foreground",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/faq"
            title="Find answers"
            aria-label="Find answers"
            className={cn(
              "hidden h-9 w-9 place-items-center rounded-full border sm:grid",
              solid ? "text-foreground" : "border-forest-foreground/40 text-forest-foreground",
            )}
          >
            <Search className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            title="Contact the temple"
            aria-label="Contact the temple"
            className={cn(
              "hidden h-9 w-9 place-items-center rounded-full border sm:grid",
              solid ? "text-foreground" : "border-forest-foreground/40 text-forest-foreground",
            )}
          >
            <Phone className="h-4 w-4" />
          </Link>
          <Link
            to="/visit"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-saffron sm:inline-flex"
          >
            Plan Your Visit
          </Link>
          <Button
            variant="ghost"
            size="icon"
            type="button"
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full xl:hidden",
              solid ? "text-foreground" : "text-forest-foreground",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav
          aria-label="Mobile"
          className="max-h-[calc(100dvh-70px)] overflow-y-auto border-t bg-background px-5 pb-6 xl:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  activeOptions={{ exact: true }}
                  activeProps={{ "aria-current": "page", className: "text-primary" }}
                  onClick={() => setOpen(false)}
                  className="block border-b py-3 font-medium hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/visit"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Plan Your Visit
          </Link>
        </nav>
      )}
    </header>
  );
}
