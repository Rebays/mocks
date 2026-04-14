import React from 'react';
import Image from 'next/image';
const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant shadow-sm font-headline antialiased mt-4 mx-[20px] rounded-full w-[calc(90%-20px)] left-1/2 -translate-x-1/2">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <div className="flex items-center gap-8">
          <Image
            src="/isia-logo.png"
            alt="Official Logo"
            width={100}
            height={100}
            className="h-13 w-auto" />

          <nav className="hidden md:flex items-center gap-6">
            <a className="text-primary-container border-b-2 border-primary-container pb-1 font-semibold cursor-pointer active:opacity-70 transition-colors duration-200" href="#">Home</a>
            <a className="text-on-surface-variant font-medium hover:text-primary-container cursor-pointer active:opacity-70 transition-colors duration-200" href="#">Members</a>
            <a className="text-on-surface-variant font-medium hover:text-primary-container cursor-pointer active:opacity-70 transition-colors duration-200" href="#">Events</a>
            <a className="text-on-surface-variant font-medium hover:text-primary-container cursor-pointer active:opacity-70 transition-colors duration-200" href="#">News</a>
            <a className="text-on-surface-variant font-medium hover:text-primary-container cursor-pointer active:opacity-70 transition-colors duration-200" href="#">About</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary-container text-on-primary px-6 py-2.5 rounded-lg font-label font-semibold hover:bg-primary transition-all active:scale-95 shadow-sm">
            Portal
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
