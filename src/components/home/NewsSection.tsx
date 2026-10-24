import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Reveal, SectionHead } from "@/components/temple/Reveal";

import { news } from "@/content/temple";

import festival from "@/assets/festival.jpg";
import devotees from "@/assets/devotees.jpg";

import lamps from "@/assets/lamps.jpg";

export function NewsSection() {
  const imgs = [festival, lamps, devotees];
  return (
    <section id="news" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Updates" title="Latest Temple News and Updates" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <Reveal key={n.category}>
              <article className="group h-full overflow-hidden rounded-3xl border bg-card shadow-card">
                <div className="relative overflow-hidden">
                  <img
                    src={imgs[i]}
                    alt={n.category}
                    loading="lazy"
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {n.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" /> {n.date ?? "Date to be published"}
                  </p>
                  <h3 className="mt-2 text-2xl">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                  <Link
                    to="/news/$slug"
                    params={{ slug: n.slug }}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                  >
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
