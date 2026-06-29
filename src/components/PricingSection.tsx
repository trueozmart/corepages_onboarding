import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Professional single-page website",
  "Mobile & desktop friendly",
  "Your own custom domain (yourbusiness.com.au)",
  "Secure site (HTTPS)",
  "3 content updates per year",
  "Local support from Luke",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-card section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-marine font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-forest mb-3 sm:mb-4">
            Affordable Australian website pricing
          </h2>
          <p className="text-sleek-grey-dark max-w-xl mx-auto text-sm sm:text-base px-4">
            One simple plan for local businesses anywhere in Australia. No hidden fees, no lock-in contracts.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-md mx-auto mb-8 sm:mb-10">
          <div className="relative rounded-3xl p-6 sm:p-8 bg-forest text-primary-foreground border-2 border-marine card-hover">
            {/* Price */}
            <div className="mb-5 sm:mb-6 text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-heading font-bold text-primary-foreground">
                  $50
                </span>
                <span className="text-feather">/month</span>
              </div>
              <p className="text-sm mt-1 text-feather">or $600/year</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-feather" />
                  <span className="text-sm text-primary-foreground/90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-feather/70 mb-5 sm:mb-6 text-center">
              * Domain registration billed separately
            </p>

            {/* CTA */}
            <Button asChild variant="ctaLight" className="w-full h-12 sm:h-auto">
              <a href="#contact">Free Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
