"use client";

import React, { useState, useEffect } from 'react';
import GovBanner from './GovBanner';
import ActiveAlerts from './ActiveAlerts';

const MENU_ITEMS = [
  {
    title: "Forecasts",
    links: [
      { name: "Public Forecast", desc: "Honiara and provincial forecasts", icon: "cloud" },
      { name: "Marine/Sea", desc: "Wave heights and sea surface temps", icon: "waves" },
      { name: "Aviation/TAF", desc: "Terminal Aerodrome Forecasts", icon: "flight" },
      { name: "5-Day Outlook", desc: "Extended regional projections", icon: "calendar_month" },
    ]
  },
  {
    title: "Warnings",
    links: [
      { name: "Tropical Cyclone", desc: "Active tracking and watch alerts", icon: "storm" },
      { name: "Heavy Rain", desc: "Flood risk and precipitation alerts", icon: "rainy" },
      { name: "Strong Wind", desc: "Gale warnings and coastal impacts", icon: "air" },
      { name: "Tsunami/Swell", desc: "Oceanic seismic and wave threats", icon: "flood" },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Observations", desc: "Radar, AWS, and manual stations", icon: "satellite_alt" },
      { name: "Climate & Ocean", desc: "ENSO updates and seasonal trends", icon: "public" },
      { name: "Bulk SMS", desc: "Subscribe to weather notification", icon: "sms" },
      { name: "Data Portal", desc: "Historical data and archives", icon: "database" },
    ]
  },
  {
    title: "About",
    links: [
      { name: "Our Staff", desc: "Meet the meteorology team", icon: "groups" },
      { name: "News & Media", desc: "Latest press releases and updates", icon: "newspaper" },
      { name: "Quick Links", desc: "External govt and global resources", icon: "link" },
      { name: "Contact", desc: "Get in touch with Headquarters", icon: "contact_support" },
    ]
  }
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <GovBanner isVisible={!isScrolled} />
      <div className={`max-w-7xl mx-auto relative group pointer-events-auto px-4 transition-all duration-500 ${isScrolled ? 'pt-2' : 'pt-4'}`}>
        <nav className={`flex justify-between items-center px-8 py-3 w-full transition-all duration-500 rounded-2xl border border-white/20 shadow-[0_12px_40px_-12px_rgba(34,83,139,0.15)] hover:shadow-[0_20px_50px_-12px_rgba(34,83,139,0.25)] ${
          isScrolled 
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-3xl' 
            : 'bg-white/20 dark:bg-slate-900/80 backdrop-blur-2xl'
        }`}>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <img src="/met-logo.png" alt="SolomonMet Logo" className="h-12 w-auto" />
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {MENU_ITEMS.map((item, idx) => (
                <div
                  key={item.title}
                  className="relative px-4 py-2"
                  onMouseEnter={() => setActiveMenu(idx)}
                >
                  <button className={`font-headline font-semibold tracking-tight transition-colors duration-300 pointer-events-auto ${
                    activeMenu === idx 
                      ? 'text-primary' 
                      : isScrolled 
                        ? 'text-slate-800 dark:text-slate-200 hover:text-primary' 
                        : 'text-white dark:text-slate-300 hover:text-slate-200'
                  }`}>
                    {item.title}
                  </button>
                  {activeMenu === idx && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full transition-all" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ActiveAlerts />
          </div>
        </nav>

        {/* Mega Menu Dropdown */}
        <div
          className={`absolute top-full left-0 right-0 mt-4 px-6 py-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl rounded-3xl border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 origin-top overflow-hidden ${activeMenu !== null ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="grid grid-cols-4 gap-8">
            {MENU_ITEMS.map((category, catIdx) => (
              <div
                key={category.title}
                className={`transition-all duration-500 delay-[${catIdx * 50}ms] ${activeMenu === catIdx ? 'opacity-100 translate-x-0' : 'opacity-40 grayscale'}`}
              >
                <h3 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.links.map((link) => (
                    <a
                      key={link.name}
                      href="#"
                      className="group/link flex items-start gap-4 p-3 rounded-2xl hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover/link:bg-primary/10 group-hover/link:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
                      </div>
                      <div>
                        <p className="font-headline font-bold text-sm text-slate-800 dark:text-white group-hover/link:text-primary transition-colors">
                          {link.name}
                        </p>
                        <p className="font-body text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {link.desc}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-400 font-body">
            <p>Official Meteorological Data Service of Solomon Islands</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Global Partners</a>
              <a href="#" className="hover:text-primary">WMO Compliance</a>
              <a href="#" className="hover:text-primary">Transparency</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
