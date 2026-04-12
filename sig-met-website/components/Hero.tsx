import React from 'react';

const Hero = () => {
  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Tonal Layering */}
      <div className="absolute inset-0 z-0 scale-105">
        <img 
          className="w-full h-full object-cover blur-[2px]" 
          alt="cinematic aerial view of turquoise coral reefs and white sand coastline in Solomon Islands under soft hazy tropical sunlight" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuACej0sBepcLxGUILuNavaH7cGCd4omTRWFQUFSzUUKVKbcsUoZ2PC3ijmHV1Y1pgMwOWna3ySKgOFalJ3Vcch6sNT43myl75ZPqNYMo9Aafrj3EsZXB_9UQ3ZGaJsu9WiA3p0wzroWeAGrryiOvozUyNyjkoHmDQwNHBB4Fpb_rbuvRTj5UbP_S6sZ6WCG474L2k3UldpM7sRzU16Rlk3Qq0EQOS4RBrE6Y6ORbxjH3MHMLZVNObJMpaMsDSOUT339wrCTdq59loY" 
        />
        <div className="absolute inset-0 hero-gradient-overlay"></div>
      </div>

      {/* Foreground: Core Metrics */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white px-6 text-center">
        <div className="flex flex-row items-center gap-10 md:gap-16">
          {/* Large Temperature Display */}
          <div className="flex items-start">
            <span className="font-body text-[120px] md:text-[180px] font-extralight tracking-tighter leading-none">29°</span>
          </div>
          
          {/* Vertical Divider */}
          <div className="h-32 md:h-48 w-[1px] bg-white/30 backdrop-blur-md"></div>
          
          {/* Clean Metrics List */}
          <div className="flex flex-col items-start gap-4 text-left">
            <div className="group">
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1">Tide</p>
              <p className="font-body text-xl md:text-2xl font-medium tracking-tight">Rising</p>
            </div>
            <div className="group">
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1">UV Index</p>
              <p className="font-body text-xl md:text-2xl font-medium tracking-tight text-tertiary-fixed">High</p>
            </div>
            <div className="group">
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1">Wind Speed</p>
              <p className="font-body text-xl md:text-2xl font-medium tracking-tight">12kts SE</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <p className="font-headline text-lg md:text-xl font-medium tracking-wide text-white/90">Honiara, Solomon Islands</p>
          <p className="font-body text-sm text-white/60 mt-1">Light tropical breeze • Last updated 2m ago</p>
        </div>
      </div>

      {/* Bottom Hero Actions */}
      <div className="absolute bottom-16 md:bottom-24 left-0 right-0 z-10 flex justify-center gap-4 md:gap-8 px-6">
        <button className="px-8 py-3 rounded-xl font-headline font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 scale-95 active:scale-90">
          Marine
        </button>
        <button className="px-8 py-3 rounded-xl font-headline font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 scale-95 active:scale-90">
          Aviation
        </button>
        <button className="px-8 py-3 rounded-xl font-headline font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 scale-95 active:scale-90">
          Climate
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 flex flex-col items-center gap-2 opacity-60">
        <span className="font-label text-[10px] uppercase tracking-widest text-white">Explore Detailed Data</span>
        <span className="material-symbols-outlined text-white animate-bounce">expand_more</span>
      </div>
    </main>
  );
};

export default Hero;
