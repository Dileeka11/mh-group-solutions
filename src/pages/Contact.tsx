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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <Select
                    value={formData.service}
                    onValueChange={(v) => setFormData({ ...formData, service: v })}
                  >
                    <SelectTrigger>
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
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold gap-2">
                    <Send size={18} /> Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground text-sm">+44 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground text-sm">info@mhgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">Address</h3>
                      <p className="text-muted-foreground text-sm">123 Business Avenue, London, UK</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">Office Hours</h3>
                      <p className="text-muted-foreground text-sm">Mon – Fri: 9:00 AM – 6:00 PM</p>
                      <p className="text-muted-foreground text-sm">Sat: 10:00 AM – 2:00 PM</p>
                      <p className="text-muted-foreground text-sm">Sun: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={36} className="text-primary/30 mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Google Maps placeholder</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
