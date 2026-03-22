import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 gradient-bg-subtle">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">About ZORIX</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            A Next-Gen Digital Agency
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6" style={{ textWrap: "pretty" }}>
            ZORIX is a performance-driven digital marketing agency that blends creativity with data. We partner with ambitious brands to craft strategies that deliver measurable growth — from concept to conversion, every touchpoint is engineered for impact.
          </p>
          <p className="text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
            Our team specializes in innovation-first thinking: leveraging the latest tools, platforms, and insights to keep your brand ahead of the curve. Whether you're launching, scaling, or pivoting — we build the systems that make growth inevitable.
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
