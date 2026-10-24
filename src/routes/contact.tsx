import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { ContactContent } from "@/components/pages/ContactContent";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact the Temple",
      "Official contact information will appear here after verification.",
      "/contact",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        title="Contact the Temple"
        description="Official contact information will appear here after verification."
      />
      <ContactContent />
    </>
  );
}
