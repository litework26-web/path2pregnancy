import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ivory/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-heading text-lg font-bold text-charcoal">The Path to Pregnancy</Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <Link to="/fertility-crisis" className="hover:text-charcoal transition-colors">The Fertility Crisis</Link>
          <a href="/#how-it-works" className="hover:text-charcoal transition-colors">How It Works</a>
          <a href="/#offers" className="hover:text-charcoal transition-colors">Offers</a>
          <a href="/#team" className="hover:text-charcoal transition-colors">Team</a>
          <a href="/#testimonials" className="hover:text-charcoal transition-colors">Testimonials</a>
        </nav>
        <Button variant="cta" size="sm">Book Your Fertility Clarity Call</Button>
      </div>
    </header>
  );
}