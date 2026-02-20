import { Target, Eye, Heart, Shield, Users, Award, Lightbulb, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const values = [
  { icon: Shield, title: "Integrity", desc: "We conduct business with honesty and transparency." },
  { icon: Award, title: "Excellence", desc: "We strive for the highest standards in everything we do." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace creative solutions to complex challenges." },
  { icon: Handshake, title: "Partnership", desc: "We build lasting relationships with our clients." },
  { icon: Users, title: "Teamwork", desc: "We collaborate to deliver outstanding results." },
  { icon: Heart, title: "Community", desc: "We give back and support the communities we serve." },
];

const team = [
  { name: "Michael Harrison", role: "CEO & Founder", initials: "MH" },
  { name: "David Clarke", role: "Director of Construction", initials: "DC" },
  { name: "Sarah Mitchell", role: "Head of Property", initials: "SM" },
  { name: "James Wright", role: "Operations Manager", initials: "JW" },
];

const milestones = [
  { year: "2008", title: "Company Founded", desc: "MH Group was established with a vision for total solutions." },
  { year: "2012", title: "Property Division Launched", desc: "Expanded into property sales and management." },
  { year: "2016", title: "Courier Services Added", desc: "Introduced fast, reliable courier services nationwide." },
  { year: "2019", title: "Consultancy Division", desc: "Began offering expert business consultancy." },
  { year: "2023", title: "250+ Projects Milestone", desc: "Celebrated 250+ successfully completed projects." },
];

const About = () => (
  <PageTransition>
    <HeroBanner
      title="About MH Group"
      subtitle="Our Story"
      description="Discover the team, values, and vision behind MH Group — your trusted partner for total solutions."
    />

    {/* Mission & Vision */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <ScrollReveal>
            <TiltCard className="h-full">
              <div className="h-full rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 hover:border-primary/30 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-teal-glow/15 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-primary/15 transition-all duration-300">
                    <Target size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver comprehensive, high-quality solutions across Construction, Property, Courier, and Consultancy sectors, empowering our clients to achieve their goals with confidence and ease.
                  </p>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <TiltCard className="h-full">
              <div className="h-full rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 hover:border-primary/30 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-glow/15 to-primary/15 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-teal-500/15 transition-all duration-300">
                    <Eye size={24} className="text-teal-glow" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the UK's most trusted multi-sector enterprise, recognised for excellence, innovation, and our unwavering commitment to client satisfaction.
                  </p>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Our People</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Meet the people driving MH Group's success</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.12}>
              <TiltCard>
                <Card className="text-center border-border/60 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden group h-full">
                  <CardContent className="p-8">
                    <div className="relative mx-auto mb-5 w-20 h-20">
                      {/* Animated glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-teal-glow opacity-0 group-hover:opacity-30 blur-md scale-125"
                        animate={{ scale: [1.2, 1.35, 1.2] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-teal-glow flex items-center justify-center shadow-lg shadow-primary/15 group-hover:shadow-primary/30 transition-shadow duration-300">
                        <span className="text-white font-heading font-bold text-xl">{member.initials}</span>
                      </div>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-card-foreground">{member.name}</h3>
                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-medium">{member.role}</span>
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">What We Believe</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The principles that guide everything we do</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08}>
              <TiltCard>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted/70 hover:bg-card border border-transparent hover:border-primary/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-teal-glow/10 flex items-center justify-center shrink-0 group-hover:from-primary/25 group-hover:to-teal-glow/20 transition-all duration-300">
                    <value.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Milestones</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Key milestones in MH Group's growth</p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto relative">
          {/* Gradient timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-teal-glow to-gold md:-translate-x-px opacity-30" />

          {milestones.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 0.1}>
              <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Glowing dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5">
                  <div className="w-4 h-4 bg-gradient-to-br from-primary to-teal-glow rounded-full ring-4 ring-muted shadow-lg shadow-primary/20" />
                </div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="inline-block rounded-xl bg-card/80 backdrop-blur-sm border border-border/60 p-5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <span className="text-gradient-emerald font-heading font-bold text-lg">{item.year}</span>
                    <h3 className="font-heading font-semibold text-foreground mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <CTABanner />
  </PageTransition>
);

export default About;
