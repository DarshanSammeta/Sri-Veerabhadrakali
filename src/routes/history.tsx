import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { HistoryContent } from "@/components/pages/HistoryContent";
export const Route = createFileRoute("/history")({
  head: () =>
    pageHead(
      "Temple History and Heritage",
      "The temple\u2019s origins, heritage and traditions, documented with care.",
      "/history",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        title="Temple History and Heritage"
        description="The temple\u2019s origins, heritage and traditions, documented with care."
      />
      <HistoryContent />
    </>
  );
}
