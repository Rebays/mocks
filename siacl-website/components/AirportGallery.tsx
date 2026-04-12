import React from 'react';
import Image from 'next/image';

const AirportGallery = () => {
  const airports = [
    {
      name: "Honiara (HIR)",
      type: "International Hub",
      image: "/images/airport-honiara.png",
      color: "tertiary"
    },
    {
      name: "Munda (MUA)",
      type: "Strategic Port",
      image: "/images/airport-munda.png",
      color: "secondary"
    },
    {
      name: "Seghe (EGM)",
      type: "Provincial",
      image: "/images/airport-seghe.png",
      color: "primary-container"
    },
    {
      name: "Gizo (GZO)",
      type: "Provincial",
      image: "/images/airport-munda.png", // Reusing Munda as a fallback for Gizo (island aesthetic)
      color: "primary-container"
    }
  ];

  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black text-primary mb-6 tracking-tighter">
              Airports We Manage
            </h2>
            <p className="text-on-surface-variant text-xl font-medium opacity-80">
              Maintaining the gateways to our provinces, from Honiara to the remote outer reaches of the archipelago.
            </p>
          </div>
          <button className="text-primary font-black flex items-center gap-3 border-b-4 border-primary/10 pb-2 hover:border-primary transition-all uppercase text-sm tracking-[0.2em]">
            View Interactive Map
            <span className="material-symbols-outlined">map</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {airports.map((airport, idx) => (
            <div 
              key={idx}
              className="group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700"
            >
              <Image
                src={airport.image}
                alt={airport.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-10 w-full transform group-hover:-translate-y-2 transition-transform">
                <span className={`inline-block px-3 py-1 bg-${airport.color} text-on-${airport.color} text-[10px] font-black rounded-lg uppercase tracking-widest mb-4 shadow-lg`}>
                  {airport.type}
                </span>
                <h4 className="text-3xl font-black text-white tracking-tighter">
                  {airport.name}
                </h4>
                <div className="h-1 w-0 bg-tertiary-fixed mt-4 transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirportGallery;
