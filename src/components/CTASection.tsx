import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => (
  <section id="cta" className="py-24 md:py-32 bg-navy text-navy-foreground">
    <div className="container">
      <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Ready?</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-4">
            Ready to <em className="text-primary not-italic">Accelerate</em>?
          </h2>
          <p className="text-white/60 text-lg mb-8" style={{ textWrap: "pretty" }}>
            Let's build something amazing together. Book a free strategy call and discover how ZORIX can transform your brand.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Start Your Project
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
