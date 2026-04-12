import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] blur-3xl group-hover:bg-secondary/20 transition-all duration-700"></div>
              <div className="relative overflow-hidden rounded-[3rem] shadow-2xl shadow-primary/10">
                <Image
                  src="/images/about-vision.png"
                  alt="SIACL Strategic Vision"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute -bottom-8 -right-8 bg-secondary p-10 rounded-3xl shadow-2xl text-white max-w-xs transform group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-500">
                  <p className="text-5xl font-black mb-1 tracking-tighter">100%</p>
                  <p className="text-xs font-bold opacity-90 uppercase tracking-[0.2em] leading-tight">
                    Safety Compliance <br /> Record 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-sm block mb-6 px-4 py-1.5 bg-secondary/10 rounded-full w-fit">
              About the Corporation
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-primary mb-8 leading-[1.1] tracking-tighter">
              Elevating Solomon Islands to <span className="text-secondary">Global Standards</span>
            </h2>
            <p className="text-xl text-on-surface-variant mb-8 leading-relaxed font-medium">
              Solomon Islands Airports Corporation Limited (SIACL) is the state-owned enterprise responsible for the operation and development of our nation&apos;s critical aviation infrastructure.
            </p>
            <p className="text-lg text-on-surface-variant mb-12 leading-relaxed opacity-80">
              Our mission is to provide safe, efficient, and sustainable airport services that foster economic growth and connect our islands to the global community. We manage 22 airports across the archipelago, ensuring professional standards from our international hubs to our vital provincial airstrips.
            </p>
            <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-black text-lg hover:bg-primary/90 transition-all flex items-center gap-4 shadow-xl shadow-primary/20 group">
              Our Strategic Plan
              <span className="material-symbols-outlined transition-transform group-hover:rotate-12" style={{ fontVariationSettings: "'FILL' 0" }}>
                description
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
