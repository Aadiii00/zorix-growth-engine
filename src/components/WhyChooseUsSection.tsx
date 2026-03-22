import ScrollReveal from "@/components/ScrollReveal";
import { BarChart2, Palette, Rocket, Target } from "lucide-react";

const points = [
  { icon: BarChart2, title: "Data-Driven Strategies", desc: "Every decision backed by analytics and real performance metrics." },
  { icon: Palette, title: "Creative & Modern Design", desc: "Visually striking work that sets your brand apart from the noise." },
  { icon: Rocket, title: "Fast Execution", desc: "Rapid delivery without compromising quality or attention to detail." },
  { icon: Target, title: "ROI-Focused Results", desc: "Clear returns on every dollar you invest in your growth." },
];

const WhyChooseUsSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <ScrollReveal className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Why ZORIX</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">Why Choose Us</h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 80}>
            <div className="group">
              <div className="w-12 h-12 bg-primary flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-base mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
