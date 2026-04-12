import React from 'react';

const MobileBottomNav = () => {
  return (
    <footer className="md:hidden">
      <div className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-6 pt-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-t-3xl shadow-2xl">
        <div className="flex flex-col items-center justify-center text-sky-700 dark:text-sky-400 bg-sky-100/50 dark:bg-sky-900/30 rounded-xl px-4 py-1">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
          <span className="font-body text-[11px] font-bold uppercase tracking-widest mt-1">Forecast</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-all duration-300">
          <span className="material-symbols-outlined">radar</span>
          <span className="font-body text-[11px] font-bold uppercase tracking-widest mt-1">Radar</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-all duration-300">
          <span className="material-symbols-outlined">warning</span>
          <span className="font-body text-[11px] font-bold uppercase tracking-widest mt-1">Advisories</span>
        </div>
        <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:text-sky-600 transition-all duration-300">
          <span className="material-symbols-outlined">explore</span>
          <span className="font-body text-[11px] font-bold uppercase tracking-widest mt-1">Islands</span>
        </div>
      </div>
    </footer>
  );
};

export default MobileBottomNav;
