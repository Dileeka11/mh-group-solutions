import { Briefcase, Scale, DollarSign, Users, Target, Lightbulb, BarChart3, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const areas = [
  { icon: Briefcase, title: "Business Consultancy", desc: "Strategic planning, market analysis, and operational excellence for growth-oriented businesses." },
  { icon: Scale, title: "Legal Advisory", desc: "Expert legal guidance for business compliance, contracts, and dispute resolution." },
  { icon: DollarSign, title: "Financial Consultancy", desc: "Financial planning, investment strategy, and risk management for sustainable growth." },
  { icon: Users, title: "Management Consultancy", desc: "Leadership development, organisational restructuring, and change management." },
];

const methodology = [
  { num: "01", title: "Discovery", desc: "Deep-dive into your business to understand challenges and goals.", icon: Target },
  { num: "02", title: "Analysis", desc: "Comprehensive data analysis and market research.", icon: BarChart3 },
  { num: "03", title: "Strategy", desc: "Custom strategy development aligned with your objectives.", icon: Lightbulb },
  { num: "04", title: "Implementation", desc: "Hands-on support to execute and deliver results.", icon: CheckCircle },
];

const caseStudies = [
  { title: "Tech Startup Growth", result: "300% revenue increase", desc: "Helped a SaaS startup scale operations and triple revenue within 18 months." },
  { title: "Retail Chain Optimisation", result: "40% cost reduction", desc: "Streamlined supply chain and operations for a national retail brand." },
  { title: "Legal Compliance Overhaul", result: "100% compliance", desc: "Guided a financial services firm through regulatory compliance transformation." },
];

const Consultancy = () => (
  <PageTransition>
    <HeroBanner
      title="Consultancy Services"
      subtitle="Expert Guidance"
      description="Strategic consultancy across business, legal, financial, and management domains to drive your success."
    />

    {/* Areas */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Specialised consultancy across four key areas</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {areas.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -5 }}>
                <Card className="h-full border-border hover:border-primary/50 hover:shadow-lg transition-all bg-card">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <a.icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-card-foreground mb-2">{a.title}</h3>
                      <p className="text-muted-foreground text-sm">{a.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Methodology */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A proven methodology delivering measurable results</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((m, i) => (
            <ScrollReveal key={m.num} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <m.icon size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-heading font-bold text-primary/20 mb-2">{m.num}</div>
                <h3 className="font-heading font-semibold text-card-foreground mb-2">{m.title}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Case Studies</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Real results from real partnerships</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.title} delay={i * 0.1}>
              <Card className="h-full border-border hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-6">
                  <div className="text-2xl font-heading font-bold text-primary mb-3">{cs.result}</div>
                  <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{cs.title}</h3>
                  <p className="text-muted-foreground text-sm">{cs.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <CTABanner title="Need Expert Guidance?" subtitle="Let's talk about how our consultancy can transform your business." />
  </PageTransition>
);

export default Consultancy;
