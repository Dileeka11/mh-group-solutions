import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/construction", label: "Construction" },
  { to: "/property", label: "Property" },
  { to: "/courier", label: "Courier" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">MH</span>
              </div>
              <span className="font-heading font-bold text-xl">
                MH <span className="text-primary-bright">GROUP</span>
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Total Solutions Anything & Everything. Your trusted partner in Construction, Property, Courier, and Consultancy services.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-background/70 hover:text-primary-bright transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Residential & Commercial Construction</li>
              <li>Property Sales & Rentals</li>
              <li>Express Courier Services</li>
              <li>Business Consultancy</li>
              <li>Project Management</li>
              <li>Financial Advisory</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary-bright" />
                <span>123 Business Avenue, London, UK</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-primary-bright" />
                <span>+44 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-primary-bright" />
                <span>info@mhgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <p>&copy; {new Date().getFullYear()} MH Group. All rights reserved.</p>
          <p>Total Solutions Anything & Everything</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
