import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4">
      <nav className="flex justify-between items-center px-8 py-3 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-full mt-4 mx-auto max-w-5xl shadow-[0_12px_40px_rgba(25,28,30,0.06)]">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-bold tracking-tighter text-sky-900 dark:text-sky-100 font-headline">SolomonMet</span>
          <div className="hidden md:flex items-center gap-6">
            <a className="font-headline font-semibold tracking-tight text-sky-700 dark:text-sky-400 border-b-2 border-sky-700 pb-1 hover:bg-sky-50/50 dark:hover:bg-sky-900/50 transition-all duration-300 scale-95 active:scale-90" href="#">Marine</a>
            <a className="font-headline font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-sky-900 dark:hover:text-white hover:bg-sky-50/50 dark:hover:bg-sky-900/50 transition-all duration-300 scale-95 active:scale-90" href="#">Aviation</a>
            <a className="font-headline font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-sky-900 dark:hover:text-white hover:bg-sky-50/50 dark:hover:bg-sky-900/50 transition-all duration-300 scale-95 active:scale-90" href="#">Climate</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-sky-900 dark:hover:text-white hover:bg-sky-50/50 dark:hover:bg-sky-900/50 rounded-full transition-all duration-300 scale-95 active:scale-90">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-sky-900 dark:hover:text-white hover:bg-sky-50/50 dark:hover:bg-sky-900/50 rounded-full transition-all duration-300 scale-95 active:scale-90">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
