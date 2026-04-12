"use client";

import { motion } from "motion/react";
import { FileText, BarChart3, Gavel, Download, Phone, Mail } from "lucide-react";

const resources = [
  {
    title: "TIN Registration Form (Individuals)",
    icon: FileText,
    type: "PDF",
    meta: "1.2 MB • Updated Sept 2024",
  },
  {
    title: "VAT Returns - Quarterly Filing Guide",
    icon: BarChart3,
    type: "PDF",
    meta: "2.4 MB • Updated Aug 2024",
  },
  {
    title: "PAYE Guide for Employers 2024",
    icon: Gavel,
    type: "PDF",
    meta: "3.1 MB • Updated Jan 2024",
  },
];

export default function KnowledgeHub() {
  return (
    <section className="relative py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 sticky top-32">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold font-headline text-primary mb-6">
              Knowledge Hub
            </h2>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed mb-8">
              A curated repository of legislative frameworks, procedural guides, and official documentation designed for professional transparency.
            </p>
            <div className="flex gap-4 mb-10">
              <button className="px-6 py-2 bg-primary text-white rounded-full font-bold font-label text-sm">
                All Resources
              </button>
              <button className="px-6 py-2 bg-surface-container-low text-primary rounded-full font-bold font-label text-sm hover:bg-surface-container-high transition-colors">
                Individual
              </button>
              <button className="px-6 py-2 bg-surface-container-low text-primary rounded-full font-bold font-label text-sm hover:bg-surface-container-high transition-colors">
                Corporate
              </button>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-secondary text-white font-extrabold px-10 py-4 rounded-xl hover:shadow-xl transition-all font-label w-full lg:w-auto"
            >
              Access Full Archive
            </motion.button>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {resources.map((res, idx) => (
            <motion.div
              key={idx}
              whileHover={{ borderColor: "rgba(0, 30, 64, 0.2)", x: 5 }}
              className="group flex items-center justify-between p-6 bg-white rounded-2xl border border-surface-container-low transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <res.icon className="text-primary w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-extrabold text-primary font-headline text-lg group-hover:text-secondary transition-colors">
                    {res.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] font-bold bg-surface-container text-primary px-2 py-0.5 rounded uppercase font-label">
                      {res.type}
                    </span>
                    <span className="text-xs text-on-surface-variant/60 font-medium">
                      {res.meta}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary group-hover:text-white transition-all">
                <Download className="w-5 h-5" />
              </div>
            </motion.div>
          ))}

          {/* Call to Action Card */}
          <div className="relative bg-primary-container rounded-3xl p-10 overflow-hidden mt-12 shadow-2xl">
            <img
              alt="Support background"
              className="absolute inset-0 w-full h-full object-cover opacity-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGiCXUJE7O-8h89BuZbsZwVLkZT2wECwUW6hii6sva9KboQ0YXVtLOE3dJxhE-FZKT8v-J_j_BW2n2-NMqfTuhFCnB_xf50u5Rui0umPvWT8icVjYDJLAKBJcRb6fHNHtFXiPOnR23OZesJLhYKnGl8vfRtpGLCz3mGw8SOInywQ6F4K-GsgelxnEGydO7ZMQ1p6k7XcJaO3iGZuDF1ggjLb6vyAReFncIkJcCGTwhpWhS0ylQF8RBAOm31o8aLRoeYohuS82zTos"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-headline font-bold text-white mb-4">
                Dedicated Support Assistance
              </h3>
              <p className="text-surface-container-low font-body mb-8 opacity-80">
                Our compliance officers are available for direct consultation regarding complex filings and portal navigation.
              </p>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-3 text-white">
                  <Phone className="w-5 h-5 text-secondary-fixed" />
                  <span className="font-bold font-body">+677 22256</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Mail className="w-5 h-5 text-secondary-fixed" />
                  <span className="font-bold font-body">taxenquiries@ird.gov.sb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
