import { StickyHeader } from "@/components/StickyHeader";
import { FertilityCrisisStats } from "@/components/FertilityCrisisStats";
import { FooterDisclaimer } from "@/components/FooterDisclaimer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/fertility-crisis")({
  component: FertilityCrisisPage,
  head: () => ({
    meta: [
      { title: "The Fertility Crisis — The Path to Pregnancy" },
      { name: "description", content: "The fertility crisis report on modern exposures, natural changes, and conception readiness." },
      { property: "og:title", content: "The Fertility Crisis — The Path to Pregnancy" },
      { property: "og:description", content: "The fertility crisis report on modern exposures, natural changes, and conception readiness." },
    ],
  }),
});

function FertilityCrisisPage() {
  return (
    <>
      <StickyHeader />
      <FertilityCrisisStats dramatic />
      <FooterDisclaimer />
    </>
  );
}