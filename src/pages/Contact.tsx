import { useState } from "react";
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  Send,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import NoFooterLayout from "@/components/NoFooterLayout";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "(609) 505-5874",
    href: "tel:6095055874",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@solocarehub.com",
    href: "mailto:info@solocarehub.com",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Cherry Hill, New Jersey",
    href: null,
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Fri: 9AM - 6PM EST",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceName: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
const FORMSPREE_URL = "https://formspree.io/f/mgovdojl";
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        practiceName: formData.practiceName,
        message: formData.message,
      }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data?.error || "Failed to submit");

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
      setFormData({
      name: "",
      email: "",
      phone: "",
      practiceName: "",
      message: "",
    });
  } catch (err: any) {
    toast({
      title: "Submission failed",
      description: err?.message || "Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
  };
    // Simulate form submission
  //   await new Promise((resolve) => setTimeout(resolve, 1500));
    
  //   toast({
  //     title: "Message Sent!",
  //     description: "Thank you for reaching out. We'll get back to you within 24 hours.",
  //   });
    
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     practiceName: "",
  //     message: "",
  //   });
  //   setIsSubmitting(false);
  // };

  return (
    <NoFooterLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-semibold mb-4">Contact Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Let's Start a{" "}
              <span className="text-gradient-accent">Conversation</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Ready to streamline your billing? Get in touch for a free consultation 
              and practice assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have questions about our services or want to schedule a free 
                practice assessment, we're here to help. Reach out and we'll respond 
                within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="mt-12 p-6 rounded-2xl bg-secondary/50 border border-border">
                <h3 className="font-semibold text-foreground mb-4">Why Choose Solo Care?</h3>
                <ul className="space-y-3">
                  {[
                    "Free initial consultation",
                    "No long-term contracts required",
                    "HIPAA-compliant processes",
                    "Dedicated account manager",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-lg">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Request a Free Consultation
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Dr. John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 555-5555"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="practiceName">Practice Name</Label>
                      <Input
                        id="practiceName"
                        name="practiceName"
                        placeholder="Smith Family Medicine"
                        value={formData.practiceName}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your practice and billing challenges..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gradient-primary shadow-glow hover:opacity-90 transition-opacity h-14 text-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our privacy policy. 
                    We'll never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-card border border-border">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Serving Cherry Hill & Beyond
              </h3>
              <p className="text-muted-foreground">
                While we're based in Cherry Hill, New Jersey, we serve practices throughout 
                the Northeast and can work with practices nationwide through our secure, 
                cloud-based systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </NoFooterLayout>
  );
};

export default Contact;
