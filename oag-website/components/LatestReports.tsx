const reports = [
  {
    title: "Ministry of Health & Medical Services 2023",
    type: "Financial Audit Report",
    date: "Jan 2024",
    ref: "REF: OAG-2024-001",
  },
  {
    title: "Solomon Water Performance Review",
    type: "Performance Audit Report",
    date: "Dec 2023",
    ref: "REF: OAG-2023-089",
  },
  {
    title: "Education Infrastructure Grant Analysis",
    type: "Special Audit Report",
    date: "Nov 2023",
    ref: "REF: OAG-2023-072",
  },
];

export default function LatestReports() {
  return (
    <section className="bg-slate-50 py-stack-lg">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack-md gap-4">
          <div>
            <h2 className="text-headline-lg font-headline-lg text-primary">
              Latest Reports
            </h2>
            <p className="text-slate-500">
              The most recent findings submitted to the Speaker of Parliament.
            </p>
          </div>
          <button className="border border-primary text-primary px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded-xl">
            Archive Search
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {reports.map((report) => (
            <div
              key={report.ref}
              className="bg-white border border-slate-200 p-stack-sm hover:shadow-md transition-shadow group rounded-xl flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-stack-sm">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  picture_as_pdf
                </span>
                <span className="text-[10px] bg-slate-100 px-2 py-1 font-bold uppercase text-slate-600 rounded">
                  {report.date}
                </span>
              </div>
              <h4 className="font-bold text-primary group-hover:text-secondary transition-colors mb-2 flex-grow">
                {report.title}
              </h4>
              <p className="text-xs text-slate-500 uppercase tracking-tighter font-semibold">
                {report.type}
              </p>
              <div className="mt-stack-md pt-stack-sm border-t border-slate-100 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400">
                  {report.ref}
                </span>
                <button className="text-xs font-bold text-primary-container hover:text-secondary transition-colors">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
