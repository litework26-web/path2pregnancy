import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const offers = [
  {
    title: "Fertility Reset & Conception Baseline",
    price: "$150",
    priceSub: null,
    description: "A 1:1 baseline audit designed to identify what may be lowering conception readiness and what needs to be fixed first.",
    items: [
      "Cycle and timing review",
      "Lifestyle and nutrition review",
      "Supplement review",
      "Written summary",
      "Personalized conception game plan",
      "Next-step recommendation",
    ],
    cta: "Book the Baseline Audit",
    featured: false,
  },
  {
    title: "90-Day Conception Accelerator",
    price: "Starting from $1,800",
    priceSub: "Weekly path available from $2,400",
    description: "A structured 90-day fertility reset designed to improve conception readiness through nutrition, supplements, detoxification, cycle timing, and lifestyle optimization.",
    items: [
      "Cycle-by-cycle optimization",
      "Structured checkpoints",
      "Nutrition and supplement protocol",
      "Detox and replacement guidance",
      "Messaging support",
      "Personalized action steps",
    ],
    cta: "Apply for the Accelerator",
    featured: false,
  },
  {
    title: "Concierge Conception Program",
    price: "6 months from $6,000",
    priceSub: null,
    description: "A higher-touch fertility path for women who want closer guidance, priority access, deeper strategy, and support across multiple cycles.",
    items: [
      "Priority support",
      "Closer protocol adjustments",
      "Multi-cycle planning",
      "Deeper strategy when progress stalls",
      "Partner and emotional support",
      "Clear next-step planning",
    ],
    cta: "Apply for Concierge",
    featured: true,
  },
];

export function OffersSection() {
  return (
    <section className="bg-accent/30 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-charcoal lg:text-4xl">Choose your starting point</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-xl ${
                offer.featured
                  ? "border-terracotta/30 bg-rose-accent/10 shadow-xl ring-1 ring-terracotta/20"
                  : "border-border bg-card"
              }`}
            >
              {offer.featured && (
                <div className="absolute -top-3 left-6 flex items-center gap-1 rounded-full bg-terracotta px-4 py-1 text-xs font-semibold text-white">
                  <Star className="h-3 w-3" /> Most Private
                </div>
              )}
              <h3 className="text-xl font-bold text-charcoal">
                {offer.title}
              </h3>
              <p className={`mt-3 text-2xl font-bold ${offer.featured ? "text-terracotta" : "text-terracotta"}`}>
                {offer.price}
              </p>
              {offer.priceSub && (
                <p className="mt-1 text-xs text-muted-foreground">{offer.priceSub}</p>
              )}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {offer.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {offer.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${offer.featured ? "text-terracotta" : "text-sage"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={offer.featured ? "cta" : "cta"}
                size="xl"
                className="mt-8 w-full"
              >
                {offer.cta}
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="cta" size="xl">Book the Baseline Audit</Button>
        </div>
      </div>
    </section>
  );
}