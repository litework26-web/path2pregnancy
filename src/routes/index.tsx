import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fertility Reset — Maximize Your Chances of Getting Pregnant Naturally" },
      { name: "description", content: "A personalized fertility reset focused on detoxification, nutrition, supplements, lifestyle, and conception readiness. Start with the Baseline Audit." },
      { property: "og:title", content: "Fertility Reset — Maximize Your Chances of Getting Pregnant Naturally" },
      { property: "og:description", content: "A personalized fertility reset focused on detoxification, nutrition, supplements, lifestyle, and conception readiness." },
    ],
  }),
});

import { HeroSection } from "@/components/HeroSection";
import { StickyHeader } from "@/components/StickyHeader";
import { UrgencySection } from "@/components/UrgencySection";
import { WhoSection } from "@/components/WhoSection";
import { WhatWeAddress } from "@/components/WhatWeAddress";
import { HowItWorks } from "@/components/HowItWorks";
import { OffersSection } from "@/components/OffersSection";
import { TeamSection } from "@/components/TeamSection";
import { WhyItWorks } from "@/components/WhyItWorks";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { FooterDisclaimer } from "@/components/FooterDisclaimer";

function Index() {
  return (
    <>
      <StickyHeader />
      <HeroSection />
      <UrgencySection />
      <WhoSection />
      <WhatWeAddress />
      <HowItWorks />
      <OffersSection />
      <TeamSection />
      <WhyItWorks />
      <FaqSection />
      <FinalCta />
      <FooterDisclaimer />
    </>
  );
}
