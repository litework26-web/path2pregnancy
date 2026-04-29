import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Check, Star } from "lucide-react";

const offers = [
  {
    title: "Fertility Reset & Conception Baseline",
    price: "$150",
    priceSub: null,
    description:
      "A 1:1 Fertility Clarity Call designed to identify what may be lowering conception readiness and what needs to be fixed first.",
    items: [
      "Comprehensive cycle tracking review + optimal conception timing plan",
      "Full lifestyle & environmental toxin audit (plastics, heavy metals, PFAS, UPF exposure)",
      "Detailed nutrition assessment + personalized preconception meal framework",
      "Full supplement review with safe, fertility-specific recommendations",
      "Written summary report with your biggest fertility blockers identified",
      "Personalized 30-day conception game plan with daily/weekly priorities",
      "Clear next-step recommendations tailored to your exact situation",
    ],
    cta: "Book Your Fertility Clarity Call",
    ctaNote: null,
    featured: false,
  },
  {
    title: "90-Day Conception Accelerator",
    price: "Starting from $2,200",
    priceSub: "Weekly path available from $2,400",
    description:
      "A structured 90-day fertility reset designed to improve conception readiness through nutrition, supplements, detoxification, cycle timing, and lifestyle optimization.",
    items: [
      "Cycle-by-cycle monitoring and real-time adjustments for your unique cycle",
      "Weekly structured checkpoints to track progress and remove roadblocks fast",
      "Personalized nutrition protocol focused on removing ultra-processed foods and adding fertility-boosting meals",
      "Targeted detoxification plan (heavy metals, phthalates, PFAS, and daily toxin reduction)",
      "Custom supplement protocol with exact dosages and timing",
      "Ongoing messaging support between sessions for questions and motivation",
      "Weekly personalized action steps + habit tracking to build momentum",
    ],
    cta: "Book Your Fertility Clarity Call First",
    ctaNote: "Fertility Clarity Call required before starting",
    featured: false,
  },
  {
    title: "7-Day Home Fertility Reset",
    price: "$4,500 + travel expenses",
    priceSub: null,
    description:
      "I come to your home for a full 7 days to completely reset your environment and daily habits for optimal fertility. This is our most transformative experience.",
    items: [
      "Deep home detox — we remove hidden plastics, PFAS, heavy metals sources, and ultra-processed food triggers from your kitchen and living spaces",
      "Full pantry + fridge makeover with fertility-supporting foods",
      "Hands-on grocery shopping training and label-reading mastery",
      "Daily personalized movement sessions and meal preparation routines",
      "Stress-reduction rituals and supportive daily structure",
      "Complete “Fertility Home Blueprint” so the changes last long after I leave",
    ],
    footer:
      "Perfect for women who are ready for fast, deep change and want to see and feel the difference in their own home.\nLimited to 2–3 spots per month.",
    cta: "Book Your Fertility Clarity Call First",
    ctaNote: "Fertility Clarity Call required before booking the 7-Day Home Fertility Reset",
    featured: true,
  },
];

export function OffersSection() {
  return (
    <section id="offers" className="bg-accent/30 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-charcoal lg:text-4xl">
          Choose your starting point
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-xl ${
                offer.featured
                  ? "border-terracotta/30 bg-rose-accent shadow-xl ring-1 ring-terracotta/20"
                  : "border-border bg-card"
              }`}
            >
              {offer.featured && (
                <div className="absolute -top-3 left-6 flex items-center gap-1 rounded-full bg-terracotta px-4 py-1 text-xs font-semibold text-white">
                  <Star className="h-3 w-3" /> Most Private
                </div>
              )}
              <h3 className="text-xl font-bold text-charcoal">{offer.title}</h3>
              <p
                className={`mt-3 text-2xl font-bold ${offer.featured ? "text-terracotta" : "text-terracotta"}`}
              >
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
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {"footer" in offer && offer.footer && (
                <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-charcoal">
                  {offer.footer}
                </p>
              )}
              <Button variant={offer.featured ? "cta" : "cta"} size="xl" className="mt-8 w-full" asChild>
                <Link to="/book">{offer.cta}</Link>
              </Button>
              {offer.ctaNote && (
                <p className="mt-2 text-center text-xs text-muted-foreground">{offer.ctaNote}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
