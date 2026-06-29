import { Coffee } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background section-padding">
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-6 sm:p-8 md:p-12 border border-border shadow-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-forest mb-4 sm:mb-6">
              Hello, I'm Luke
            </h2>
            
            <div className="space-y-4 text-sleek-grey-dark leading-relaxed text-sm sm:text-base">
              <p>
                I'm a Sydney local based in <strong className="text-forest">Collaroy</strong> on 
                the Northern Beaches. I've spent years building clean, effective websites for 
                businesses of all sizes.
              </p>
              
              <p>
                I started <strong className="text-forest">Core Pages</strong> because I saw too 
                many local businesses either paying way too much for simple websites, or struggling 
                with clunky DIY builders. Neither option works.
              </p>
              
              <p>
                My goal is simple: help local Sydney businesses get online with professional 
                websites at honest prices. No agency overhead, no tech headaches—just quality 
                work from someone who understands your needs.
              </p>
            </div>
            
            {/* Coffee CTA */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
              <div className="flex items-center gap-3 text-marine">
                <Coffee size={20} />
                <span className="font-medium text-sm">
                  Always happy to meet for a coffee and a chat about your business.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;