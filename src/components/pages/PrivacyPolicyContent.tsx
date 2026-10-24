import { privacySections } from "@/content/legal";
import { ArrowRight } from "lucide-react";

import { Btn } from "@/components/layout/TempleLink";

export function PrivacyPolicyContent() {
  return (
    <>
      <div className="mx-auto max-w-3xl space-y-8 px-5 py-16">
        {privacySections.map((s) => (
          <section key={s.title}>
            <h2 className="text-2xl">{s.title}</h2>
            <p className="mt-3 text-muted-foreground">{s.text}</p>
          </section>
        ))}
        <Btn href="/contact">
          Contact Information <ArrowRight />
        </Btn>
      </div>
    </>
  );
}
