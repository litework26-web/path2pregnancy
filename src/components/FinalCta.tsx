import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-terracotta py-14">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-bold text-terracotta-foreground lg:text-3xl">
          Start with the Baseline Audit
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-terracotta-foreground/80">
          Find out what may be standing in the way — and what to do next.
        </p>
        <Button
          variant="outline"
          size="xl"
          className="mt-8 border-2 border-terracotta-foreground bg-transparent text-terracotta-foreground hover:bg-terracotta-foreground/10 font-semibold"
        >
          Book the Baseline Audit
        </Button>
      </div>
    </section>
  );
}