import { Reveal } from "@/components/temple/Reveal";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { temple, faqs } from "@/content/temple";

import devotees from "@/assets/devotees.jpg";

export function Faq() {
  return (
    <section id="faq" className="bg-peach py-24 curve-top">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <span className="eyebrow">✦ FAQ</span>
          <h2 className="mt-3 text-4xl leading-tight md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground">
            Answers are being verified by the temple administration.
          </p>
          <img
            width={1200}
            height={912}
            src={devotees}
            alt="Devotee holding a puja plate"
            loading="lazy"
            className="mt-8 hidden h-64 w-full rounded-3xl object-cover lg:block"
          />
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible defaultValue="q0" className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`q${i}`}
                className="rounded-2xl border bg-card px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-serif text-xl hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
