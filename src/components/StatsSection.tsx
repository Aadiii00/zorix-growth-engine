import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "250%", label: "Avg. Growth in Organic Traffic" },
  { value: "14×", label: "Return on Ad Spend" },
  { value: "0.8s", label: "Average Page Load Speed" },
  { value: "94%", label: "Client Retention Rate" },
];

const StatsSection = () => (
  <section className="py-24 md:py-32 border-t border-border">
    <div className="container">
      <ScrollReveal className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Performance</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-4">
          Performance Proof
        </h2>
        <Button variant="outline" size="sm" asChild>
          <a href="#portfolio">See Case Studies</a>
        </Button>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 80}>
            <div className="bg-background p-6 md:p-8">
              <p className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-2">
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
