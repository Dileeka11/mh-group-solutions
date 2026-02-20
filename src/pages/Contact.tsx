import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import PageTransition from "@/components/PageTransition";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+44 123 456 7890", gradient: "from-emerald-500 to-teal-500" },
  { icon: Mail, label: "Email", value: "info@mhgroup.com", gradient: "from-teal-500 to-cyan-500" },
  { icon: MapPin, label: "Address", value: "123 Business Avenue, London, UK", gradient: "from-cyan-500 to-blue-500" },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri: 9:00 AM – 6:00 PM",
    extra: ["Sat: 10:00 AM – 2:00 PM", "Sun: Closed"],
    gradient: "from-amber-500 to-orange-500",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you as soon as possible." });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <PageTransition>
      <HeroBanner
        title="Get In Touch"
        subtitle="Contact Us"
        description="Have a question or project in mind? We'd love to hear from you."
      />

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <TiltCard>
                <div className="rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 p-8 hover:border-primary/15 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Write to Us</span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { placeholder: "Your Name", value: formData.name, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value }), type: "text" },
                      { placeholder: "Your Email", value: formData.email, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value }), type: "email" },
                      { placeholder: "Your Phone", value: formData.phone, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value }), type: "tel" },
                    ].map((field, i) => (
                      <motion.div
                        key={field.placeholder}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        className="relative group"
                      >
                        <Input
                          placeholder={field.placeholder}
                          value={field.value}
                          onChange={field.onChange}
                          type={field.type}
                          required={field.type !== "tel"}
                          className="bg-muted/50 border-border/60 focus:border-primary/40 focus:ring-primary/20 transition-all duration-300 h-12"
                        />
                        <div className="absolute inset-0 rounded-md border border-primary/0 group-focus-within:border-primary/20 transition-all duration-300 pointer-events-none" />
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.24, duration: 0.4 }}
                    >
                      <Select
                        value={formData.service}
                        onValueChange={(v) => setFormData({ ...formData, service: v })}
                      >
                        <SelectTrigger className="bg-muted/50 border-border/60 focus:border-primary/40 focus:ring-primary/20 transition-all duration-300 h-12">
                          <SelectValue placeholder="Select a Service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="property">Property</SelectItem>
                          <SelectItem value="courier">Courier</SelectItem>
                          <SelectItem value="consultancy">Consultancy</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.32, duration: 0.4 }}
                    >
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-muted/50 border-border/60 focus:border-primary/40 focus:ring-primary/20 transition-all duration-300 resize-none"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full btn-premium-lg text-primary-foreground font-heading font-semibold"
                      >
                        <Send size={18} /> Send Message
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={0.2}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-primary text-xs font-heading font-medium tracking-widest uppercase">Reach Out</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Contact Information</h2>

                <div className="space-y-5 mb-10">
                  {contactInfo.map((item, i) => (
                    <ScrollReveal key={item.label} delay={i * 0.1}>
                      <TiltCard>
                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 hover:border-primary/30 transition-all duration-300 group">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} bg-opacity-10 flex items-center justify-center shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}
                            style={{ background: `linear-gradient(135deg, hsl(var(--primary) / 0.12), hsl(var(--glow-teal) / 0.12))` }}
                          >
                            <item.icon size={20} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold text-foreground">{item.label}</h3>
                            <p className="text-muted-foreground text-sm">{item.value}</p>
                            {item.extra?.map((line) => (
                              <p key={line} className="text-muted-foreground text-sm">{line}</p>
                            ))}
                          </div>
                        </div>
                      </TiltCard>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Map Placeholder */}
                <TiltCard>
                  <div className="rounded-2xl overflow-hidden border border-border/60 h-64 bg-card/80 backdrop-blur-sm flex items-center justify-center relative group hover:border-primary/20 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-teal-glow/5" />
                    {/* Animated pin */}
                    <div className="text-center relative z-10">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-teal-glow/15 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary/10">
                          <MapPin size={24} className="text-primary" />
                        </div>
                      </motion.div>
                      <p className="text-muted-foreground text-sm">Google Maps placeholder</p>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
