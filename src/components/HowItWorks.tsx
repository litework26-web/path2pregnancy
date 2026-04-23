const steps = [
  { num: "01", title: "Baseline Audit", text: "We assess what may be lowering your chances." },
  { num: "02", title: "Identify the biggest gaps", text: "We find what needs to change first." },
  { num: "03", title: "Choose the right path", text: "You receive the right level of support for your situation." },
  { num: "04", title: "Follow a structured reset", text: "You move through a clear, personalized process." },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-charcoal lg:text-4xl">How it works</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-border md:block" />
              )}
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/10">
                <span className="text-lg font-bold text-sage">{step.num}</span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-charcoal">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}