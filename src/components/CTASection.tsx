import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => (
  <section id="cta" className="py-24 md:py-32">
    <div className="container">
      <ScrollReveal>
        <div className="relative rounded-3xl gradient-bg px-8 py-16 md:py-20 text-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-white/80 text-lg mb-8" style={{ textWrap: "pretty" }}>
              Let's build something amazing together.
            </p>
            <Button
              size="xl"
              className="bg-white text-foreground font-bold hover:bg-white/90 shadow-soft hover:shadow-hover active:scale-[0.97]"
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
