import { Building2, Hammer, PaintBucket, ClipboardList, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const services = [
  { icon: Building2, title: "Residential Construction", desc: "Custom homes, apartments, and housing developments built to the highest standards.", color: "from-emerald-500 to-teal-500" },
  { icon: Hammer, title: "Commercial Construction", desc: "Office buildings, retail spaces, and industrial facilities designed for success.", color: "from-teal-500 to-cyan-500" },
  { icon: PaintBucket, title: "Renovation & Refurbishment", desc: "Transform existing spaces with modern upgrades and complete renovations.", color: "from-cyan-500 to-blue-500" },
  { icon: ClipboardList, title: "Project Management", desc: "End-to-end project oversight ensuring delivery on time and within budget.", color: "from-amber-500 to-orange-500" },
];

const process = [
  { step: "01", title: "Consultation", desc: "We discuss your vision, requirements, and budget." },
  { step: "02", title: "Planning & Design", desc: "Detailed plans and designs are created for your approval." },
  { step: "03", title: "Construction", desc: "Our expert team brings your project to life." },
  { step: "04", title: "Handover", desc: "Final inspection, quality assurance, and project handover." },
];

const projects = [
  { title: "Riverside Apartments", type: "Residential", status: "Completed" },
  { title: "Greenfield Office Park", type: "Commercial", status: "Completed" },
  { title: "Heritage House Renovation", type: "Renovation", status: "Completed" },
  { title: "Central Mall Extension", type: "Commercial", status: "In Progress" },
  { title: "Oak View Estates", type: "Residential", status: "Completed" },
  { title: "Tech Hub Building", type: "Commercial", status: "In Progress" },
];

const Construction = () => (
  <PageTransition>
    <HeroBanner
      title="Construction Services"
      subtitle="Build With Confidence"
      description="From residential homes to commercial complexes, MH Group delivers construction projects of exceptional quality."
    />

    {/* Services */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">What We Build</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive construction services for every need</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <TiltCard className="h-full">
                <Card className="h-full border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden group relative">
                  {/* Left gradient accent */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardContent className="p-7 flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-teal-glow/15 flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-primary/15 transition-all duration-300">
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <s.icon size={28} className="text-primary" />
                      </motion.div>
                    </div>
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

    {/* Project Portfolio */}
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Portfolio</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A selection of our recent construction projects</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <TiltCard className="h-full">
                <div className="bg-card/80 backdrop-blur-sm h-full rounded-2xl overflow-hidden border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                  {/* Image area with overlay */}
                  <div className="h-48 bg-gradient-to-br from-primary/8 to-teal-glow/8 flex items-center justify-center relative overflow-hidden">
                    <Building2 size={48} className="text-primary/20 group-hover:text-primary/40 transition-all duration-500 group-hover:scale-110" />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <h3 className="font-heading font-semibold text-white text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{p.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.type}</span>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        p.status === "Completed"
                          ? "bg-primary/10 text-primary"
                          : "bg-gold/15 text-amber-600"
                      }`}>
                        {p.status}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-card-foreground">{p.title}</h3>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">How We Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A proven step-by-step approach to every project</p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting gradient line with animation */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-muted/20 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="text-center p-7 rounded-2xl bg-muted/70 hover:bg-card border border-transparent hover:border-primary/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative group"
                >
                  {/* Step circle */}
                  <div className="relative mx-auto mb-5 w-16 h-16">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-teal-glow opacity-0 group-hover:opacity-15 blur-md scale-150 transition-all duration-500"
                    />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-teal-glow/10 border border-primary/20 flex items-center justify-center">
                      <span className="text-xl font-heading font-bold text-gradient-emerald">{p.step}</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <CTABanner title="Ready to Build?" subtitle="Let's discuss your construction project today." />
  </PageTransition>
);

export default Construction;
