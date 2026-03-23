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
  <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-white">
    {/* Decorative background elements */}
    <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container relative z-10">
      <ScrollReveal className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-border/50 text-xs font-medium text-primary mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary" />
          WHAT WE DO
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-foreground">
          Performance-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Services</span>
        </h2>
      </ScrollReveal>

      {/* Horizontal scrollable tabs */}
      <ScrollReveal delay={80} className="flex flex-wrap gap-3 mb-12 border-b border-border/50 pb-6">
        {["Digital", "Strategy", "Creative", "SEO", "Analytics", "E-Commerce"].map((tab) => (
          <span
            key={tab}
            className="px-5 py-2.5 text-sm font-medium text-muted-foreground border border-border/50 rounded-full hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer bg-white shadow-sm"
          >
            {tab}
          </span>
        ))}
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 60}>
            <div className="group relative bg-white backdrop-blur-xl p-8 h-full rounded-2xl border border-black/5 transition-all duration-500 hover:bg-slate-50 hover:-translate-y-2 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-primary/20 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl tracking-tight mb-3 text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
