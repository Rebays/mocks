import OfficialBanner from "@/components/OfficialBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ForumPage() {
  const activeTopics = [
    {
      id: 1,
      icon: "payments",
      title: "Healthcare Funding Distribution 2023",
      startedBy: "Minister of Health",
      time: "4 hours ago",
      participants: 142,
    },
    {
      id: 2,
      icon: "school",
      title: "Education Grant Allocation Inconsistencies",
      startedBy: "Transparency Solomon Islands",
      time: "1 day ago",
      participants: 89,
    },
    {
      id: 3,
      icon: "tsunami",
      title: "Disaster Recovery Fund Audit Feedback",
      startedBy: "OAG Admin",
      time: "3 days ago",
      participants: 256,
    },
  ];

  const townHalls = [
    {
      id: 1,
      date: "Nov 15, 2024",
      time: "10:00 AM",
      title: "National Audit Strategy Review",
      location: "Central Honiara Community Hall",
      border: "border-secondary",
      color: "text-secondary",
    },
    {
      id: 2,
      date: "Dec 02, 2024",
      time: "02:00 PM",
      title: "Gizo Infrastructure Consultation",
      location: "Gizo Provincial Assembly",
      border: "border-primary",
      color: "text-primary",
    },
    {
      id: 3,
      date: "Dec 14, 2024",
      time: "09:00 AM",
      title: "Auki Health Service Audit",
      location: "Virtual Participation Link",
      border: "border-outline",
      color: "text-outline",
      opacity: "opacity-60",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <OfficialBanner />
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 w-full">
        {/* Hero Section */}
        <section className="py-16 mt-base border-b border-outline-variant">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="font-headline-xl text-headline-xl text-primary mb-4">
                Public Forum & Citizen Engagement
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                A transparent space for community feedback and democratic
                oversight. Participate in the accountability process and help
                shape the future of Solomon Islands' public resources.
              </p>
            </div>
            <div className="hidden md:block w-72 h-72 bg-surface-container rounded-full relative overflow-hidden shrink-0">
              <img
                alt="Community discussion"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0cN2ryeJwOx3AuJCUr22tVD4f6da1TN6TsjdJhylbYWjVUYXzz3LTwY3pDuDBtpRG8wFxhw04KstaNO8bF6wsR86lf_zcEcU5pPvbuPrpC4cq34J3HQBt1fljCpFZGgOlqV_rIex3UE8zlzDcP9Wkgyd9r_dZpgj6T0o_tlQgPrba-kFXYcXLlJbkpatovR88F5IZog5ripICADkoynRzbfnW4ENN0xUWBVXGyMlAjGuWxDCgvBYh1eJiiFhu29efRvsQGU1zL9d8"
              />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 mb-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            {/* Discussion Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: "description",
                  title: "Audit Feedback",
                  desc: "Review recent findings and provide community insights on report accuracy.",
                },
                {
                  icon: "forum",
                  title: "Public Consultations",
                  desc: "Active participation in ongoing investigations and policy reviews.",
                },
                {
                  icon: "help_center",
                  title: "Community Questions",
                  desc: "Direct channel to ask OAG staff about public expenditure and transparency.",
                },
              ].map((cat) => (
                <div
                  key={cat.title}
                  className="bg-white p-8 border border-outline-variant rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <span className="material-symbols-outlined text-secondary text-3xl mb-4 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">
                    {cat.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {cat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Featured Consultation */}
            <section className="mb-12">
              <div className="bg-primary-container text-white rounded-xl overflow-hidden flex flex-col md:flex-row shadow-xl">
                <div className="p-8 md:w-3/5">
                  <span className="inline-block bg-secondary text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold mb-4">
                    Open Consultation
                  </span>
                  <h2 className="font-headline-lg text-headline-lg mb-4">
                    Feedback on 2024 Infrastructure Audit
                  </h2>
                  <p className="font-body-md text-slate-300 mb-6 leading-relaxed">
                    We are seeking citizen feedback on the implementation of
                    bridge projects in Malaita Province. Your ground-level
                    reports help us verify contractor performance.
                  </p>
                  <button className="bg-secondary text-white px-8 py-3 rounded-xl font-label-sm hover:brightness-110 transition-all shadow-lg active:scale-95 transform">
                    Provide Evidence
                  </button>
                </div>
                <div className="md:w-2/5 min-h-[300px]">
                  <img
                    alt="Construction site"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAVr8gP9jLT7Tt3-MVfiRu5zQw9e3TkaytEM1Y3j0FtVo9QlihPWbwHeTeFxPYgipiiNpgoDFjB0olp26D-vfa7bIJOk3XJ8HQg8XitMQjG7q5xCi3BamSCsmwTVXo2RfcXjafVunISxV-9caPEljgUxFbAHsM_-_YA_CAc9ozV53KxWOHspnawNnNRYQZyn9uEppNjDmUEeFELnw7SuUOIBZD0KrzRojEBpdVZKi91IfQTmGIlIg44xdSjslMKdrd6cPKctgxaunv"
                  />
                </div>
              </div>
            </section>

            {/* Active Topics */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Active Topics
                </h2>
                <div className="flex gap-2">
                  <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined">sort</span>
                  </button>
                  <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined">search</span>
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {activeTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="bg-white p-6 border border-outline-variant rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 hover:border-primary transition-all duration-300 hover:shadow-md cursor-pointer group"
                  >
                    <div className="flex items-start gap-4 w-full">
                      <div className="bg-surface-container-high p-3 rounded-lg group-hover:bg-primary-container group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">
                          {topic.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-headline-md text-[18px] text-primary mb-1 group-hover:text-secondary transition-colors">
                          {topic.title}
                        </h4>
                        <p className="font-body-md text-sm text-on-surface-variant">
                          Started by {topic.startedBy} • {topic.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 w-full md:w-auto">
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="material-symbols-outlined text-outline text-[20px]">
                          groups
                        </span>
                        <span className="font-label-sm text-on-surface whitespace-nowrap">
                          {topic.participants} Participants
                        </span>
                      </div>
                      <button className="w-full md:w-auto border border-primary text-primary px-6 py-2 rounded-xl font-label-sm hover:bg-primary hover:text-white transition-all whitespace-nowrap active:scale-95 transform">
                        Join Discussion
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Forum Guidelines */}
            <div className="bg-white p-8 border border-outline-variant rounded-xl shadow-sm">
              <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">gavel</span>
                Forum Guidelines
              </h3>
              <ul className="space-y-4">
                {[
                  "Maintain professional and respectful language at all times.",
                  "Provide evidence-based feedback when possible.",
                  "Protect sensitive personal information.",
                ].map((rule) => (
                  <li key={rule} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-secondary text-[20px] fill-1">
                      check_circle
                    </span>
                    <span className="font-body-md text-on-surface-variant leading-tight">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-outline-variant">
                <p className="font-body-md text-xs text-outline italic">
                  Your IP address is recorded for security and accountability
                  purposes. Our Whistleblower Hotline is available for sensitive
                  reports.
                </p>
              </div>
            </div>

            {/* Upcoming Town Halls */}
            <div className="bg-surface-container p-8 border border-outline-variant rounded-xl shadow-sm">
              <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">event</span>
                Town Halls
              </h3>
              <div className="space-y-6">
                {townHalls.map((hall) => (
                  <div
                    key={hall.id}
                    className={`border-l-4 ${hall.border} pl-4 ${
                      hall.opacity || ""
                    }`}
                  >
                    <p
                      className={`font-label-sm ${hall.color} uppercase text-[10px] mb-1 tracking-widest`}
                    >
                      {hall.date} • {hall.time}
                    </p>
                    <h5 className="font-headline-md text-[16px] text-primary mb-1">
                      {hall.title}
                    </h5>
                    <p className="font-body-md text-sm text-on-surface-variant">
                      {hall.location}
                    </p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 bg-primary text-white py-3 rounded-xl font-label-sm hover:brightness-110 transition-all shadow-md active:scale-95 transform">
                View Full Calendar
              </button>
            </div>

            {/* Citizen Survey Card */}
            <div className="bg-secondary-container p-8 rounded-xl shadow-sm">
              <h4 className="font-headline-md text-primary mb-2">
                Transparency Pulse
              </h4>
              <p className="font-body-md text-on-secondary-container mb-6">
                How satisfied are you with the accessibility of current audit
                reports?
              </p>
              <div className="space-y-2">
                {[
                  "Very Satisfied",
                  "Somewhat Satisfied",
                  "Neutral",
                  "Unsatisfied",
                ].map((opt) => (
                  <button
                    key={opt}
                    className="w-full bg-white/50 py-3 rounded-xl text-left px-4 font-body-md text-sm border border-transparent hover:border-primary hover:bg-white transition-all text-primary"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </main>
  );
}
