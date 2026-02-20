import { Truck, Zap, Globe, Package, MapPin, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const serviceTypes = [
  { icon: MapPin, title: "Local Delivery", desc: "Same-day delivery within your city. Fast, reliable, and affordable." },
  { icon: Globe, title: "National Delivery", desc: "Reach any corner of the country with our extensive network." },
  { icon: Zap, title: "Express Service", desc: "Urgent deliveries with guaranteed time-sensitive handling." },
  { icon: Package, title: "Cargo & Freight", desc: "Large shipments and bulk cargo handled with care and precision." },
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Delivery Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Choose the service that fits your needs</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {serviceTypes.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -5 }}>
                <Card className="h-full border-border hover:border-primary/50 hover:shadow-lg transition-all bg-card">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <s.icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-card-foreground mb-2">{s.title}</h3>
                      <p className="text-muted-foreground text-sm">{s.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Three simple steps to get your delivery moving</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-8 rounded-2xl bg-card border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon size={28} className="text-primary" />
                </div>
                <div className="text-sm text-primary font-heading font-bold mb-2">Step {s.num}</div>
                <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Tracking CTA */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <Truck size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Track Your Delivery</h2>
            <p className="text-muted-foreground mb-8">
              Enter your tracking number to get real-time updates on your delivery status.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter tracking number..."
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-6">
                Track
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Coverage Map Placeholder */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Coverage</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We deliver across the entire United Kingdom</p>
          </div>
          <div className="max-w-3xl mx-auto h-64 rounded-2xl bg-card border border-border flex items-center justify-center">
            <div className="text-center">
              <Globe size={48} className="text-primary/30 mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">Coverage map coming soon</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <CTABanner title="Need a Delivery?" subtitle="Get in touch for fast, reliable courier services." />
  </PageTransition>
);

export default Courier;
