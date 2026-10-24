import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { FaqContent } from "@/components/pages/FaqContent";
export const Route = createFileRoute("/faq")({
  head: () =>
    pageHead(
      "Frequently Asked Questions",
      "Answers being verified by the temple administration.",
      "/faq",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        title="Frequently Asked Questions"
        description="Answers being verified by the temple administration."
      />
      <FaqContent />
    </>
  );
}
