import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { PrivacyPolicyContent } from "@/components/pages/PrivacyPolicyContent";
export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead(
      "Privacy Policy",
      "Website privacy notice \u2014 subject to approval by the temple administration.",
      "/privacy-policy",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageIntro
        title="Privacy Policy"
        description="Website privacy notice \u2014 subject to approval by the temple administration."
      />
      <PrivacyPolicyContent />
    </>
  );
}
