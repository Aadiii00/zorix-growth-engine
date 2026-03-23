import ScrollReveal from "@/components/ScrollReveal";
import { BarChart2, Palette, Rocket, Target } from "lucide-react";

const points = [
  { icon: BarChart2, title: "Data-Driven Strategies", desc: "Every decision backed by analytics and real performance metrics." },
  { icon: Palette, title: "Creative & Modern Design", desc: "Visually striking work that sets your brand apart from the noise." },
  { icon: Rocket, title: "Fast Execution", desc: "Rapid delivery without compromising quality or attention to detail." },
  { icon: Target, title: "ROI-Focused Results", desc: "Clear returns on every dollar you invest in your growth." },
];

const WhyChooseUsSection = () => (
  <section className="py-24 md:py-32 relative bg-slate-50">
    <div className="container relative z-10">
      <ScrollReveal className="mb-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border/50 text-xs font-medium text-primary mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary" />
          WHY ZORIX
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
          The ZORIX <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Advantage</span>
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 80}>
            <div className="group relative p-8 rounded-3xl bg-white/80 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:border-primary/20 h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-black/5 flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary/5 group-hover:border-primary/20 group-hover:scale-110 transition-all duration-500 relative z-10">
                <p.icon className="w-6 h-6 text-primary group-hover:text-purple-600 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground relative z-10">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
