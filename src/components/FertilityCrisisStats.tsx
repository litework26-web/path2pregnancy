import { Button } from "@/components/ui/button";

const dangerStats = [
  {
    icon: null,
    number: "60%",
    title: "Ultra-Processed Foods Slash Your Fertility Odds by ~60%",
    body: "Higher intake of ultra-processed foods is linked to roughly 60% lower odds of fertility in women — even after adjusting for age, weight, and lifestyle.",
    detail:
      "Infertile women got 31% of their calories from UPF vs. much less in fertile women. Every extra 10% makes it worse.",
    source: "Source: McMaster University / NHANES, Nutrition and Health, 2026",
  },
  {
    icon: null,
    number: "3x",
    title: "Heavy Metals in Your Blood Triple Infertility Risk",
    body: "Women with higher blood levels of common heavy metals (especially lead and cadmium) face up to 3 times the risk of infertility — even at “normal” exposure levels most people ignore.",
    detail:
      "These metals build up silently from food, water, cosmetics, and the environment — and studies show infertile women often have significantly higher levels.",
    source: "Source: International Journal of Environmental Research and Public Health, 2020",
  },
];

const hopeStats = [
  {
    number: "48% vs 14%",
    title: "Diet Upgrades + Toxin Elimination + Exercise Nearly Triple Pregnancy Success",
    body: "Women who followed a natural lifestyle protocol (healthy whole-food diet, toxin reduction, and exercise) achieved a 48% clinical pregnancy rate — compared to only 14% in women who made no changes.",
    detail: "That’s over 3 times higher success — naturally, without drugs or invasive treatments.",
    source:
      "Source: Lifestyle intervention RCT in infertile women, Human Reproduction / Frontiers in Endocrinology, 2024",
  },
  {
    number: "nearly 3x",
    title: "Stress Remedies Dramatically Boost Conception Rates",
    body: "Women who used targeted stress-reduction techniques (alongside diet and lifestyle changes) saw pregnancy rates of 52–55% — compared to just 20% in control groups.",
    detail: "That’s nearly 3 times more pregnancies when you address the stress component head-on.",
    source: "Source: Mind-body programs in Fertility & Sterility studies",
  },
];

export function FertilityCrisisStats({ dramatic = false }: { dramatic?: boolean }) {
  return (
    <section id="fertility-crisis" className={`bg-background ${dramatic ? "py-20" : "py-14"}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className={`${dramatic ? "text-4xl lg:text-6xl" : "text-3xl lg:text-4xl"} font-bold leading-tight text-charcoal`}
          >
            Modern Life Is Quietly Destroying Your Fertility — But It Can Be Reversed Naturally
          </h2>
          <h3 className="mt-5 text-xl font-bold text-charcoal lg:text-2xl">
            The Shocking Truth Most Doctors Won’t Tell You
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            These everyday exposures are slashing your chances of building a tiny human… and almost
            no one is talking about them.
          </p>
        </div>

        <div className={`${dramatic ? "mt-14 gap-8" : "mt-10 gap-6"} grid lg:grid-cols-2`}>
          {dangerStats.map((stat, index) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-destructive/25 bg-card p-8 shadow-lg lg:p-10"
            >
              <div className="flex items-center gap-3 text-destructive">
                <span className="text-sm font-bold uppercase tracking-wider">{"\u200B"}</span>
              </div>
              <p
                className={`${dramatic ? "text-7xl lg:text-8xl" : "text-6xl lg:text-7xl"} mt-5 font-bold leading-none text-destructive`}
              >
                {stat.number}
              </p>
              <h4 className="mt-5 text-xl font-bold text-charcoal lg:text-2xl">{stat.title}</h4>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
                {stat.body}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
                {stat.detail}
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-charcoal lg:text-3xl">
            The Powerful Good News: Natural Changes Actually Work
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Your body can fight back — and our coaching uses exactly the proven steps that reverse
            these effects.
          </p>
        </div>

        <div className={`${dramatic ? "mt-10 gap-8" : "mt-8 gap-6"} grid lg:grid-cols-2`}>
          {hopeStats.map((stat, index) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-sage/30 bg-card p-8 shadow-lg lg:p-10"
            >
              <div className="flex items-center gap-3 text-sage">
                <span className="text-sm font-bold uppercase tracking-wider">{"\n"}</span>
              </div>
              <p
                className={`${dramatic ? "text-6xl lg:text-8xl" : "text-5xl lg:text-7xl"} mt-5 font-bold leading-none text-sage`}
              >
                {stat.number}
              </p>
              <h4 className="mt-5 text-xl font-bold text-charcoal lg:text-2xl">{stat.title}</h4>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
                {stat.body}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
                {stat.detail}
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.source}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`${dramatic ? "mt-16" : "mt-12"} mx-auto max-w-4xl rounded-2xl border border-border bg-rose-accent p-8 text-center shadow-xl lg:p-10`}
        >
          <h3 className="text-2xl font-bold text-charcoal lg:text-4xl">
            Ready to Reverse the Damage and Reclaim Your Fertility?
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Our natural fertility coaching program uses targeted diet upgrades, toxin elimination
            strategies (heavy metals, plastics, PFAS), smart exercise, and stress remedies to
            reverse these modern threats — without drugs or invasive procedures.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-charcoal">
            Take the first step today →
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="cta" size="xl">
              <a href="/#offers">Book Your Free Fertility Assessment Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
