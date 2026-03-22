import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20">
      <div className="container pt-16 md:pt-24 pb-0">
        {/* Top row: headline + description */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end mb-12">
          <div className="opacity-0 animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              ZORIX · Digital Agency
            </p>
            <h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.95] text-foreground"
            >
              Strategy<br />
              That <em className="text-primary not-italic">Scales</em>
            </h1>
          </div>

          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md" style={{ textWrap: "pretty" }}>
              We deploy precision-crafted digital marketing strategies that transform ambitious brands into market leaders. Data-driven. Design-forward. Results-obsessed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#cta">Get Started</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div
          className="opacity-0 animate-fade-up overflow-hidden"
          style={{ animationDelay: "240ms" }}
        >
          <img
            src={heroImage}
            alt="Modern architectural photography representing ZORIX's forward-thinking approach"
            className="w-full h-[320px] md:h-[480px] object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
