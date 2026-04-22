export default function Careers() {
  const jobs = [
    {
      title: "Graduate Program 2024",
      info: "Applications Open until April 1st",
    },
    {
      title: "Senior Auditor (Financial)",
      info: "Permanent Position • Honiara HQ",
    },
  ];

  return (
    <div className="bg-primary-container text-white p-stack-md flex flex-col justify-between relative overflow-hidden rounded-xl">
      {/* Decorative Seal Background */}
      <div className="absolute -right-12 -bottom-12 opacity-10 scale-150 rotate-12 pointer-events-none">
        <span className="material-symbols-outlined text-[200px]">
          account_balance
        </span>
      </div>
      <div className="relative z-10">
        <h2 className="text-headline-md font-headline-md text-secondary-container">
          Serve Your Country
        </h2>
        <p className="text-slate-300 mt-stack-sm text-sm leading-relaxed">
          We are looking for meticulous young accountants and legal experts to
          join our mission of national integrity.
        </p>
        <ul className="mt-stack-md space-y-4">
          {jobs.map((job) => (
            <li key={job.title} className="flex items-start">
              <span className="material-symbols-outlined text-secondary-container mr-2 text-sm">
                check_circle
              </span>
              <div>
                <span className="block font-bold text-xs uppercase tracking-widest">
                  {job.title}
                </span>
                <span className="text-[10px] text-slate-400">{job.info}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className="relative z-10 mt-stack-lg border-2 border-secondary-container text-secondary-container py-3 text-xs font-black uppercase tracking-[0.2em] hover:bg-secondary-container hover:text-primary-container transition-colors rounded-xl">
        Explore Careers
      </button>
    </div>
  );
}
