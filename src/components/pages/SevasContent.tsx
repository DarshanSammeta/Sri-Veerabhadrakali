import { ArrowRight } from "lucide-react";
import { temple, PENDING } from "@/content/temple";
import { sevas } from "@/content/experiences";

import { Btn } from "@/components/layout/TempleLink";

export function SevasContent() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {sevas.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-3xl border bg-card">
              <img
                src={s.img}
                alt={`Representative imagery for ${s.title}`}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <div className="p-7">
                <h2 className="text-3xl">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.text}</p>
                <dl className="mt-5 space-y-3 text-sm">
                  {["Availability", "Timings", "Offering details"].map((label) => (
                    <div key={label}>
                      <dt className="font-semibold">{label}</dt>
                      <dd className="text-muted-foreground">{PENDING}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground">
          No online bookings or payments are offered on this website. These descriptions are
          provisional until approved by the temple office.
        </p>
        <div className="mt-6">
          <Btn href="/contact">
            Contact the Temple <ArrowRight />
          </Btn>
        </div>
      </div>
    </>
  );
}
