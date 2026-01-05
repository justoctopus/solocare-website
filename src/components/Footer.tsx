import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Simplify Your Billing?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of solo practices that have streamlined their revenue cycle with Solo Care.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-accent text-accent-foreground font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            Get Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-lg">SC</span>
                </div>
                <span className="font-display font-bold text-xl text-background">
                  Solo<span className="text-primary">Care</span>
                </span>
              </div>
              <p className="text-background/70 text-sm leading-relaxed">
                Empowering solo healthcare practices with expert medical billing solutions. 
                Focus on your patients, we'll handle the rest.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-background mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  "Medical Billing",
                  "Medical Coding",
                  "Denial Management",
                  "Credentialing",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-background/70 hover:text-primary transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-semibold text-background mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:6095055874"
                    className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    (609) 505-5874
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@solocarehub.com"
                    className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    info@solocarehub.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-background/70 text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  Cherry Hill, New Jersey
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-background/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-background/50 text-sm">
                © {new Date().getFullYear()} Solo Care. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-background/50 text-xs">HIPAA Compliant</span>
                <span className="text-background/50 text-xs">•</span>
                <span className="text-background/50 text-xs">Trusted by Solo Practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
