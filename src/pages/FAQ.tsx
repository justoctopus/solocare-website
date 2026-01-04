import MainLayout from "@/components/MainLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, Phone } from "lucide-react";

const faqs = [
  {
    question: "What is medical billing and why do I need it?",
    answer:
      "Medical billing is the process of submitting and following up on claims with health insurance companies to receive payment for services rendered. As a solo practitioner, outsourcing this allows you to focus on patient care while ensuring accurate, timely reimbursements and reducing claim denials.",
  },
  {
    question: "How does Solo Care help reduce claim denials?",
    answer:
      "We use proven verification processes, accurate coding practices, and thorough claim scrubbing before submission. Our team stays current with payer requirements and catches errors before they become denials. When denials do occur, we handle appeals promptly and track patterns to prevent future issues.",
  },
  {
    question: "What types of practices do you work with?",
    answer:
      "We specialize in solo and small medical practices across various specialties including primary care, internal medicine, pediatrics, mental health, dermatology, and more. Our services are tailored to meet the unique needs of independent practitioners.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most practices are fully onboarded within 1-2 weeks. We handle the setup of your billing software, establish connections with payers, and train you on our communication process. During transition, we ensure no claims fall through the cracks.",
  },
  {
    question: "What are your fees and pricing structure?",
    answer:
      "We offer transparent, percentage-based pricing with no hidden fees. Our rates are competitive and scale with your practice volume. Contact us for a personalized quote based on your specific needs and claim volume.",
  },
  {
    question: "Do you handle patient billing and collections?",
    answer:
      "Yes, we manage the complete revenue cycle including patient statements, payment posting, and accounts receivable follow-up. We handle patient inquiries professionally, maintaining your practice's reputation while maximizing collections.",
  },
  {
    question: "What insurance companies do you work with?",
    answer:
      "We work with all major commercial insurers, Medicare, Medicaid, and most regional plans. Our team is experienced with the specific requirements of each payer, ensuring clean claims and faster payments.",
  },
  {
    question: "How do you ensure HIPAA compliance?",
    answer:
      "We maintain strict HIPAA compliance through secure encrypted systems, regular staff training, and comprehensive policies and procedures. All data transmission and storage meets or exceeds industry security standards.",
  },
  {
    question: "Will I have a dedicated account manager?",
    answer:
      "Absolutely. Every practice is assigned a dedicated billing specialist who understands your practice and serves as your primary point of contact. You'll never be passed around to different representatives.",
  },
  {
    question: "How do I track my practice's billing performance?",
    answer:
      "We provide regular reports showing key metrics like collection rates, days in AR, denial rates, and payment trends. You'll have full transparency into your revenue cycle with easy-to-understand dashboards and monthly reviews.",
  },
];

const FAQ = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 gradient-hero overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Common Questions</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Find answers to common questions about our medical billing
              services and how we can help your solo practice thrive.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're here to help. Reach out to discuss your specific needs and
              how Solo Care can support your practice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="gradient-primary shadow-glow hover:opacity-90 transition-opacity"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:6095055874" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (609) 505-5874
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQ;
