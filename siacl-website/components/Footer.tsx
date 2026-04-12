import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary text-white w-full pt-32 pb-16 font-body overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary-fixed to-transparent opacity-30"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-12 max-w-screen-2xl mx-auto relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Image src="/siacl-logo-white.png" alt="Logo" width={100} height={100} className='h-12 w-auto' />
            {/* <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center font-black text-tertiary-fixed">S</div>
             <span className="text-3xl font-black tracking-tighter text-white">SIACL</span> */}
          </div>
          <p className="text-white/60 text-lg normal-case tracking-normal leading-relaxed font-medium">
            Connecting the Solomon Islands through world-class airport management and sustainable development of aviation infrastructure.
          </p>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-tertiary-fixed hover:text-primary transition-all cursor-pointer group shadow-xl hover:scale-110">
              <span className="material-symbols-outlined text-xl">share</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-tertiary-fixed hover:text-primary transition-all cursor-pointer group shadow-xl hover:scale-110">
              <span className="material-symbols-outlined text-xl">hub</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h5 className="text-xl font-black uppercase tracking-[0.2em] text-tertiary-fixed">Navigation</h5>
          <ul className="space-y-5">
            {['Flight Info', 'Our Airports', 'Passenger Services', 'News & Media'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-white/60 hover:text-white hover:translate-x-3 transition-all inline-block text-lg font-medium group flex items-center gap-2">
                  <span className="w-0 h-0.5 bg-tertiary-fixed transition-all group-hover:w-4"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <h5 className="text-xl font-black uppercase tracking-[0.2em] text-tertiary-fixed">Corporate</h5>
          <ul className="space-y-5">
            {['About Us', 'Careers', 'Cargo Services', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-white/60 hover:text-white hover:translate-x-3 transition-all inline-block text-lg font-medium group flex items-center gap-2">
                  <span className="w-0 h-0.5 bg-tertiary-fixed transition-all group-hover:w-4"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <h5 className="text-xl font-black uppercase tracking-[0.2em] text-tertiary-fixed">Regulatory</h5>
          <ul className="space-y-5">
            {['Civil Aviation Authority', 'Terms of Service', 'Legal Notices', 'Contact Info'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-white/60 hover:text-white hover:translate-x-3 transition-all inline-block text-lg font-medium group flex items-center gap-2">
                  <span className="w-0 h-0.5 bg-tertiary-fixed transition-all group-hover:w-4"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-32 pt-12 border-t border-white/5 px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} Solomon Islands Airports Corporation Ltd. All rights reserved.
        </p>
        <div className="flex gap-10 text-xs font-bold uppercase tracking-widest">
          <Link href="#" className="text-white/30 hover:text-tertiary-fixed transition-colors">Security</Link>
          <Link href="#" className="text-white/30 hover:text-tertiary-fixed transition-colors">Accessibility</Link>
          <Link href="#" className="text-white/30 hover:text-tertiary-fixed transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
