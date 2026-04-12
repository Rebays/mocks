import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full pt-16 pb-8 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline font-semibold text-slate-900 dark:text-white text-xl">SolomonMet</span>
          <p className="text-slate-500 dark:text-slate-400 font-body text-sm tracking-wide text-center md:text-left max-w-xs">
            © 2024 Solomon Islands Meteorological Service. The Ethereal Observer.
          </p>
        </div>
        
        <div className="flex gap-8">
          <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 underline underline-offset-4 text-sm font-body tracking-wide opacity-80 hover:opacity-100 transition-opacity" href="#">About Us</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 underline underline-offset-4 text-sm font-body tracking-wide opacity-80 hover:opacity-100 transition-opacity" href="#">Contact</a>
          <a className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 underline underline-offset-4 text-sm font-body tracking-wide opacity-80 hover:opacity-100 transition-opacity" href="#">Data Privacy</a>
        </div>
        
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all" href="#">
            <span className="material-symbols-outlined text-sm">public</span>
          </a>
          <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all" href="#">
            <span className="material-symbols-outlined text-sm">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
