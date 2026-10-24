import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { news } from "@/content/temple";

import lamps from "@/assets/lamps.jpg";
import devotees from "@/assets/devotees.jpg";
import festival from "@/assets/festival.jpg";

export function NewsContent() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-7 md:grid-cols-3">
          {news.map((n, i) => (
            <article key={n.slug} className="overflow-hidden rounded-3xl border bg-card">
              <img
                src={[festival, lamps, devotees][i]}
                alt="Representative devotional imagery"
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <span className="eyebrow">{n.category}</span>
                <h2 className="mt-3 text-2xl">{n.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{n.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  {n.date ?? "Date awaiting confirmation"}
                </p>
                <Link
                  to="/news/$slug"
                  params={{ slug: n.slug }}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-primary"
                >
                  Read announcement <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
