"use client";

import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-8">
        <div className="bg-primary rounded-[4rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-24 shadow-3xl shadow-primary/30 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight">
              Get In Touch With Our <span className="text-secondary-fixed">Administration</span>
            </h2>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="bg-white/10 p-5 rounded-2xl text-tertiary-fixed group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <div>
                  <h5 className="text-white font-black text-xl mb-2 uppercase tracking-wide">Main Office</h5>
                  <p className="text-white/70 text-lg leading-relaxed">Level 2, Anthony Saru Building, Point Cruz, Honiara</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="bg-white/10 p-5 rounded-2xl text-tertiary-fixed group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl">call</span>
                </div>
                <div>
                  <h5 className="text-white font-black text-xl mb-2 uppercase tracking-wide">Phone Enquiries</h5>
                  <p className="text-white/70 text-lg leading-relaxed">+677 21779 / +677 21780</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="bg-white/10 p-5 rounded-2xl text-tertiary-fixed group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div>
                  <h5 className="text-white font-black text-xl mb-2 uppercase tracking-wide">Email Support</h5>
                  <p className="text-white/70 text-lg leading-relaxed">info@siacl.com.sb</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[3.5rem] relative z-10 shadow-2xl">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] ml-2">Full Name</label>
                  <input 
                    className="w-full bg-white/10 border-2 border-transparent rounded-[1.5rem] px-6 py-5 text-white focus:ring-4 focus:ring-tertiary-fixed/20 focus:border-tertiary-fixed outline-none transition-all placeholder:text-white/20" 
                    type="text" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] ml-2">Email Address</label>
                  <input 
                    className="w-full bg-white/10 border-2 border-transparent rounded-[1.5rem] px-6 py-5 text-white focus:ring-4 focus:ring-tertiary-fixed/20 focus:border-tertiary-fixed outline-none transition-all placeholder:text-white/20" 
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] ml-2">Inquiry Type</label>
                <div className="relative">
                  <select className="w-full bg-white/10 border-2 border-transparent rounded-[1.5rem] px-6 py-5 text-white focus:ring-4 focus:ring-tertiary-fixed/20 focus:border-tertiary-fixed outline-none transition-all appearance-none cursor-pointer group">
                    <option className="bg-primary text-white">General Enquiry</option>
                    <option className="bg-primary text-white">Passenger Services</option>
                    <option className="bg-primary text-white">Corporate Relations</option>
                    <option className="bg-primary text-white">Careers</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] ml-2">Your Message</label>
                <textarea 
                  className="w-full bg-white/10 border-2 border-transparent rounded-[1.5rem] px-6 py-5 text-white focus:ring-4 focus:ring-tertiary-fixed/20 focus:border-tertiary-fixed outline-none transition-all placeholder:text-white/20 resize-none" 
                  rows={4}
                  placeholder="How can we help you today?"
                ></textarea>
              </div>
              <button className="w-full bg-tertiary-fixed text-on-tertiary-fixed py-6 rounded-[1.5rem] font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/20 uppercase tracking-widest">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
