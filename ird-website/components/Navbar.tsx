"use client";

import { motion } from "motion/react";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-2xl z-50 glass-nav overflow-hidden">
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-primary font-headline">
            Inland Revenue
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-headline text-sm tracking-tight font-semibold">
          <a
            className="text-primary border-b-2 border-primary/60 pb-1 hover:text-primary/80 transition-colors"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors"
            href="#"
          >
            Tax Returns
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors"
            href="#"
          >
            Investment
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-primary transition-colors"
            href="#"
          >
            Resources
          </a>
        </div>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary text-white font-bold px-6 py-2.5 rounded-xl transition-all font-label"
          >
            File Tax
          </motion.button>
        </div>
      </nav>
    </header>
  );
}
