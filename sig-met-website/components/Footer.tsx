import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a121e] dark:bg-slate-950 w-full pt-20 pb-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start px-12 max-w-7xl mx-auto gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src="/met-logo.png" alt="SolomonMet Logo" className="h-12 w-auto brightness-0 invert" />
            <span className="font-headline font-bold text-white text-2xl tracking-tight">SolomonMet</span>
          </div>
          <p className="text-slate-400 font-body text-sm leading-relaxed text-center md:text-left max-w-sm">
            © 2024 Solomon Islands Meteorological Service. The official provider of weather, climate, and oceanographic data for the Solomon Islands.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Navigation</h4>
            <div className="flex flex-col gap-2">
              <a className="text-slate-300 hover:text-primary transition-colors text-sm font-body" href="#">About Us</a>
              <a className="text-slate-300 hover:text-primary transition-colors text-sm font-body" href="#">Forecasts</a>
              <a className="text-slate-300 hover:text-primary transition-colors text-sm font-body" href="#">Warnings</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Legals</h4>
            <div className="flex flex-col gap-2">
              <a className="text-slate-300 hover:text-primary transition-colors text-sm font-body" href="#">Privacy Policy</a>
              <a className="text-slate-300 hover:text-primary transition-colors text-sm font-body" href="#">Terms of Use</a>
              <a className="text-slate-300 hover:text-primary transition-colors text-sm font-body" href="#">Disclaimer</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-3">
            <a className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all shadow-xl shadow-black/20" href="#">
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all shadow-xl shadow-black/20" href="#">
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
            <a className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all shadow-xl shadow-black/20" href="#">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Systems Operational
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
        <p>Managed by Solomon Islands Government</p>
        <p>WMO Integrated Global Observing System (WIGOS) Compliant</p>
      </div>
    </footer>
  );
};

export default Footer;
