import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah M.",
    age: "34",
    situation: "Preconception",
    quote:
      "I was already healthy but wanted additional info on how to support fertility while staying calm. Abby was easy to talk to and helped me think clearly about natural things you can do from day to day. She shared insight about daily toxins to avoid, and it really helped me feel more in control. I feel more grounded and educated. Highly recommend!",
  },
  {
    name: "Emily Rodriguez",
    age: "36",
    situation: "Miami – Now Pregnant",
    quote:
      "After 2.5 years of trying and two failed IUIs, I got pregnant in just one month after doing the 7-Day Home Fertility Reset and starting the 90-Day Accelerator. We removed so many hidden toxins from our home and changed how we eat. I still can’t believe it worked that fast.",
  },
  {
    name: "Priya Patel",
    age: "39",
    situation: "Trying to Conceive for 3 years",
    quote:
      "At 39 with PCOS and irregular cycles, I was losing hope. After the Fertility Clarity Call and cleaning up my environment and diet, my cycles became regular within 6 weeks. I feel like my body is finally working with me.",
  },
  {
    name: "Aisha Thompson",
    age: "32",
    situation: "Currently Pregnant",
    quote:
      "I was already pregnant (after IVF) and wanted to optimize my health naturally. The toxin education and nutrition plan Abby gave me reduced my anxiety and helped me feel strong and prepared throughout pregnancy. My energy is so much better.",
  },
  {
    name: "Lauren Kim",
    age: "37",
    situation: "After 19 months of unexplained infertility",
    quote:
      "The 7-Day Home Fertility Reset was incredible. Abby stayed with us and completely transformed our kitchen and routines. We removed plastics, heavy metals sources, and processed foods. My husband even got on board. My energy is through the roof and we’re feeling so much more hopeful.",
  },
  {
    name: "Sophia Morales",
    age: "41",
    situation: "After 4 years of trying",
    quote:
      "Years of stress and poor sleep were destroying my hormones. The combination of stress tools, toxin reduction, and personalized nutrition helped me conceive naturally after my doctor said my chances were low. I’m now 12 weeks pregnant.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-charcoal lg:text-4xl">
          What Our Clients Are Saying
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl border border-terracotta/15 bg-rose-accent p-6 shadow-sm"
            >
              <div>
                <h3 className="text-base font-bold text-charcoal">{testimonial.name}</h3>
                <p className="text-xs font-medium text-muted-foreground">
                  {testimonial.age}, {testimonial.situation}
                </p>
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-charcoal/85">
                “{testimonial.quote}”
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}