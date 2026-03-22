import ScrollReveal from "@/components/ScrollReveal";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import heroImage from "@/assets/hero-image.jpg";

const projects = [
  { title: "LUMINARA SKINCARE", subtitle: "E-Commerce Brand Sees 3× Sales", category: "Branding & Web Design", image: caseStudy1 },
  { title: "GLOBAL SUPPLY CHAIN REIMAGINED", subtitle: "Vaultline Digital Transformation", category: "SEO & Content Strategy", image: caseStudy2 },
  { title: "FITPULSE APP LAUNCH", subtitle: "312% Increase in Non-Branded Organic Traffic", category: "UI/UX & Social Media", image: heroImage },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24 md:py-32 bg-secondary">
    <div className="container">
      <ScrollReveal className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Case Studies</p>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">Featured Projects</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 100}>
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{p.category}</p>
              <h3 className="font-black text-sm tracking-wide mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.subtitle}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
