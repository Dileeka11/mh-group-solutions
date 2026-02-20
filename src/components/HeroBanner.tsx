import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroBanner = ({ title, subtitle, description, ctaText = "Get In Touch", ctaLink = "/contact" }: HeroBannerProps) => (
  <section className="relative min-h-[60vh] flex items-center bg-foreground overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
    </div>

    <div className="container mx-auto px-4 py-32 relative z-10">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-primary-bright font-heading font-semibold text-sm tracking-widest uppercase mb-4"
      >
        {subtitle}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-heading font-bold text-background max-w-3xl leading-tight mb-6"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-background/70 max-w-xl text-lg mb-8"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link to={ctaLink}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold gap-2">
            {ctaText} <ArrowRight size={18} />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HeroBanner;
