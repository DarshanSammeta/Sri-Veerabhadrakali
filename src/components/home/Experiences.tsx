import { ArrowRight } from "lucide-react";

import { Reveal, SectionHead } from "@/components/temple/Reveal";

import { Btn } from "@/components/layout/TempleLink";
import { experiences } from "@/content/experiences";

export function Experiences() {
  return (
    <section id="darshan" className="bg-peach pb-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow="Experiences" title="Discover the Divine Experiences" />
        <div className="mt-14 space-y-8">
          {experiences.map((e, i) => (
            <Reveal key={e.id}>
              <article
                className={`grid overflow-hidden rounded-3xl shadow-card md:grid-cols-2 ${e.dark ? "bg-forest text-forest-foreground" : "bg-card"}`}
              >
                <div className={`overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                  <img
                    src={e.img}
                    alt={e.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover transition duration-700 hover:scale-105 md:h-full md:min-h-80"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <span className="eyebrow">0{i + 1} — Experience</span>
                  <h3 className="mt-3 text-3xl md:text-4xl">{e.title}</h3>
                  <p
                    className={`mt-4 ${e.dark ? "text-forest-foreground/80" : "text-muted-foreground"}`}
                  >
                    {e.text}
                  </p>
                  <div className="mt-6">
                    <Btn
                      href={
                        e.id === "celebrations"
                          ? "/festivals"
                          : e.id === "rituals"
                            ? "/sevas"
                            : "/darshan"
                      }
                    >
                      {e.cta} <ArrowRight className="h-4 w-4" />
                    </Btn>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
