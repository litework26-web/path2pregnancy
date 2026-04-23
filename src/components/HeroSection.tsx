import heroImage from "@/assets/hero-image.jpg";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-charcoal lg:text-5xl xl:text-6xl">
              Maximize your body's chances of getting pregnant naturally
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A personalized fertility reset focused on detoxification, nutrition, supplements, lifestyle, and conception readiness.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="cta" size="xl">Start with the Baseline Audit</Button>
              <Button variant="ctaOutline" size="xl">See How It Works</Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Woman in a calm, healthy setting preparing for pregnancy"
              className="w-full max-w-lg rounded-2xl object-cover shadow-2xl"
              width={960}
              height={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}