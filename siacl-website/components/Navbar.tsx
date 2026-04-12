"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/90 shadow-md py-4' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-screen-2xl mx-auto px-8 flex justify-between items-center font-headline tracking-tight">
        <Link href="/" className="flex items-center gap-4 group">
          {isScrolled &&
            <Image src="/siacl-logo-color.png" alt="Logo" width={100} height={100} className='h-12 w-auto' />
          }
          {!isScrolled &&
            <Image src="/siacl-logo-white.png" alt="Logo" width={100} height={100} className='h-12 w-auto' />
          }
          {/* <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-primary flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
             <span className="text-white font-extrabold text-xl">S</span>
          </div>
          <span className={`text-2xl font-bold tracking-tighter uppercase transition-colors ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}>
            SIACL
          </span> */}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Flight Info', active: true },
            { name: 'Services', active: false },
            { name: 'Airports', active: false },
            { name: 'About Us', active: false }
          ].map((item) => (
            <Link
              key={item.name}
              href="#"
              className={`font-semibold transition-all hover:opacity-80 px-2 py-1 relative group ${item.active
                ? (isScrolled ? 'text-primary border-b-2 border-tertiary' : 'text-white border-b-2 border-tertiary-fixed')
                : (isScrolled ? 'text-on-surface-variant' : 'text-white/80')
                }`}
            >
              {item.name}
              {!item.active && (
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isScrolled ? 'bg-primary' : 'bg-tertiary-fixed'
                  }`}></span>
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href='https://www.flysolomons.com' className={`px-6 py-2.5 rounded-full font-bold transition-all shadow-lg active:scale-95 ${isScrolled
            ? 'bg-primary text-on-primary shadow-primary/20 hover:bg-primary/90'
            : 'bg-white text-primary shadow-black/10 hover:bg-white/90'
            }`}>
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
