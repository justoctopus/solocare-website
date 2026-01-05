import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Target, 
  Heart, 
  Users, 
  Award,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/MainLayout";

const values = [
  {
    icon: Heart,
    title: "Patient-First Philosophy",
    description: "We believe that efficient billing means more time for patient care. Our work supports your mission to heal.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We're not just a vendor—we're an extension of your practice. Your success is our success.",
  },
  {
    icon: Target,
    title: "Precision & Accuracy",
    description: "Every claim matters. Our meticulous processes ensure maximum reimbursements with minimal errors.",
  },
  {
    icon: ShieldCheck,
    title: "Unwavering Compliance",
    description: "HIPAA compliance isn't optional. We maintain the highest security and privacy standards.",
  },
];

//const milestones = [
//   { year: "2009", event: "Founded with a mission to help independent practices" },
//   { year: "2012", event: "Expanded services to include full revenue cycle management" },
//   { year: "2015", event: "Reached 100 active practice partnerships" },
//   { year: "2018", event: "Achieved 98% first-pass claim acceptance rate" },
//   { year: "2021", event: "Launched specialized solo practice division" },
//   { year: "2024", event: "Serving 500+ practices across the Northeast" },
// ];
const About = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -right-20 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold mb-4">About Solo Care</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Empowering Independent{" "}
              <span className="text-gradient-accent">Healthcare</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              We're on a mission to help solo practitioners thrive by removing the burden 
              of medical billing so they can focus on what matters most—their patients.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-primary font-semibold mb-4">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Born from Understanding
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Solo Care was founded with a simple observation: independent healthcare practitioners 
                  were drowning in paperwork while big billing companies focused on hospital systems.
                </p>
                <p>
                  We saw solo doctors spending evenings and weekends on billing instead of with their 
                  families. We saw talented physicians considering leaving independent practice because 
                  the administrative burden was simply too much.
                </p>
                <p>
                  That's why we built Solo Care—a medical billing company designed specifically for 
                  independent practices. We understand that you don't have a billing department. 
                  You don't have administrative staff. You have a passion for medicine and patients 
                  who depend on you.
                </p>
                <p className="font-medium text-foreground">
                  Based in Cherry Hill, New Jersey, we serve practices across the region with 
                  personalized, expert billing support that treats your practice like the unique 
                  business it is.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-glow rounded-3xl" />
              <div className="relative grid grid-cols-2 gap-4 p-4">
                <div className="p-6 rounded-2xl bg-card border border-border shadow-md">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <div className="font-display text-2xl font-bold text-foreground">Dedicated</div>
                  <div className="text-sm text-muted-foreground">Team</div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-md mt-8">
                  <Users className="w-8 h-8 text-accent mb-3" />
                  <div className="font-display text-2xl font-bold text-foreground">Multiple</div>
                  <div className="text-sm text-muted-foreground">Practices Served</div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-md">
                  <Award className="w-8 h-8 text-highlight mb-3" />
                  <div className="font-display text-3xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">First-Pass Rate</div>
                </div>
                <div className="p-6 rounded-2xl gradient-primary shadow-glow mt-8">
                  <ShieldCheck className="w-8 h-8 text-primary-foreground mb-3" />
                  <div className="font-display text-3xl font-bold text-primary-foreground">100%</div>
                  <div className="text-sm text-primary-foreground/80">HIPAA Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold mb-4">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Timeline Section  */}
      {/*<section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold mb-4">Our Journey</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Milestones Along the Way
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">*/}
              {/* Timeline line */}
             {/*} <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >*/}
                  {/* Dot */}
                  {/* <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full gradient-primary md:-translate-x-1/2 z-10" /> */}
                  
                  {/* Content */}
                  {/* <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}>
                    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <span className="inline-block px-3 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-semibold mb-2">
                        {milestone.year}
                      </span>
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    
      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-3xl gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 gradient-glow" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Join the Solo Care Family
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Let's discuss how we can support your practice.
              </p>
              <Button asChild size="lg" className="gradient-accent text-accent-foreground shadow-lg hover:opacity-90 transition-all text-lg px-8 py-6">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
