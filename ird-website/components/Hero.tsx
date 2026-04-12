"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[850px] flex items-center overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <img
          alt="Architectural background"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuACmoFebZ0_lbzOw2ljFHaFF417pN5XvM3fRq-H7J_oE2HU4qExajekmkIV0A02fkizLqCzb020OdmM1wsZ7T0v0xJtk6yrw-hYntp6DCs1nlKTMe0HVVl4NTO36uHp-QQQNFftncxRhFZin1_48L748EXncVWsL7F8arRvqqwljeRqLrBjyyYlGItfhEPIcBLkXCLFeiowXNvpTPXS31DymDeSxYLwo7yXC3fh2fm0PWuo5jFYKYSoCw8eImk9axzFSOTOCu_CCH4"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001e40] via-[#001e40]/95 to-[#003366]/60"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold font-headline text-white leading-tight mb-6 tracking-tight">
            Efficient Tax Services for a <span className="text-secondary-fixed">Stronger Nation</span>
          </h1>
          <p className="text-xl text-surface-container-low font-body mb-10 leading-relaxed max-w-2xl opacity-90">
            Advancing the economic prosperity of the Solomon Islands through transparent, authoritative, and modernized tax administration systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ y: -4 }}
              className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-secondary/20 transition-all"
            >
              File Your Taxes Online
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              View Tax Calendar
            </motion.button>
          </div>
        </motion.div>
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
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.17,101.52,123.4,103.11,180.39,89.51,241,75.05,270.36,65.89,321.39,56.44Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
