import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Building2, Home, Truck, Briefcase, ArrowRight, Quote, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { useState, useEffect, useCallback, useRef } from "react";

const services = [
  { icon: Building2, title: "Construction", desc: "Building excellence from ground up — residential, commercial, and renovation projects.", to: "/construction", gradient: "from-emerald-500/20 to-teal-500/20" },
  { icon: Home, title: "Property", desc: "Comprehensive property services — buying, selling, and renting made effortless.", to: "/property", gradient: "from-teal-500/20 to-cyan-500/20" },
  { icon: Truck, title: "Courier", desc: "Fast, reliable delivery services — local, national, and express options.", to: "/courier", gradient: "from-cyan-500/20 to-blue-500/20" },
  { icon: Briefcase, title: "Consultancy", desc: "Expert guidance for business, legal, financial, and management needs.", to: "/consultancy", gradient: "from-amber-500/20 to-orange-500/20" },
];

const testimonials = [
  { name: "Sarah Johnson", role: "Property Developer", text: "MH Group transformed our vision into reality. Their construction team delivered on time and above expectations.", initials: "SJ" },
  { name: "James Wilson", role: "Business Owner", text: "The consultancy services provided by MH Group helped us streamline operations and increase profitability by 40%.", initials: "JW" },
  { name: "Emily Chen", role: "Logistics Manager", text: "Their courier service is unmatched. Reliable, fast, and always professional. We've been partners for over 5 years.", initials: "EC" },
];

// Animated particles for hero
const HeroParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 25 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -(20 + Math.random() * 30), 0],
          x: [0, Math.random() * 20 - 10, 0],
          opacity: [0.2, 0.7, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 3,
        }}
      />
    ))}
    {/* Geometric shapes */}
    <motion.div
      className="absolute top-20 right-[15%] w-24 h-24 border border-primary/15 rotate-45 rounded-lg"
      animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
      transition={{ duration: 10, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-32 left-[10%] w-20 h-20 border border-primary/10 rounded-full"
      animate={{ scale: [1, 1.4, 1] }}
      transition={{ duration: 6, repeat: Infinity }}
    />
    <motion.div
      className="absolute top-[40%] right-[25%] w-4 h-4 bg-gold/25 rotate-45"
      animate={{ y: [0, -25, 0], rotate: [45, 180, 45] }}
      transition={{ duration: 5, repeat: Infinity }}
    />
    <motion.div
      className="absolute top-[60%] left-[30%] w-3 h-3 bg-teal-glow/20 rounded-full"
      animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity }}
    />
  </div>
);

// 3D tilt card component
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orb1X = useSpring(useTransform(mouseX, [0, 1], [-40, 40]), { stiffness: 60, damping: 20 });
  const orb1Y = useSpring(useTransform(mouseY, [0, 1], [-30, 30]), { stiffness: 60, damping: 20 });
  const orb2X = useSpring(useTransform(mouseX, [0, 1], [30, -30]), { stiffness: 40, damping: 20 });
  const orb2Y = useSpring(useTransform(mouseY, [0, 1], [20, -20]), { stiffness: 40, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 mesh-gradient-dark" />
        <HeroParticles />

        {/* Mouse-parallax gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px]"
          style={{ x: orb1X, y: orb1Y }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-glow/10 rounded-full blur-[130px]"
          style={{ x: orb2X, y: orb2Y }}
          animate={{ scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gold/8 rounded-full blur-[100px]"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm"
            >
              <Sparkles size={14} className="text-gold" />
              <span className="text-primary text-sm font-heading font-medium">Total Solutions Anything & Everything</span>
            </motion.div>

            <div className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
              {["Building", "the"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.46, duration: 0.5 }}
                className="text-gradient-emerald inline-block mr-3"
              >
                Future,
              </motion.span>
              {["Delivering"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.54 + i * 0.08, duration: 0.5 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.62, duration: 0.5 }}
                className="text-gradient inline-block"
              >
                Today
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              MH Group delivers comprehensive solutions across Construction, Property, Courier, and Consultancy — empowering businesses and individuals to achieve more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/about">
                <Button size="lg" className="btn-premium-lg font-heading font-semibold">
                  Discover More <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="btn-glass-lg font-heading font-semibold">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Diagonal clip at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      {/* About Intro */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Your Trusted Partner for{" "}
                <span className="text-gradient-emerald">Total Solutions</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                MH Group is a multi-sector enterprise committed to delivering excellence across Construction, Property, Courier, and Consultancy services. With years of experience and a dedicated team, we provide total solutions tailored to your needs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">What We Do</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive solutions across four key sectors</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <Link to={service.to}>
                  <TiltCard className="group h-full cursor-pointer">
                    <div className="h-full rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 hover:border-primary/30 p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                      {/* Shimmer border */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.15), transparent 50%, hsl(var(--glow-teal)/0.1))", border: "1px solid hsl(var(--primary)/0.2)" }} />

                      <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-teal-glow/15 group-hover:from-primary group-hover:to-teal-glow flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                        <service.icon size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="relative z-10 font-heading font-semibold text-xl text-card-foreground">{service.title}</h3>
                      <p className="relative z-10 text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                      <span className="relative z-10 text-primary font-medium text-sm inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300 mt-auto">
                        Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </TiltCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Counters */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-dark" />
        <div className="absolute inset-0 noise" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={250} suffix="+" label="Projects Completed" />
            <AnimatedCounter end={180} suffix="+" label="Happy Clients" />
            <AnimatedCounter end={15} suffix="+" label="Years Experience" />
            <AnimatedCounter end={50} suffix="+" label="Team Members" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Trusted by businesses and individuals across the UK</p>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Glass card */}
              <div className="glass-card rounded-2xl p-8 md:p-10 relative">
                <Quote size={40} className="text-primary/20 mx-auto mb-6" />
                <p className="text-lg text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-teal-glow flex items-center justify-center shadow-md">
                    <span className="text-white font-heading font-bold text-sm">{testimonials[currentTestimonial].initials}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-heading font-semibold text-foreground">{testimonials[currentTestimonial].name}</p>
                    <p className="text-muted-foreground text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2.5 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentTestimonial
                      ? "w-8 h-2.5 bg-gradient-to-r from-primary to-teal-glow"
                      : "w-2.5 h-2.5 bg-border hover:bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </PageTransition>
  );
};

export default Index;
