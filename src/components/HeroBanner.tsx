import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

const HeroBanner = ({ title, subtitle, description, ctaText = "Get In Touch", ctaLink = "/contact" }: HeroBannerProps) => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const orb1X = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), { stiffness: 50, damping: 20 });
  const orb1Y = useSpring(useTransform(mouseY, [0, 1], [-30, 30]), { stiffness: 50, damping: 20 });
  const orb2X = useSpring(useTransform(mouseX, [0, 1], [30, -30]), { stiffness: 40, damping: 20 });
  const orb2Y = useSpring(useTransform(mouseY, [0, 1], [20, -20]), { stiffness: 40, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  const words = title.split(" ");

  return (
    <section 
      className="relative min-h-[65vh] flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 mesh-gradient-dark" />

      {/* Floating orbs with mouse parallax */}
      <motion.div
        className="absolute top-20 right-[15%] w-80 h-80 bg-primary/20 rounded-full blur-[100px]"
        style={{ x: orb1X, y: orb1Y }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-[5%] w-96 h-96 bg-teal-glow/15 rounded-full blur-[120px]"
        style={{ x: orb2X, y: orb2Y }}
        animate={{ scale: [1.1, 0.9, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-40 h-40 bg-gold/10 rounded-full blur-[80px]"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-primary/8 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/5 rounded-full" />

      {/* Diagonal clip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-heading font-medium tracking-wide uppercase">{subtitle}</span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-3xl leading-tight mb-6 flex flex-wrap gap-x-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 max-w-xl text-lg mb-8 leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to={ctaLink}>
            <Button
              size="lg"
              className="btn-premium-lg text-primary-foreground font-heading font-semibold"
            >
              {ctaText} <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
