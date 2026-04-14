import React from 'react';
import Image from 'next/image';

const UpcomingTraining = () => {
  return (
    <div className="lg:col-span-4">
      <div className="bg-primary-container text-white rounded-xl shadow-lg h-full overflow-hidden flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold">Upcoming Training</h2>
        </div>
        <div className="flex-1 p-6 relative">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-secondary-container text-primary-container h-14 w-14 rounded-lg flex flex-col items-center justify-center font-bold">
                <span className="text-xs uppercase leading-none">Nov</span>
                <span className="text-2xl leading-none mt-1">15</span>
              </div>
              <div>
                <h4 className="font-bold text-lg leading-tight">Advanced Auditing & Assurance</h4>
                <p className="text-xs text-on-primary-container mt-1 font-body">09:00 AM - 01:00 PM</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-secondary-container">location_on</span>
                <span className="font-body">Executive Hall, London Hub</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-secondary-container">person</span>
                <span className="font-body">Dr. Elena Martinez, FRCP</span>
              </div>
            </div>
            <button className="w-full mt-10 bg-white text-primary-container py-3 rounded font-bold text-sm hover:bg-surface-container-low transition-colors">
              View Event Details
            </button>
          </div>
          {/* Background Pattern/Graphic */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <Image
              alt="Modern office architecture"
              fill
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrCxQcYHxsCE2-CPrcnMzmzn5-SHA9lC1beYCV8z-H3_F_n6406XYwZHftXyooIQnaR-P9yumDbQlbM4pN-_iCjsfHy53iI8FaC4u6R9mzXIkpALAd22Nz2-ydH9N12Y3IH1d5EZwGpRbZr7Q2WIln8kQg23W-zPPT3ABoLXEBUYIYnRvlgqUxeWp0IiPT-Fgz8lnCOyubrs1581pV5QmaX_DK551VuLyXYAJ52cLVKbY7y141KdKIKHApKUvD6w7OSVEo6Re9aAHa"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTraining;
