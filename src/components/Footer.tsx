import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/construction", label: "Construction" },
  { to: "/property", label: "Property" },
  { to: "/courier", label: "Courier" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/contact", label: "Contact" },
];

const socialIcons = [
  { Icon: Facebook, color: "hover:shadow-blue-500/30" },
  { Icon: Twitter, color: "hover:shadow-sky-500/30" },
  { Icon: Instagram, color: "hover:shadow-pink-500/30" },
  { Icon: Linkedin, color: "hover:shadow-blue-600/30" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute inset-0 noise" />

      {/* Animated gradient line at top */}
      <div className="relative h-px">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-teal-glow flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-heading font-bold text-lg">MH</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                MH <span className="text-gradient-emerald">GROUP</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Total Solutions Anything & Everything. Your trusted partner in Construction, Property, Courier, and Consultancy services.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${color} text-white/60 hover:text-primary`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-white/50 hover:text-primary transition-all duration-300 text-sm"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-5">Our Services</h3>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li className="hover:text-white/70 transition-colors">Residential & Commercial Construction</li>
              <li className="hover:text-white/70 transition-colors">Property Sales & Rentals</li>
              <li className="hover:text-white/70 transition-colors">Express Courier Services</li>
              <li className="hover:text-white/70 transition-colors">Business Consultancy</li>
              <li className="hover:text-white/70 transition-colors">Project Management</li>
              <li className="hover:text-white/70 transition-colors">Financial Advisory</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-5">Contact Us</h3>
            <div className="space-y-4 text-sm text-white/50">
              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin size={14} className="text-primary" />
                </div>
                <span className="pt-1.5">123 Business Avenue, London, UK</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                <span>+44 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail size={14} className="text-primary" />
                </div>
                <span>info@mhgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} MH Group. All rights reserved.</p>
          <p className="text-gradient-emerald font-heading font-medium text-sm">Total Solutions Anything & Everything</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
