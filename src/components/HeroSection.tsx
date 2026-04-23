import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-charcoal lg:text-5xl">
              Maximize your body's chances of getting pregnant naturally
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A personalized fertility reset focused on detoxification, nutrition, supplements, lifestyle, and conception readiness.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button variant="cta" size="xl">Start with the Baseline Audit</Button>
              <Button variant="ctaOutline" size="xl">See How It Works</Button>
            </div>
        </div>
      </div>
    </section>
  );
}