import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type GalleryImage = { src: string; alt: string; caption: string; className?: string };
export function Gallery({ images }: { images: GalleryImage[] }) {
  const [idx, setIdx] = useState<number | null>(null);
  const [opener, setOpener] = useState<HTMLButtonElement | null>(null);
  const step = useCallback(
    (d: number) => setIdx((i) => (i === null ? null : (i + d + images.length) % images.length)),
    [images.length],
  );
  useEffect(() => {
    if (idx === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [idx, step]);
  return (
    <Dialog.Root
      open={idx !== null}
      onOpenChange={(open) => {
        if (!open) setIdx(null);
      }}
    >
      <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-3">
        {images.map((img, i) => (
          <Button
            key={img.src}
            variant="ghost"
            onClick={(e) => {
              setOpener(e.currentTarget);
              setIdx(i);
            }}
            className={cn("group relative h-auto overflow-hidden rounded-2xl p-0", img.className)}
            aria-label={`Open image: ${img.caption}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1200}
              height={1000}
              sizes="(max-width: 768px) 50vw, 33vw"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-forest/0 transition group-hover:bg-forest/40" />
            <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between whitespace-normal text-left text-sm font-semibold text-forest-foreground opacity-0 transition group-hover:opacity-100">
              {img.caption}
              <Expand />
            </span>
          </Button>
        ))}
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-forest/95" />
        <Dialog.Content
          aria-describedby={undefined}
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            opener?.focus();
          }}
          className="fixed inset-0 z-[61] flex items-center justify-center p-4 outline-none"
        >
          <Dialog.Title className="sr-only">Image viewer</Dialog.Title>
          <Dialog.Close asChild>
            <Button
              size="icon"
              variant="secondary"
              aria-label="Close"
              title="Close"
              className="absolute top-4 right-4 h-11 w-11 rounded-full"
            >
              <X />
            </Button>
          </Dialog.Close>
          <Button
            size="icon"
            onClick={() => step(-1)}
            aria-label="Previous image"
            title="Previous image"
            className="absolute left-3 top-1/2 h-11 w-11 rounded-full md:left-8"
          >
            <ChevronLeft />
          </Button>
          <figure className="max-w-5xl">
            <img
              src={idx === null ? undefined : images[idx]?.src}
              alt={idx === null ? "" : images[idx]?.alt}
              className="max-h-[78dvh] max-w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-forest-foreground">
              {idx === null ? "" : images[idx]?.caption} · {idx === null ? 0 : idx + 1} /{" "}
              {images.length}
            </figcaption>
          </figure>
          <Button
            size="icon"
            onClick={() => step(1)}
            aria-label="Next image"
            title="Next image"
            className="absolute right-3 top-1/2 h-11 w-11 rounded-full md:right-8"
          >
            <ChevronRight />
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
