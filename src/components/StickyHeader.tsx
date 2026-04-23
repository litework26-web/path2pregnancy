import { Button } from "@/components/ui/button";

export function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ivory/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <span className="font-heading text-lg font-bold text-charcoal">Fertility Reset</span>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#how-it-works" className="hover:text-charcoal transition-colors">How It Works</a>
          <a href="#offers" className="hover:text-charcoal transition-colors">Offers</a>
          <a href="#team" className="hover:text-charcoal transition-colors">Team</a>
          <a href="#faq" className="hover:text-charcoal transition-colors">FAQ</a>
        </nav>
        <Button variant="cta" size="sm">Book the Baseline Audit</Button>
      </div>
    </header>
  );
}