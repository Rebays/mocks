import React from 'react';
import Image from 'next/image';

interface GovBannerProps {
  isVisible: boolean;
}

const GovBanner = ({ isVisible }: GovBannerProps) => {
  return (
    <div 
      className={`w-full bg-slate-50/10 dark:bg-slate-900/40 backdrop-blur-md border-b border-white/5 px-6 pointer-events-auto transition-all duration-700 ease-in-out overflow-hidden ${
        isVisible ? 'max-h-12 py-1.5 opacity-100' : 'max-h-0 py-0 opacity-0 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
        <div className="flex items-center gap-3">
          <div className="h-3 w-[1px] bg-white/10 hidden md:block"></div>
          <span className="flex items-center gap-2.5 opacity-70 group hover:opacity-100 transition-all cursor-default text-white">
            <Image 
              src="/si-flag.png" 
              width={20} 
              height={14} 
              alt="Solomon Islands Flag" 
              className="h-3.5 w-auto rounded-[1px] shadow-sm"
            />
            Official Website of Solomon Islands Government
          </span>
          <div className="h-3 w-[1px] bg-white/10 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default GovBanner;
