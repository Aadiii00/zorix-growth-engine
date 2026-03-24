import ScrollReveal from "@/components/ScrollReveal";
import tracxnlabsImg from "@/assets/Screenshot 2026-03-22 220029.png";
import studyhubImg from "@/assets/Screenshot 2026-03-22 221445.png";

const projects = [
  { 
    title: "TRACXNLABS", 
    subtitle: "AI-Powered Exam Integrity Platform", 
    category: "AI SaaS Web App", 
    image: tracxnlabsImg,
    link: "https://transcxlabs.vercel.app"
  },
  {
    title: "STUDYHUB",
    subtitle: "VTU Engineering Notes & Resources",
    category: "EdTech Platform",
    image: studyhubImg,
    link: "https://www.studyhubpro.in/"
  }
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-16 sm:py-20 md:py-32 relative bg-slate-50 overflow-hidden">
    <div className="absolute top-1/2 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
    <div className="container relative z-10 px-4 sm:px-6">
      <ScrollReveal className="mb-12 sm:mb-16">
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border/50 text-xs font-medium text-primary mb-4 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              OUR WORK
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Projects</span>
            </h2>
          </div>
          <div className="flex justify-center sm:justify-start">
            <a href="/portfolio" className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition-colors text-sm sm:text-base">
              View All Work <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {projects.map((p, i) => {
          const content = (
            <div className="relative group rounded-xl sm:rounded-[2rem] overflow-hidden bg-white/70 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl h-full flex flex-col hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-primary/20">
              <div className="relative overflow-hidden h-40 sm:h-48 md:h-56 bg-slate-100">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col relative z-20">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full blur-[30px] sm:blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{p.category}</p>
                <h3 className="font-display text-xl sm:text-2xl tracking-tight mb-2 text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.subtitle}</p>
                
                <div className="mt-6 flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  View Case Study <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </div>
          );

          return (
            <ScrollReveal key={p.title} delay={i * 100}>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  {content}
                </a>
              ) : (
                <div className="block h-full">
                  {content}
                </div>
              )}
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
