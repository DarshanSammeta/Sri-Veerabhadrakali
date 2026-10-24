import { temple, PENDING } from "@/content/temple";

import heritage from "@/assets/heritage.jpg";

export function HistoryContent() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <img
          width={1200}
          height={1008}
          src={heritage}
          alt="Representative stone-pillared temple architecture"
          className="h-72 w-full rounded-3xl object-cover md:h-96"
        />
        <p className="mt-3 text-sm text-muted-foreground">
          Representative imagery — authorised temple photographs are awaited.
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl">A history to preserve</h2>
          <div className="space-y-8">
            {[
              "Origins and founding",
              "Architecture and heritage",
              "Traditions through generations",
            ].map((title) => (
              <section key={title}>
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-3 text-muted-foreground">
                  {PENDING}. Dates, founding accounts and historical claims will be included only
                  after verification against temple records.
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
