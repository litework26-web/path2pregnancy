import { Droplets, Apple, Pill, Sunrise, Timer, Smile } from "lucide-react";

const tiles = [
  { icon: Droplets, label: "Detoxification" },
  { icon: Apple, label: "Nutrition" },
  { icon: Pill, label: "Supplements" },
  { icon: Sunrise, label: "Lifestyle Habits" },
  { icon: Timer, label: "Cycle Timing" },
  { icon: Smile, label: "Stress & Support" },
];

export function WhatWeAddress() {
  return (
    <section className="bg-accent/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-charcoal lg:text-4xl">What we address</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          We focus on the biggest inputs affecting conception readiness.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 md:grid-cols-6">
          {tiles.map((tile) => (
            <div key={tile.label} className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md">
              <tile.icon className="h-8 w-8 text-olive" />
              <span className="mt-4 text-sm font-semibold text-charcoal">{tile.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}