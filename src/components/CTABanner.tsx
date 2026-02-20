import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

const CTABanner = ({
  title = "Need a Total Solution?",
  subtitle = "Contact us today and let's discuss how MH Group can help you.",
}: CTABannerProps) => (
  <section className="relative py-24 overflow-hidden">
    {/* Aurora gradient background */}
    <div
      className="absolute inset-0 bg-gradient-aurora bg-[length:300%_300%] animate-gradient-shift"
    />

    {/* Floating decorative elements */}
    <motion.div
      className="absolute top-10 right-[10%] w-32 h-32 border border-white/10 rounded-full"
      animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-8 left-[8%] w-20 h-20 border border-white/8 rounded-full"
      animate={{ scale: [1.1, 0.9, 1.1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute top-1/3 left-[20%] w-3 h-3 bg-white/20 rounded-full"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-1/4 right-[25%] w-2 h-2 bg-white/15 rounded-full"
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
    />

    <div className="absolute inset-0 noise" />

    <div className="container mx-auto px-4 text-center relative z-10">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-5 leading-tight">
          {title}
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          {subtitle}
        </p>
        <Link to="/contact">
          <Button
            size="lg"
            className="btn-glass-lg font-heading font-semibold border-white/20 hover:border-white/40 transition-all duration-300 text-base"
          >
            Contact Us Today <ArrowRight size={18} />
          </Button>
        </Link>
      </ScrollReveal>
    </div>
  </section>
);

export default CTABanner;
