import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-glow transition-transform group-hover:scale-105">
            <span className="text-primary-foreground font-display font-bold text-lg">SC</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            Solo<span className="text-primary">Care</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "relative font-medium transition-colors hover:text-primary",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-foreground/80"
              )}
            >
              {link.label}
              {location.pathname === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA & Phone */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:6095055874"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">(609) 505-5874</span>
          </a>
          <Button asChild className="gradient-primary shadow-glow hover:opacity-90 transition-opacity">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "py-2 font-medium transition-colors",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:6095055874"
            className="flex items-center gap-2 py-2 text-muted-foreground"
          >
            <Phone className="w-4 h-4" />
            <span>(609) 505-5874</span>
          </a>
          <Button asChild className="gradient-primary w-full mt-2">
            <Link to="/contact">Get Started</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
