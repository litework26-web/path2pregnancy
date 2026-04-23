import { AlertTriangle, Baby, HeartPulse, Shield, Activity, Brain, Stethoscope, Siren } from "lucide-react";

const stats = [
  { number: "1 in 10", label: "babies are born preterm", source: "CDC, U.S. data" },
  { number: "1 in 33", label: "babies are born with a birth defect", source: "CDC" },
  { number: "1 in 5", label: "infant deaths are caused by birth defects", source: "CDC" },
];

const pregnancyRisks = [
  { icon: AlertTriangle, label: "Miscarriage" },
  { icon: HeartPulse, label: "Gestational Diabetes" },
  { icon: Activity, label: "Preeclampsia" },
  { icon: Siren, label: "Preterm Birth" },
];

const babyRisks = [
  { icon: Baby, label: "Low Birth Weight" },
  { icon: Shield, label: "Birth Defects" },
  { icon: Stethoscope, label: "NICU / Early Complications" },
  { icon: Brain, label: "Developmental Challenges" },
];

export function UrgencySection() {
  return (
    <section className="bg-urgency-bg py-20 text-urgency-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">Your baseline before pregnancy matters</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-80">
            Poor preconception health can affect both pregnancy outcomes and baby health.
          </p>
        </div>

        {/* Stat cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.number} className="rounded-xl border border-urgency-foreground/10 bg-urgency-foreground/5 p-8 text-center">
              <p className="text-5xl font-bold text-terracotta">{stat.number}</p>
              <p className="mt-3 text-base font-medium">{stat.label}</p>
              <p className="mt-2 text-xs uppercase tracking-wider opacity-50">{stat.source}</p>
            </div>
          ))}
        </div>

        {/* Risk grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-center text-xl font-semibold text-rose-accent">Pregnancy risks</h3>
            <div className="grid grid-cols-2 gap-4">
              {pregnancyRisks.map((risk) => (
                <div key={risk.label} className="flex items-center gap-3 rounded-lg border border-urgency-foreground/10 bg-urgency-foreground/5 p-4">
                  <risk.icon className="h-5 w-5 shrink-0 text-rose-accent" />
                  <span className="text-sm font-medium">{risk.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-center text-xl font-semibold text-rose-accent">Baby risks</h3>
            <div className="grid grid-cols-2 gap-4">
              {babyRisks.map((risk) => (
                <div key={risk.label} className="flex items-center gap-3 rounded-lg border border-urgency-foreground/10 bg-urgency-foreground/5 p-4">
                  <risk.icon className="h-5 w-5 shrink-0 text-rose-accent" />
                  <span className="text-sm font-medium">{risk.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed opacity-70">
          Good prepregnancy care can reduce avoidable risks and improve the chances of a healthier pregnancy journey. ACOG notes that prepregnancy health affects outcomes including preeclampsia, gestational diabetes, preterm birth, and other complications.
        </p>
      </div>
    </section>
  );
}