import { Sparkles } from "lucide-react";

export function Strip() {
  const items = ["Divine Darshan", "Sacred Sevas", "Festivals", "Spiritual Heritage"];
  return (
    <div className="bg-gradient-orange py-6 text-primary-foreground">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-4 px-5 font-serif text-2xl font-semibold md:text-3xl">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-3">
            <Sparkles className="h-5 w-5" /> {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
