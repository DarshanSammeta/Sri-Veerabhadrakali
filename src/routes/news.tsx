import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { NewsContent } from "@/components/pages/NewsContent";
export const Route = createFileRoute("/news")({
  head: () =>
    pageHead(
      "Temple News and Announcements",
      "Updates awaiting approval by the temple administration.",
      "/news",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        title="Temple News and Announcements"
        description="Updates awaiting approval by the temple administration."
      />
      <NewsContent />
    </>
  );
}
