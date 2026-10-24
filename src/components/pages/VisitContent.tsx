import { ArrowRight } from "lucide-react";

import { Visit } from "@/components/home/Visit";

import { Btn } from "@/components/layout/TempleLink";

export function VisitContent() {
  return (
    <>
      <Visit />
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-3xl">Travel and accessibility</h2>
        <p className="mt-4 text-muted-foreground">
          Nearest transport connections, parking arrangements and step-free access are awaiting
          confirmation. Please confirm official directions before travelling.
        </p>
        <div className="mt-6">
          <Btn href="/contact">
            Contact the Temple <ArrowRight />
          </Btn>
        </div>
      </section>
    </>
  );
}
