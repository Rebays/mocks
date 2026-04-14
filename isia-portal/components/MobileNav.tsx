import React from 'react';

const MobileNav = () => {
  const tabs = [
    { name: 'Home', icon: 'dashboard', active: true },
    { name: 'CPD', icon: 'history_edu' },
    { name: 'Events', icon: 'school' },
    { name: 'Forum', icon: 'forum' },
    { name: 'Profile', icon: 'person' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-outline-variant flex justify-around items-center py-3 px-2 z-50">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`flex flex-col items-center gap-1 ${
            tab.active ? 'text-primary-container' : 'text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined">{tab.icon}</span>
          <span className={`text-[10px] ${tab.active ? 'font-bold' : ''}`}>{tab.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default MobileNav;
