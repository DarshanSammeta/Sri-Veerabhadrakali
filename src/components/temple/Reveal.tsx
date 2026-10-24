import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  text,
  light,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="eyebrow">✦ {eyebrow}</span>
      <h2
        className={cn(
          "mt-3 text-4xl leading-tight md:text-5xl",
          light && "text-primary-foreground",
        )}
      >
        {title}
      </h2>
      {text && (
        <p className={cn("mt-4 text-muted-foreground", light && "text-primary-foreground/85")}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
