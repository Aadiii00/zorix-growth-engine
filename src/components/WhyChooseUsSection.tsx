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
      <ScrollReveal className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Why ZORIX</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Why Choose Us</h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 100} className="text-center">
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5 shadow-soft">
              <p.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
