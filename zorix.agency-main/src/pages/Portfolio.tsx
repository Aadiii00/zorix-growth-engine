import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import tracxnlabsImg from "@/assets/Screenshot 2026-03-22 220029.png";
import studyhubImg from "@/assets/Screenshot 2026-03-22 221445.png";

const allProjects = [
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

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container relative z-10">
          <ScrollReveal className="mb-16">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-foreground">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Works</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              A comprehensive showcase of projects, case studies, and digital experiences I've crafted.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((p, i) => {
              const content = (
                <div className="relative group rounded-[2rem] overflow-hidden bg-white border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-primary/20">
                  <div className="relative overflow-hidden h-64 bg-slate-100">
                     <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col relative z-20">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{p.category}</p>
                    <h3 className="font-display text-2xl tracking-tight mb-2 text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.subtitle}</p>
                  </div>
                </div>
              );

              return (
                <ScrollReveal key={p.title} delay={i * 100}>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="block h-full block">
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
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
