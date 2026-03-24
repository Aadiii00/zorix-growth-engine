import { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import DarkVeil from "./DarkVeil";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className={`relative w-full min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden transition-opacity duration-500 ${scrolled ? 'opacity-90' : 'opacity-100'}`}
    >
      {/* DarkVeil WebGL Background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.9}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Background Star Particles */}
      <div className="absolute inset-0 z-0 animate-parallax-drift">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-0 animate-star-movement"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 8 + "s",
              animationDuration: Math.random() * 10 + 10 + "s",
            }}
          />
        ))}
      </div>

      {/* Subtle Glow Orbs - Reduce on mobile */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/10 md:bg-cyan-500/20 rounded-full blur-[60px] md:blur-[100px] pointer-events-none animate-floating-icon" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-[500px] md:h-[500px] bg-blue-600/10 md:bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-floating-icon" style={{ animationDelay: '3s' }} />

      <div className="container relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 md:px-0">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-4 md:gap-6 text-white z-20 text-center md:text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit backdrop-blur-md animate-fade-down mx-auto md:mx-0">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium tracking-wider text-cyan-200 uppercase">ZORIX - Next-Gen Solutions</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold font-display leading-tight md:leading-[1.1] animate-fade-up">
            Taking Your Business To{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 [text-shadow:0_0_30px_rgba(34,211,238,0.3)]">
              New Heights!
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-lg mx-auto md:mx-0 leading-relaxed animate-fade-up px-4 md:px-0" style={{ animationDelay: '200ms' }}>
            Our digital marketing strategies are out of this world. We build precision-crafted funnels, stunning experiences, and scalable growth systems.
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 mt-6 md:mt-8 animate-fade-up px-4 md:px-0" style={{ animationDelay: '400ms' }}>
            <a 
              href="tel:7483147208"
              className="group relative inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white text-sm md:text-base overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] cursor-pointer"
            >
              {/* Shimmer effect simulation via skew and translate */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out" />
              <PhoneCall size={18} className="group-hover:animate-pulse" />
              <span className="whitespace-nowrap">Contact Us Now</span>
            </a>
          </div>
        </div>

        {/* Right: Astronaut Visual */}
        <div className="relative w-full aspect-square md:aspect-auto md:min-h-[400px] lg:min-h-[600px] flex items-center justify-center pointer-events-auto group order-1 md:order-2">
          {/* Glowing Halo - Reduce on mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] sm:w-[70%] sm:h-[70%] md:w-[90%] md:h-[90%] bg-cyan-500/5 md:bg-cyan-500/10 rounded-full blur-[40px] sm:blur-[60px] md:blur-[100px] animate-pulse-glow-soft transition-all duration-700 group-hover:bg-cyan-500/10 md:group-hover:bg-cyan-500/20 group-hover:scale-105 md:group-hover:scale-110" />
          
          {/* Astronaut Image */}
          <div className="relative z-10 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[580px] transition-transform duration-700 group-hover:scale-105 animate-astronaut-float animate-rotation-tilt">
            <img 
              src="/hero-astronaut.png" 
              alt="Zorix Astronaut Explorer" 
              className="w-full h-auto drop-shadow-[0_10px_30px_rgba(6,182,212,0.2)] md:drop-shadow-[0_20px_50px_rgba(6,182,212,0.3)] transition-all duration-500 filter brightness-110 contrast-125 select-none pointer-events-none animate-helmet-shimmer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
