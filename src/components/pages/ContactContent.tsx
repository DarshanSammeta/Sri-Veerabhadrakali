import { ArrowRight } from "lucide-react";
import { temple, PENDING } from "@/content/temple";

import { Btn } from "@/components/layout/TempleLink";

import devotees from "@/assets/devotees.jpg";

export function ContactContent() {
  return (
    <>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl">Temple office</h2>
          <dl className="mt-7 space-y-7">
            <div>
              <dt className="font-semibold">Address</dt>
              <dd className="mt-2 text-muted-foreground">{temple.address ?? PENDING}</dd>
            </div>
            <div>
              <dt className="font-semibold">Phone</dt>
              <dd className="mt-2 text-muted-foreground">
                {temple.phone ? <a href={`tel:${temple.phone}`}>{temple.phone}</a> : PENDING}
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Email</dt>
              <dd className="mt-2 text-muted-foreground">
                {temple.email ? <a href={`mailto:${temple.email}`}>{temple.email}</a> : PENDING}
              </dd>
            </div>
          </dl>
          <p className="mt-8 text-muted-foreground">
            Online enquiries are not available. An official email or phone number will be listed
            once confirmed.
          </p>
          <div className="mt-6">
            <Btn href="/faq">
              Frequently Asked Questions <ArrowRight />
            </Btn>
          </div>
        </div>
        <img
          width={1200}
          height={912}
          src={devotees}
          alt="Representative devotee with a prayer offering"
          className="aspect-square w-full rounded-3xl object-cover"
        />
      </div>
    </>
  );
}
