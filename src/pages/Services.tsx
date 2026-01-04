import { Link } from "react-router-dom";
import { 
  ArrowRight,
  FileText,
  Code,
  TrendingDown,
  ShieldCheck,
  CreditCard,
  UserCheck,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/MainLayout";

const services = [
  {
    icon: FileText,
    title: "Medical Billing & Claims",
    description: "Complete end-to-end claims management from submission to payment posting. We ensure every claim is accurate and submitted promptly.",
    features: ["Electronic claims submission", "Real-time tracking", "Payment posting", "ERA/EOB processing"],
  },
  {
    icon: Code,
    title: "Medical Coding",
    description: "Certified coders ensure accurate ICD-10, CPT, and HCPCS coding to maximize reimbursements and minimize compliance risks.",
    features: ["ICD-10 & CPT coding", "Code optimization", "Compliance audits", "Regular updates training"],
  },
  {
    icon: TrendingDown,
    title: "Denial Management",
    description: "Aggressive follow-up on denied claims with root cause analysis to prevent future denials and recover lost revenue.",
    features: ["Appeals management", "Root cause analysis", "Prevention strategies", "Recovery tracking"],
  },
  {
    icon: CreditCard,
    title: "Accounts Receivable",
    description: "Proactive AR management to accelerate payments, reduce aging, and maintain healthy cash flow for your practice.",
    features: ["Aging analysis", "Follow-up protocols", "Patient collections", "AR optimization"],
  },
  {
    icon: UserCheck,
    title: "Credentialing",
    description: "Complete provider enrollment and credentialing services to get you in-network with major payers faster.",
    features: ["Provider enrollment", "Re-credentialing", "CAQH management", "Payer negotiations"],
  },
  {
    icon: ShieldCheck,
    title: "Insurance Verification",
    description: "Real-time eligibility verification to reduce claim rejections and ensure you get paid for every service rendered.",
    features: ["Eligibility checks", "Prior authorizations", "Benefits verification", "Coverage updates"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    description: "We analyze your current billing processes and identify improvement opportunities.",
  },
  {
    step: "02",
    title: "Custom Setup",
    description: "We configure our systems to integrate seamlessly with your practice workflow.",
  },
  {
    step: "03",
    title: "Seamless Transition",
    description: "Our team handles the transition with zero disruption to your practice.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "Dedicated account manager and 24/7 support for all your billing needs.",
  },
];

const Services = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold mb-4">Our Services</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Comprehensive Medical Billing{" "}
              <span className="text-gradient-accent">Solutions</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              From claims submission to denial management, we handle every aspect of your revenue cycle 
              so you can focus on what you do best—caring for patients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold mb-4">How It Works</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Getting Started is Easy
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our streamlined onboarding process ensures a smooth transition with zero disruption to your practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-glow">
                    <span className="font-display text-3xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Solo Practices */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-primary font-semibold mb-4">Why Solo Practices Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Built for Independents, Not Hospitals
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  What Big Companies Offer
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✗</span>
                    Cookie-cutter solutions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✗</span>
                    Long hold times for support
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✗</span>
                    Complex pricing structures
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive">✗</span>
                    Multi-year contracts
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl gradient-primary shadow-glow">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-4">
                  What Solo Care Delivers
                </h3>
                <ul className="space-y-3 text-primary-foreground/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    Personalized service tailored to you
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    Direct access to your account manager
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    Transparent, percentage-based pricing
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    Flexible month-to-month agreements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-3xl gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 gradient-glow" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Optimize Your Billing?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Get a free practice assessment and customized proposal.
              </p>
              <Button asChild size="lg" className="gradient-accent text-accent-foreground shadow-lg hover:opacity-90 transition-all text-lg px-8 py-6">
                <Link to="/contact">
                  Get Free Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </MainLayout>
  );
};

export default Services;
