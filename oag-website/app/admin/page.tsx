import Link from "next/link";

export default function AdminConsole() {
  const moderationItems = [
    {
      id: "#88219",
      author: "john_doe_99",
      avatar: "JD",
      snippet: '"I believe the current policy is absolute garbage and everyone involved should..."',
      reason: "Harassment",
      color: "text-error",
      bg: "bg-error",
    },
    {
      id: "#90123",
      author: "crypto_enthusiast",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWdxkM8NWiDtHmN9HhnW1HF6c5wvacSu0diVQ0M3hi_NLVKmNXvJgNv4QbeOr0QswrxCXfFDAn_BrjgtPV6WEgZkiOrH2tWENTgz3NlNWoIfC8163hgpVsSJR0gj_c-ZrulROKknmab_etojtAnQVY6qfe7CllZvhh_b91McEv2upzI2TvPHDQ_zBmlqaOHU_8mZAnYz6CA7NnZDsvqx6Ni6LYzGtOY-1b4R8b2Ggp4CpZvGXzvGqLlkw7n8QegeNax32kVjZkBpJC",
      snippet: '"CLICK HERE FOR FREE BITCOIN! DON\'T MISS THIS EXCLUSIVE DEAL..."',
      reason: "Potential Spam",
      color: "text-secondary",
      bg: "bg-secondary",
    },
    {
      id: "#77120",
      author: "tech_savv_sam",
      avatar: "TS",
      snippet: '"Sharing personal phone numbers is prohibited, but here is my..."',
      reason: "PII Violation",
      color: "text-error",
      bg: "bg-error",
    },
  ];

  const verifications = [
    {
      name: "Dr. Elias Vance",
      role: "Medical Expert",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUNBlcfpy1Vhuem0dZhHRgbm55ukWs0L8eiAgVr8aVCTF2M8vbsS1uLg6XQYbp1eeeX2NA9bD2qyZolPyi4JEio8LqGEBfe2S8jdpn9V9pGznpjusn3UzRdCTpludvm3wXQKtpu5k_0zj1BVvPC4Mh6YvzymMPj0gGfH1e6aGR0pvXEQ4Ydy3M5wc-97iMt_dd8vDv3sPvSjG3vt8rRpHvHX0ipda-dkEKIwxSp25CeGPqLN81VYVte8TK3L0D9bQu94MsHNHrhgki",
    },
    {
      name: "Sarah Jenkins",
      role: "Legal Counsel",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWJz9Sl8XzJxs_2HeuWjTiBwwbzWubXMNsqSBUW1aoixtCOGWdjFbZy238fl74MuOwBrpg6-IFXnYlgllp9OdDi7vbJy3CQhla6vgk80-8D0soaZ0tdyxN6EzViJBtWdh0sUt5SHX3Zc5xkOXfuu6Bq6qXoV6jrSogNu2gg_LA81BOdAsrPk17px6AiV3JuSPPR0TyJYc9S14qH4DJTB49lo7HaZWMhSdDi-AKBMPX5KscfFbEYRN3U60mc8V6SWatzKaOPFR2RK_p",
    },
    {
      name: "Prof. Marcus Cole",
      role: "Academic",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3DBRTSzScvPnwo9aKQIsMiaVIbz2MDsnC5Wm3YaSO3TiNgVkR0Lq9MwESnAMMuRsJksAlb0e3GO4eGwWx_en27ci-x78avf84hgPBfVmdUdz5X3RpOxdGvqZo6_9ozql6B8J0sHtVIyKPyYfbq3zkLiiU1sS7xfxhxJ-9dcOoLR7AEfsXPkqpefnYfjjdj2GnGCIbhM8PhZ9yFpQM-RNpR0HVhgrppPTxFvqLGLYza1msnDyA_J8a3X9e6jTyy-qsMUvMo7lLLA6M",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-public-sans text-on-surface flex">
      {/* SideNavBar Shell */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-slate-700 bg-primary flex flex-col py-8 z-50 shadow-2xl">
        <div className="px-6 mb-12">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white uppercase hover:opacity-80 transition-opacity">
            OAG Admin
          </Link>
          <p className="text-[10px] text-primary-fixed-dim uppercase tracking-[0.2em] font-black mt-2">Forum Console</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {[
            { icon: "dashboard", label: "Dashboard", active: true },
            { icon: "group", label: "User Management" },
            { icon: "gavel", label: "Moderation" },
            { icon: "settings", label: "Forum Settings" },
            { icon: "receipt_long", label: "Audit Logs" },
          ].map((item) => (
            <a 
              key={item.label}
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                item.active 
                  ? "bg-white/10 text-white font-bold border-l-4 border-secondary shadow-lg" 
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`} 
              href="#"
            >
              <span className="material-symbols-outlined mr-3 text-[20px] group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="text-sm tracking-wide">{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="px-6 mt-auto pt-8 border-t border-white/10 flex items-center gap-3 group cursor-pointer hover:bg-white/5 py-4 transition-colors">
          <img 
            alt="Admin Avatar" 
            className="w-10 h-10 rounded-full border-2 border-primary-fixed-dim p-0.5" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwXKMPSgoYLQsW8VcpOf-IkWhoLKnbWqY9uyfoKdxrd7URfzIFgGVbiABCPMWdOIAKHTB9gj58QmFvlLPPR4H4Ul3lFZiqW02mnzQlqkh2wbLLwN4nom021LFwVckCmF-V8bhhJku5KRqnXFSVUkeV1TlCr-RRIZFvzt2WTpvLQ2pySf1uWHydSzPwGCf8XS3kpe6QuSkDd-iPJcZLh9ucTQSOmFBor2PKRMdq8TGjETNLrOjMO_w0Y2iLTKmLfbr5Xo-9b7wbXsvD" 
          />
          <div className="overflow-hidden">
            <p className="text-white font-bold text-sm truncate">Admin User</p>
            <p className="text-[10px] text-primary-fixed-dim font-black uppercase tracking-widest truncate">Super Admin</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* TopAppBar Shell */}
        <header className="h-16 border-b border-outline-variant bg-white/80 backdrop-blur-md flex justify-between items-center px-8 sticky top-0 z-40">
          <div className="flex items-center flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span>
              <input 
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                placeholder="Search moderation logs, users, or posts..." 
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-outline hover:text-primary transition-all active:scale-90 transform">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-error border-2 border-white rounded-full"></span>
            </button>
            <button className="text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div className="h-6 w-[1px] bg-outline-variant/50"></div>
            <button className="px-5 py-2 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:brightness-110 shadow-lg active:scale-95 transform transition-all">
              Logout
            </button>
          </div>
        </header>

        <main className="p-8 max-w-7xl mx-auto w-full flex-grow">
          {/* Page Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">System Overview</h2>
              <p className="text-on-surface-variant font-medium mt-1">Real-time forum activity and administrative monitoring.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 border-2 border-outline-variant text-primary font-bold text-[11px] uppercase tracking-widest rounded-xl hover:bg-surface-container-low transition-all">
                <span className="material-symbols-outlined text-lg">download</span> Export Report
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold text-[11px] uppercase tracking-widest rounded-xl hover:shadow-xl active:scale-95 transform transition-all">
                <span className="material-symbols-outlined text-lg">refresh</span> Refresh Data
              </button>
            </div>
          </div>

          {/* Metric Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: "Total Members", value: "12,482", change: "+4.2% Growth", icon: "group", color: "text-primary", bg: "bg-surface-container" },
              { label: "Flagged Posts", value: "156", change: "24 Pending Review", icon: "flag", color: "text-error", bg: "bg-error-container" },
              { label: "Active Topics", value: "843", change: "Live conversations", icon: "chat", color: "text-secondary", bg: "bg-secondary-container" },
              { label: "New Sign-ups", value: "89", change: "Past 24 hours", icon: "person_add", color: "text-primary", bg: "bg-surface-container-high" },
            ].map((metric) => (
              <div key={metric.label} className="bg-white border border-outline-variant/50 p-6 rounded-2xl flex items-start justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <p className="text-[10px] text-outline font-black uppercase tracking-[0.2em] mb-1">{metric.label}</p>
                  <h3 className={`text-3xl font-black leading-tight ${metric.color}`}>{metric.value}</h3>
                  <p className={`text-[10px] font-bold mt-2 flex items-center ${metric.label === "Flagged Posts" ? "text-error" : "text-green-600"}`}>
                    <span className="material-symbols-outlined text-sm mr-1">{metric.label === "Flagged Posts" ? "warning" : "trending_up"}</span>
                    {metric.change}
                  </p>
                </div>
                <div className={`${metric.bg} p-3 rounded-2xl ${metric.color} opacity-80`}>
                  <span className="material-symbols-outlined text-2xl">{metric.icon}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Moderation Table */}
            <div className="lg:col-span-2 bg-white border border-outline-variant/50 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low/50">
                <h4 className="font-bold text-primary tracking-tight">Priority Moderation Queue</h4>
                <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-error/20">High Risk</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white text-outline font-black text-[10px] uppercase tracking-widest border-b border-outline-variant/30">
                      <th className="px-6 py-4">Author</th>
                      <th className="px-6 py-4">Content Snippet</th>
                      <th className="px-6 py-4">Reason</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {moderationItems.map((item) => (
                      <tr key={item.id} className="hover:bg-surface-container-low/30 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full border-2 border-outline-variant/30 overflow-hidden flex items-center justify-center bg-surface-container-low text-[10px] font-black text-primary uppercase">
                              {item.avatar.length > 2 ? <img src={item.avatar} alt="Avatar" className="w-full h-full object-cover" /> : <span>{item.avatar}</span>}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-primary">{item.author}</p>
                              <p className="text-[10px] text-outline font-bold">ID: {item.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-xs text-on-surface-variant line-clamp-1 max-w-[200px] italic">{item.snippet}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`flex items-center gap-1.5 ${item.color} text-[10px] font-black uppercase tracking-widest`}>
                            <span className={`w-2 h-2 rounded-full ${item.bg}`}></span> 
                            {item.reason}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 text-green-600 hover:bg-green-50 rounded-xl transition-colors" title="Approve"><span className="material-symbols-outlined text-xl">check_circle</span></button>
                            <button className="p-2 text-secondary hover:bg-amber-50 rounded-xl transition-colors" title="Warning"><span className="material-symbols-outlined text-xl">report</span></button>
                            <button className="p-2 text-error hover:bg-error-container rounded-xl transition-colors" title="Delete"><span className="material-symbols-outlined text-xl">delete</span></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-surface-container-low/30 text-center border-t border-outline-variant/30">
                <a className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest" href="#">View Full Moderation Dashboard</a>
              </div>
            </div>

            {/* Side Panel: Verifications & Logs */}
            <div className="space-y-8">
              {/* User Verification List */}
              <div className="bg-white border border-outline-variant/50 rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-primary tracking-tight">Pending Verification</h4>
                  <span className="text-[10px] font-black text-outline uppercase tracking-widest">8 Pending</span>
                </div>
                <div className="space-y-4">
                  {verifications.map((user) => (
                    <div key={user.name} className="p-4 bg-surface-container-low/50 rounded-2xl border border-outline-variant/20 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all">
                      <div className="flex items-center gap-3">
                        <img alt="User" className="w-10 h-10 rounded-full border border-outline-variant/30" src={user.avatar} />
                        <div>
                          <p className="text-sm font-bold text-primary">{user.name}</p>
                          <p className="text-[9px] text-secondary font-black uppercase tracking-widest bg-secondary-container/30 px-2 py-0.5 rounded-full inline-block mt-1">{user.role}</p>
                        </div>
                      </div>
                      <button className="bg-primary text-white p-2 rounded-xl hover:shadow-lg active:scale-90 transform transition-all" title="Verify User">
                        <span className="material-symbols-outlined text-sm fill-1">verified</span>
                      </button>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 border-2 border-primary/10 text-primary font-black text-[10px] rounded-xl hover:bg-primary hover:text-white transition-all uppercase tracking-[0.2em] mt-4">
                  Manage Requests
                </button>
              </div>

              {/* Quick Audit Logs */}
              <div className="bg-primary-container text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 opacity-70">Recent Audit Activity</h4>
                <div className="space-y-5 relative z-10">
                  {[
                    { admin: "Admin_Mark", action: "banned user_404", time: "2 minutes ago" },
                    { admin: "System", action: "auto-flagged 12 posts", time: "14 minutes ago" },
                  ].map((log, i) => (
                    <div key={i} className="flex gap-4 text-xs">
                      <span className="material-symbols-outlined text-secondary text-xl">history</span>
                      <div>
                        <p className="font-medium text-slate-100 leading-tight">
                          <span className="font-black text-white">{log.admin}</span> {log.action}
                        </p>
                        <p className="opacity-50 text-[9px] mt-1 uppercase font-bold tracking-widest">{log.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Forum Health Analytics */}
          <div className="mt-10 bg-white border border-outline-variant/50 rounded-3xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <div>
                <h4 className="text-headline-md font-headline-md text-primary tracking-tight">Forum Health & Compliance</h4>
                <p className="text-on-surface-variant font-medium mt-1">Aggregated safety and compliance metrics across all regions.</p>
              </div>
              <div className="flex flex-wrap gap-4 bg-surface-container-low px-4 py-2 rounded-2xl border border-outline-variant/30">
                {[{ c: "bg-green-500", l: "Safe" }, { c: "bg-amber-500", l: "Review" }, { c: "bg-red-500", l: "Flagged" }].map(s => (
                  <div key={s.l} className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${s.c}`}></span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-outline">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { label: "Compliance Rate", val: "90", color: "text-green-500", offset: "36.4" },
                { label: "Response Speed", val: "70", color: "text-amber-500", offset: "109.3" },
                { label: "Risk Level", val: "10", color: "text-red-500", offset: "328" },
              ].map(chart => (
                <div key={chart.label} className="flex flex-col items-center group">
                  <div className="relative w-36 h-36 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle className="text-surface-container-low" cx="72" cy="72" fill="transparent" r="64" stroke="currentColor" strokeWidth="12"></circle>
                      <circle className={chart.color} cx="72" cy="72" fill="transparent" r="64" stroke="currentColor" strokeWidth="12" strokeDasharray="402" strokeDashoffset={chart.offset}></circle>
                    </svg>
                    <span className="absolute text-3xl font-black text-primary tracking-tighter">{chart.val}%</span>
                  </div>
                  <p className="mt-6 font-black text-xs text-primary uppercase tracking-[0.2em]">{chart.label}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
