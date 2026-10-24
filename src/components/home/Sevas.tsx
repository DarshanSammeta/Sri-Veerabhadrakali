import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal, SectionHead } from "@/components/temple/Reveal";

import { Btn } from "@/components/layout/TempleLink";
import { sevas } from "@/content/experiences";

export function Sevas() {
  return (
    <section id="sevas" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Sevas"
          title="Sacred Sevas and Offerings"
          text="Availability, timings and offerings for each seva will be confirmed by the temple office."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sevas.map((s) => (
            <Reveal key={s.title}>
              <article className="group text-center">
                <div className="mx-auto aspect-square w-full max-w-56 overflow-hidden rounded-full border-4 border-peach shadow-card">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-5 text-2xl">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                <Link
                  to="/sevas"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  View Details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Btn href="/sevas">View All Sevas</Btn>
        </div>
      </div>
    </section>
  );
}
