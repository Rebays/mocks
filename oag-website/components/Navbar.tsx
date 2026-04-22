"use client";

import { useState } from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import { MENU_DATA } from "@/constants/menuData";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <span className="hidden md:inline">Auditors General</span>
          <span className="md:hidden">AG</span>
        </div>

        {/* Desktop Nav */}
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
              className={`h-full flex items-center text-slate-600 hover:text-secondary transition-colors duration-300 ${
                activeMenu === item.id ? "text-secondary border-b-2 border-secondary" : ""
              }`}
              onMouseEnter={() => setActiveMenu(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button className="hidden md:block bg-secondary text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-all transform active:scale-95 rounded-xl">
            Report Misconduct
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden material-symbols-outlined text-primary-container text-2xl p-2 hover:bg-slate-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "close" : "menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-[calc(100vh-64px)] bg-white border-b border-slate-200 shadow-xl overflow-y-auto animate-in slide-in-from-top-4 duration-300 z-50">
          <div className="flex flex-col p-6 space-y-6">
            <Link
              href="/"
              className="text-primary font-bold text-xl border-b border-slate-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <div key={item.id} className="flex flex-col space-y-3">
                <Link
                  href={item.href}
                  className="text-primary font-bold text-lg border-b border-slate-100 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {/* Sub-items for mobile */}
                <div className="flex flex-col space-y-2 pl-4">
                  {MENU_DATA[item.id]?.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="text-slate-500 font-medium text-sm hover:text-secondary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <button className="w-full bg-secondary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg mt-4">
              Report Misconduct
            </button>
          </div>
        </div>
      )}

      <MegaMenu activeCategory={activeMenu} />
    </header>
  );
}
