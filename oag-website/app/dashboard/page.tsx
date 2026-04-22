import Link from "next/link";

export default function MemberDashboard() {
  const activities = [
    {
      id: 1,
      icon: "school",
      title: "2024 Education Grant Feedback",
      category: "Financial Audits",
      time: "2h ago",
      status: "New Reply",
      excerpt: "The latest audit report suggests a 15% discrepancy in administrative overhead for the K-12 vocational program. Looking for community members with experience in municipal grant allocation...",
      participants: 12,
    },
    {
      id: 2,
      icon: "foundation",
      title: "Infrastructure Sustainability Metrics",
      category: "Infrastructure",
      time: "5h ago",
      status: "Active Thread",
      excerpt: "Discussion regarding the implementation of ISO 14001 standards across state-funded construction projects. Join the debate on environmental impact assessment procedures.",
      stats: { replies: 42, views: "1.2k" },
    },
    {
      id: 3,
      icon: "policy",
      title: "Update to Community Transparency Guidelines",
      category: "Governance",
      time: "Yesterday",
      status: "New Reply",
      excerpt: "We are updating the rules for data sharing within the forum to better protect whistleblowers and sensitive audit information. Please review the draft and provide feedback.",
      initials: "OA",
    },
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-public-sans">
      {/* TopNavBar (Shared Component) */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 h-16 w-full bg-white border-b border-outline-variant shadow-sm">
        <div className="flex items-center gap-8 h-full">
          <Link href="/" className="text-xl font-black tracking-tighter text-primary uppercase font-public-sans hover:opacity-80 transition-opacity">
            OAG Community
          </Link>
          <nav className="hidden md:flex gap-6 h-full font-medium text-sm tracking-tight">
            <a className="text-primary border-b-2 border-primary h-full flex items-center px-1" href="#">Personal Feed</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1" href="#">Trending Topics</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors h-full flex items-center px-1" href="#">Member Directory</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer hover:bg-surface-container-low p-2 rounded-full transition-colors group">
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">notifications</span>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error border-2 border-white rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:bg-surface-container-low px-3 py-1.5 rounded-full transition-colors group">
            <img 
              alt="User Profile" 
              className="w-8 h-8 rounded-full border border-outline-variant group-hover:border-primary transition-colors" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYs43c6FEVt2POuYLU5UPDV9uKC5yCMN32-7_3IEvjMmb-3cZvgLF3daGTw--LSj_Nhjw9h98mSDItwcz7NwOv0-5BzdGyYlx95v8u_dW_1P-VqmfHfewDD027DLkGFqd3-ZcyN_ExDLUTy7WI-snAfT4_x0Jl1jtwnFqBBrtrdbEeHOtk0GYaBoP-4yWOa2_Uj6YtYzBGsAQ3jR5oSTn8tLOpB5T_yj4s-SGjUvlkZG-rPZs8lk0QKc-VbZJRKEdcs3AFAKU77dux" 
            />
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">account_circle</span>
          </div>
        </div>
      </header>

      <div className="flex flex-grow max-w-7xl mx-auto w-full relative">
        {/* SideNavBar */}
        <aside className="hidden lg:flex flex-col w-64 shrink-0 border-r border-outline-variant bg-surface-container-low/30 sticky top-16 h-[calc(100vh-64px)] p-6">
          {/* Profile Summary Section */}
          <div className="mb-8 p-4 bg-white border border-outline-variant rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <img 
                alt="John Doe" 
                className="w-12 h-12 rounded-full border-2 border-primary-container p-0.5" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoCvIgW95PuyaITEj7i2_b4LjuuvcqqM2zyzIjE4Jn54zjofvoZNVS7eiByeO759bumm16IruqseSz7G5hVcCWZlIsXss0CC8IzASyNN1bWkVIPdxaJqf1rNEirnUygKNVXqa5hxNuSMxTuoyfUuLlzHWuaxoW11sgsTdW-g0lI12agdj8NnfHlGmws74Kw-HnGk2vwHaYYuysJX9CTpBZpJMSaG6ZC_eKyTsAl-tSTc2Xq2Ry49N1XnCk41SiJnPOB2__hG-NuDcz" 
              />
              <div>
                <p className="font-bold text-primary text-sm">John Doe</p>
                <p className="text-[10px] text-outline uppercase tracking-widest font-bold">Member</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs border-t border-outline-variant/30 pt-3">
              <span className="text-on-surface-variant font-medium">Posts: 24</span>
              <span className="text-primary font-bold">Level 2</span>
            </div>
          </div>

          <div className="flex-grow space-y-1.5">
            {[
              { icon: "dynamic_feed", label: "My Feed", active: true },
              { icon: "bookmark", label: "Saved Topics" },
              { icon: "alternate_email", label: "Mentions" },
              { icon: "forum", label: "My Discussions" },
            ].map((item) => (
              <a 
                key={item.label}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  item.active 
                    ? "bg-white text-primary font-bold shadow-sm border border-outline-variant" 
                    : "text-on-surface-variant hover:bg-white/50"
                }`} 
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-outline-variant mt-auto space-y-1">
            <a className="flex items-center gap-3 px-4 py-2 rounded-xl text-on-surface-variant hover:bg-white/50 text-sm transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">settings</span>
              <span>Settings</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-2 rounded-xl text-on-surface-variant hover:bg-white/50 text-sm transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">help_outline</span>
              <span>Support</span>
            </a>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow p-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Input Box */}
              <section className="bg-white p-6 border border-outline-variant rounded-2xl shadow-sm">
                <div className="flex items-center gap-4">
                  <img 
                    alt="User Avatar" 
                    className="w-10 h-10 rounded-full border border-outline-variant" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAVohta4_rwY3aIiPcXNFQwSbuhl7xvYItvmUylolNllZ-2v-OOj6JA5t-FCfKWJsO49h7eEeZXEodQQ_LMRBXE9OPP97JplgOHEhSBnr5z_TbH6Nv9sYhBJSToXgQzCNubDooHhCu5mEXwt4u-Wlr4A0AiU8IGHtOjOtYyy30CB8Ik64gBZkYCSZGN_UVnX3lHpDuxjpqNXb3A5gKkHARNinOxyifkgCiH8KrK6mlOpZoLtwW4P-EssY-oWg90NBie8pGD0aSdwlL" 
                  />
                  <div className="relative flex-grow">
                    <input 
                      className="w-full bg-surface-container-low border border-outline-variant rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                      placeholder="What's on your mind?" 
                      type="text" 
                    />
                  </div>
                  <button className="bg-primary text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-md hover:brightness-110 transition-all active:scale-95 transform">
                    Post
                  </button>
                </div>
              </section>

              {/* Activity Feed Header */}
              <div className="flex items-center justify-between border-b border-outline-variant pb-4">
                <h2 className="text-headline-md font-headline-md text-primary">Recent Activity</h2>
                <span className="text-[10px] text-outline font-black uppercase tracking-[0.2em]">Followed Categories</span>
              </div>

              {/* Activity Cards Feed */}
              <div className="space-y-6">
                {activities.map((activity) => (
                  <div key={activity.id} className="bg-white p-6 border border-outline-variant rounded-2xl hover:shadow-xl transition-all group cursor-pointer shadow-sm relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-surface-container-low p-3 rounded-2xl group-hover:bg-primary transition-colors">
                          <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">{activity.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-body-lg font-bold text-primary group-hover:text-secondary transition-colors leading-tight">{activity.title}</h3>
                          <p className="text-xs text-outline mt-1 font-medium">In <span className="text-on-surface font-bold">{activity.category}</span> • {activity.time}</p>
                        </div>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                        activity.status === "New Reply" 
                          ? "bg-secondary-container text-on-secondary-container border-secondary" 
                          : "bg-surface-container-highest text-primary border-primary-container/20"
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                    <p className="text-on-surface-variant line-clamp-2 mb-6 text-sm leading-relaxed">
                      {activity.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {activity.participants && (
                          <div className="flex -space-x-2">
                            {[1, 2].map(i => (
                              <img key={i} alt="Member" className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?u=${activity.id}${i}`} />
                            ))}
                            <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary">+{activity.participants}</div>
                          </div>
                        )}
                        {activity.stats && (
                          <div className="flex items-center gap-4 text-outline font-bold text-[11px] uppercase tracking-wider">
                            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">comment</span> {activity.stats.replies}</span>
                            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">visibility</span> {activity.stats.views}</span>
                          </div>
                        )}
                        {activity.initials && (
                           <div className="flex -space-x-2">
                             <img alt="Member" className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?u=oa${activity.id}`} />
                             <div className="w-8 h-8 rounded-full bg-primary-container border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">{activity.initials}</div>
                           </div>
                        )}
                      </div>
                      <button className="flex items-center gap-2 text-primary font-bold text-[11px] uppercase tracking-widest border-2 border-primary/10 px-5 py-2.5 rounded-xl hover:bg-primary hover:text-white transition-all active:scale-95 transform">
                        Jump to Latest
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="col-span-12 lg:col-span-4 space-y-8">
              {/* Trending Topics Card */}
              <section className="bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
                <div className="p-5 border-b border-outline-variant/30 flex items-center justify-between">
                  <h2 className="text-[11px] text-primary font-black uppercase tracking-[0.2em]">Trending Topics</h2>
                  <span className="material-symbols-outlined text-secondary text-xl fill-1">trending_up</span>
                </div>
                <div className="p-3 space-y-1">
                  {[
                    { tag: "#InfrastructureAudit", count: "1.4k posts" },
                    { tag: "#Transparency", count: "892 posts" },
                    { tag: "#FiscalYearEnd", count: "650 posts" },
                    { tag: "#GovernanceReform", count: "412 posts" },
                  ].map((trend) => (
                    <a key={trend.tag} className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low transition-all group" href="#">
                      <span className="font-bold text-primary-container group-hover:text-secondary transition-colors text-sm">{trend.tag}</span>
                      <span className="text-[10px] font-bold bg-surface-container-high text-outline px-2 py-1 rounded-full">{trend.count}</span>
                    </a>
                  ))}
                </div>
                <a className="block text-center p-4 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-surface-container-low transition-all border-t border-outline-variant/30" href="#">
                  View All Trends
                </a>
              </section>

              {/* Recommended Audits Card */}
              <section className="bg-primary-container text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <h2 className="text-headline-md font-bold mb-6 leading-tight">Recommended Audits to Discuss</h2>
                  <div className="space-y-4">
                    {[
                      { id: "24-008", title: "Public Transport Efficiency Analysis", status: "Verified" },
                      { id: "24-012", title: "State Healthcare Digital Infrastructure", status: "Open" },
                    ].map((audit) => (
                      <div key={audit.id} className="p-5 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all cursor-pointer group">
                        <p className="text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-2">Audit Report {audit.id}</p>
                        <h4 className="font-bold text-sm mb-3 group-hover:text-secondary transition-colors">{audit.title}</h4>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm fill-1">{audit.status === "Verified" ? "verified" : "history"}</span>
                          <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">{audit.status === "Verified" ? "Certified Review" : "Open for Feedback"}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-8 bg-secondary text-white font-black py-4 rounded-xl uppercase tracking-[0.2em] text-[10px] shadow-lg hover:brightness-110 active:scale-95 transition-all">
                    Browse All Reports
                  </button>
                </div>
                {/* Decorative background accent */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              </section>

              {/* Audit Status Widget */}
              <section className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
                <h2 className="text-[11px] text-outline font-black uppercase tracking-[0.2em] mb-6">Community Impact</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shadow-inner">
                      <span className="material-symbols-outlined text-3xl fill-1">verified_user</span>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-primary leading-none mb-1 tracking-tighter">124</p>
                      <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Verified Findings</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-container/30 border border-secondary/20 flex items-center justify-center text-secondary shadow-inner">
                      <span className="material-symbols-outlined text-3xl fill-1">groups</span>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-primary leading-none mb-1 tracking-tighter">1.2k</p>
                      <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Active Contributors</p>
                    </div>
                  </div>
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-10 right-10 bg-primary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 border-4 border-white/20">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
}
