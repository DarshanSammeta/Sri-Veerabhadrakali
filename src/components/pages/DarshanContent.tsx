import { ArrowRight } from "lucide-react";
import { temple, PENDING } from "@/content/temple";

import { Visit } from "@/components/home/Visit";

import { Btn } from "@/components/layout/TempleLink";

import lamps from "@/assets/lamps.jpg";
import devotees from "@/assets/devotees.jpg";

export function DarshanContent() {
  return (
    <>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl">Darshan timings</h2>
          <dl className="mt-6">
            {temple.timings.map((t) => (
              <div key={t.label} className="border-b py-5">
                <dt className="font-semibold">{t.label}</dt>
                <dd className="mt-2 text-muted-foreground">{t.value ?? PENDING}</dd>
              </div>
            ))}
          </dl>
          <h2 className="mt-10 text-3xl">Visitor guidance</h2>
          <p className="mt-4 text-muted-foreground">
            Please maintain silence and respect other devotees. Dress code, photography rules,
            accessibility arrangements and special-day procedures are awaiting administrator
            confirmation.
          </p>
          <div className="mt-7">
            <Btn href="/visit">
              Plan Your Visit <ArrowRight />
            </Btn>
          </div>
        </div>
        <img
          width={1008}
          height={1008}
          src={lamps}
          alt="Representative brass oil lamps"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />
      </div>
    </>
  );
}
