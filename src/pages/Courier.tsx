import { Truck, Zap, Globe, Package, MapPin, Clock, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const serviceTypes = [
  { icon: MapPin, title: "Local Delivery", desc: "Same-day delivery within your city. Fast, reliable, and affordable.", gradient: "from-emerald-500 to-teal-500" },
  { icon: Globe, title: "National Delivery", desc: "Reach any corner of the country with our extensive network.", gradient: "from-teal-500 to-cyan-500" },
  { icon: Zap, title: "Express Service", desc: "Urgent deliveries with guaranteed time-sensitive handling.", gradient: "from-amber-500 to-orange-500" },
  { icon: Package, title: "Cargo & Freight", desc: "Large shipments and bulk cargo handled with care and precision.", gradient: "from-cyan-500 to-blue-500" },
];

const steps = [
  { num: "1", title: "Book Your Delivery", desc: "Request a pickup online or by phone — it's quick and easy.", icon: Clock },
  { num: "2", title: "We Collect", desc: "Our courier collects your package from your specified location.", icon: Truck },
  { num: "3", title: "Safe Delivery", desc: "Your package is delivered safely and on time to the destination.", icon: Shield },
];


const Courier = () => (
  <PageTransition>
    <HeroBanner
      title="Courier Services"
      subtitle="Fast & Reliable Delivery"
      description="From local parcels to nationwide freight — MH Group delivers with speed, safety, and precision."
    />

    {/* Service Types */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Delivery Options</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Delivery Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Choose the service that fits your needs</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {serviceTypes.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <TiltCard className="h-full">
                <Card className="h-full border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden group relative">
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardContent className="p-7 flex items-start gap-5">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-teal-glow/15 flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-primary/15 transition-all duration-300"
                    >
                      <s.icon size={28} className="text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-card-foreground mb-2">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Simple Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Three simple steps to get your delivery moving</p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[16.66%] right-[16.66%] h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-primary via-teal-glow to-gold opacity-20" />
            {/* Animated pulse along the line */}
            <motion.div
              className="absolute top-0 w-8 h-full bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full"
              animate={{ left: ["-10%", "110%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.15}>
                <TiltCard className="h-full">
                  <div className="text-center p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group h-full">
                    <div className="relative mx-auto mb-5 w-20 h-20">
                      {/* Pulse ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-teal-glow opacity-0 group-hover:opacity-15 animate-pulse-ring" />
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-teal-glow/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-all duration-300">
                        <s.icon size={30} className="text-primary" />
                      </div>
                    </div>
                    <div className="text-sm text-gradient-emerald font-heading font-bold mb-2 tracking-wide">Step {s.num}</div>
                    <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Tracking CTA */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/15 to-teal-glow/15 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/10">
                <Truck size={36} className="text-primary" />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Track Your Delivery</h2>
            <p className="text-muted-foreground mb-8">
              Enter your tracking number to get real-time updates on your delivery status.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <div className="flex-1 relative group overflow-hidden rounded-xl">
                <input
                  type="text"
                  placeholder="Enter tracking number..."
                  className="w-full px-5 py-3.5 rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-300"
                />
                {/* Scanning line animation */}
                <motion.div
                  initial={{ top: "-100%" }}
                  animate={{ top: "200%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 bg-primary/20 pointer-events-none"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-teal-glow/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <Button className="btn-premium-lg text-primary-foreground font-heading font-semibold border-0 gap-2">
                Track <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Coverage Map Placeholder */}
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Nationwide</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Coverage</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We deliver across the entire United Kingdom</p>
          </div>
          <TiltCard className="max-w-3xl mx-auto">
            <div className="h-72 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 flex items-center justify-center relative overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-teal-glow/5" />
              {/* Pulse markers */}
              {[
                { top: "25%", left: "40%" },
                { top: "45%", left: "55%" },
                { top: "60%", left: "35%" },
                { top: "35%", left: "65%" },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3"
                  style={pos}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                >
                  <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/30" />
                </motion.div>
              ))}
              <div className="text-center relative z-10">
                <Globe size={48} className="text-primary/20 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">Coverage map coming soon</p>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>

    <CTABanner title="Need a Delivery?" subtitle="Get in touch for fast, reliable courier services." />
  </PageTransition>
);

export default Courier;
