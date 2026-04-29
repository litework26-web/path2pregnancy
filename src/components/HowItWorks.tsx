const steps = [
  { num: "01", title: "Fertility Clarity Call", text: "We assess what may be lowering your chances." },
  { num: "02", title: "Identify the biggest gaps", text: "We find what needs to change first." },
  { num: "03", title: "Choose the right path", text: "You receive the right level of support for your situation." },
  { num: "04", title: "Follow a structured reset", text: "You move through a clear, personalized process." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-charcoal lg:text-4xl">How it works</h2>
        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-1 flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+2rem)] top-6 hidden h-px w-[calc(100%-4rem)] bg-border md:block" />
              )}
              <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage/10">
                <span className="text-lg font-bold text-sage">{step.num}</span>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-charcoal">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}