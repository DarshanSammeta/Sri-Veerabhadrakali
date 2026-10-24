import { Users, Quote } from "lucide-react";

import { Reveal } from "@/components/temple/Reveal";

import { testimonials } from "@/content/temple";

import devotees from "@/assets/devotees.jpg";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-orange py-24 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <Reveal>
            <span className="eyebrow text-primary-foreground">✦ Testimonials</span>
            <h2 className="mt-3 text-4xl leading-tight md:text-5xl">
              Voices of Faith and Devotion
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-primary-foreground/85">
              Shared with permission by devotees. These placeholders will be replaced with approved
              testimonials.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i}>
              <figure className="h-full rounded-3xl bg-card p-8 text-card-foreground shadow-soft">
                <Quote className="h-8 w-8 text-primary" />
                <blockquote className="mt-4 font-serif text-xl italic leading-snug">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-peach text-primary">
                    <Users className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {t.location ?? "Location optional"}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
