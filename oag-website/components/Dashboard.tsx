export default function Dashboard() {
  const stats = [
    { value: "32", label: "Reports Tabled this Year" },
    { value: "9", label: "Provinces Covered" },
    { value: "100%", label: "Independence" },
  ];

  return (
    <section className="bg-primary-container py-stack-lg text-white">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex flex-col md:flex-row items-center w-full justify-center">
            <div className="text-center px-8">
              <div className="text-headline-xl font-black text-secondary-container">
                {stat.value}
              </div>
              <div className="font-label-sm uppercase tracking-widest text-slate-300 whitespace-nowrap">
                {stat.label}
              </div>
            </div>
            {index < stats.length - 1 && (
              <div className="h-16 w-px bg-slate-700 hidden md:block"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
