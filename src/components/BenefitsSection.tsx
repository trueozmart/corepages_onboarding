import { Smartphone, MapPin, Zap, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every site looks perfect on phones, tablets, and desktops. Because that's how people browse.",
  },
  {
    icon: MapPin,
    title: "Local Aussie Support",
    description: "Based in Collaroy, servicing all of Australia. You're chatting with a local, not a call centre overseas.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Most sites delivered within 1–2 business days. Get online quickly and start attracting customers.",
  },
  {
    icon: Sparkles,
    title: "Simple & Stress-Free",
    description: "No tech jargon, no complicated processes. Just tell me about your business and I'll handle the rest.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-card section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-background rounded-2xl p-5 sm:p-6 border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-marine/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-marine/20 transition-colors">
                <benefit.icon size={22} className="text-marine" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg text-forest mb-2">
                {benefit.title}
              </h3>
              <p className="text-sleek-grey-dark text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;