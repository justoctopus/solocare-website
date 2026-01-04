import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  DollarSign, 
  Clock, 
  Shield, 
  TrendingUp,
  FileCheck,
  Users,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/MainLayout";

const painPoints = [
  {
    icon: Clock,
    title: "Drowning in Paperwork?",
    description: "Spend hours on billing instead of patient care? We handle everything so you can focus on what matters.",
  },
  {
    icon: DollarSign,
    title: "Losing Revenue to Denials?",
    description: "Claim denials can cost you thousands. Our 98% first-pass acceptance rate protects your bottom line.",
  },
  {
    icon: TrendingUp,
    title: "Cash Flow Unpredictable?",
    description: "Inconsistent payments disrupt your practice. We ensure steady, reliable revenue streams.",
  },
];

const benefits = [
  "Save 15-20 hours per week on admin tasks",
  "Reduce claim denials by up to 35%",
  "Get paid faster with optimized AR",
  "HIPAA-compliant processes",
  "Dedicated account manager",
  "No long-term contracts required",
];

const stats = [
  { value: "98%", label: "First-Pass Rate" },
  // { value: "Years of", label: "Experience" },
  {value: "Dedicated", label: "Years of Experience"},
  { value: "Multiple", label: "Practices Served" },
  { value: "45%", label: "Avg. Cost Savings" },
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-glow" />
        </div>

        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in">
              <Shield className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm text-primary-foreground/90">HIPAA Compliant Medical Billing</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Streamline Your Billing.{" "}
              <span className="text-gradient-accent">Focus on Your Patients.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Solo Care empowers independent healthcare practices with expert medical billing, 
              helping you cut costs, reduce denials, and reclaim your time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="gradient-accent text-accent-foreground shadow-lg hover:opacity-90 transition-all text-lg px-8 py-6">
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold mb-4">Common Challenges</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Running a Solo Practice is Hard Enough
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't let billing complexities hold you back. We've helped hundreds of independent practices overcome these challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow">
                  <point.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-primary font-semibold mb-4">The Solo Care Advantage</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Expert Billing, Built for{" "}
                <span className="text-gradient">Solo Practices</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We specialize in solo and small practices because we understand your unique challenges. 
                No complex systems. No corporate bureaucracy. Just personalized, expert billing support 
                that helps you thrive.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="gradient-primary shadow-glow hover:opacity-90 transition-opacity">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-md">
                    <FileCheck className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-display font-semibold text-foreground mb-1">Claims Submission</h4>
                    <p className="text-sm text-muted-foreground">Fast, accurate submissions</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-md">
                    <Zap className="w-8 h-8 text-accent mb-3" />
                    <h4 className="font-display font-semibold text-foreground mb-1">Quick Payments</h4>
                    <p className="text-sm text-muted-foreground">Optimized AR management</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-md">
                    <Users className="w-8 h-8 text-highlight mb-3" />
                    <h4 className="font-display font-semibold text-foreground mb-1">Dedicated Support</h4>
                    <p className="text-sm text-muted-foreground">Your personal account manager</p>
                  </div>
                  <div className="p-6 rounded-2xl gradient-primary shadow-glow">
                    <Shield className="w-8 h-8 text-primary-foreground mb-3" />
                    <h4 className="font-display font-semibold text-primary-foreground mb-1">100% Compliant</h4>
                    <p className="text-sm text-primary-foreground/80">HIPAA certified processes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-primary font-semibold mb-4">What Practices Say</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              Trusted by Solo Practitioners
            </h2>

            <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border shadow-lg">
              <div className="absolute top-6 left-8 text-6xl text-primary/20 font-serif">"</div>
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 relative z-10">
                Solo Care transformed my practice. I was spending 20+ hours a week on billing. 
                Now I focus on my patients while they handle everything. My revenue increased 
                by 30% in the first year.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">DR</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Dr. Rebecca Thompson</div>
                  <div className="text-sm text-muted-foreground">Family Medicine, Cherry Hill</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-3xl gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 gradient-glow" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Cut Costs and Boost Revenue?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Get a free practice assessment and see how much you could save.
              </p>
              <Button asChild size="lg" className="gradient-accent text-accent-foreground shadow-lg hover:opacity-90 transition-all text-lg px-8 py-6">
                <Link to="/contact">
                  Schedule Free Consultation
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

export default Index;
