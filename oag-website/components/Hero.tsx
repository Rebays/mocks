import AuditStrip from "./AuditStrip";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px-32px)] flex flex-col items-center justify-between overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/90 via-primary-container/60 to-primary-container/90 z-10"></div>
        <img
          className="w-full h-full object-cover"
          alt="Modern architectural glass building reflecting blue sky with clean geometric lines and institutional authority"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdtMUQXY-URzSIR7I_waTi7Hm2KgW-CUDxjxLO4Sz7Pm1BzQC-Mc8Fqv2rw_vbbuqLxhrlTI-Y-QuSlGNIzNn904gLrJwjyHl0wMyPl9BFRllM2048CRcNjRlRTyn5IcQVP2ONgg1c50OjQq_pRLsb5DAfp3Ii9aLkxVRtQh9GC__mOG3bG4m2GRVGTRMV7mePf-RbhfC6AlSsDkahVxhYagj9HAi88q8FRPXG82xgvKOGB99x3xeKvyAJtlyHTvjE3XzE4AlYVOcL"
        />
      </div>
      
      <div className="flex-grow flex items-center justify-center w-full px-8 relative z-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-white font-headline-xl text-headline-xl mb-base">
            Independent Oversight for Public Resources
          </h1>
          <p className="text-slate-200 text-body-lg mb-stack-md max-w-2xl mx-auto">
            Ensuring transparency and accountability in the management of Solomon Islands' national wealth and government spending.
          </p>
          <div className="relative max-w-xl mx-auto">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">
              search
            </span>
            <input
              className="w-full pl-12 pr-4 py-4 border-none shadow-xl focus:ring-2 focus:ring-secondary text-primary bg-white rounded-xl"
              placeholder="Find an Audit Report..."
              type="text"
            />
          </div>
        </div>
      </div>

      <AuditStrip className="relative z-30 border-t border-white/10 bg-primary-container/20 backdrop-blur-sm" />
    </section>
  );
}
