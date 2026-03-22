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
      <ScrollReveal className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">What We Do</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Services</h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 80}>
            <div className="group glass-card p-6 h-full transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-base mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
