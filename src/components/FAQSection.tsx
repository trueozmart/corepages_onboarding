import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to build my website?",
    answer: "Most websites are completed and live within 1–2 business days. Larger or more complex projects may take a bit longer, but I'll always give you a clear timeline upfront.",
  },
  {
    question: "What information do you need from me?",
    answer: "Just the basics: your business name, what services you offer, contact details, and any photos or content you'd like included. If you don't have everything ready, no worries—I can help guide you through it.",
  },
  {
    question: "Do you help with writing the content?",
    answer: "Absolutely. If you're not sure what to write, I can help craft professional copy that describes your business clearly and appeals to your customers.",
  },
  {
    question: "Can I use my own domain (mybusiness.com.au)?",
    answer: "Yes! With the Pro plan, you can use your own custom domain. If you already own one, I'll help connect it. If not, I can help you register one (domain registration is billed separately).",
  },
  {
    question: "Can I update my website later?",
    answer: "Of course. All plans include 3 content updates per year at no extra cost. Need more frequent changes? Just let me know and we can arrange something.",
  },
  {
    question: "What if I don't like the design?",
    answer: "Your satisfaction matters. I'll work with you to make sure the design fits your business. If something's not right, we'll refine it until you're happy.",
  },
  {
    question: "Is there a lock-in contract?",
    answer: "No lock-in contracts. You can cancel anytime. I believe in earning your business through quality, not trapping you with fine print.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-background section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-marine font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-forest">
            Common questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-4 sm:px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-heading font-medium text-forest hover:no-underline py-4 sm:py-5 text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sleek-grey-dark pb-4 sm:pb-5 leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;