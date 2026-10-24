import { Reveal } from "@/components/temple/Reveal";

import { highlights } from "@/content/experiences";
import { Btn } from "@/components/layout/TempleLink";

export function Welcome() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <Reveal>
          <span className="eyebrow">✦ Welcome</span>
          <h2 className="mt-3 text-4xl leading-tight md:text-5xl">
            Welcome to Sri Veerabhadrakali Temple
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-muted-foreground md:text-lg">
            A sacred destination where faith, tradition, and divine grace come together.
          </p>
        </Reveal>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h, i) => (
          <Reveal key={h.title}>
            <article
              className={`group h-full rounded-3xl border p-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-soft ${i === 1 ? "bg-peach" : "bg-card"}`}
            >
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground transition group-hover:bg-saffron">
                <h.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-2xl">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Btn href="/about">About the Temple</Btn>
      </div>
    </section>
  );
}
