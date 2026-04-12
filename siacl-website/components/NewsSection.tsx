import React from 'react';
import Image from 'next/image';

const NewsSection = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-primary mb-6 tracking-tighter">
            Corporate News & Updates
          </h2>
          <div className="w-24 h-2 bg-tertiary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Main Featured News */}
          <div className="md:col-span-7 bg-surface-container-lowest rounded-[3rem] p-6 group cursor-pointer hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 border border-outline-variant/30">
            <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden mb-10">
              <Image
                src="/images/hero-airport.png" 
                alt="New Terminal Expansion Project"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-8 left-8 bg-tertiary text-on-tertiary px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                Major Project
              </div>
            </div>
            <div className="px-6 pb-6">
              <p className="text-secondary font-black text-sm mb-4 tracking-[0.1em] uppercase">October 24, 2024</p>
              <h3 className="text-4xl font-black text-primary mb-6 leading-tight tracking-tighter group-hover:text-secondary transition-colors">
                Expansion of Honiara International Terminal Phase II Begins
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-lg font-medium opacity-80">
                The groundbreaking ceremony for the new international lounge and expanded check-in hall was held yesterday, marking a new era for Pacific travel and SIACL&apos;s commitment to safety and efficiency.
              </p>
            </div>
          </div>

          {/* Secondary News & Newsletter */}
          <div className="md:col-span-5 flex flex-col gap-10">
            <div className="bg-surface-container-lowest p-10 rounded-[2.5rem] border border-outline-variant/30 hover:shadow-xl transition-all duration-500 cursor-pointer group">
              <p className="text-secondary font-black text-xs mb-4 uppercase tracking-widest">October 15, 2024</p>
              <h4 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                SIACL Achieves ISO 9001:2015 Certification for Safety Management
              </h4>
              <span className="text-primary text-sm font-black flex items-center gap-3 uppercase tracking-widest group-hover:gap-5 transition-all">
                Read Article 
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </span>
            </div>

            <div className="bg-surface-container-lowest p-10 rounded-[2.5rem] border border-outline-variant/30 hover:shadow-xl transition-all duration-500 cursor-pointer group">
              <p className="text-secondary font-black text-xs mb-4 uppercase tracking-widest">October 02, 2024</p>
              <h4 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                Upgraded Runway Lighting at Munda International Now Operational
              </h4>
              <span className="text-primary text-sm font-black flex items-center gap-3 uppercase tracking-widest group-hover:gap-5 transition-all">
                Read Article 
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </span>
            </div>

            {/* Premium Newsletter Box */}
            <div className="bg-primary p-12 rounded-[3rem] text-white flex flex-col justify-center items-center text-center shadow-2xl shadow-primary/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              <span className="material-symbols-outlined text-6xl mb-6 text-tertiary-fixed animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
                mail
              </span>
              <h4 className="text-3xl font-black mb-6 tracking-tighter">Stay Connected</h4>
              <p className="text-white/70 mb-8 font-medium">Get the latest aviation updates and corporate news delivered to your inbox.</p>
              <div className="w-full flex flex-col gap-4">
                <input 
                  className="w-full bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:ring-4 focus:ring-tertiary-fixed/30 focus:border-tertiary-fixed outline-none transition-all" 
                  placeholder="Your email address..." 
                  type="email" 
                />
                <button className="bg-tertiary-fixed text-on-tertiary-fixed w-full py-5 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-black/20 transition-all uppercase tracking-widest">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
