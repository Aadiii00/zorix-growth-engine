import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Priya Mehta",
    role: "CEO, Luminara Skincare",
    text: "ZORIX transformed our entire online presence. Revenue grew 3× in six months — their strategy was surgical.",
  },
  {
    name: "James Okafor",
    role: "Founder, FitPulse",
    text: "Working with ZORIX felt like having an in-house team. Fast, creative, and they genuinely care about results.",
  },
  {
    name: "Sara Lin",
    role: "Marketing Director, Vaultline",
    text: "Our organic traffic jumped 280% after their SEO overhaul. The data transparency was unlike any agency we've used.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 md:py-32 border-t border-border">
    <div className="container">
      <ScrollReveal className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Testimonials</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">What Clients Say</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-px bg-border">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 100}>
            <div className="bg-background p-8 h-full flex flex-col">
              <p className="text-foreground text-base leading-relaxed flex-1 mb-6 font-display text-xl italic">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
