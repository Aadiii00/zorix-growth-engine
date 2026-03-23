import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Performance Marketing Solutions",
    subtitle: "Drive Measurable Growth Online",
    desc: "Maximize ROI with data-driven performance marketing. Boost your conversions today with our expert strategies.",
  },
  {
    title: "Search Engine Optimisation",
    subtitle: "Grow Your Website Traffic",
    desc: "Achieve top search rankings with expert SEO. Grow your organic traffic and dominate search results.",
  },
  {
    title: "Logo & Brand Identity",
    subtitle: "Build a Brand That Speaks",
    desc: "Get a logo and brand identity that gets noticed and builds trust. Start your branding journey now.",
  },
  {
    title: "UI/UX Website Development",
    subtitle: "Engaging Digital Experiences",
    desc: "Seamless user experience. Design sleek, user-focused websites that convert and bring your vision to life.",
  },
  {
    title: "Social Media Marketing",
    subtitle: "Build & Engage Your Online Community",
    desc: "Drive real engagement and brand growth. Let's amplify your social presence and connect with your audience.",
  }
];

const ShowcaseSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40, axis: 'y' }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Dynamic gradient colors based on active slide
  const bgGradients = [
    "from-slate-950 via-[#0a0f1c] to-[#040b16]",
    "from-slate-950 via-[#10071a] to-[#0a0514]",
    "from-slate-950 via-[#051114] to-[#020a0d]",
    "from-slate-950 via-[#120a05] to-[#0d0702]",
    "from-slate-950 via-[#0b0c10] to-[#06070a]",
  ];

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black flex items-center justify-center">
      {/* Animated Dark Gradient Background that changes per slide */}
      <div className="absolute inset-0 z-0 transition-colors duration-1000 ease-in-out">
        <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[selectedIndex]} opacity-100 transition-all duration-1000`} />
        
        {/* Glowing Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full blur-[130px] mix-blend-screen animate-pulse-glow transition-all duration-1000"
          style={{ backgroundColor: `hsla(${selectedIndex * 60 + 200}, 70%, 20%, 0.4)` }} 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full blur-[100px] mix-blend-screen animate-pulse-glow transition-all duration-1000" 
          style={{ animationDelay: '2s', backgroundColor: `hsla(${selectedIndex * 60 + 260}, 70%, 20%, 0.3)` }} 
        />
      </div>

      <div className="container relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between pt-24 pb-12 lg:py-0">
        
        {/* Left Side: Text Carousel (Vertical Slide) */}
        <div className="w-full lg:w-1/2 h-full lg:h-[60vh] flex items-center relative z-20">
          <div className="overflow-hidden h-full w-full" ref={emblaRef}>
            <div className="flex flex-col h-full touch-pan-x">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] min-h-full flex flex-col justify-center pr-4 md:pr-12 transition-opacity duration-700"
                  style={{ opacity: selectedIndex === index ? 1 : 0.1 }}
                >
                  <div 
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-blue-400 mb-6 backdrop-blur-md transition-all duration-700 transform ${selectedIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    {slide.subtitle}
                  </div>
                  
                  <h2 
                    className={`font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] transition-all duration-700 delay-100 transform ${selectedIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                  >
                    {slide.title}
                  </h2>
                  
                  <p 
                    className={`text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed mb-10 transition-all duration-700 delay-200 transform ${selectedIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                  >
                    {slide.desc}
                  </p>

                  <div className={`transition-all duration-700 delay-300 transform ${selectedIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <button 
                      className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Get Started
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Static Reused Image with Dynamic Feel */}
        <div className="w-full lg:w-1/2 h-[40vh] lg:h-full flex items-center justify-center relative z-10 hidden md:flex">
          <div className="relative w-full max-w-lg aspect-square">
            {/* The single abstract visual that dynamically changes */}
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop" 
              alt="Premium abstract visualization" 
              className="w-full h-full object-cover rounded-full lg:rounded-[3rem] shadow-2xl animate-float transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ 
                filter: `hue-rotate(${selectedIndex * 72}deg) saturate(1.8) brightness(1.2) contrast(1.1)`,
                transform: `scale(${1 + selectedIndex * 0.05}) rotate(${selectedIndex * 15}deg)`,
                opacity: 0.9
              }}
            />
            
            {/* Dynamic Glass Overlay to add depth */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10 rounded-full lg:rounded-[3rem] backdrop-blur-[2px] border border-white/10 transition-all duration-1000"
              style={{
                transform: `rotate(${-selectedIndex * 10}deg)`
              }}
            />
          </div>
        </div>

      </div>

      {/* Navigation Controls (Absolute Bottom) */}
      <div className="absolute bottom-8 lg:bottom-12 left-0 right-0 z-30 flex items-center justify-between px-6 lg:px-24 pointer-events-none">
        {/* Pagination Indicators */}
        <div className="flex gap-3 pointer-events-auto items-center">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`rounded-full transition-all duration-500 ${
                idx === selectedIndex ? "w-10 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "w-2 h-1.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-3 pointer-events-auto hidden md:flex">
          <button 
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 transition-all backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 transition-all backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSlider;
