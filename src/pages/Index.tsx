import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Home, Truck, Briefcase, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { useState, useEffect, useCallback } from "react";

const services = [
  { icon: Building2, title: "Construction", desc: "Building excellence from ground up — residential, commercial, and renovation projects.", to: "/construction" },
  { icon: Home, title: "Property", desc: "Comprehensive property services — buying, selling, and renting made effortless.", to: "/property" },
  { icon: Truck, title: "Courier", desc: "Fast, reliable delivery services — local, national, and express options.", to: "/courier" },
  { icon: Briefcase, title: "Consultancy", desc: "Expert guidance for business, legal, financial, and management needs.", to: "/consultancy" },
];

const testimonials = [
  { name: "Sarah Johnson", role: "Property Developer", text: "MH Group transformed our vision into reality. Their construction team delivered on time and above expectations." },
  { name: "James Wilson", role: "Business Owner", text: "The consultancy services provided by MH Group helped us streamline operations and increase profitability by 40%." },
  { name: "Emily Chen", role: "Logistics Manager", text: "Their courier service is unmatched. Reliable, fast, and always professional. We've been partners for over 5 years." },
];

// Particle animation for hero
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-primary/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
    {/* Geometric shapes */}
    <motion.div
      className="absolute top-20 right-[15%] w-20 h-20 border-2 border-primary/20 rotate-45"
      animate={{ rotate: [45, 90, 45] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <motion.div
      className="absolute bottom-32 left-[10%] w-16 h-16 border-2 border-primary/15 rounded-full"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 5, repeat: Infinity }}
    />
    <motion.div
      className="absolute top-1/3 right-[30%] w-3 h-3 bg-primary/40 rotate-45"
      animate={{ y: [0, -20, 0], rotate: [45, 135, 45] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  </div>
);

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
      <section className="relative min-h-screen flex items-center bg-foreground overflow-hidden">
        <Particles />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary-bright text-sm font-medium">Total Solutions Anything & Everything</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-heading font-bold text-background leading-tight mb-6"
            >
              Building the{" "}
              <span className="text-primary-bright">Future</span>,{" "}
              Delivering{" "}
              <span className="text-primary-bright">Today</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-background/70 text-lg md:text-xl max-w-xl mb-10"
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
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold gap-2 h-12 px-8">
                  Discover More <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 font-heading font-semibold h-12 px-8">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                MH Group is a multi-sector enterprise committed to delivering excellence across Construction, Property, Courier, and Consultancy services. With years of experience and a dedicated team, we provide total solutions tailored to your needs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive solutions across four key sectors</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <Link to={service.to}>
                  <Card className="group h-full border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer bg-card">
                    <CardContent className="p-6 flex flex-col items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors">
                        <service.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl text-card-foreground">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                      <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Counters */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={250} suffix="+" label="Projects Completed" />
            <AnimatedCounter end={180} suffix="+" label="Happy Clients" />
            <AnimatedCounter end={15} suffix="+" label="Years Experience" />
            <AnimatedCounter end={50} suffix="+" label="Team Members" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Trusted by businesses and individuals across the UK</p>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="text-center"
            >
              <Quote size={40} className="text-primary/30 mx-auto mb-6" />
              <p className="text-lg text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <p className="font-heading font-semibold text-foreground">{testimonials[currentTestimonial].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[currentTestimonial].role}</p>
              </div>
            </motion.div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === currentTestimonial ? "bg-primary" : "bg-border"
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
