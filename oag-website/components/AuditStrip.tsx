export default function AuditStrip({ className = "" }: { className?: string }) {
  const steps = [
    {
      icon: "visibility",
      title: "We Identify",
      description: "Mapping fiscal risks across ministries.",
    },
    {
      icon: "fact_check",
      title: "We Inspect",
      description: "Rigorous examination of records.",
    },
    {
      icon: "description",
      title: "We Report",
      description: "Public findings to Parliament.",
    },
  ];

  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`flex items-center space-x-4 py-6 ${
              index > 0 ? "md:border-l md:border-white/10 md:pl-gutter" : ""
            }`}
          >
            <div className="w-12 h-12 flex items-center justify-center border border-white/20 bg-white/10 backdrop-blur-md text-white rounded-lg shrink-0">
              <span className="material-symbols-outlined">{step.icon}</span>
            </div>
            <div>
              <h3 className="font-bold text-white uppercase text-xs tracking-widest">
                {step.title}
              </h3>
              <p className="text-sm text-slate-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
