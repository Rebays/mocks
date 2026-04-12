/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Droplets, 
  Waves, 
  Wrench, 
  Gauge, 
  FileText, 
  UserPlus, 
  Wallet, 
  Download, 
  ChevronRight, 
  ArrowRight, 
  Eye, 
  Flag, 
  Globe, 
  Share2,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <Droplets className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-bold tracking-tighter ${isScrolled ? "text-on-surface" : "text-white"}`}>
            Solomon Water
          </span>
        </a>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-semibold tracking-tight ${isScrolled ? "text-on-surface/80" : "text-white/80"}`}>
          <a href="#" className={`hover:text-primary transition-colors ${isScrolled ? "text-primary border-b-2 border-primary" : "text-white border-b-2 border-white"}`}>Services</a>
          <a href="#" className="hover:text-primary transition-colors">Meters</a>
          <a href="#" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#" className="hover:text-primary transition-colors">Quality</a>
          <a href="#" className="hover:text-primary transition-colors">About Us</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95">
            Report a Fault
          </button>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className={isScrolled ? "text-on-surface" : "text-white"} /> : <Menu className={isScrolled ? "text-on-surface" : "text-white"} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white absolute top-full left-0 w-full p-6 shadow-xl flex flex-col gap-4"
        >
          <a href="#" className="text-on-surface font-semibold py-2 border-b border-surface-container">Services</a>
          <a href="#" className="text-on-surface font-semibold py-2 border-b border-surface-container">Meters</a>
          <a href="#" className="text-on-surface font-semibold py-2 border-b border-surface-container">FAQ</a>
          <a href="#" className="text-on-surface font-semibold py-2 border-b border-surface-container">Quality</a>
          <a href="#" className="text-on-surface font-semibold py-2 border-b border-surface-container">About Us</a>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold mt-2">
            Report a Fault
          </button>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVgsaGLIpl0uhR862DfNyGC_dp4pXQ2k3aZl8XowcNlc5rJO88meM7n7Q9SD-zB3MmnzjUSrIMoM3LISYb_DRo43Yon8ldNIiw75W1NhcFA4gLCnyt-34s4lB7M9cYxRqj87VjJtZp6dTa7xkc8oj7XVkB7pZU8xpE_FHSgzBln-qXMFbouykI3UrI8QevhfSIeVn7zpU6SG2JyW_ZGkdrF-4CcM9ElOsWHa4BfBRjvsrCFvwh7CvneVaekEpH7W9B_XfpXh5aF9gD" 
          alt="Water drop hero"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-gradient-overlay"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            Safe Water for a <br/>
            <span className="text-blue-400">Healthy Nation</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium mb-10 max-w-lg leading-relaxed">
            Providing sustainable, reliable, and high-quality water and wastewater services to the Solomon Islands.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 active:scale-95 transition-all shadow-xl shadow-primary/30">
              Pay Bills Online
            </button>
            <button className="px-8 py-4 glass-panel border border-white/20 rounded-2xl font-bold text-lg text-white hover:bg-white/20 active:scale-95 transition-all">
              Our Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Water Supply",
      desc: "Ensuring 24/7 access to treated, safe drinking water across our growing urban centers.",
      icon: Waves,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Wastewater",
      desc: "Protecting our environment through modern sanitation and efficient wastewater management.",
      icon: Wrench,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Metering",
      desc: "Smart metering technology for accurate billing and efficient consumption monitoring.",
      icon: Gauge,
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">Integrated Utility Solutions</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-10 rounded-3xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-surface-container"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-on-surface/60 leading-relaxed mb-8">{service.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group/link">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuickAccess = () => {
  return (
    <section className="py-24 bg-surface-container-low px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Quick Links */}
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-black mb-12 tracking-tighter">Quick Access</h2>
          <div className="space-y-4">
            {[
              { label: "Current Tariffs 2024", icon: FileText, action: Download },
              { label: "New Connection Application", icon: UserPlus, action: ChevronRight },
              { label: "Payment Methods", icon: Wallet, action: ChevronRight }
            ].map((item, idx) => (
              <a 
                key={idx}
                href="#" 
                className="flex items-center justify-between p-6 bg-white rounded-2xl hover:bg-primary hover:text-white transition-all group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  <span className="font-bold">{item.label}</span>
                </div>
                <item.action className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* News */}
        <div className="lg:col-span-7">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-black tracking-tighter">Latest Updates</h2>
            <a href="#" className="text-primary font-bold text-sm hover:underline underline-offset-4">View All News</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                date: "OCTOBER 14, 2024",
                title: "Major Infrastructure Upgrade in Honiara",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv5eFCvXdYqvBBG5zq3bPwq_x1AP_E6hQuUClDC5DAErtpO4_AdW9-r7oMh_ncRnkH8OUwn4bgwUEIiT4CQs4AAVOL4W2zLGyBk3CAuknqPAchNedzXT0Jr3x2mLtO3rsKOP7Ls2cGIS3zLb16EujLfwakW9jsBmdQ32qKlSy99Rt8IkJHpV5-8HlPXGU04lpO7yUxAudGeTWhC45Z2-Xd0-45LQEHyK6HRD9kUeRS-dBIUHN-kL0RsyGvHK2rd_fE5DxU5qo0rjaQ"
              },
              {
                date: "OCTOBER 10, 2024",
                title: "Water Quality Report Q3 Released",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnipPLUt7dod52sPHbjB4b4HuuN6MCb3ikOXvaKIurBikaQx1rNZ7WDX2vkUUal7qraXCEBKbOFlg2gAKQgY8JcsiaiVv5CsNc60_GG-xv-475YFCi4F6dl7GdqK4DjNasQPW6AL_FOJ94KP6VmtN0s9gX5KIbR6HMl3Dpw1pU1DZR5VjtwLgDKCE3LdqsJk6UnmG4k2PLT7tQKwIOIJuyUYQoLaoB4EQKCo5L41B8TH_P3wp5bbGP-ZXBSxVfj8juaM098NyzVMtU"
              }
            ].map((news, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="space-y-4 cursor-pointer group"
              >
                <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src={news.img} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs text-on-surface/40 font-bold uppercase tracking-wider">{news.date}</span>
                  <h4 className="font-extrabold text-xl leading-tight group-hover:text-primary transition-colors">{news.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  return (
    <section className="py-32 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              className="w-full h-[600px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCySp0Ss8XuW-6Uc2J75TsmaVgJzNS5VVM5q53SGPBn4yGJa_WvnEiZKxdtDHU5nBwf4XyQk3LwsGnN3_wPHtFyvLqDi381fcV11HLOHMAX79kFT7iXIjinAzMKfvpULirObxsa5M2gXQ-cEAttRNGRgCD-L7TeeoaZZAVNXzZWPcmvI5PsjJrbRh4bmGQmsgRalCdXrfwSw41Vjs9G1nOY7bt579X_wuYzwXv1fxHq9MBeQWtzbreJIEITqlwgv5j7f-xf0AOrmn4j" 
              alt="Technician working"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl -z-10"></div>
        </div>

        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Purpose</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-10 leading-[0.95]">
            Committed to the <br/>
            <span className="text-primary">Future of Our Islands</span>
          </h2>
          
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                <p className="text-on-surface/60 leading-relaxed">
                  To be the leading utility service provider in the Pacific, delivering excellence through innovation and sustainability.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Flag className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-on-surface/60 leading-relaxed">
                  Providing safe and sustainable water and wastewater services to improve the health and well-being of Solomon Islanders.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-12">
            <div>
              <span className="block text-5xl font-black text-primary tracking-tighter">120K+</span>
              <span className="text-xs font-bold text-on-surface/40 uppercase tracking-widest">Lives Impacted</span>
            </div>
            <div className="h-16 w-px bg-surface-container"></div>
            <div>
              <span className="block text-5xl font-black text-primary tracking-tighter">24/7</span>
              <span className="text-xs font-bold text-on-surface/40 uppercase tracking-widest">Service Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-surface-container py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Droplets className="w-8 h-8 text-primary" />
              <span className="text-2xl font-black tracking-tighter">Solomon Water</span>
            </div>
            <p className="text-on-surface/50 max-w-xs font-medium">
              Providing safe water for a healthy nation since 1992.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 md:gap-12">
            {["Services", "Meters", "FAQ", "Quality", "About Us"].map((link) => (
              <a key={link} href="#" className="font-bold text-sm hover:text-primary transition-colors">{link}</a>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-surface-container flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-on-surface/40 font-medium">
            © 2024 Solomon Water. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface/60 hover:bg-primary hover:text-white transition-all">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface/60 hover:bg-primary hover:text-white transition-all">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <QuickAccess />
        <MissionVision />
      </main>
      <Footer />
    </div>
  );
}
