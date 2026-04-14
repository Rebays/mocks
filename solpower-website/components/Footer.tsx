import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-sol-blue w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5">
            <div className="flex flex-col items-center md:items-start gap-4">
                <div className="text-lg font-bold text-white uppercase tracking-wider">The Utility Authority</div>
                <p className="text-surface-container-highest opacity-80 text-sm leading-relaxed max-w-sm text-center md:text-left">
                    © 2024 The Utility Authority. Precision Engineered Utility Management for the Solomon Islands.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
                <a className="text-surface-container-highest opacity-80 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a>
                <a className="text-surface-container-highest opacity-80 hover:opacity-100 transition-opacity" href="#">Terms of Service</a>
                <a className="text-surface-container-highest opacity-80 hover:opacity-100 transition-opacity" href="#">Infrastructure Map</a>
                <a className="text-surface-container-highest opacity-80 hover:opacity-100 transition-opacity" href="#">Sustainability Report</a>
            </div>
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-sol-yellow hover:text-sol-blue transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-lg">public</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-sol-yellow hover:text-sol-blue transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-lg">mail</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
