import { Home, Key, Building, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import AnimatedCounter from "@/components/AnimatedCounter";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const listings = [
  { icon: Home, title: "Buy", desc: "Find your dream home or investment property from our curated listings.", features: ["Wide property selection", "Expert valuation", "Legal support"] },
  { icon: Key, title: "Sell", desc: "Get the best value for your property with our strategic marketing approach.", features: ["Market analysis", "Professional staging", "Negotiation expertise"] },
  { icon: Building, title: "Rent", desc: "Quality rental properties for residential and commercial tenants.", features: ["Tenant screening", "Property management", "Maintenance support"] },
];

const reasons = [
  "Over 15 years of property market experience",
  "Extensive network of buyers and sellers",
  "Professional property valuation services",
  "End-to-end legal and financial support",
  "Dedicated property management team",
  "Transparent and competitive pricing",
];

const Property = () => (
  <PageTransition>
    <HeroBanner
      title="Property Services"
      subtitle="Your Property Partner"
      description="Whether buying, selling, or renting — MH Group makes property transactions seamless and stress-free."
    />

    {/* Listings */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Property Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Complete property solutions for every need</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listings.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -5 }}>
                <Card className="h-full border-border hover:border-primary/50 hover:shadow-lg transition-all bg-card">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon size={28} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-2xl text-card-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle size={14} className="text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Why Choose MH Group?</h2>
              <p className="text-muted-foreground mb-8">
                We bring expertise, dedication, and a client-first approach to every property transaction.
              </p>
              <ul className="space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0" />
                    <span className="text-foreground text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp size={24} className="text-primary" />
                <h3 className="font-heading font-semibold text-xl text-card-foreground">Market Performance</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground text-sm">Average Sale Time</span>
                  <span className="font-heading font-semibold text-primary">28 Days</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground text-sm">Client Satisfaction</span>
                  <span className="font-heading font-semibold text-primary">98%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground text-sm">Properties Managed</span>
                  <span className="font-heading font-semibold text-primary">500+</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={500} suffix="+" label="Properties Sold" />
          <AnimatedCounter end={350} suffix="+" label="Happy Clients" />
          <AnimatedCounter end={200} suffix="+" label="Rentals Managed" />
          <AnimatedCounter end={98} suffix="%" label="Client Satisfaction" />
        </div>
      </div>
    </section>

    <CTABanner title="Looking for the Perfect Property?" subtitle="Let our experts help you find, sell, or rent your next property." />
  </PageTransition>
);

export default Property;
