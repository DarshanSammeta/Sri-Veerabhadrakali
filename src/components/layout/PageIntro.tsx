import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
export function PageIntro({ title, description }: { title: string; description: string }) {
  return (
    <section className="bg-peach pt-28 pb-12 md:pt-32 md:pb-16">
      <div className="mx-auto max-w-6xl px-5">
        <nav
          aria-label="Breadcrumb"
          className="mb-7 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span aria-current="page">{title}</span>
        </nav>
        <span className="eyebrow">✦ Sri Veerabhadrakali Temple</span>
        <h1 className="mt-3 text-4xl md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}
