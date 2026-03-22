import ScrollReveal from "@/components/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Mehta",
    role: "CEO, Luminara Skincare",
    text: "ZORIX transformed our entire online presence. Revenue grew 3× in six months — their strategy was surgical.",
    stars: 5,
  },
  {
    name: "James Okafor",
    role: "Founder, FitPulse",
    text: "Working with ZORIX felt like having an in-house team. Fast, creative, and they genuinely care about results.",
    stars: 5,
  },
  {
    name: "Sara Lin",
    role: "Marketing Director, Vaultline",
    text: "Our organic traffic jumped 280% after their SEO overhaul. The data transparency was unlike any agency we've used.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 md:py-32">
    <div className="container">
      <ScrollReveal className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What Clients Say</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 100}>
            <div className="glass-card p-6 h-full flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-5">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
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
