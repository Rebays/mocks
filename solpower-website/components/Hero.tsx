import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col pt-24 overflow-hidden cyber-grid-container px-8">
      {/* SVG Cyber Grid Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <svg className="w-full h-full" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="glow">
              <feGaussianBlur result="coloredBlur" stdDeviation="2.5"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <linearGradient id="gridGrad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FCD116', stopOpacity: 0.8 }}></stop>
              <stop offset="100%" style={{ stopColor: '#FCD116', stopOpacity: 0.2 }}></stop>
            </linearGradient>
          </defs>
          {/* Stylized Island Silhouettes */}
          <path className="island-shape" d="M200,450 Q250,400 300,450 T400,450 T500,400 T600,450"></path>
          <path className="island-shape" d="M800,200 Q850,150 900,200 T1000,200 T1100,150 T1200,200"></path>
          <path className="island-shape" d="M400,600 Q450,550 500,600 T600,600 T700,550 T800,600"></path>
          {/* Pulsing Electricity Lines */}
          <path className="pulse-line opacity-80" d="M300,450 L900,200" fill="none" filter="url(#glow)" stroke="url(#gridGrad)" strokeWidth="2"></path>
          <path className="pulse-line opacity-70" d="M900,200 L600,600" fill="none" filter="url(#glow)" stroke="url(#gridGrad)" strokeWidth="2" style={{ animationDelay: '1s' }}></path>
          <path className="pulse-line opacity-60" d="M300,450 L600,600" fill="none" filter="url(#glow)" stroke="url(#gridGrad)" strokeWidth="2" style={{ animationDelay: '2s' }}></path>
          <path className="pulse-line opacity-40" d="M1000,200 L1200,500" fill="none" stroke="url(#gridGrad)" strokeWidth="1"></path>
          {/* Network Nodes */}
          <circle className="node" cx="300" cy="450" fill="#FCD116" r="4"></circle>
          <circle className="node" cx="900" cy="200" fill="#FCD116" r="5" style={{ animationDelay: '1s' }}></circle>
          <circle className="node" cx="600" cy="600" fill="#FCD116" r="4" style={{ animationDelay: '2s' }}></circle>
          <circle className="node" cx="1100" cy="150" fill="#FCD116" r="3" style={{ animationDelay: '0.5s' }}></circle>
          {/* Background Grid Detail */}
          <path d="M0,0 L1440,0 M0,100 L1440,100 M0,200 L1440,200 M0,300 L1440,300 M0,400 L1440,400 M0,500 L1440,500 M0,600 L1440,600 M0,700 L1440,700" opacity="0.03" stroke="white" strokeWidth="0.5"></path>
          <path d="M0,0 L0,800 M100,0 L100,800 M200,0 L200,800 M300,0 L300,800 M400,0 L400,800 M500,0 L500,800 M600,0 L600,800 M700,0 L700,800 M800,0 L800,800 M900,0 L900,800 M1000,0 L1000,800 M1100,0 L1100,800 M1200,0 L1200,800 M1300,0 L1300,800 M1400,0 L1400,800" opacity="0.03" stroke="white" strokeWidth="0.5"></path>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col flex-grow w-full max-w-7xl mx-auto h-full">
        {/* Middle Section: Title and Top-Up Card */}
        <div className="flex-grow flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            <div className="text-left">
              <h1 className="text-4xl my-10 md:my-0  md:justify-start md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
                Powering the <br /><span className="text-sol-yellow">Solomon Islands</span>
              </h1>
              <p className="hidden text-white/60 md:text-lg md:block font-medium max-w-lg leading-relaxed">
                Reliable energy solutions for a brighter future. Manage your CashPower and monitor grid status in real-time.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-8 rounded-[2rem] flex flex-col gap-6 shadow-2xl w-full max-w-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sol-yellow rounded-xl">
                    <span className="material-symbols-outlined text-sol-blue text-2xl">payments</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest font-bold text-white/60 leading-none mb-1">Quick Service</span>
                    <span className="text-white text-xl font-extrabold">CashPower Top-Up</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-sol-yellow focus:border-transparent outline-none placeholder:text-white/40 text-white font-semibold"
                      placeholder="Enter Meter Number"
                      type="text"
                    />
                  </div>
                  <button className="w-full bg-sol-yellow hover:bg-[#ecc300] text-sol-blue font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md group">
                    Top-Up Now
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Metrics and Status Bar */}
        <div className="pb-12 space-y-12">
          {/* Metrics Row */}
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <div className="hidden md:flex bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-4 shadow-sm min-w-[180px]">
              <div className="p-2 bg-sol-yellow/20 rounded-lg">
                <span className="material-symbols-outlined text-sol-yellow text-xl">electric_bolt</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 leading-none mb-1">Grid Load</span>
                <span className="text-white font-extrabold text-lg">18.4 MW</span>
              </div>
            </div>
            <div className="hidden md:flex bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-4 shadow-sm min-w-[180px]">
              <div className="p-2 bg-sol-yellow/20 rounded-lg">
                <span className="material-symbols-outlined text-sol-yellow text-xl">eco</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 leading-none mb-1">Renewable Mix</span>
                <span className="text-white font-extrabold text-lg">64%</span>
              </div>
            </div>
            <div className="hidden md:flex bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-4 shadow-sm min-w-[180px]">
              <div className="p-2 bg-sol-yellow/20 rounded-lg">
                <span className="material-symbols-outlined text-sol-yellow text-xl">calendar_today</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 leading-none mb-1">Maintenance</span>
                <span className="text-white font-extrabold text-lg">None Scheduled</span>
              </div>
            </div>
          </div>

          {/* Grid Status Bar */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase">Grid Status: Operational</span>
              <span className="h-3 w-px bg-white/20 mx-1"></span>
              <span className="text-[9px] text-white/40 font-medium uppercase tracking-wider">Updated 2m ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
