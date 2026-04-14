import React from 'react';

const Sidebar = () => {
  const navLinks = [
    { name: 'Dashboard', icon: 'dashboard', active: true },
    { name: 'CPD Tracking', icon: 'history_edu' },
    { name: 'Memberships', icon: 'badge' },
    { name: 'Exam Results', icon: 'grading' },
    { name: 'Resources', icon: 'library_books' },
    { name: 'Settings', icon: 'settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 flex flex-col pt-20 bg-surface-container-low font-headline text-sm font-medium border-r border-outline-variant transition-all duration-150 ease-in-out hidden md:flex">
      <div className="px-6 mb-8 mt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined">account_balance</span>
          </div>
          <div>
            <h3 className="text-primary font-bold leading-none">Member Services</h3>
            <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-wider">Accounting Institute</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href="#"
            className={`flex items-center gap-3 px-6 py-3 transition-all duration-150 ${
              link.active
                ? 'text-primary border-r-4 border-primary bg-primary-container/10 font-semibold'
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all duration-150'
            }`}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            {link.name}
          </a>
        ))}
      </nav>
      <div className="p-6 pb-12">
        <button className="w-full bg-primary-container text-white py-2.5 rounded font-semibold text-xs transition-opacity hover:opacity-90 active:scale-[0.98]">
          Renew Membership
        </button>
        <a className="flex items-center gap-3 mt-6 text-on-surface-variant hover:text-error transition-colors" href="#">
          <span className="material-symbols-outlined">logout</span>
          Logout
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
