import { ArrowRight, MapPin, Clock, Phone, Mail, CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/temple/Reveal";

import { temple, PENDING } from "@/content/temple";

import { Btn } from "@/components/layout/TempleLink";

function Placeholder({ value }: { value: string | null }) {
  return value ? <>{value}</> : <span className="italic text-muted-foreground">{PENDING}</span>;
}

export function Visit() {
  const mapSrc = temple.mapsQuery
    ? `https://www.google.com/maps?q=${encodeURIComponent(temple.mapsQuery)}&output=embed`
    : null;
  const dirHref = temple.mapsQuery
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(temple.mapsQuery)}`
    : null;
  return (
    <section id="visit" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">✦ Plan Your Visit</span>
          <h2 className="mt-3 text-4xl leading-tight md:text-5xl">
            Plan Your Visit to Sri Veerabhadrakali Temple
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need for a peaceful darshan. Details below are being verified by the
            temple office.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <MapPin className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="font-semibold">Address</p>
                <Placeholder value={temple.address} />
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="font-semibold">Darshan Timings</p>
                <Placeholder value={temple.timings[0]?.value ?? null} />
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="font-semibold">Contact Number</p>
                {temple.phone ? (
                  <a href={`tel:${temple.phone}`}>{temple.phone}</a>
                ) : (
                  <Placeholder value={null} />
                )}
              </div>
            </li>
          </ul>
          <div className="mt-8">
            {dirHref ? (
              <a
                href={dirHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold"
              >
                Get Directions
              </a>
            ) : (
              <Btn href="/visit">
                Visitor Details <ArrowRight />
              </Btn>
            )}
          </div>
          {mapSrc && (
            <iframe
              title="Temple location map"
              src={mapSrc}
              loading="lazy"
              className="mt-8 h-64 w-full rounded-3xl border-0"
            />
          )}
        </Reveal>
        <Reveal>
          <div className="rounded-3xl bg-forest p-8 text-forest-foreground shadow-soft md:p-10">
            <h3 className="text-3xl">Visitor Information</h3>
            <div className="mt-6 space-y-3">
              {temple.timings.map((t) => (
                <div
                  key={t.label}
                  className="flex justify-between gap-4 border-b border-forest-foreground/15 pb-3 text-sm"
                >
                  <span>{t.label}</span>
                  <span className="text-right text-forest-foreground/70">{t.value ?? "TBC"}</span>
                </div>
              ))}
            </div>
            <h4 className="mt-8 font-serif text-xl">Facilities</h4>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {temple.facilities.map((f) => (
                <li key={f.name} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {f.name}
                  {!f.confirmed && <span className="text-forest-foreground/50">(TBC)</span>}
                </li>
              ))}
            </ul>
            <h4 className="mt-8 font-serif text-xl">Visitor Guidance</h4>
            <p className="mt-2 text-sm text-forest-foreground/75">
              Please maintain silence and decorum inside the temple. Dress code and photography
              rules will be shared by the temple office.
            </p>
            <div className="mt-8 rounded-2xl bg-forest-foreground/10 p-5 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> {temple.phone ?? "Phone — TBC"}
              </p>
              <p className="mt-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> {temple.email ?? "Email — TBC"}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
