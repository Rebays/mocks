import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-20 bg-primary text-white font-body border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col gap-6">
            <a className="text-2xl font-headline font-extrabold tracking-tight text-white" href="#">ISIA</a>
            <p className="text-white/70 leading-relaxed text-sm max-w-xs">
              The Institute of Solomon Islands Accountants (ISIA) is dedicated to advancing the accounting profession through excellence, ethics, and innovation, ensuring a robust economic future for our nation.
            </p>
          </div>
          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-headline font-bold text-lg text-secondary-container uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a className="text-white/70 hover:text-secondary-container transition-colors text-sm" href="#">Professional Standards</a>
              <a className="text-white/70 hover:text-secondary-container transition-colors text-sm" href="#">Membership Categories</a>
              <a className="text-white/70 hover:text-secondary-container transition-colors text-sm" href="#">CPD Programs</a>
              <a className="text-white/70 hover:text-secondary-container transition-colors text-sm" href="#">Member Resources</a>
              <a className="text-white/70 hover:text-secondary-container transition-colors text-sm" href="#">Latest Insights</a>
            </nav>
          </div>
          {/* Column 3: Contact Information */}
          <div className="flex flex-col gap-6">
            <h4 className="font-headline font-bold text-lg text-secondary-container uppercase tracking-wider">Contact Info</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-xl">location_on</span>
                <span className="text-white/70 text-sm leading-relaxed">
                  Mendana Avenue, Honiara,<br />Solomon Islands
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container text-xl">call</span>
                <span className="text-white/70 text-sm">+677 20131</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-container text-xl">mail</span>
                <span className="text-white/70 text-sm">info@isia.org.sb</span>
              </div>
            </div>
          </div>
          {/* Column 4: Follow Us */}
          <div className="flex flex-col gap-6">
            <h4 className="font-headline font-bold text-lg text-secondary-container uppercase tracking-wider">Follow Us</h4>
            <p className="text-white/70 text-sm">Connect with our professional community online.</p>
            <div className="flex gap-4">
              <a aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary-container hover:text-primary transition-all group" href="#">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a aria-label="Facebook" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary-container hover:text-primary transition-all group" href="#">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
              </a>
              <a aria-label="X (Twitter)" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary-container hover:text-primary transition-all group" href="#">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-xs font-label font-medium uppercase tracking-widest text-white/50">
            <a className="hover:text-secondary-container transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-secondary-container transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-secondary-container transition-colors" href="#">Careers</a>
            <a className="hover:text-secondary-container transition-colors" href="#">Sitemap</a>
          </div>
          <p className="text-white/40 text-sm text-center md:text-right">
            © 2024 Institute of Solomon Islands Accountants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
