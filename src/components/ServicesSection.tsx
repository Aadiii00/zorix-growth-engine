import ScrollReveal from "@/components/ScrollReveal";
import { BarChart3, Globe, Lightbulb, Mail, Megaphone, MonitorSmartphone, Search, ShoppingBag } from "lucide-react";

const services = [
  { icon: Lightbulb, title: "Digital Strategy & Planning", desc: "Custom blueprints that align your marketing with measurable business goals." },
  { icon: Megaphone, title: "Social Media Marketing", desc: "Engage audiences across platforms with campaigns that drive real conversations." },
  { icon: MonitorSmartphone, title: "Website Design & Development", desc: "High-converting, responsive websites crafted for speed and user experience." },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher, attract qualified traffic, and dominate search results organically." },
  { icon: Globe, title: "Content & Video Marketing", desc: "Compelling stories and visual content that captivate and convert your audience." },
  { icon: Mail, title: "Email Marketing", desc: "Personalized campaigns that nurture leads and maximize customer lifetime value." },
  { icon: BarChart3, title: "Web Analytics", desc: "Turn raw data into actionable insights with advanced tracking and reporting." },
  { icon: ShoppingBag, title: "Shopify Development", desc: "End-to-end Shopify stores built for scale, performance, and seamless checkout." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container">
      <ScrollReveal className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">What We Do</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">Core Services</h2>
      </ScrollReveal>

      {/* Horizontal scrollable tabs */}
      <ScrollReveal delay={80} className="flex flex-wrap gap-3 mb-12 border-b border-border pb-6">
        {["Digital", "Strategy", "Creative", "SEO", "Analytics", "E-Commerce"].map((tab) => (
          <span
            key={tab}
            className="px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-sm hover:bg-foreground hover:text-background transition-colors duration-200 cursor-pointer"
          >
            {tab}
          </span>
        ))}
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 60}>
            <div className="group bg-background p-6 h-full transition-colors duration-300 hover:bg-secondary cursor-pointer">
              <s.icon className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-sm mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
