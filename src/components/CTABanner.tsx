import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

const CTABanner = ({
  title = "Need a Total Solution?",
  subtitle = "Contact us today and let's discuss how MH Group can help you.",
}: CTABannerProps) => (
  <section className="py-20 bg-primary">
    <div className="container mx-auto px-4 text-center">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
          {subtitle}
        </p>
        <Link to="/contact">
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-heading font-semibold gap-2"
          >
            Contact Us Today <ArrowRight size={18} />
          </Button>
        </Link>
      </ScrollReveal>
    </div>
  </section>
);

export default CTABanner;
