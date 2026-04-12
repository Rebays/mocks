"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function News() {
  return (
    <section className="relative bg-primary py-40 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold font-headline text-white mb-4">
              Announcements & Intelligence
            </h2>
            <p className="text-surface-container-low/70 font-body text-lg">
              Critical regulatory updates and the latest news from the Solomon Islands tax authority.
            </p>
          </div>
          <a
            className="group flex items-center gap-3 text-secondary-fixed font-bold font-label uppercase tracking-widest text-sm"
            href="#"
          >
            Journal Archive{" "}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Featured Article */}
          <div className="lg:col-span-8 group">
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden">
              <img
                alt="Featured News"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDr5cMOgvGRjNGd4cut2RsLvItXEOZLGqFieUWnI3O96yU1k0fYlnyk2Opuy6wKuAYIOEHq5xnjPXOnT6jBn-PhvGx03LZ66KWJdR1_heK-NAwzthHb4sZ03tF8yT5EXkgES2KTlWGBUb6v9IZqks_2r_EC_WIQOmDRz5KShmBDPlYLYSMZeirExYvNEyJ3c8wIPajccHvr0abxhQvj02u7pVjUM7OIK3o19Ik2j0JgcX9h9vTLWzNrWMlJh79inUAiiKi3wwrZJk"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute top-8 left-8">
                <span className="bg-error text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] font-label shadow-2xl backdrop-blur-md">
                  Deadline Alert
                </span>
              </div>
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-white/60 font-label text-xs uppercase tracking-widest mb-4 block">
                  October 24, 2024
                </span>
                <h3 className="text-4xl font-extrabold font-headline text-white mb-6 leading-tight max-w-2xl">
                  2024 Corporate Tax Filing Deadline: Final Preparations for Institutional Compliance
                </h3>
                <motion.button 
                  whileHover={{ backgroundColor: "#9ef6b6", color: "#00210e" }}
                  className="bg-white text-primary font-bold px-8 py-3 rounded-xl transition-colors"
                >
                  Read Full Article
                </motion.button>
              </div>
            </div>
          </div>

          {/* Secondary Items Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div 
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="bg-white/5 rounded-[2rem] p-8 border border-white/10 transition-all cursor-pointer group"
            >
              <span className="bg-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest font-label inline-block mb-4">
                Service Update
              </span>
              <span className="block text-white/40 text-[10px] uppercase tracking-widest font-label mb-2">
                October 18, 2024
              </span>
              <h4 className="text-xl font-bold font-headline text-white mb-3 group-hover:text-secondary-fixed transition-colors">
                Digital Small Business Portal Enhancements Live
              </h4>
              <p className="text-sm text-white/60 font-body leading-relaxed line-clamp-2">
                Automated VAT reporting and real-time TIN verification modules are now operational.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="bg-white/5 rounded-[2rem] p-8 border border-white/10 transition-all cursor-pointer group"
            >
              <span className="bg-surface-container-high/20 text-white/80 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest font-label inline-block mb-4">
                Policy Education
              </span>
              <span className="block text-white/40 text-[10px] uppercase tracking-widest font-label mb-2">
                October 12, 2024
              </span>
              <h4 className="text-xl font-bold font-headline text-white mb-3 group-hover:text-secondary-fixed transition-colors">
                Public Awareness Seminar: National Economic Resilience
              </h4>
              <p className="text-sm text-white/60 font-body leading-relaxed line-clamp-2">
                Join senior officials for an in-depth workshop on fiscal responsibility and nation building.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-[-1px] left-0 w-full leading-[0]">
        <svg 
          className="relative block w-full h-24 text-background" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
