import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--feather)/0.3)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--marine)/0.15)_0%,transparent_50%)]" />
      
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8 animate-fade-up opacity-0">
            <MapPin size={14} className="text-marine" />
            <span className="text-xs sm:text-sm font-medium text-sleek-grey-dark">
              Australia-wide • Based in Collaroy, Sydney
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-forest leading-tight mb-4 sm:mb-6 animate-fade-up opacity-0 delay-100">
            Affordable Web Design{" "}
            <span className="text-marine">Australia-Wide</span> for Local Businesses
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-sleek-grey-dark max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-up opacity-0 delay-200 px-2">
            Professional small business websites for Australian tradies, cafes and service providers.
            Live in 1–2 days from a local Aussie web designer — no tech hassle, just results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 animate-fade-up opacity-0 delay-300 px-4 sm:px-0">
            <Button asChild variant="cta" size="lg" className="w-full sm:w-auto h-14 text-base">
              <a href="#contact">
                Get a Free Quote
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-12 text-base">
              <a href="tel:+61400000000" aria-label="Call Core Pages Sydney">Call Now</a>
            </Button>
          </div>

          {/* Trust Signal */}
          <div className="mt-10 sm:mt-12 animate-fade-up opacity-0 delay-400">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-sleek-grey-dark">
              <span>✓ Australian owned & operated</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ No lock-in contracts</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Live in 1–2 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;