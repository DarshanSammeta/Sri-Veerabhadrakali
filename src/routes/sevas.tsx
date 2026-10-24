import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { SevasContent } from "@/components/pages/SevasContent";
export const Route = createFileRoute("/sevas")({
  head: () =>
    pageHead(
      "Sevas and Offerings",
      "Devotional offerings \u2014 availability and details await confirmation.",
      "/sevas",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        title="Sevas and Offerings"
        description="Devotional offerings \u2014 availability and details await confirmation."
      />
      <SevasContent />
    </>
  );
}
