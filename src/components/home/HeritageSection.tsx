import { ArrowRight, Info } from "lucide-react";

import { Reveal } from "@/components/temple/Reveal";

import { temple } from "@/content/temple";

import heritage from "@/assets/heritage.jpg";

import devotees from "@/assets/devotees.jpg";

import lamps from "@/assets/lamps.jpg";

import { Btn } from "@/components/layout/TempleLink";
import { heritagePoints } from "@/content/experiences";

export function HeritageSection() {
  return (
    <section id="history" className="bg-peach py-20 curve-top">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">✦ Temple Heritage</span>
            <h2 className="mt-3 text-4xl leading-tight md:text-5xl">
              A Sacred Legacy of Faith and Devotion
            </h2>
            <p className="mt-5 text-muted-foreground">
              Sri Veerabhadrakali Temple is a place of worship where devotees gather to offer
              prayers, take part in rituals and seek the grace of the Goddess.
            </p>
            <p className="mt-4 rounded-xl border border-dashed border-primary/40 bg-card p-4 text-sm text-muted-foreground">
              <Info className="mr-1 inline h-4 w-4 text-primary" /> The temple's verified history
              and origins will be added here by the temple administration.
            </p>
            <div className="mt-8">
              <Btn href="/history">
                Explore Temple History <ArrowRight className="h-4 w-4" />
              </Btn>
            </div>
          </Reveal>
          <Reveal className="relative">
            <img
              src={heritage}
              alt="Carved stone pillared corridor lit by oil lamps"
              loading="lazy"
              width={1200}
              height={1008}
              className="aspect-[5/4] w-full rounded-3xl object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-forest px-6 py-4 text-forest-foreground shadow-soft">
              <p className="font-serif text-2xl font-bold">Heritage</p>
              <p className="text-xs uppercase tracking-widest text-forest-foreground/70">
                Faith · Culture · Devotion
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {heritagePoints.map((p) => (
            <Reveal
              key={p.title}
              className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-card"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="text-xl">{p.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
