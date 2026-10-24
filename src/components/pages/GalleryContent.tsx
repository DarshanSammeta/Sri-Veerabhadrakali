import { galleryImages } from "@/content/experiences";
import { Gallery } from "@/components/temple/Gallery";

export function GalleryContent() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <Gallery images={galleryImages} />
        <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          {galleryImages.map((img) => (
            <p key={img.src}>{img.caption} — representative image</p>
          ))}
        </div>
      </div>
    </>
  );
}
