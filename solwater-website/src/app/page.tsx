"use client";

import { 
  Droplets, 
  Waves, 
  Wrench as Plumbing, 
  Activity as Counter, 
  ArrowRight, 
  FileText, 
  UserPlus, 
  Wallet, 
  Download, 
  ChevronRight, 
  Eye, 
  Flag,
  Globe,
  Share2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#181c20] font-sans selection:bg-[#cde5ff] selection:text-[#001d31]">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <a className="flex items-center gap-2 text-xl font-bold text-white tracking-tighter" href="#">
            <Droplets className="w-8 h-8 text-[#93ccff] fill-current" />
            <span>Solomon Water</span>
          </a>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-tight">
            <a className="text-white font-bold border-b-2 border-white pb-1" href="#">Services</a>
            <a className="text-slate-200 hover:text-white transition-colors" href="#">Meters</a>
            <a className="text-slate-200 hover:text-white transition-colors" href="#">FAQ</a>
            <a className="text-slate-200 hover:text-white transition-colors" href="#">Quality</a>
            <a className="text-slate-200 hover:text-white transition-colors" href="#">About Us</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#007bba] text-[#fdfcff] px-6 py-2.5 rounded-full text-sm font-semibold active:scale-95 transition-all duration-300 shadow-lg shadow-black/20">
              Report a Fault
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVgsaGLIpl0uhR862DfNyGC_dp4pXQ2k3aZl8XowcNlc5rJO88meM7n7Q9SD-zB3MmnzjUSrIMoM3LISYb_DRo43Yon8ldNIiw75W1NhcFA4gLCnyt-34s4lB7M9cYxRqj87VjJtZp6dTa7xkc8oj7XVkB7pZU8xpE_FHSgzBln-qXMFbouykI3UrI8QevhfSIeVn7zpU6SG2JyW_ZGkdrF-4CcM9ElOsWHa4BfBRjvsrCFvwh7CvneVaekEpH7W9B_XfpXh5aF9gD"
              alt="Dramatic water drop"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-6">
                Safe Water for a <br/><span className="text-[#93ccff]">Healthy Nation</span>
              </h1>
              <p className="text-xl text-slate-200 font-medium mb-10 max-w-lg leading-relaxed">
                Providing sustainable, reliable, and high-quality water and wastewater services to the Solomon Islands.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-br from-[#006194] to-[#007bba] text-white rounded-2xl font-semibold text-lg hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-black/40">
                  Pay Bills Online
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl font-semibold text-lg text-white hover:bg-white/20 active:scale-95 transition-all">
                  Report a Fault
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-24 px-8 bg-[#f7f9ff]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-[#006194] font-bold tracking-[0.1em] uppercase text-xs mb-4 block">Our Services</span>
              <h2 className="text-4xl font-bold tracking-tight text-[#181c20]">Integrated Utility Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Water Supply */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-white p-8 rounded-3xl hover:bg-white transition-all duration-500 border border-transparent hover:border-[#bfc7d2]/10 shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-[#c2e0ff]/30 rounded-full flex items-center justify-center mb-8 text-[#006194] group-hover:scale-110 transition-transform">
                  <Waves className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Water Supply</h3>
                <p className="text-[#404850] leading-relaxed mb-6">Ensuring 24/7 access to treated, safe drinking water across our growing urban centers.</p>
                <a className="inline-flex items-center gap-2 text-[#006194] font-semibold hover:gap-3 transition-all" href="#">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Wastewater */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-[#f1f4fa] p-8 rounded-3xl hover:bg-white transition-all duration-500 border border-transparent hover:border-[#bfc7d2]/10 shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-[#c2e0ff]/30 rounded-full flex items-center justify-center mb-8 text-[#006194] group-hover:scale-110 transition-transform">
                  <Plumbing className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Wastewater</h3>
                <p className="text-[#404850] leading-relaxed mb-6">Protecting our environment through modern sanitation and efficient wastewater management.</p>
                <a className="inline-flex items-center gap-2 text-[#006194] font-semibold hover:gap-3 transition-all" href="#">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Metering */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="group bg-white p-8 rounded-3xl hover:bg-white transition-all duration-500 border border-transparent hover:border-[#bfc7d2]/10 shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-[#c2e0ff]/30 rounded-full flex items-center justify-center mb-8 text-[#006194] group-hover:scale-110 transition-transform">
                  <Counter className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Metering</h3>
                <p className="text-[#404850] leading-relaxed mb-6">Smart metering technology for accurate billing and efficient consumption monitoring.</p>
                <a className="inline-flex items-center gap-2 text-[#006194] font-semibold hover:gap-3 transition-all" href="#">
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Links & Latest Updates */}
        <section className="py-24 bg-[#f1f4fa]">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Quick Links Column */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold mb-12 tracking-tight">Quick Access</h2>
              <div className="space-y-4">
                {[
                  { icon: FileText, label: "Current Tariffs 2024", actionIcon: Download },
                  { icon: UserPlus, label: "New Connection Application", actionIcon: ChevronRight },
                  { icon: Wallet, label: "Payment Methods", actionIcon: ChevronRight },
                ].map((item, i) => (
                  <a key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl hover:bg-white transition-colors group shadow-sm" href="#">
                    <div className="flex items-center gap-4">
                      <item.icon className="w-6 h-6 text-[#006194]" />
                      <span className="font-semibold">{item.label}</span>
                    </div>
                    <item.actionIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* News Column */}
            <div className="lg:col-span-7">
              <div className="flex justify-between items-end mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Latest Updates</h2>
                <a className="text-[#006194] font-medium text-sm underline-offset-4 hover:underline" href="#">View All News</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl overflow-hidden">
                    <img 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv5eFCvXdYqvBBG5zq3bPwq_x1AP_E6hQuUClDC5DAErtpO4_AdW9-r7oMh_ncRnkH8OUwn4bgwUEIiT4CQs4AAVOL4W2zLGyBk3CAuknqPAchNedzXT0Jr3x2mLtO3rsKOP7Ls2cGIS3zLb16EujLfwakW9jsBmdQ32qKlSy99Rt8IkJHpV5-8HlPXGU04lpO7yUxAudGeTWhC45Z2-Xd0-45LQEHyK6HRD9kUeRS-dBIUHN-kL0RsyGvHK2rd_fE5DxU5qo0rjaQ"
                      alt="Infrastructure Upgrade"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs text-[#404850] font-medium">OCTOBER 14, 2024</span>
                    <h4 className="font-bold text-lg leading-snug hover:text-[#006194] transition-colors cursor-pointer">Major Infrastructure Upgrade in Honiara</h4>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl overflow-hidden">
                    <img 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnipPLUt7dod52sPHbjB4b4HuuN6MCb3ikOXvaKIurBikaQx1rNZ7WDX2vkUUal7qraXCEBKbOFlg2gAKQgY8JcsiaiVv5CsNc60_GG-xv-475YFCi4F6dl7GdqK4DjNasQPW6AL_FOJ94KP6VmtN0s9gX5KIbR6HMl3Dpw1pU1DZR5VjtwLgDKCE3LdqsJk6UnmG4k2PLT7tQKwIOIJuyUYQoLaoB4EQKCo5L41B8TH_P3wp5bbGP-ZXBSxVfj8juaM098NyzVMtU"
                      alt="Water Quality Report"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs text-[#404850] font-medium">OCTOBER 10, 2024</span>
                    <h4 className="font-bold text-lg leading-snug hover:text-[#006194] transition-colors cursor-pointer">Water Quality Report Q3 Released</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-32 px-8 overflow-hidden relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  className="w-full h-[500px] object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCySp0Ss8XuW-6Uc2J75TsmaVgJzNS5VVM5q53SGPBn4yGJa_WvnEiZKxdtDHU5nBwf4XyQk3LwsGnN3_wPHtFyvLqDi381fcV11HLOHMAX79kFT7iXIjinAzMKfvpULirObxsa5M2gXQ-cEAttRNGRgCD-L7TeeoaZZAVNXzZWPcmvI5PsjJrbRh4bmGQmsgRalCdXrfwSw41Vjs9G1nOY7bt579X_wuYzwXv1fxHq9MBeQWtzbreJIEITqlwgv5j7f-xf0AOrmn4j"
                  alt="Technician at work"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#006194]/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#c2e0ff]/20 rounded-full blur-2xl z-0"></div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#006194] font-bold tracking-[0.1em] uppercase text-xs mb-4 block">Our Purpose</span>
              <h2 className="text-5xl font-bold tracking-tight mb-8 leading-tight">Committed to the <br/>Future of Our Islands</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-3">
                    <Eye className="w-6 h-6 text-[#006194] fill-[#006194]/10" />
                    Our Vision
                  </h4>
                  <p className="text-[#404850] leading-relaxed">To be the leading utility service provider in the Pacific, delivering excellence through innovation and sustainability.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-3">
                    <Flag className="w-6 h-6 text-[#006194] fill-[#006194]/10" />
                    Our Mission
                  </h4>
                  <p className="text-[#404850] leading-relaxed">Providing safe and sustainable water and wastewater services to improve the health and well-being of Solomon Islanders.</p>
                </div>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div className="text-center">
                  <span className="block text-4xl font-extrabold text-[#006194] tracking-tighter">120K+</span>
                  <span className="text-sm font-medium text-[#404850] uppercase tracking-wider">Lives Impacted</span>
                </div>
                <div className="h-12 w-[1px] bg-[#bfc7d2]"></div>
                <div className="text-center">
                  <span className="block text-4xl font-extrabold text-[#006194] tracking-tighter">24/7</span>
                  <span className="text-sm font-medium text-[#404850] uppercase tracking-wider">Service Focus</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f1f4fa] w-full border-t border-[#bfc7d2]/20">
        <div className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-lg font-bold text-[#006194] mb-2">Solomon Water</div>
            <p className="text-sm text-[#404850]">© 2024 Solomon Water. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {["Privacy Policy", "Terms of Service", "Contact Us", "Careers", "News"].map((link) => (
              <a key={link} className="text-[#404850] hover:text-[#006194] transition-colors hover:underline underline-offset-4" href="#">{link}</a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 flex gap-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#006194] hover:bg-[#006194] hover:text-white transition-all shadow-sm">
              <Globe className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#006194] hover:bg-[#006194] hover:text-white transition-all shadow-sm">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
