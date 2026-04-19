import React from 'react';

const provinces = [
  { name: 'Guadalcanal', temp: '31°C', condition: 'Sunny', icon: 'sunny', filled: true },
  { name: 'Malaita', temp: '29°C', condition: 'Partly Cloudy', icon: 'partly_cloudy_day', filled: false },
  { name: 'Western', temp: '27°C', condition: 'Light Rain', icon: 'cloudy_snowing', filled: false },
  { name: 'Temotu', temp: '28°C', condition: 'Windy', icon: 'air', filled: false },
  { name: 'Isabel', temp: '30°C', condition: 'Sunny', icon: 'sunny', filled: true },
  { name: 'Choiseul', temp: '29°C', condition: 'Overcast', icon: 'cloud', filled: false },
];

const ProvinceScroller = () => {
  return (
    <section className="bg-white dark:bg-slate-900/50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-headline text-4xl font-extrabold text-on-surface dark:text-white">Provinces</h2>
          <p className="text-on-surface-variant dark:text-slate-400 font-medium mt-2">Regional conditions across the archipelago.</p>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-outline-variant dark:border-slate-700 flex items-center justify-center hover:bg-surface-container dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-outline-variant dark:border-slate-700 flex items-center justify-center hover:bg-surface-container dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      
      <div className="flex gap-6 px-8 md:px-12 overflow-x-auto hide-scrollbar pb-8 snap-x">
        {provinces.map((province, index) => (
          <div key={index} className="flex-none w-64 snap-start group cursor-pointer">
            <div className="bg-surface-container-low dark:bg-slate-800 rounded-3xl p-8 transition-all group-hover:bg-white dark:group-hover:bg-slate-700 group-hover:shadow-xl group-hover:-translate-y-1">
              <p className="text-xs font-extrabold uppercase tracking-widest text-outline dark:text-slate-500 mb-6">{province.name}</p>
              <span 
                className="material-symbols-outlined text-primary text-5xl mb-4" 
                style={{ fontVariationSettings: province.filled ? "'FILL' 1" : "'FILL' 0" }}
              >
                {province.icon}
              </span>
              <h4 className="font-headline text-3xl font-bold dark:text-white">{province.temp}</h4>
              <p className="text-sm font-medium text-on-surface-variant dark:text-slate-400 mt-1">{province.condition}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProvinceScroller;
