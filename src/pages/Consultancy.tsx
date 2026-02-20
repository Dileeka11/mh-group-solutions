import { Briefcase, Scale, DollarSign, Users, Target, Lightbulb, BarChart3, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const areas = [
  { icon: Briefcase, title: "Business Consultancy", desc: "Strategic planning, market analysis, and operational excellence for growth-oriented businesses.", gradient: "from-emerald-500 to-teal-500" },
  { icon: Scale, title: "Legal Advisory", desc: "Expert legal guidance for business compliance, contracts, and dispute resolution.", gradient: "from-teal-500 to-cyan-500" },
  { icon: DollarSign, title: "Financial Consultancy", desc: "Financial planning, investment strategy, and risk management for sustainable growth.", gradient: "from-amber-500 to-orange-500" },
  { icon: Users, title: "Management Consultancy", desc: "Leadership development, organisational restructuring, and change management.", gradient: "from-cyan-500 to-blue-500" },
];

const methodology = [
  { num: "01", title: "Discovery", desc: "Deep-dive into your business to understand challenges and goals.", icon: Target },
  { num: "02", title: "Analysis", desc: "Comprehensive data analysis and market research.", icon: BarChart3 },
  { num: "03", title: "Strategy", desc: "Custom strategy development aligned with your objectives.", icon: Lightbulb },
  { num: "04", title: "Implementation", desc: "Hands-on support to execute and deliver results.", icon: CheckCircle },
];

const caseStudies = [
  { title: "Tech Startup Growth", result: "300%", resultLabel: "Revenue Increase", desc: "Helped a SaaS startup scale operations and triple revenue within 18 months." },
  { title: "Retail Chain Optimisation", result: "40%", resultLabel: "Cost Reduction", desc: "Streamlined supply chain and operations for a national retail brand." },
  { title: "Legal Compliance Overhaul", result: "100%", resultLabel: "Compliance Achieved", desc: "Guided a financial services firm through regulatory compliance transformation." },
];

const Consultancy = () => (
  <PageTransition>
    <HeroBanner
      title="Consultancy Services"
      subtitle="Expert Guidance"
      description="Strategic consultancy across business, legal, financial, and management domains to drive your success."
    />

    {/* Areas */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Specialisations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Specialised consultancy across four key areas</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {areas.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.1}>
              <TiltCard className="h-full">
                <Card className="h-full border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden group relative">
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${a.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardContent className="p-7 flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-teal-glow/15 flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-primary/15 transition-all duration-300">
                      <motion.div whileHover={{ rotate: 8, scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <a.icon size={28} className="text-primary" />
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-card-foreground mb-2">{a.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Methodology */}
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Methodology</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A proven methodology delivering measurable results</p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting gradient path with animation */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-muted/20 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m, i) => (
              <ScrollReveal key={m.num} delay={i * 0.12}>
                <TiltCard className="h-full">
                  <div className="text-center p-7 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group h-full">
                    <div className="relative mx-auto mb-4 w-16 h-16">
                      <motion.div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-teal-glow opacity-0 group-hover:opacity-15 blur-md scale-150 transition-all duration-500" />
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-teal-glow/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-all duration-300">
                        <m.icon size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-heading font-bold text-gradient-emerald mb-2">{m.num}</div>
                    <h3 className="font-heading font-semibold text-card-foreground mb-2">{m.title}</h3>
                    <p className="text-muted-foreground text-sm">{m.desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Case Studies</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Real results from real partnerships</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.title} delay={i * 0.1}>
              <TiltCard className="h-full">
                <Card className="h-full border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden group">
                  <CardContent className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-teal-glow/15 flex items-center justify-center">
                        <TrendingUp size={18} className="text-primary" />
                      </div>
                      <span className="text-xs text-primary font-heading font-medium bg-primary/8 px-3 py-1 rounded-full">{cs.resultLabel}</span>
                    </div>
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                      className="text-4xl font-heading font-bold text-gradient-emerald mb-3"
                    >
                      {cs.result}
                    </motion.div>
                    <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{cs.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cs.desc}</p>
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <CTABanner title="Need Expert Guidance?" subtitle="Let's talk about how our consultancy can transform your business." />
  </PageTransition>
);

export default Consultancy;
