import { Button } from "@/components/ui/button";
import { FooterDisclaimer } from "@/components/FooterDisclaimer";
import { StickyHeader } from "@/components/StickyHeader";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — The Path to Pregnancy" },
      {
        name: "description",
        content: "Contact The Path to Pregnancy by email or Instagram for fertility support.",
      },
      { property: "og:title", content: "Contact — The Path to Pregnancy" },
      {
        property: "og:description",
        content: "Contact The Path to Pregnancy by email or Instagram for fertility support.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <StickyHeader />
      <main className="bg-background">
        <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">Contact</p>
          <h1 className="mt-3 text-4xl font-bold text-charcoal lg:text-5xl">Get in touch</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Reach out directly to ask questions or start your path toward a calmer, more supported fertility journey.
          </p>
          <div className="mt-10 grid w-full gap-4 sm:grid-cols-2">
            <a
              href="mailto:abbybyrne0414@gmail.com"
              className="rounded-2xl border border-terracotta/15 bg-rose-accent p-6 text-left shadow-sm transition-colors hover:border-terracotta/35"
            >
              <span className="text-sm font-semibold text-muted-foreground">Email</span>
              <p className="mt-2 break-words text-lg font-bold text-charcoal">abbybyrne0414@gmail.com</p>
            </a>
            <a
              href="https://www.instagram.com/path2health07/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-terracotta/15 bg-rose-accent p-6 text-left shadow-sm transition-colors hover:border-terracotta/35"
            >
              <span className="text-sm font-semibold text-muted-foreground">Instagram</span>
              <p className="mt-2 text-lg font-bold text-charcoal">@path2health07</p>
            </a>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button variant="cta" size="xl" asChild>
              <a href="mailto:abbybyrne0414@gmail.com">Email Abby</a>
            </Button>
            <Button variant="ctaOutline" size="xl" asChild>
              <a href="https://www.instagram.com/path2health07/" target="_blank" rel="noreferrer">
                Message on Instagram
              </a>
            </Button>
          </div>
        </section>
      </main>
      <FooterDisclaimer />
    </>
  );
}