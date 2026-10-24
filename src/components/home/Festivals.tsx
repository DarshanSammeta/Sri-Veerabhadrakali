import { CalendarDays } from "lucide-react";

import { Reveal, SectionHead } from "@/components/temple/Reveal";

import { PENDING } from "@/content/temple";

import { Btn } from "@/components/layout/TempleLink";
import { events } from "@/content/experiences";

export function Festivals() {
  return (
    <section id="festivals" className="bg-peach py-24 curve-top">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Events" title="Celebrate Our Sacred Festivals" />
        <div className="mt-14 space-y-8">
          {events.map((e, i) => (
            <Reveal key={e.title}>
              <article className="grid items-stretch gap-6 md:grid-cols-[1fr_1.2fr]">
                <div
                  className={`flex flex-col justify-center rounded-3xl bg-card p-8 shadow-card ${i % 2 ? "md:order-2" : ""}`}
                >
                  <span className="font-serif text-5xl font-bold text-primary/30">0{i + 1}</span>
                  <h3 className="mt-2 text-3xl">{e.title}</h3>
                  <p className="mt-3 text-muted-foreground">{e.text}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 text-primary" /> Dates {PENDING.toLowerCase()}
                  </p>
                  <div className="mt-6">
                    <Btn href="/festivals">Discover More</Btn>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    className="h-72 w-full object-cover transition duration-700 hover:scale-105 md:h-full"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-forest px-4 py-1.5 text-xs font-semibold text-forest-foreground">
                    Festival
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
