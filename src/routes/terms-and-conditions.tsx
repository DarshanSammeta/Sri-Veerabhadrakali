import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { TermsAndConditionsContent } from "@/components/pages/TermsAndConditionsContent";
export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    pageHead(
      "Terms and Conditions",
      "Website terms \u2014 subject to approval by the temple administration.",
      "/terms-and-conditions",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        title="Terms and Conditions"
        description="Website terms \u2014 subject to approval by the temple administration."
      />
      <TermsAndConditionsContent />
    </>
  );
}
