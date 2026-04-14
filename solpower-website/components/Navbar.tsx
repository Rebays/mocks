import React from 'react';
import Image from 'next/image';
const Navbar = () => {
    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="bg-white/70 backdrop-blur-md flex justify-between items-center px-8 py-3 w-full max-w-7xl rounded-2xl border border-white/20 shadow-lg transition-all duration-300">
                {/* <div className="text-xl font-black text-sol-blue uppercase tracking-tight">
                    The Utility Authority
                </div> */}
                <Image
                    src="/solpower-logo.png"
                    alt="Solpower logo"
                    width={100}
                    height={100}
                    className="w-auto h-10"
                />
                <div className="hidden md:flex gap-8 items-center">
                    <a className="text-sol-blue border-b-2 border-sol-yellow pb-1 font-semibold tracking-tight transition-colors duration-200" href="#">Residential</a>
                    <a className="text-on-surface-variant font-semibold tracking-tight hover:text-sol-blue transition-colors duration-200" href="#">Business</a>
                    <a className="text-on-surface-variant font-semibold tracking-tight hover:text-sol-blue transition-colors duration-200" href="#">Outages</a>
                    <a className="text-on-surface-variant font-semibold tracking-tight hover:text-sol-blue transition-colors duration-200" href="#">Contact Us</a>
                </div>
                <button className="bg-sol-yellow text-on-primary-fixed px-6 py-2 rounded-lg font-bold scale-95 hover:scale-100 active:opacity-80 transition-all">
                    Sign In
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
