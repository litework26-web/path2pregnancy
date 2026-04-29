import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Path to Pregnancy — Maximize Your Chances Naturally" },
      {
        name: "description",
        content:
          "A personalized fertility path focused on detoxification, nutrition, supplements, lifestyle, cycle timing, and conception readiness.",
      },
      { property: "og:title", content: "The Path to Pregnancy — Maximize Your Chances Naturally" },
      {
        property: "og:description",
        content:
          "A personalized fertility path focused on detoxification, nutrition, supplements, lifestyle, cycle timing, and conception readiness.",
      },
    ],
  }),
});

import { HeroSection } from "@/components/HeroSection";
import { StickyHeader } from "@/components/StickyHeader";
import { WhoSection } from "@/components/WhoSection";
import { WhatWeAddress } from "@/components/WhatWeAddress";
import { FertilityCrisisStats } from "@/components/FertilityCrisisStats";
import { HowItWorks } from "@/components/HowItWorks";
import { OffersSection } from "@/components/OffersSection";
import { TeamSection } from "@/components/TeamSection";
import { WhyItWorks } from "@/components/WhyItWorks";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCta } from "@/components/FinalCta";
import { FooterDisclaimer } from "@/components/FooterDisclaimer";

function Index() {
  return (
    <>
      <StickyHeader />
      <HeroSection />
      <WhoSection />
      <WhatWeAddress />
      <FertilityCrisisStats />
      <HowItWorks />
      <OffersSection />
      <TeamSection />
      <WhyItWorks />
      <TestimonialsSection />
      <FinalCta />
      <FooterDisclaimer />
    </>
  );
}
