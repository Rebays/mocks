import React from 'react';

const BentoGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 md:px-12 py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Radar Map Card (Large) */}
        <div className="md:col-span-8 bg-surface-container-lowest dark:bg-slate-900 rounded-3xl overflow-hidden editorial-shadow flex flex-col h-[500px]">
          <div className="p-8 pb-4 flex justify-between items-end">
            <div>
              <h3 className="font-headline text-2xl font-bold text-on-surface dark:text-white">Precipitation Radar</h3>
              <p className="text-sm text-on-surface-variant dark:text-slate-400 font-medium">Updated 2 mins ago • Guadalcanal Region</p>
            </div>
            <button className="bg-primary-container/10 text-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-primary-container/20 transition-colors">Expand Map</button>
          </div>
          <div className="relative flex-grow bg-surface-container dark:bg-slate-800">
            <img 
              className="w-full h-full object-cover grayscale-[0.2] opacity-80" 
              alt="Topographic rain radar map of the Solomon Islands" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAojlFGgB2qpNHuN2zqqsHDICLTsa6GHDD5HQ_mY47ZqL8BMEej8Yf0lAmq88IeySx19ImlEAl6HynrqExW7nqZmNEN8Ee0CRKCG0RIG1-fpzOwDAM4e_kjJzKOjkET8gKT_AouHDPpE35OREuXEK07QBpp9VhHP-REyhE91Ss2RIJnLi5fB83OPY5gF-cf4sxnkq1l0uhlvSVFdNs_paqLkm5etcArku4kUUH06vM0d9CHjNOxAZpYKJArrNmhTBbC80a-F-7yfME" 
            />
            <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-xs font-bold text-on-surface dark:text-white">No rain detected</span>
            </div>
          </div>
        </div>

        {/* Warning Card */}
        <div className="md:col-span-4 bg-tertiary-fixed rounded-3xl p-8 editorial-shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-on-tertiary-fixed-variant mb-4">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <span className="text-xs font-extrabold uppercase tracking-widest">Active Alert</span>
            </div>
            <h3 className="font-headline text-3xl font-extrabold text-on-tertiary-fixed leading-tight">Strong Wind Warning</h3>
            <p className="mt-4 text-on-tertiary-fixed-variant leading-relaxed">Southeasterly winds of 20 to 25 knots expected over most waters. Rough seas with moderate to heavy swells.</p>
          </div>
          <div className="mt-8">
            <a className="inline-flex items-center gap-2 text-on-tertiary-fixed font-bold border-b-2 border-on-tertiary-fixed/20 pb-1 hover:border-on-tertiary-fixed transition-all" href="#">Full Advisory Details</a>
          </div>
        </div>

        {/* Marine Outlook Card */}
        <div className="md:col-span-4 bg-secondary-container rounded-3xl p-8 editorial-shadow">
          <div className="flex items-center gap-2 text-on-secondary-fixed-variant mb-6">
            <span className="material-symbols-outlined">sailing</span>
            <span className="text-xs font-extrabold uppercase tracking-widest">Marine Outlook</span>
          </div>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <span className="text-6xl font-headline font-extrabold text-on-secondary-fixed">Calm</span>
            <p className="mt-2 text-on-secondary-fixed-variant font-medium">Inside lagoons and sheltered areas. Safe for local vessel transit.</p>
          </div>
        </div>

        {/* Secondary Bento Item (Temperature Trend) */}
        <div className="md:col-span-8 bg-surface-container-low dark:bg-slate-800/50 rounded-3xl p-8 editorial-shadow flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h3 className="font-headline text-xl font-bold dark:text-white">24-Hour Temperature</h3>
            <span className="text-sm font-medium text-on-surface-variant dark:text-slate-400 italic">Rising slightly</span>
          </div>
          <div className="flex items-end justify-between gap-2 h-32 mt-8">
            {[60, 55, 50, 65, 80, 100, 85, 70, 60, 55].map((height, i) => (
              <div 
                key={i}
                className={`flex-1 rounded-t-lg transition-all ${i === 5 ? 'bg-primary' : 'bg-primary/10 hover:bg-primary/30'}`}
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-outline uppercase tracking-widest">
            <span>Morning</span>
            <span>Noon</span>
            <span>Evening</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
