export default function ProvincialImpact() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-stack-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
        <div className="bg-surface-container-low p-margin border border-slate-200 relative aspect-square flex items-center justify-center rounded-xl overflow-hidden">
          <div className="text-center">
            {/* Placeholder for Map Visualization */}
            <span className="material-symbols-outlined text-slate-300 text-[200px]">
              map
            </span>
            <p className="mt-base text-slate-400 font-label-sm">
              INTERACTIVE PROVINCIAL MAP
            </p>
          </div>
          {/* Tooltip Mockup */}
          <div className="absolute top-1/4 right-1/4 bg-white p-4 shadow-lg border border-slate-100 animate-pulse rounded-lg">
            <span className="text-xs font-bold text-primary-container">
              Malaita Province
            </span>
            <div className="text-[10px] text-slate-500 uppercase">
              4 Pending Audits
            </div>
          </div>
        </div>
        <div className="space-y-stack-md">
          <h2 className="text-headline-lg font-headline-lg text-primary">
            Provincial Impact
          </h2>
          <div className="bg-white p-stack-md border-l-4 border-secondary shadow-sm rounded-xl">
            <h3 className="text-headline-md font-headline-md mb-base">
              Reports for Guadalcanal
            </h3>
            <p className="text-body-md text-slate-600 mb-stack-sm">
              Latest auditing results for the capital province including urban
              development grants and health service allocations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-sm font-medium text-primary">
                <span className="material-symbols-outlined mr-2 text-xs">
                  arrow_forward
                </span>
                2023 Municipal Infrastructure Audit
              </li>
              <li className="flex items-center text-sm font-medium text-primary">
                <span className="material-symbols-outlined mr-2 text-xs">
                  arrow_forward
                </span>
                Honiara City Council Financial Review
              </li>
            </ul>
            <button className="mt-stack-md text-secondary font-bold text-xs uppercase tracking-widest flex items-center hover:translate-x-2 transition-transform">
              View All Provincial Reports{" "}
              <span className="material-symbols-outlined ml-2">trending_flat</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
