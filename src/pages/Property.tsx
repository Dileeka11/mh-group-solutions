import { Home, Key, Building, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import AnimatedCounter from "@/components/AnimatedCounter";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const listings = [
  { icon: Home, title: "Buy", desc: "Find your dream home or investment property from our curated listings.", features: ["Wide property selection", "Expert valuation", "Legal support"], gradient: "from-emerald-500 to-teal-500" },
  { icon: Key, title: "Sell", desc: "Get the best value for your property with our strategic marketing approach.", features: ["Market analysis", "Professional staging", "Negotiation expertise"], gradient: "from-teal-500 to-cyan-500" },
  { icon: Building, title: "Rent", desc: "Quality rental properties for residential and commercial tenants.", features: ["Tenant screening", "Property management", "Maintenance support"], gradient: "from-cyan-500 to-blue-500" },
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
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Property Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Complete property solutions for every need</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listings.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <TiltCard className="h-full">
                <Card className="h-full border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden group relative">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardContent className="p-7">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-teal-glow/15 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-primary/15 transition-all duration-300">
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                        <item.icon size={30} className="text-primary" />
                      </motion.div>
                    </div>
                    <h3 className="font-heading font-semibold text-2xl text-card-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{item.desc}</p>
                    <ul className="space-y-2.5">
                      {item.features.map((f, j) => (
                        <motion.li
                          key={f}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + j * 0.05 }}
                          className="flex items-center gap-2.5 text-sm text-muted-foreground"
                        >
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <CheckCircle size={12} className="text-primary" />
                          </div>
                          {f}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Why Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Why Choose MH Group?</h2>
              <p className="text-muted-foreground mb-8">
                We bring expertise, dedication, and a client-first approach to every property transaction.
              </p>
              <ul className="space-y-3.5">
                {reasons.map((r, i) => (
                  <motion.li
                    key={r}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/15 to-teal-glow/15 flex items-center justify-center shrink-0 group-hover:from-primary/25 group-hover:to-teal-glow/25 transition-all duration-300"
                    >
                      <CheckCircle size={14} className="text-primary" />
                    </motion.div>
                    <span className="text-foreground text-sm">{r}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <TiltCard>
              <div className="rounded-2xl bg-card/80 backdrop-blur-sm p-8 border border-border/60 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-teal-glow/15 flex items-center justify-center">
                    <TrendingUp size={22} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-card-foreground">Market Performance</h3>
                </div>
                <div className="space-y-5">
                  {[
                    { label: "Average Sale Time", value: "28 Days", percent: 70 },
                    { label: "Client Satisfaction", value: "98%", percent: 98 },
                    { label: "Properties Managed", value: "500+", percent: 85 },
                  ].map((stat, i) => (
                    <div key={stat.label}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground text-sm">{stat.label}</span>
                        <span className="font-heading font-semibold text-gradient-emerald">{stat.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.15, duration: 1.5, ease: "circOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-teal-glow"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute inset-0 noise" />
      <div className="container mx-auto px-4 relative z-10">
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
