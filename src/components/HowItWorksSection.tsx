import { MessageSquare, Palette, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell me about your business",
    description: "Share your business name, what you do, and your contact details. We'll have a quick chat about what you need.",
  },
  {
    number: "02",
    icon: Palette,
    title: "I build your website",
    description: "I take time to understand your business and create a professional website that represents you perfectly.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go live in 1–2 days",
    description: "Your site goes live on corepages.com.au or your own domain. Share your link and start getting customers.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-forest section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-feather font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
            Three simple steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-marine/30" />
              )}
              
              <div className="text-center">
                {/* Number Badge */}
                <div className="relative inline-flex items-center justify-center mb-5 sm:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-marine/20 flex items-center justify-center group-hover:bg-marine/30 transition-colors">
                    <step.icon size={32} className="text-feather" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-marine text-primary-foreground rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold font-heading">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-lg sm:text-xl text-primary-foreground mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-feather/80 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;