import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { DarshanContent } from "@/components/pages/DarshanContent";
export const Route = createFileRoute("/darshan")({
  head: () =>
    pageHead(
      "Darshan Information",
      "Timings and guidance for a peaceful temple visit.",
      "/darshan",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        title="Darshan Information"
        description="Timings and guidance for a peaceful temple visit."
      />
      <DarshanContent />
    </>
  );
}
