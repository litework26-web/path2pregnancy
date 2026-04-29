import { Button } from "@/components/ui/button";
import { FooterDisclaimer } from "@/components/FooterDisclaimer";
import { Input } from "@/components/ui/input";
import { StickyHeader } from "@/components/StickyHeader";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const donorDanLink = "https://calendly.com/abbybyrne0414/oda-fertility-clarity-call";
const standardLink = "https://calendly.com/abbybyrne0414/the-path-to-pregnancy-fertility-clarity-call";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Book a Fertility Clarity Call — The Path to Pregnancy" },
      {
        name: "description",
        content: "Enter a promo code or continue without one to book your Fertility Clarity Call.",
      },
      { property: "og:title", content: "Book a Fertility Clarity Call — The Path to Pregnancy" },
      {
        property: "og:description",
        content: "Enter a promo code or continue without one to book your Fertility Clarity Call.",
      },
    ],
  }),
});

function BookPage() {
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState("");

  const bookWithPromoCode = () => {
    if (promoCode.trim() === "DonorDan") {
      window.location.href = donorDanLink;
      return;
    }

    setError("That promo code is not recognized. Please try again or continue with no code.");
  };

  return (
    <>
      <StickyHeader />
      <main className="bg-background">
        <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">Book your call</p>
          <h1 className="mt-3 text-4xl font-bold text-charcoal lg:text-5xl">
            Start with the Fertility Clarity Call
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Enter your promo code if you have one, or continue without a code to choose your call time.
          </p>

          <div className="mt-10 w-full rounded-2xl border border-terracotta/15 bg-rose-accent p-6 text-left shadow-sm">
            <label htmlFor="promo-code" className="text-sm font-semibold text-charcoal">
              Promo code
            </label>
            <Input
              id="promo-code"
              value={promoCode}
              onChange={(event) => {
                setPromoCode(event.target.value.slice(0, 40));
                setError("");
              }}
              placeholder="Enter promo code"
              className="mt-2 bg-background"
            />
            {error && <p className="mt-2 text-sm font-medium text-destructive">{error}</p>}
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Button type="button" variant="cta" size="xl" onClick={bookWithPromoCode}>
                Apply Code & Book
              </Button>
              <Button variant="ctaOutline" size="xl" asChild>
                <a href={standardLink}>No Promo Code</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FooterDisclaimer />
    </>
  );
}