import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { AboutContent } from "@/components/pages/AboutContent";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead("About the Temple", "A place for prayer, devotion and sacred tradition.", "/about"),
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        title="About the Temple"
        description="A place for prayer, devotion and sacred tradition."
      />
      <AboutContent />
    </>
  );
}
