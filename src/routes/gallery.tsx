import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { GalleryContent } from "@/components/pages/GalleryContent";
export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead(
      "Temple Gallery",
      "Representative imagery \u2014 to be replaced with authorised photographs of the temple.",
      "/gallery",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        title="Temple Gallery"
        description="Representative imagery \u2014 to be replaced with authorised photographs of the temple."
      />
      <GalleryContent />
    </>
  );
}
