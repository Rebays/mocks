import React from 'react';

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-2xl font-black text-sol-blue mb-10 uppercase tracking-tight">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bento-card p-8 rounded-2xl border border-outline-variant/30 flex flex-col h-64 group cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-sol-blue flex items-center justify-center mb-6 transition-colors group-hover:bg-sol-yellow">
            <span className="material-symbols-outlined text-white group-hover:text-sol-blue">map</span>
          </div>
          <h3 className="text-xl font-bold text-sol-blue mb-2">Report an Outage</h3>
          <p className="text-sm text-on-surface-variant mb-auto">Track current outages or report a fault in your area through our live map.</p>
          <span className="material-symbols-outlined text-sol-blue self-end group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>
        <div className="bento-card p-8 rounded-2xl border border-outline-variant/30 flex flex-col h-64 group cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-sol-blue flex items-center justify-center mb-6 transition-colors group-hover:bg-sol-yellow">
            <span className="material-symbols-outlined text-white group-hover:text-sol-blue">home</span>
          </div>
          <h3 className="text-xl font-bold text-sol-blue mb-2">New Connection Request</h3>
          <p className="text-sm text-on-surface-variant mb-auto">Ready for grid power? Submit your application for a new residential or commercial meter.</p>
          <span className="material-symbols-outlined text-sol-blue self-end group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>
        <div className="bento-card p-8 rounded-2xl border border-outline-variant/30 flex flex-col h-64 group cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-sol-blue flex items-center justify-center mb-6 transition-colors group-hover:bg-sol-yellow">
            <span className="material-symbols-outlined text-white group-hover:text-sol-blue">eco</span>
          </div>
          <h3 className="text-xl font-bold text-sol-blue mb-2">Energy Saving Tips</h3>
          <p className="text-sm text-on-surface-variant mb-auto">Learn how to optimize your usage and lower your monthly CashPower costs.</p>
          <span className="material-symbols-outlined text-sol-blue self-end group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
