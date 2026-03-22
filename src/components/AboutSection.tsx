import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 bg-navy text-navy-foreground">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">About ZORIX</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.1]">
            A Next-Gen Digital Agency
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-white/70 text-lg leading-relaxed mb-6" style={{ textWrap: "pretty" }}>
            ZORIX is a performance-driven digital marketing agency that blends creativity with data. We partner with ambitious brands to craft strategies that deliver measurable growth — from concept to conversion, every touchpoint is engineered for impact.
          </p>
          <p className="text-white/50 leading-relaxed" style={{ textWrap: "pretty" }}>
            Our team specializes in innovation-first thinking: leveraging the latest tools, platforms, and insights to keep your brand ahead of the curve.
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
