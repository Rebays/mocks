import Link from "next/link";

export default function EngagementHub() {
  const discussions = [
    {
      id: 1,
      author: "Dr. Johnathan Kesa",
      role: "Official",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8GBfgVPZPPE1AMWoNWH6gsASps7QVFHdJwJgTOZ-okSjGNG0L9AbKRKpPHb2ETitbeRiC0Mazo15iFzeYs45WYP0-QkaIj_jPpb6opAFBfd4hY9m2jXiRMPwZ7pcbHXe9duPfTEcpxp1i2q3AHeDpcpmeSw0SoBxFIqK0FR47uPRbUyRRtVSGTTDbQwRG9iP3aBv51gUXkuAyx3jj9chm0rGa5FU9LSKYNVy23IjBsVQFRz8-rLAfPRLE3kApJIVWhREUcKn6S4PW",
      title: "Annual Provincial Audit Report 2023: Key Findings",
      excerpt: "The Office of the Auditor-General has completed the comprehensive review of provincial expenditure. Our findings indicate a 15% improvement in documentation compliance across five regions...",
      category: "Audit Reports",
      replies: 42,
      time: "2 hours ago",
      participants: 8,
    },
    {
      id: 2,
      author: "Simeon Maelalo",
      title: "Question regarding Public Procurement Guidelines",
      excerpt: "Could someone from the OAG clarify the recent amendments to the small-scale project procurement threshold? We are seeking guidance for community-led infrastructure projects...",
      category: "Accountability",
      replies: 18,
      time: "5 hours ago",
    },
    {
      id: 3,
      author: "Elizabeth Talo",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWA1_HwrnWb4Wpyu9ZMrQfCTd7U-zaFTEx6y0oBwnrjfTnBO4mjpUefHsLDMQQfTvjcJK-KesCG_CAwp5PwNcyHgFYNK5hyoMj_gJfuEvCzKKmzetIZ6HZ_P-dbiXOS0iIvp8mgyilbuMqSp8uLYSfOnwp6WGlkk9HEMxScE-UWUC2LZUvLHqFEN5UiL9VSAck5eg_1CTdQB-J1Cyv7RWG433mmuDTIjcTcz5JpCIpSwhKkvwlJCdwrp5oXNXA2TGJSgd1fro2OWti",
      title: "Internal Audit Internship Opportunities for 2025",
      excerpt: "I am looking for information regarding the application timeline for the next cohort of audit interns. Are there specific requirements for recent finance graduates from SINU?",
      category: "Careers",
      replies: 7,
      time: "1 day ago",
    },
    {
      id: 4,
      author: "Audit Director's Desk",
      role: "Official",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY5UYnE0HJl4xgSUm4v4owGC3YQGnPR_biqs4pewFutpYwh3n3qJj5QEDCq-arXyJTwKg7sC-uXVpJOs4tmVWGeC4x24d8M-4bVgBQ-ZMN13wnFzkIkDy8u9RTtaEeqUVQo6Howl0WJhHSNweUJc9usNDtJbFIYC0l6dj1iSuyGaXCHJpXq12gKYwfm6gexBBzZLgNKzGqisvgRzxyvWUuB8l0IRHMoh9xgRC2pUhgJut6UmyLJd5Ekxc1ewHddvlgw3iPIJxJMzcn",
      title: "Transparency in Public Sector Management: New Guidelines",
      excerpt: "The OAG is proud to announce the publication of the 'Public Accountability Framework' designed to enhance transparency across all government ministries...",
      category: "Accountability",
      replies: 29,
      time: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-public-sans text-on-surface flex flex-col">
      {/* TopNavBar Implementation */}
      <header className="bg-white border-b border-outline-variant shadow-sm sticky top-0 w-full z-50">
        <div className="flex items-center justify-between px-8 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-8 h-full">
            <Link href="/" className="text-lg font-bold text-primary tracking-tighter hover:opacity-80 transition-opacity">
              OAG Engagement Hub
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-tight h-full">
              <a className="text-primary border-b-2 border-primary h-full flex items-center px-1" href="#">Discussions</a>
              <a className="text-on-surface-variant h-full flex items-center px-1 hover:text-primary transition-colors" href="#">Categories</a>
              <a className="text-on-surface-variant h-full flex items-center px-1 hover:text-primary transition-colors" href="#">Resources</a>
              <a className="text-on-surface-variant h-full flex items-center px-1 hover:text-primary transition-colors" href="#">Staff</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
              <input 
                className="pl-10 pr-4 py-1.5 bg-surface-container-low border border-outline-variant rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                placeholder="Search discussions..." 
                type="text"
              />
            </div>
            <button className="bg-primary text-white px-5 py-1.5 rounded-md text-sm font-semibold active:scale-95 transition-transform shadow-md">
              Login
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-48 w-full overflow-hidden flex items-center justify-center bg-primary-container">
          <div className="absolute inset-0 opacity-20">
            <img 
              alt="Official institutional background" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzwtPwEfiqGITboxJ0RavK-I3pqr8mconPcZxM__QJhfsqfGk1Cqny20chK8l3wc5okyEUYPuQs_JZHKfPOG4Bx0Wm97rW_8uJGY_4k8CwLMGTatDiMcn-8SYI4bYzEnoqqBG7KqQAHhPzHVDRBgBvHf0BVEkU5THsNrjjSGUza2AvfIq84NFO196j4SDNb2t1pw9CWqgSk9zctjo5OO1oiOh-6lALRCvd9nYYO60ioPRGyl_lb_54snJbYXBlNbolk7sgcGaMQaB1" 
            />
          </div>
          <div className="relative z-10 text-center px-6">
            <h1 className="font-headline-xl text-white text-4xl md:text-headline-xl mb-2">Welcome to the OAG Forum</h1>
            <p className="text-primary-fixed-dim text-base md:text-body-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
              Promoting transparency and accountability through civic engagement in the Solomon Islands.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-8 py-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* SideNavBar Implementation (Desktop) */}
            <aside className="hidden md:flex flex-col w-64 shrink-0">
              <div className="bg-surface-container-low rounded-xl border border-outline-variant p-4 sticky top-24 shadow-sm">
                <div className="mb-6 px-2">
                  <h2 className="font-headline-md text-headline-md text-primary mb-1">Categories</h2>
                  <p className="text-[10px] text-outline uppercase tracking-widest font-bold">Browse Discussions</p>
                </div>
                <nav className="flex flex-col gap-1.5">
                  {[
                    { icon: "forum", label: "All Topics", active: true },
                    { icon: "description", label: "Audit Reports" },
                    { icon: "account_balance", label: "Public Finance" },
                    { icon: "gavel", label: "Legislation" },
                    { icon: "tips_and_updates", label: "Proposals" },
                  ].map((cat) => (
                    <a 
                      key={cat.label}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
                        cat.active 
                          ? "bg-white text-primary font-bold shadow-sm border border-outline-variant/50" 
                          : "text-on-surface-variant hover:bg-white/50"
                      }`} 
                      href="#"
                    >
                      <span className="material-symbols-outlined text-lg">{cat.icon}</span>
                      <span className="text-sm">{cat.label}</span>
                    </a>
                  ))}
                </nav>
                <div className="mt-8 pt-8 border-t border-outline-variant">
                  <button className="w-full bg-secondary text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-lg">add_circle</span>
                    New Topic
                  </button>
                </div>
              </div>
            </aside>

            {/* Discussion Feed */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary">Recent Discussions</h2>
                  <p className="text-on-surface-variant">Stay updated with the latest institutional insights</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2.5 border border-outline-variant rounded-xl bg-white hover:bg-surface-container-low text-on-surface-variant shadow-sm transition-colors">
                    <span className="material-symbols-outlined">filter_list</span>
                  </button>
                  <button className="p-2.5 border border-outline-variant rounded-xl bg-white hover:bg-surface-container-low text-on-surface-variant shadow-sm transition-colors">
                    <span className="material-symbols-outlined">sort</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {discussions.map((post) => (
                  <article key={post.id} className="bg-white border border-outline-variant rounded-2xl p-6 hover:shadow-xl transition-all group shadow-sm cursor-pointer">
                    <div className="flex items-start gap-5">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 overflow-hidden ${!post.avatar ? "bg-surface-container-highest text-primary-container font-bold" : "border-2 border-primary-container/20 p-0.5"}`}>
                        {post.avatar ? (
                          <img alt={post.author} className="w-full h-full object-cover rounded-full" src={post.avatar} />
                        ) : (
                          <span>{post.author.split(' ').map(n => n[0]).join('')}</span>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-bold text-sm text-on-surface">{post.author}</span>
                          {post.role === "Official" && (
                            <span className="inline-flex items-center gap-1 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">
                              <span className="material-symbols-outlined text-[12px] fill-1">check_circle</span>
                              Official
                            </span>
                          )}
                        </div>
                        <h3 className="font-headline-md text-primary group-hover:text-secondary transition-colors mb-3 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-on-surface-variant line-clamp-2 mb-5 leading-relaxed text-sm">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-5 text-[11px] font-bold text-outline uppercase tracking-wider">
                            <span className="bg-surface-container-highest text-primary px-2.5 py-1 rounded-full">{post.category}</span>
                            <span className="flex items-center gap-1.5 hover:text-primary transition-colors">
                              <span className="material-symbols-outlined text-sm">chat_bubble</span> 
                              {post.replies} Replies
                            </span>
                            <span className="flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-sm">schedule</span> 
                              {post.time}
                            </span>
                          </div>
                          {post.participants && (
                            <div className="flex -space-x-2">
                              {[1, 2].map((i) => (
                                <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                  <img 
                                    alt="User" 
                                    src={`https://i.pravatar.cc/100?u=${post.id}${i}`} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                              <div className="w-7 h-7 rounded-full bg-surface-container-high border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary">
                                +{post.participants}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex gap-2">
                  <button className="w-11 h-11 flex items-center justify-center rounded-xl border border-outline-variant bg-white text-outline cursor-not-allowed transition-all">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary text-white font-bold shadow-md transform scale-105">1</button>
                  <button className="w-11 h-11 flex items-center justify-center rounded-xl border border-outline-variant bg-white text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all">2</button>
                  <button className="w-11 h-11 flex items-center justify-center rounded-xl border border-outline-variant bg-white text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all">3</button>
                  <button className="w-11 h-11 flex items-center justify-center rounded-xl border border-outline-variant bg-white text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Implementation */}
      <footer className="w-full border-t border-outline-variant bg-white mt-auto">
        <div className="py-10 px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="font-bold text-primary text-lg">OAG Engagement Hub</span>
            <p className="text-xs text-outline font-medium tracking-wide">
              © 2024 Office of the Auditor-General. Institutional Transparency Initiative.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["Privacy Policy", "Terms of Service", "Accessibility", "Contact Support"].map((link) => (
              <a key={link} className="text-xs font-bold text-outline hover:text-primary uppercase tracking-widest transition-colors" href="#">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
