import { ArrowRight } from "lucide-react";
import { temple, PENDING } from "@/content/temple";
import { events } from "@/content/experiences";

import { Btn } from "@/components/layout/TempleLink";

import festival from "@/assets/festival.jpg";

export function FestivalsContent() {
  return (
    <>
      <div className="mx-auto max-w-6xl space-y-10 px-5 py-16">
        {events.map((e) => (
          <article key={e.title} className="grid gap-8 md:grid-cols-2">
            <img
              src={e.img}
              alt={`Representative imagery: ${e.title}`}
              loading="lazy"
              className="h-72 w-full rounded-3xl object-cover"
            />
            <div className="self-center">
              <span className="eyebrow">Awaiting confirmation</span>
              <h2 className="mt-3 text-3xl">{e.title}</h2>
              <p className="mt-4 text-muted-foreground">
                This is a provisional festival category, not a confirmed temple programme.
              </p>
              <p className="mt-4 text-muted-foreground">
                Dates and celebration details: {PENDING.toLowerCase()}.
              </p>
              <div className="mt-6">
                <Btn href="/news">
                  Temple Announcements <ArrowRight />
                </Btn>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
