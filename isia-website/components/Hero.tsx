import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative flex-grow flex items-center justify-center overflow-hidden min-h-[100vh]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent z-10"></div>
        <Image
          alt="Honiara Skyline"
          fill
          className="object-cover"
          src="/hero-bg.jpg"
          priority
        />
      </div>
      <div className="relative z-20 w-full max-w-7xl px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24">
        <div className="flex flex-col text-left">
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8 drop-shadow-lg">
            Professional <span className="text-secondary-container">Excellence</span> in the Solomon Islands
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-body max-w-xl mb-10 leading-relaxed">
            Setting the standards for accountancy and financial leadership across the nation through rigorous education and professional integrity
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-label font-bold hover:brightness-110 transition-all shadow-lg active:scale-95">
              BECOME A MEMBER
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-label font-bold hover:bg-white/20 transition-all shadow-lg active:scale-95">
              FIND AN ACCOUNTANT
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="glass-card rounded-[2rem] p-8 md:p-10 w-full max-w-md shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-secondary-container text-3xl">person_search</span>
              <h2 className="text-white text-xl font-headline font-bold">Find a Licensed Accountant</h2>
            </div>
            <div className="relative group">
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    className="w-full py-4 pl-4 pr-12 bg-white/95 rounded-xl border-none focus:ring-4 focus:ring-secondary-container/30 text-primary font-label text-lg placeholder:text-slate-400 shadow-inner"
                    placeholder="Search by name or firm..."
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                </div>
                <button className="w-full bg-primary-container text-on-primary py-4 rounded-xl font-label font-bold hover:bg-primary transition-all flex justify-center items-center gap-2 shadow-lg">
                  <span>Search Directory</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white/80">
                <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="font-label text-sm font-medium">Verified Professional Registry</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                <span className="font-label text-sm font-medium">Compliance & Standards Regulated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-10 z-20 hidden lg:block">
        <div className="flex flex-col gap-1 text-white/40 font-headline text-xs tracking-[0.2em] uppercase">
          <span>Latitude: -9.4333</span>
          <span>Longitude: 159.9500</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
