import { Heart, Target, RefreshCw } from "lucide-react";

const cards = [
  { icon: Heart, title: "Preparing for pregnancy", text: "You want to improve your baseline before trying." },
  { icon: Target, title: "Trying to conceive", text: "You want a more structured, optimized plan." },
  { icon: RefreshCw, title: "Need a health reset first", text: "You know your current habits or environment need work." },
];

export function WhoSection() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-charcoal lg:text-4xl">Who this is for</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage/10">
                <card.icon className="h-6 w-6 text-sage" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-charcoal">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}