"use client";

import { motion } from "motion/react";
import { User, Building2, CreditCard, ExternalLink, ArrowRight } from "lucide-react";

export default function Portal() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Architecture"
          className="w-full h-full object-cover object-center grayscale contrast-125 opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOoNAviJ7oA7Uk95-sSAIq0DZgRWIxsGrueMedFQTCaEUlPHsmF-0rs-Dp1pvx7iFYXeJQepSRvDru4KoZco6dGiMxfcYcWDPNGWTxJifnMmtaLS-M-nVgMZgsNBGkcOZyWFKBKdieDlKpEHLlfI1n6xureeTAxYYtHmTG9zf8-rQYq6cofk6bAucWsCp1zrAdIYc7b5n1YqvzoUBFBYq69-3r8xQkYyauTpngspBilwluL7qYQ7W1HlH1cVEKtara-ozJXb7z-i0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-primary rounded-full"></span>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs font-label">
                Digital Ecosystem
              </span>
            </div>
            <h2 className="text-5xl font-extrabold font-headline text-primary mb-6">
              Self-Service Portal
            </h2>
            <p className="text-on-surface-variant font-body text-lg max-w-xl">
              A unified digital gateway designed for citizens and businesses. Access essential administrative tools with institutional precision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
          {/* Large Featured Card */}
          <motion.div 
            whileHover={{ borderColor: "rgba(0, 30, 64, 0.2)" }}
            className="md:col-span-7 group relative bg-white rounded-[2rem] p-10 shadow-[0_20px_50px_rgba(0,30,64,0.04)] border border-surface-container transition-all duration-500 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 w-48 h-48 bg-surface-container-low rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold font-headline text-primary mb-4 leading-tight">
                Personal Income Tax <br /> Administration
              </h3>
              <p className="text-on-surface-variant font-body mb-8 max-w-md leading-relaxed">
                Securely file annual returns, calculate tax liabilities, and manage your individual profile with the new integrated reporting system.
              </p>
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold font-label hover:opacity-90 transition-opacity flex items-center gap-2">
                Launch Portal <ExternalLink className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-on-surface-variant/40 uppercase tracking-widest font-label">
                Priority Service
              </span>
            </div>
          </motion.div>

          {/* Secondary Cards Stack */}
          <div className="md:col-span-5 grid grid-cols-1 gap-8 relative z-10">
            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white rounded-[2rem] p-8 border border-transparent hover:border-primary/10 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline text-primary mb-2">
                    Business Registration
                  </h3>
                  <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-4">
                    Establish new entities and manage TIN records via a streamlined enterprise workflow.
                  </p>
                  <span className="text-primary font-bold text-xs uppercase tracking-widest font-label flex items-center gap-2 group-hover:gap-4 transition-all">
                    Register Now <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white rounded-[2rem] p-8 border border-transparent hover:border-primary/10 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <CreditCard className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline text-primary mb-2">
                    Refund Tracking
                  </h3>
                  <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-4">
                    Real-time status updates for refund claims and disbursement verification.
                  </p>
                  <span className="text-primary font-bold text-xs uppercase tracking-widest font-label flex items-center gap-2 group-hover:gap-4 transition-all">
                    Track Claim <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
