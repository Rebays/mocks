import React from 'react';

const QuickLinks = () => {
  const links = [
    {
      title: "Live Flight Information",
      description: "Real-time arrival and departure status for Honiara and Munda International airports.",
      icon: "schedule",
      color: "primary",
      cta: "View Schedule"
    },
    {
      title: "Passenger Services",
      description: "Terminal facilities, transport links, baggage info, and travel requirements for tourists and locals.",
      icon: "luggage",
      color: "secondary",
      cta: "Explore Services"
    },
    {
      title: "Our Airports",
      description: "Comprehensive guide to all airports managed by SIACL across the Solomon Islands archipelago.",
      icon: "travel_explore",
      color: "tertiary",
      cta: "Find Your Port"
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-40 relative z-20">
          {links.map((link, idx) => (
            <div 
              key={idx}
              className="bg-surface-container-lowest p-10 rounded-[2.5rem] shadow-2xl shadow-primary/5 group cursor-pointer hover:-translate-y-4 transition-all duration-500 border border-outline-variant/30"
            >
              <div className={`w-16 h-16 bg-${link.color}-container rounded-2xl flex items-center justify-center mb-8 text-on-${link.color}-container group-hover:scale-110 transition-transform duration-500`}>
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>
                  {link.icon}
                </span>
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 tracking-tight">
                {link.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 text-lg">
                {link.description}
              </p>
              <span className="text-primary font-extrabold flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-sm tracking-widest">
                {link.cta} 
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'wght' 600" }}>
                  arrow_forward
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
