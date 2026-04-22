export default function Footer() {
  return (
    <footer className="bg-primary-container border-t-4 border-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 py-16 w-full max-w-7xl mx-auto">
        <div>
          <div className="text-lg font-bold text-secondary-container mb-stack-sm uppercase font-public-sans">
            OAG Solomon Islands
          </div>
          <p className="text-slate-300 text-[10px] leading-relaxed tracking-wider uppercase">
            The Office of the Auditor General is an independent body established
            under the Constitution to promote accountability across the public
            sector.
          </p>
          <div className="flex space-x-4 mt-stack-sm">
            <span className="material-symbols-outlined text-slate-300 hover:text-secondary-container cursor-pointer">
              social_leaderboard
            </span>
            <span className="material-symbols-outlined text-slate-300 hover:text-secondary-container cursor-pointer">
              public
            </span>
            <span className="material-symbols-outlined text-slate-300 hover:text-secondary-container cursor-pointer">
              mail
            </span>
          </div>
        </div>
        <div className="font-public-sans text-xs uppercase tracking-widest">
          <h4 className="text-white font-bold mb-stack-sm">Quick Links</h4>
          <ul className="space-y-3 text-slate-300">
            <li className="hover:text-secondary-container transition-all cursor-pointer">
              Audit Reports
            </li>
            <li className="hover:text-secondary-container transition-all cursor-pointer">
              Strategic Plan
            </li>
            <li className="hover:text-secondary-container transition-all cursor-pointer">
              Resources
            </li>
            <li className="hover:text-secondary-container transition-all cursor-pointer">
              Careers
            </li>
          </ul>
        </div>
        <div className="font-public-sans text-xs uppercase tracking-widest">
          <h4 className="text-white font-bold mb-stack-sm">
            Legal & Compliance
          </h4>
          <ul className="space-y-3 text-slate-300">
            <li className="hover:text-secondary-container transition-all cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-secondary-container transition-all cursor-pointer">
              Terms of Use
            </li>
            <li className="hover:text-secondary-container transition-all cursor-pointer">
              Accessibility
            </li>
            <li className="hover:text-secondary-container transition-all cursor-pointer">
              Staff Login
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-stack-sm">
            Headquarters
          </h4>
          <div className="text-slate-300 text-[10px] leading-loose tracking-wider uppercase">
            Mendana Avenue,
            <br />
            PO Box G18, Honiara,
            <br />
            Solomon Islands
            <br />
            <br />
            T: +677 28310
            <br />
            E: info@oag.gov.sb
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pb-stack-sm flex flex-col md:flex-row justify-between border-t border-slate-700 pt-stack-sm items-center">
        <p className="text-slate-400 text-[10px] uppercase tracking-widest">
          © 2024 Office of the Auditor General, Solomon Islands. All Rights
          Reserved.
        </p>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-slate-400 text-[10px] uppercase tracking-widest">
            System Status: Optimal
          </span>
        </div>
      </div>
    </footer>
  );
}
