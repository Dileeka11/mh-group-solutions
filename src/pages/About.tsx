import { Target, Eye, Heart, Shield, Users, Award, Lightbulb, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target size={24} className="text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To deliver comprehensive, high-quality solutions across Construction, Property, Courier, and Consultancy sectors, empowering our clients to achieve their goals with confidence and ease.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye size={24} className="text-primary" />
                <h2 className="text-3xl font-heading font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the UK's most trusted multi-sector enterprise, recognised for excellence, innovation, and our unwavering commitment to client satisfaction.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Meet the people driving MH Group's success</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <Card className="text-center border-border hover:shadow-lg transition-shadow bg-card">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-heading font-bold text-xl">{member.initials}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-card-foreground">{member.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">The principles that guide everything we do</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08}>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-muted hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <value.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Key milestones in MH Group's growth</p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
          {milestones.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 0.1}>
              <div className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-muted" />
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-primary font-heading font-bold text-lg">{item.year}</span>
                  <h3 className="font-heading font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
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
