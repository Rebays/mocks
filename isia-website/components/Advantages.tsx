import React from 'react';

const advantages = [
  {
    title: "Global Professional Network",
    description: "Connect with over 500 local peers and gain access to international accounting bodies and cross-border professional circles.",
    icon: "language"
  },
  {
    title: "Exclusive Technical Resources",
    description: "Access a proprietary repository of auditing templates, regulatory updates, and technical guides tailored to the Solomon Islands context.",
    icon: "library_books"
  },
  {
    title: "Advocacy and Representation",
    description: "We represent your interests in government policy discussions, ensuring the voice of accounting professionals shapes national economic legislation.",
    icon: "account_balance"
  },
  {
    title: "Continuous Professional Development",
    description: "Priority access to accredited workshops, seminars, and certification programs to keep your skills at the cutting edge of industry standards.",
    icon: "school"
  }
];

const Advantages = () => {
  return (
    <section className="bg-surface-container-low py-24 px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 uppercase tracking-tight">UNRIVALED MEMBER ADVANTAGES</h2>
          <div className="h-1.5 w-24 bg-secondary-container mx-auto mb-8"></div>
          <p className="text-on-surface-variant text-lg font-body leading-relaxed">
            Joining ISIA provides more than just a credential; it offers a lifelong ecosystem of support, growth, and influence for Solomon Islands accounting professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-secondary-container text-3xl">{advantage.icon}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold text-primary mb-3">{advantage.title}</h3>
                <p className="text-on-surface-variant font-body leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <button className="bg-primary text-white px-10 py-4 rounded-lg font-label font-bold hover:primary-container transition-all shadow-xl hover:shadow-2xl active:scale-95 inline-flex items-center gap-2">
            Explore Full Benefits Catalog
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
