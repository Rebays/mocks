import React from 'react';

const Sustainability = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="text-sol-blue font-bold text-sm tracking-widest uppercase">The Future of Power</span>
          <h2 className="text-5xl font-black text-sol-blue mt-4 leading-none tracking-tighter">Tina River Hydro <br/>Project</h2>
          <p className="text-on-surface-variant text-lg mt-8 leading-relaxed max-w-xl">
            Our flagship sustainability initiative. The Tina River Hydropower project is set to transform the Solomon Islands' energy landscape, providing clean, reliable, and affordable power to thousands of homes across Guadalcanal.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <button className="bg-sol-blue text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-sol-blue/90 transition-all shadow-lg group">
              View Sustainability Roadmap
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <div className="flex items-center gap-4 cursor-pointer">
              <div className="w-12 h-12 rounded-full border-2 border-sol-yellow flex items-center justify-center">
                <span className="material-symbols-outlined text-sol-blue">play_arrow</span>
              </div>
              <span className="text-sm font-bold text-sol-blue uppercase tracking-wider">Watch Progress</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-sol-yellow rounded-full blur-3xl opacity-20"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              alt="Large construction of Tina River Hydro Project dam" 
              className="w-full h-[500px] object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsYW7306R3knjFXoogtgy2ypgz6hjLU0irbN9DZkbFcmQ77myJ6U0P1lwOtKZRt15dGRAe_kDLamytRM9t0HXZgNTBx6SKvQ0QN8jICriT1oWKyCrINYwIWhAZZQkyVQKqrEKfAALZe-S-BOG4Wh_BJzSkO3_vmo9nJv72KDxSf73zOsdMIITXgXb8ArjBc1ViSNpLeKiRp4QqD_8Xhqd7mJuksVO7e-hWBxLAnkVIQ5YxKLIrmH62ErtGQYKhZcBcVBhXlcHSMFk"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-sm font-bold uppercase tracking-widest">Ongoing Progress: 42% Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
