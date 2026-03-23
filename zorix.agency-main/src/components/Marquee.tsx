import React from 'react';

const services = [
  "META ADS", 
  "GOOGLE ADS", 
  "SEO", 
  "GEO", 
  "LOGO DESIGN", 
  "BRANDING", 
  "WEBSITE DEVELOPMENT", 
  "UI/UX DESIGN"
];

const Marquee = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden py-4 border-y border-blue-800/50 shadow-md relative flex select-none">
      {/* First set of items */}
      <div className="flex shrink-0 animate-marquee items-center justify-around gap-8 min-w-full px-4">
        {services.map((service, idx) => (
          <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-white/80 shrink-0"></span>
            <span className="text-sm md:text-base font-bold tracking-widest">{service}</span>
          </div>
        ))}
      </div>
      
      {/* Second set of items (duplicated for seamless loop) */}
      <div className="flex shrink-0 animate-marquee items-center justify-around gap-8 min-w-full px-4" aria-hidden="true">
        {services.map((service, idx) => (
          <div key={`dup-${idx}`} className="flex items-center gap-8 whitespace-nowrap">
             <span className="w-2 h-2 rounded-full bg-white/80 shrink-0"></span>
            <span className="text-sm md:text-base font-bold tracking-widest">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
