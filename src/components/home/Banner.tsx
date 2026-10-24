import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/temple/Reveal";

import landscape from "@/assets/landscape.jpg";

import { Btn } from "@/components/layout/TempleLink";

export function Banner() {
  return (
    <section className="relative overflow-hidden">
      <img
        width={1920}
        height={912}
        src={landscape}
        alt="Temple tower reflected in a sacred tank at sunrise"
        loading="lazy"
        className="ken-burns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-overlay-dark" />
      <div className="relative mx-auto max-w-6xl px-5 py-32">
        <Reveal className="max-w-xl text-forest-foreground">
          <span className="eyebrow">✦ Sacred Journey</span>
          <h2 className="mt-3 text-4xl leading-tight md:text-5xl">
            A Sacred Journey of Faith, Tradition and Devotion
          </h2>
          <p className="mt-4 text-forest-foreground/80">
            Experience the spiritual atmosphere and timeless traditions of Sri Veerabhadrakali
            Temple.
          </p>
          <div className="mt-8">
            <Btn href="/about">
              Explore the Temple <ArrowRight className="h-4 w-4" />
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
