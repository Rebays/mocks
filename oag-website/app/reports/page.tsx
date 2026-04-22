import OfficialBanner from "@/components/OfficialBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reports = [
  {
    id: 1,
    category: "Financial Audit",
    ref: "FIN-2024-02",
    date: "Oct 24, 2024",
    title: "Audit of the Solomon Islands Port Authority (SIPA) Annual Accounts",
    description: "This report presents the findings of the financial statement audit for the fiscal year ending 2023, focusing on revenue collection transparency and operational expenditure compliance.",
    color: "bg-secondary-container text-on-secondary-fixed-variant",
  },
  {
    id: 2,
    category: "Performance Audit",
    ref: "PER-2024-08",
    date: "Sept 12, 2024",
    title: "Ministry of Health and Medical Services: Medical Supply Chain Efficiency",
    description: "An evaluation of the procurement and distribution mechanisms of essential medicines across the provincial healthcare centers, identifying gaps in logistics and inventory management.",
    color: "bg-primary-container text-white",
  },
  {
    id: 3,
    category: "Provincial Audit",
    ref: "PRO-2024-15",
    date: "Aug 05, 2024",
    title: "Malaita Provincial Assembly: Special Project Fund Utilization",
    description: "A comprehensive review of the grants allocated for infrastructure development within the Malaita province, assessing value for money and adherence to procurement guidelines.",
    color: "bg-surface-container text-primary",
  },
];

export default function ReportsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <OfficialBanner />
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-16 w-full">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-4">
            All Audit Reports
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Providing independent assurance to Parliament and the people of
            Solomon Islands on the management of public resources through
            transparent and professional auditing.
          </p>
        </div>

        {/* Filter/Search Bar */}
        <div className="bg-white p-2 rounded-full mb-16 shadow-sm border border-outline-variant/30 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-grow flex items-center px-6 gap-3 min-w-[200px]">
            <span className="material-symbols-outlined text-outline">search</span>
            <input
              className="w-full border-none focus:ring-0 bg-transparent text-sm placeholder:text-outline/60"
              placeholder="Search Keywords..."
              type="text"
            />
          </div>
          <div className="h-8 w-[1px] bg-outline-variant hidden md:block"></div>
          <div className="px-4">
            <select className="border-none focus:ring-0 bg-transparent text-sm font-semibold text-primary cursor-pointer">
              <option>Year: All</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
          <div className="h-8 w-[1px] bg-outline-variant hidden md:block"></div>
          <div className="px-4">
            <select className="border-none focus:ring-0 bg-transparent text-sm font-semibold text-primary cursor-pointer">
              <option>Category: All</option>
              <option>Performance</option>
              <option>Financial</option>
              <option>Provincial</option>
              <option>Special</option>
            </select>
          </div>
          <button className="bg-secondary text-white px-8 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all uppercase tracking-wider">
            Apply Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Report List */}
          <div className="flex-grow space-y-6">
            {reports.map((report) => (
              <div
                key={report.id}
                className="audit-card bg-white p-8 rounded-xl flex flex-col md:flex-row gap-8 items-start border border-outline-variant/20 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-3 mb-4 items-center">
                    <span
                      className={`${report.color} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest`}
                    >
                      {report.category}
                    </span>
                    <span className="text-outline text-xs font-medium">
                      # REF:{report.ref}
                    </span>
                    <span className="text-outline text-xs">•</span>
                    <span className="text-outline text-xs">
                      Published: {report.date}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">
                    {report.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                    {report.description}
                  </p>
                </div>
                <div className="md:w-48 w-full flex-shrink-0">
                  <button className="w-full border-2 border-primary text-primary px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-bold text-xs hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined text-lg">
                      description
                    </span>
                    DOWNLOAD PDF
                  </button>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 pt-12">
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm">
                1
              </button>
              <button className="w-10 h-10 rounded-full border border-outline-variant text-primary font-bold text-sm hover:bg-surface-container">
                2
              </button>
              <button className="w-10 h-10 rounded-full border border-outline-variant text-primary font-bold text-sm hover:bg-surface-container">
                3
              </button>
              <span className="text-outline">...</span>
              <button className="w-10 h-10 rounded-full border border-outline-variant text-primary font-bold text-sm hover:bg-surface-container">
                12
              </button>
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Action Sidebar */}
          <aside className="lg:w-80 w-full space-y-6">
            <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/30">
              <h4 className="font-headline-md text-[18px] text-primary mb-4">
                Can't find a report?
              </h4>
              <p className="text-sm text-on-surface-variant mb-6">
                If you are looking for archived reports prior to 2015 or specific
                documentation, please reach out to our records office.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-primary font-semibold">
                  <span className="material-symbols-outlined text-lg">mail</span>
                  info@oag.gov.sb
                </div>
                <div className="flex items-center gap-3 text-sm text-primary font-semibold">
                  <span className="material-symbols-outlined text-lg">call</span>
                  +(677) 21151
                </div>
              </div>
            </div>

            <div className="bg-primary-container p-8 rounded-xl text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-headline-md text-[18px] text-secondary-container mb-4">
                  Integrity Hotline
                </h4>
                <p className="text-sm text-white/80 mb-6">
                  Anonymously report misuse of public funds or suspected
                  corruption in government services.
                </p>
                <button className="w-full bg-secondary text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all">
                  Submit a Tip
                </button>
              </div>
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10 rotate-12 transition-transform group-hover:scale-110 fill-1">
                shield
              </span>
            </div>

            <div className="p-6 border-l-4 border-secondary bg-white shadow-sm rounded-r-lg">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-outline mb-4">
                Audit Status
              </h5>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-outline">In-Progress Audits</span>
                  <span className="font-bold text-primary">14</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-outline">Published 2024</span>
                  <span className="font-bold text-primary">32</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </main>
  );
}
