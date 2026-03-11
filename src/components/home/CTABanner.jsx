import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary">
      {/* Abstract geometric background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 opacity-50 mix-blend-screen" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-background rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-30" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Secure Your Business?
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-10 max-w-2xl">
            Join 3500+ businesses globally who rely on Sporada Secure for their mission-critical surveillance and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" variant="secondary" asChild className="h-14 px-8 text-base font-bold shadow-xl hover:shadow-2xl transition-all">
              <Link to="/contact">Get a Free Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base font-bold text-white border-white/30 hover:bg-white/10 hover:text-white transition-colors bg-transparent backdrop-blur-sm">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
