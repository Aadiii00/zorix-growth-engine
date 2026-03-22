import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  { title: "Luminara Skincare", category: "Branding & Web Design", color: "from-[hsl(280,60%,65%)] to-[hsl(200,80%,55%)]" },
  { title: "FitPulse App", category: "UI/UX & Social Media", color: "from-[hsl(254,85%,62%)] to-[hsl(193,100%,50%)]" },
  { title: "Vaultline Finance", category: "SEO & Content Strategy", color: "from-[hsl(210,60%,45%)] to-[hsl(254,85%,62%)]" },
  { title: "GreenLeaf Market", category: "Shopify Development", color: "from-[hsl(160,60%,45%)] to-[hsl(193,100%,50%)]" },
  { title: "NovaBeat Records", category: "Video & Social Marketing", color: "from-[hsl(330,60%,55%)] to-[hsl(254,85%,62%)]" },
  { title: "Atlas Coworking", category: "Web Design & Analytics", color: "from-[hsl(30,60%,55%)] to-[hsl(350,60%,55%)]" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 md:py-32 gradient-bg-subtle">
    <div className="container">
      <ScrollReveal className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Work</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Featured Projects</h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 80}>
            <div className="group glass-card overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                <span className="text-white/80 text-5xl font-black tracking-tighter opacity-30 group-hover:opacity-50 transition-opacity">
                  {p.title.charAt(0)}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.category}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
