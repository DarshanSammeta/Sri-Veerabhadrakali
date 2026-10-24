import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export type PublicPath =
  | "/"
  | "/about"
  | "/history"
  | "/darshan"
  | "/sevas"
  | "/festivals"
  | "/gallery"
  | "/news"
  | "/visit"
  | "/contact"
  | "/faq"
  | "/privacy-policy"
  | "/terms-and-conditions";

export function Btn({
  href,
  children,
  variant = "primary",
}: {
  href: PublicPath;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
}) {
  const style = {
    primary: "bg-primary text-primary-foreground hover:bg-saffron",
    outline:
      "border border-forest-foreground/50 bg-transparent text-forest-foreground hover:bg-forest-foreground hover:text-forest",
    light: "bg-card text-primary hover:bg-forest hover:text-forest-foreground",
  }[variant];
  return (
    <Button asChild className={`h-auto whitespace-normal rounded-full px-6 py-3 ${style}`}>
      <Link to={href}>{children}</Link>
    </Button>
  );
}
