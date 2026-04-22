"use client";

import { useState } from "react";
import MegaMenu from "./MegaMenu";

import Link from "next/link";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navItems = [
    { id: "audit-work", label: "Our Audit Work", href: "/reports" },
    { id: "reports", label: "Reports & Publications", href: "/reports" },
    { id: "integrity", label: "Integrity & Reporting", href: "#" },
    { id: "about", label: "About Us", href: "/about" },
  ];

  return (
    <header
      className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <nav className="flex justify-between items-center px-8 h-16 w-full max-w-7xl mx-auto">
        <div className="text-xl font-black tracking-tighter text-primary-container uppercase font-public-sans">
          Auditors General
        </div>
        <div className="hidden md:flex items-center space-x-8 font-public-sans text-sm tracking-wide font-medium h-full">
          <Link
            className="text-primary-container border-b-2 border-primary-container pb-1"
            href="/"
          >
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`h-full flex items-center text-slate-600 hover:text-secondary transition-colors duration-300 ${activeMenu === item.id ? "text-secondary border-b-2 border-secondary" : ""
                }`}
              onMouseEnter={() => setActiveMenu(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-6">
          <button className="material-symbols-outlined text-slate-600 hover:text-secondary transition-colors">
            search
          </button>
          <button className="bg-secondary text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-all transform active:scale-95 rounded-xl">
            Report Misconduct
          </button>
        </div>
      </nav>

      <MegaMenu activeCategory={activeMenu} />
    </header>
  );
}
