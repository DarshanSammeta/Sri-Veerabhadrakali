import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { FestivalsContent } from "@/components/pages/FestivalsContent";
export const Route = createFileRoute("/festivals")({
  head: () =>
    pageHead(
      "Festivals and Celebrations",
      "Festival dates and programmes will be shared once confirmed.",
      "/festivals",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        title="Festivals and Celebrations"
        description="Festival dates and programmes will be shared once confirmed."
      />
      <FestivalsContent />
    </>
  );
}
