import React from 'react';

const standards = [
  {
    title: "Ethics & Integrity",
    description: "Upholding the Code of Professional Conduct and ensuring transparent, honest practices across all accounting operations.",
    icon: "gavel"
  },
  {
    title: "Financial Reporting",
    description: "Implementing International Financial Reporting Standards (IFRS) to ensure consistency and global comparability.",
    icon: "bar_chart"
  },
  {
    title: "Auditing Excellence",
    description: "Defining rigorous auditing protocols that ensure the reliability and accuracy of organizational financial health.",
    icon: "fact_check"
  },
  {
    title: "Taxation Compliance",
    description: "Guidelines for navigating complex tax laws and ensuring national regulatory obligations are met with precision.",
    icon: "account_balance"
  }
];

const Standards = () => {
  return (
    <section className="bg-white py-24 px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Current Standards</h2>
            <div className="h-1.5 w-24 bg-secondary-container mb-6"></div>
            <p className="text-on-surface-variant text-lg font-body leading-relaxed">
              Maintaining the highest levels of professional conduct and excellence across the Solomon Islands financial landscape through rigorous oversight and continuous improvement.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((standard, index) => (
            <div key={index} className="group bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant hover:border-primary-container transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 bg-primary-container/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white transition-colors">
                  {standard.icon}
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold text-primary mb-4">{standard.title}</h3>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-8">
                {standard.description}
              </p>
              <a className="inline-flex items-center text-primary font-label font-semibold group/link" href="#">
                <span className="border-b-2 border-secondary-container pb-0.5">View Detail</span>
                <span className="material-symbols-outlined text-sm ml-1 transition-transform group-hover/link:translate-x-1">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Standards;
