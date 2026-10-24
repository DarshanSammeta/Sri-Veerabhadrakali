import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { VisitContent } from "@/components/pages/VisitContent";
export const Route = createFileRoute("/visit")({
  head: () =>
    pageHead(
      "Plan Your Visit",
      "Address, directions, facilities and travel information.",
      "/visit",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        title="Plan Your Visit"
        description="Address, directions, facilities and travel information."
      />
      <VisitContent />
    </>
  );
}
