import tradiesImage from "@/assets/tradies-contractors.jpg";
import cafeImage from "@/assets/cafe-hospitality.jpg";
import serviceImage from "@/assets/service-business.jpg";
import retailImage from "@/assets/retail-shop.jpg";

const businessTypes = [
  {
    image: tradiesImage,
    title: "Tradies & Contractors",
    description: "Plumbers, electricians, builders, painters. Show off your work and get more local jobs.",
  },
  {
    image: cafeImage,
    title: "Cafes & Hospitality",
    description: "Display your menu, hours, and atmosphere. Help hungry customers find you.",
  },
  {
    image: serviceImage,
    title: "Service Businesses",
    description: "Cleaners, gardeners, pet services. Professional presence that builds trust.",
  },
  {
    image: retailImage,
    title: "Retail & Local Shops",
    description: "Boutiques, gift shops, specialty stores. Showcase your products online.",
  },
];

const businessList = [
  "Plumbers", "Electricians", "Builders", "Painters", "Roofers", "Landscapers",
  "Carpenters", "Cafes", "Restaurants", "Bakeries", "Barbers", "Hair Salons",
  "Beauty Therapists", "Cleaners", "Gardeners", "Pet Groomers", "Dog Walkers",
  "Personal Trainers", "Photographers", "Florists", "Mechanics", "and more..."
];

const WhoWeHelpSection = () => {
  return (
    <section id="who-we-help" className="bg-forest section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-3 sm:mb-4">
            Websites for local Australian businesses
          </h2>
          <p className="text-marine/80 max-w-xl mx-auto text-sm sm:text-base px-4">
            Helping tradies, cafes and service businesses right across Australia — from Sydney and Melbourne to Brisbane, Perth, Adelaide and every regional town in between.
          </p>
        </div>

        {/* Business Type Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {businessTypes.map((type) => (
            <div
              key={type.title}
              className="group bg-forest-dark rounded-2xl overflow-hidden border border-marine/20 card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={type.image}
                  alt={`${type.title} website design Australia – Core Pages`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-primary-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-marine/70 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Business List */}
        <div className="bg-forest-dark rounded-2xl p-5 sm:p-8 border border-marine/20">
          <h3 className="font-heading font-semibold text-primary-foreground mb-4 text-center text-sm sm:text-base">
            We build websites for:
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {businessList.map((business) => (
              <span
                key={business}
                className="inline-block bg-marine/10 text-marine/80 px-3 py-1.5 rounded-full text-xs sm:text-sm"
              >
                {business}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
