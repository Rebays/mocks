const pressReleases = [
  {
    category: "Press Release",
    title: "OAG Releases Annual Audit Plan for 2024-2025",
    description: "The Auditor General today announced the strategic focus for the upcoming financial year, prioritizing health and climate resilience funding.",
    date: "March 12, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrNAYZLA37Oernwxv2nm_VpIg4rlFOQPL4AXUYmLCCeQxbgHuoB9cWAZGQ0-NotS0zcqRGBXtOs8CyHsafNrxS9XDVBe0GwDZTATWMS8q591A_HTKrTnvYp9ccxweKlnnggDFNeM41I6Zn-w5Pt2KetNppmyS9XZSRK0EDlV9wiJGfxiYK6d-53yBeiyS9qBM5Zv6siZ1qcc4CpRcycRVNrQj8Ri3cVbNhdVVn8zA7N1qOYfp0ZEsRkZRGo8mIvmlQ_dLj_rcdaUPH",
  },
  {
    category: "Updates",
    title: "Strengthening External Audit Capacities in the Pacific",
    description: "Representatives from OAG Solomon Islands attend the regional PASAI summit to share best practices on digital auditing.",
    date: "March 05, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRVXLQrxbX_yjtLVdZIMCMB2DO_t87Rac0WNBBkx6fWdtZwFz1lcdCE-8A7_OPSs2W46T4z3Z4XHmUAm2dKGtBjitUsFYqb0D_SWm7oazThozM-4NdoaEV6BvR1ymaEJVXY4D1QzZRDu_kgTgh0GpTgKlR0ScvJyiVyXRw8UCqVm6B4hkQvRv27YK0gQWbM853wSfbWrz6MxceLnw04WOueF3P8lNrLHRtCCFoZ-NXOjVHKUqle166JkcS_ZghCKC_485dgRq5ddkv",
  },
];

export default function MediaRoom() {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-headline-lg font-headline-lg text-primary mb-stack-md">
        Media Room
      </h2>
      <div className="space-y-gutter">
        {pressReleases.map((news) => (
          <div
            key={news.title}
            className="flex flex-col md:flex-row bg-white border border-slate-100 group cursor-pointer rounded-xl overflow-hidden hover:shadow-sm transition-all"
          >
            <div className="w-full md:w-48 h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={news.title}
                src={news.image}
              />
            </div>
            <div className="p-stack-sm flex-1">
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                {news.category}
              </span>
              <h4 className="text-lg font-bold text-primary mt-1">
                {news.title}
              </h4>
              <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                {news.description}
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-slate-400">
                <span className="material-symbols-outlined text-xs mr-1">
                  calendar_today
                </span>{" "}
                {news.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
