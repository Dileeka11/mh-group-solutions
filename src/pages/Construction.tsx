import { Building2, Hammer, PaintBucket, ClipboardList, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const services = [
  { icon: Building2, title: "Residential Construction", desc: "Custom homes, apartments, and housing developments built to the highest standards." },
  { icon: Hammer, title: "Commercial Construction", desc: "Office buildings, retail spaces, and industrial facilities designed for success." },
  { icon: PaintBucket, title: "Renovation & Refurbishment", desc: "Transform existing spaces with modern upgrades and complete renovations." },
  { icon: ClipboardList, title: "Project Management", desc: "End-to-end project oversight ensuring delivery on time and within budget." },
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">What We Build</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive construction services for every need</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Project Portfolio */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Portfolio</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A selection of our recent construction projects</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-primary/5 flex items-center justify-center">
                  <Building2 size={48} className="text-primary/30 group-hover:text-primary/50 transition-colors" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{p.type}</span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${p.status === "Completed" ? "bg-primary/10 text-primary" : "bg-accent/20 text-accent-foreground"}`}>{p.status}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-card-foreground">{p.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A proven step-by-step approach to every project</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <ScrollReveal key={p.step} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-muted"
              >
                <div className="text-4xl font-heading font-bold text-primary/20 mb-3">{p.step}</div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
                {i < process.length - 1 && (
                  <ArrowRight size={20} className="text-primary/30 mx-auto mt-4 hidden lg:block" />
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <CTABanner title="Ready to Build?" subtitle="Let's discuss your construction project today." />
  </PageTransition>
);

export default Construction;
