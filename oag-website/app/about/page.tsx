import OfficialBanner from "@/components/OfficialBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <OfficialBanner />
      <Navbar />

      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-8 py-stack-lg mt-stack-md flex flex-col items-center text-center">
          <h1 className="font-headline-xl text-headline-xl text-primary max-w-4xl tracking-tight mb-stack-sm">
            Ensuring Accountability for a Better Solomon Islands
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            The Office of the Auditor-General is the supreme audit institution of
            the Solomon Islands, dedicated to promoting transparency, integrity,
            and exceptional performance in the public sector through rigorous and
            independent auditing.
          </p>
        </section>

        {/* Message from AG */}
        <section className="w-full bg-surface-container-low py-stack-lg">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-stack-md items-center">
            <div className="md:col-span-4 rounded-xl overflow-hidden h-[500px]">
              <img
                alt="Portrait of Auditor-General"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="/ag-profile.png"
              />
            </div>
            <div className="md:col-span-8 flex flex-col justify-center">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm border-l-4 border-secondary pl-4">
                Message from the Auditor-General
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface space-y-4 mb-stack-md">
                <p>
                  "Public trust is the foundation of our democratic
                  institutions. As the constitutional guardian of public funds,
                  our mandate is unequivocal: to ensure that every dollar
                  entrusted to the government is accounted for and utilized for
                  the public good."
                </p>
                <p>
                  "We approach our duties with uncompromising independence and
                  professional rigor. Our reports are not merely administrative
                  exercises; they are essential instruments of accountability that
                  empower the legislature and inform the citizenry."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined fill-1">
                    signature
                  </span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                    Junior Muria
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Auditor-General, Solomon Islands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mandate Section */}
        <section className="w-full max-w-7xl mx-auto px-8 py-stack-lg">
          <div className="max-w-3xl mx-auto text-center mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">
              Our Constitutional Mandate
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Established under Chapter VIII of the Constitution of Solomon
              Islands, the OAG operates independently of the executive branch,
              reporting directly to the National Parliament.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-white p-stack-md rounded-xl flex gap-4 border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-3xl mt-1">
                account_balance
              </span>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  Financial Audits
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We examine and certify the public accounts of the Solomon
                  Islands Government, ensuring financial statements fairly
                  represent the economic reality.
                </p>
              </div>
            </div>
            <div className="bg-white p-stack-md rounded-xl flex gap-4 border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-3xl mt-1">
                fact_check
              </span>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  Compliance Audits
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We assess whether government entities operate in accordance
                  with applicable laws, regulations, and administrative
                  directives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="w-full bg-primary text-on-primary py-stack-lg">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-headline-lg text-headline-lg text-center mb-stack-lg">
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {[
                {
                  icon: "shield",
                  title: "Integrity",
                  desc: "We conduct our work honestly, objectively, and to the highest ethical standards.",
                },
                {
                  icon: "balance",
                  title: "Independence",
                  desc: "We perform our duties impartially, free from undue influence or political interference.",
                },
                {
                  icon: "workspace_premium",
                  title: "Professionalism",
                  desc: "We maintain technical excellence and continuous improvement in all our auditing methodologies.",
                },
                {
                  icon: "visibility",
                  title: "Transparency",
                  desc: "We communicate our findings clearly, openly, and accessibly to the public and Parliament.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="bg-primary-container p-stack-md flex flex-col items-center text-center rounded-xl"
                >
                  <span className="material-symbols-outlined text-secondary text-4xl mb-4 fill-1">
                    {value.icon}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body-md text-body-md text-slate-300">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership & Strategic Goals */}
        <section className="w-full max-w-7xl mx-auto px-8 py-stack-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">
                Organizational Leadership
              </h2>
              <div className="flex flex-col gap-4 relative before:absolute before:inset-y-0 before:left-[23px] before:w-0.5 before:bg-outline-variant/50 ml-2">
                {[
                  {
                    icon: "person",
                    role: "Auditor-General",
                    desc: "Executive Leadership & Strategic Direction",
                    bg: "bg-primary text-on-primary",
                  },
                  {
                    icon: "group",
                    role: "Deputy Auditor-General",
                    desc: "Operations & Audit Execution",
                    bg: "bg-surface-container-high text-primary",
                  },
                  {
                    icon: "account_tree",
                    role: "Directors of Audit",
                    desc: "Provincial, National, and Enterprise Divisions",
                    bg: "bg-surface-container text-on-surface-variant",
                  },
                ].map((leader) => (
                  <div
                    key={leader.role}
                    className="flex items-center gap-6 relative z-10"
                  >
                    <div
                      className={`h-12 w-12 rounded-full ${leader.bg} flex items-center justify-center shadow-sm border border-outline-variant/50`}
                    >
                      <span className="material-symbols-outlined">
                        {leader.icon}
                      </span>
                    </div>
                    <div className="bg-white border border-outline-variant/30 p-4 rounded-xl flex-1">
                      <p className="font-label-sm text-label-sm text-primary uppercase">
                        {leader.role}
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {leader.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-outline-variant/20 p-stack-md rounded-xl shadow-lg">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">
                Strategic Goals 2024-2027
              </h2>
              <ul className="space-y-6">
                {[
                  {
                    icon: "flag",
                    title: "Enhance Audit Impact",
                    desc: "Deliver timely, high-quality audit reports that drive actionable improvements in public sector governance.",
                  },
                  {
                    icon: "trending_up",
                    title: "Modernize Methodologies",
                    desc: "Integrate advanced data analytics and risk-based auditing techniques to increase efficiency and depth of assurance.",
                  },
                  {
                    icon: "school",
                    title: "Build Institutional Capacity",
                    desc: "Invest in professional development to cultivate a highly skilled, resilient, and specialized audit workforce.",
                  },
                ].map((goal) => (
                  <li key={goal.title} className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      {goal.icon}
                    </span>
                    <div>
                      <h4 className="font-headline-md text-headline-md text-primary text-xl mb-1">
                        {goal.title}
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {goal.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </main>
  );
}
