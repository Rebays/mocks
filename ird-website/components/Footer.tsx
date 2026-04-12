import { Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-primary w-full pt-28 pb-12 px-8 overflow-hidden">
      {/* Wave Divider Top */}
      <div className="absolute top-[-1px] left-0 w-full leading-[0]">
        <svg 
          className="relative block w-full h-20 text-background" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h5 className="text-xl font-headline font-extrabold text-white mb-6 uppercase tracking-widest">
              Inland Revenue
            </h5>
            <p className="text-surface-container-low/60 leading-relaxed mb-6">
              Advancing the economic future of the Solomon Islands through integrity, transparency, and innovation.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-surface-container-low/60 hover:bg-secondary transition-colors"
                href="#"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-surface-container-low/60 hover:bg-secondary transition-colors"
                href="#"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-white font-bold mb-6 font-headline uppercase text-[10px] tracking-widest opacity-60">
              E-Services
            </h6>
            <ul className="space-y-4">
              <li>
                <a className="text-surface-container-low/60 hover:text-white transition-all text-sm" href="#">
                  Taxpayer Login
                </a>
              </li>
              <li>
                <a className="text-surface-container-low/60 hover:text-white transition-all text-sm" href="#">
                  Register for TIN
                </a>
              </li>
              <li>
                <a className="text-surface-container-low/60 hover:text-white transition-all text-sm" href="#">
                  VAT Submissions
                </a>
              </li>
              <li>
                <a className="text-surface-container-low/60 hover:text-white transition-all text-sm" href="#">
                  Payment Gateway
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-bold mb-6 font-headline uppercase text-[10px] tracking-widest opacity-60">
              Corporate
            </h6>
            <ul className="space-y-4">
              <li>
                <a className="text-surface-container-low/60 hover:text-white transition-all text-sm" href="#">
                  About the Division
                </a>
              </li>
              <li>
                <a className="text-surface-container-low/60 hover:text-white transition-all text-sm" href="#">
                  Legal Framework
                </a>
              </li>
              <li>
                <a className="text-surface-container-low/60 hover:text-white transition-all text-sm" href="#">
                  Procurement
                </a>
              </li>
              <li>
                <a className="text-surface-container-low/60 hover:text-white transition-all text-sm" href="#">
                  Career Opportunities
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-bold mb-6 font-headline uppercase text-[10px] tracking-widest opacity-60">
              Contact Hub
            </h6>
            <div className="space-y-4">
              <div>
                <p className="text-white font-bold text-sm">Headquarters</p>
                <p className="text-surface-container-low/60 text-sm">Mendana Avenue, Honiara</p>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Service Hours</p>
                <p className="text-surface-container-low/60 text-sm">Mon-Fri: 8:00 AM - 4:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-surface-container-low/40 text-xs">
            © 2024 Solomon Islands Inland Revenue Division. Precise. Authoritative. Secure.
          </p>
          <div className="flex gap-8">
            <span className="text-surface-container-low/40 text-[10px] uppercase font-bold tracking-widest">
              ISO 27001 Certified
            </span>
            <span className="text-surface-container-low/40 text-[10px] uppercase font-bold tracking-widest">
              Official Government Portal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
