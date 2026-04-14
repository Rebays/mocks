import React from 'react';

const Insights = () => {
  return (
    <section className="bg-sol-blue py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-sol-yellow font-bold text-sm tracking-widest uppercase">Grid Transparency</span>
            <h2 className="text-4xl font-black text-white mt-2">Real-Time Network Insights</h2>
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-sm font-bold border border-white/20 transition-all">
            View Full System Dashboard
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Total System Load */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Total System Load</span>
              <span className="material-symbols-outlined text-sol-yellow">bolt</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">18.4</span>
              <span className="text-white/60 font-bold">MW</span>
            </div>
            <div className="mt-6 h-12 flex items-end gap-1">
              <div className="w-full bg-sol-yellow h-[60%] rounded-t-sm opacity-50"></div>
              <div className="w-full bg-sol-yellow h-[75%] rounded-t-sm opacity-60"></div>
              <div className="w-full bg-sol-yellow h-[65%] rounded-t-sm opacity-70"></div>
              <div className="w-full bg-sol-yellow h-[90%] rounded-t-sm opacity-80"></div>
              <div className="w-full bg-sol-yellow h-[100%] rounded-t-sm"></div>
            </div>
            <p className="text-white/40 text-[10px] mt-2 uppercase tracking-tighter">Last 24 Hours Performance</p>
          </div>
          {/* Renewable Percentage */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Renewable Generation</span>
              <span className="material-symbols-outlined text-sol-yellow">water_drop</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">64%</span>
              <span className="text-white/60 font-bold">Hydro + Solar</span>
            </div>
            <div className="mt-8 relative h-4 bg-white/10 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-sol-yellow" style={{ width: '64%' }}></div>
            </div>
            <p className="text-white/40 text-[10px] mt-4 uppercase tracking-tighter">Current Target: 80% by 2026</p>
          </div>
          {/* Active Maintenance */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Maintenance Sites</span>
              <span className="material-symbols-outlined text-sol-yellow">engineering</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-white">03</span>
              <span className="text-white/60 font-bold">Scheduled</span>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-between text-xs py-1 border-b border-white/10">
                <span className="text-white/80">Honiara East</span>
                <span className="text-sol-yellow font-bold">In Progress</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1 border-b border-white/10">
                <span className="text-white/80">Auki Substation</span>
                <span className="text-white/40">Starts 08:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
