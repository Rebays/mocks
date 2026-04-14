import React from 'react';
import Image from 'next/image';

const PortalNavbar = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white font-headline antialiased text-sm w-full border-b border-outline-variant flex justify-between items-center px-6 py-3">
      <div className="flex items-center gap-8">
        <div className="text-lg font-bold text-primary tracking-tight">ISIA Portal</div>
        <div className="hidden md:flex items-center bg-surface-container px-3 py-1.5 rounded outline-none focus-within:ring-1 ring-primary-container transition-all">
          <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-xs w-64 outline-none" placeholder="Search resources..." type="text" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-on-surface-variant hover:bg-surface-container-low transition-colors p-2 rounded cursor-pointer active:opacity-70">
          <span className="material-symbols-outlined">help</span>
        </button>
        <button className="text-on-surface-variant hover:bg-surface-container-low transition-colors p-2 rounded cursor-pointer active:opacity-70 relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-white"></span>
        </button>
        <div className="h-8 w-px bg-outline-variant mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer active:opacity-70">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-semibold text-primary leading-none">James Harrington</p>
            <p className="text-[10px] text-on-surface-variant leading-none mt-1">Fellow Member</p>
          </div>
          <Image
            alt="User profile avatar"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border border-outline-variant"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCebzPf3lRnn3le_5_nsIM70uPBOFdPTAEpv839wQB6h-JLbHAf65xRa26IMDuWuzyw51e7HUOIoJ55i1XSgetMQX0NluY5DCW1rur06nKuGOQVo5bbAioR2qFuGMGHVPHG__E0Ies76M__UOlNGW2alAMj9lWZnK8ouk3f41_OuNst867UYPGWPRDxfMjJgbF6EuKPm6WUD52EwdvqSoC4jVuRWrDvV9fcrO0xaFQrgSLu5rtZ70uXrDkUlq_HFfX4scxUD_dzJBRp"
          />
        </div>
      </div>
    </header>
  );
};

export default PortalNavbar;
