import { Compass, LayoutList, Zap, Users } from "lucide-react";

const tiles = [
  { icon: Compass, title: "Clear starting point", text: "No guessing where to begin." },
  { icon: LayoutList, title: "Structured reset", text: "A real process, not random advice." },
  { icon: Zap, title: "Optimized attempts", text: "Each cycle becomes more intentional." },
  { icon: Users, title: "Support through each stage", text: "From baseline to deeper planning." },
];

export function WhyItWorks() {
  return (
    <section className="bg-accent/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-charcoal lg:text-4xl">Why this works</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <div key={tile.title} className="rounded-xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-md">
              <tile.icon className="mx-auto h-8 w-8 text-sage" />
              <h3 className="mt-5 text-base font-semibold text-charcoal">{tile.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tile.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}