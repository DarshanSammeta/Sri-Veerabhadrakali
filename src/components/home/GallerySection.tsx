import { ArrowRight } from "lucide-react";

import { SectionHead } from "@/components/temple/Reveal";
import { Gallery } from "@/components/temple/Gallery";

import { Btn } from "@/components/layout/TempleLink";
import { galleryImages } from "@/content/experiences";

export function GallerySection() {
  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Photo Gallery"
          title="Glimpses of Divine Devotion"
          text="Representative imagery — to be replaced with authorised photographs of the temple."
        />
        <div className="mt-12">
          <Gallery images={galleryImages} />
        </div>
        <div className="mt-8 text-center">
          <Btn href="/gallery">
            View Temple Gallery <ArrowRight />
          </Btn>
        </div>
      </div>
    </section>
  );
}
