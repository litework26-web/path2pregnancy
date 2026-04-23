import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do I need the Baseline Audit first?", a: "Yes. Every client starts with the Baseline Audit so we can identify what may be lowering conception readiness and recommend the right next step." },
  { q: "What is the difference between the biweekly and weekly Accelerator path?", a: "The weekly path offers more frequent checkpoints and closer implementation support. Both follow the same 90-day structure." },
  { q: "How do I know which offer is right for me?", a: "That is what the Baseline Audit is for. We assess your current situation and recommend the right path." },
  { q: "Do you only work with women who are already trying to conceive?", a: "No. We also work with women who want to improve their baseline before trying." },
  { q: "What happens if I need longer support?", a: "Clients who need a longer, higher-touch path may be invited into the Concierge Conception Program." },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-12">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold text-charcoal lg:text-4xl">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium text-charcoal hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}