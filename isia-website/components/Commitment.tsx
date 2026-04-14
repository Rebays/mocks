import React from 'react';

const stats = [
  { value: "198+", label: "Member Firms" },
  { value: "12", label: "Technical Committees" },
  { value: "100%", label: "Compliance Advocacy" }
];

const Commitment = () => {
  return (
    <section className="bg-white py-24 px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Our Commitment: Advancing Transparency and Excellence in Governance
            </h2>
            <div className="h-1.5 w-24 bg-secondary-container mb-10"></div>
            <p className="text-on-surface-variant text-xl font-body leading-relaxed mb-8">
              ISIA is dedicated to upholding the highest professional and ethical standards, ensuring that every financial decision made in the Solomon Islands is rooted in integrity, accuracy, and sustainable economic progress.
            </p>
            <a className="inline-flex items-center text-primary font-label font-bold text-lg group" href="#">
              <span className="border-b-2 border-secondary-container pb-0.5">Read our Mission Disclosure</span>
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">trending_flat</span>
            </a>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-primary p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary-container/20 rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-secondary-container text-4xl">description</span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-4">2024 Regulatory Framework</h3>
                <p className="text-white/70 font-body mb-10 leading-relaxed">
                  Download the comprehensive guide on our latest oversight protocols and compliance requirements for the current fiscal year.
                </p>
                <button className="w-full bg-white text-primary py-4 rounded-xl font-label font-bold hover:bg-secondary-container transition-all flex justify-center items-center gap-2 shadow-lg group">
                  <span>View Document</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-16 border-t border-outline-variant">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-5xl font-serif text-primary font-bold mb-3 tracking-tight">{stat.value}</span>
                <span className="text-on-surface-variant font-label font-semibold uppercase tracking-[0.1em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
