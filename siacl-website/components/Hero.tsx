import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with optimized Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-airport.png"
          alt="Honiara International Airport Terminal at Sunset"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10 pt-20">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1.5 bg-tertiary text-on-tertiary text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6 animate-fade-in">
            National Aviation Authority
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tighter drop-shadow-2xl">
            Solomon Islands <br/>
            <span className="text-secondary-fixed">Airports Corporation</span> <br/>
            Limited
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium">
            Managing world-class gateways for a connected nation, fostering economic growth and sustainable island aviation.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-tertiary-fixed text-on-tertiary-fixed px-10 py-5 rounded-full font-extrabold text-lg hover:bg-tertiary-fixed-dim transition-all flex items-center gap-3 group shadow-2xl shadow-tertiary/30">
              Live Flight Status
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                flight_takeoff
              </span>
            </button>
            <button className="bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 px-10 py-5 rounded-full font-extrabold text-lg hover:bg-white/20 transition-all shadow-xl">
              Corporate Overview
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
