import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 gradient-bg-subtle" />
      <div
        className="absolute top-20 right-[10%] w-72 h-72 rounded-full opacity-20 gradient-bg blur-3xl animate-float-slow"
      />
      <div
        className="absolute bottom-32 left-[5%] w-56 h-56 rounded-full opacity-15 blur-3xl animate-float"
        style={{ background: "linear-gradient(135deg, hsl(193 100% 50% / 0.4), hsl(254 85% 62% / 0.3))" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(254 85% 62% / 0.2), transparent)" }}
      />

      <div className="container relative z-10 pt-28 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary mb-8 opacity-0 animate-fade-up"
          >
            <span className="w-2 h-2 rounded-full gradient-bg" />
            Digital Marketing Agency
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            We Build Brands{" "}
            <span className="gradient-text">That Scale</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms", textWrap: "pretty" }}
          >
            ZORIX helps businesses grow with data-driven digital marketing and cutting-edge design.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#cta">Get Started</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#portfolio">View Portfolio</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
