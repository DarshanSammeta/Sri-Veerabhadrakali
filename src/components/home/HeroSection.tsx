import { Flame, ArrowRight, Clock } from "lucide-react";

import { Reveal } from "@/components/temple/Reveal";

import { PENDING } from "@/content/temple";
import hero from "@/assets/hero.jpg";

import devotees from "@/assets/devotees.jpg";

import lamps from "@/assets/lamps.jpg";

import { Btn } from "@/components/layout/TempleLink";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[680px] overflow-hidden md:min-h-[760px]">
      <img
        src={hero}
        alt="Towering temple gopuram at sunset with devotees in the courtyard"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-overlay-dark" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 pb-28 pt-32 md:flex-row md:items-end md:justify-between md:pt-44">
        <Reveal className="max-w-xl rounded-3xl bg-forest/90 p-8 text-forest-foreground shadow-soft md:p-10">
          <span className="eyebrow rounded-full bg-primary/15 px-3 py-1">✦ Sacred Heritage</span>
          <h1 className="mt-5 text-4xl leading-[1.05] md:text-6xl">
            Experience the Divine Power of Sri Veerabhadrakali
          </h1>
          <p className="mt-5 max-w-md text-forest-foreground/80">
            Discover the sacred history, divine presence, timeless traditions, and spiritual
            significance of Sri Veerabhadrakali Temple.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="/about">
              Explore Temple <ArrowRight className="h-4 w-4" />
            </Btn>
            <Btn href="/visit" variant="outline">
              Plan Your Darshan
            </Btn>
          </div>
          <div className="mt-8 flex items-center gap-3 border-t border-forest-foreground/15 pt-5 text-sm text-forest-foreground/75">
            <Flame className="h-5 w-5 text-primary" /> Daily worship · Festivals · Sevas
          </div>
        </Reveal>
        <Reveal className="hidden w-72 rounded-2xl bg-card p-4 text-card-foreground shadow-soft md:block">
          <img
            width={1008}
            height={1008}
            src={lamps}
            alt="Brass oil lamps glowing over marigold decorations"
            loading="lazy"
            className="h-36 w-full rounded-xl object-cover"
          />
          <p className="mt-3 font-serif text-lg font-bold">Today's Darshan</p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" /> Timings {PENDING.toLowerCase()}
          </p>
        </Reveal>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-background curve-top" />
    </section>
  );
}
