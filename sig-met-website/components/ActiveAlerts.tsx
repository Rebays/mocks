"use client";

import React, { useState } from 'react';

const ALERTS = [
  {
    id: 1,
    title: "Heavy Rain Warning",
    region: "Guadalcanal & Central Province",
    severity: "emergency",
    desc: "Persistent heavy rain may lead to flash flooding in low-lying areas and near river banks.",
    timestamp: "10 mins ago"
  },
  {
    id: 2,
    title: "Strong Wind Advisory",
    region: "All Coastal Waters",
    severity: "warning",
    desc: "Southeasterly winds of 20-25 knots. Rough seas expected.",
    timestamp: "45 mins ago"
  },
  {
    id: 3,
    title: "Tsunami Watch",
    region: "Temotu & Makira Provinces",
    severity: "info",
    desc: "Monitoring seismic activity in the region. No immediate threat but residents should stay alert.",
    timestamp: "2 hours ago"
  }
];

const ActiveAlerts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case 'emergency':
        return 'bg-error text-white shadow-lg shadow-error/30';
      case 'warning':
        return 'bg-tertiary text-on-tertiary shadow-lg shadow-tertiary/30';
      default:
        return 'bg-primary-container text-on-primary-container';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'emergency':
        return 'dangerous';
      case 'warning':
        return 'warning';
      default:
        return 'info';
    }
  };

  return (
    <div className="relative group pointer-events-auto">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-headline font-semibold text-sm transition-all active:scale-95 shadow-lg ${isOpen ? 'bg-error text-white' : 'bg-secondary text-white hover:bg-secondary/90 shadow-secondary/20'}`}
      >
        <span className={`material-symbols-outlined text-sm ${!isOpen && ALERTS.some(a => a.severity === 'emergency') ? 'animate-pulse' : ''}`}>
          {ALERTS.some(a => a.severity === 'emergency') ? 'warning' : 'notifications'}
        </span>
        <span className="hidden md:inline">Active Alerts</span>
        <span className="flex items-center justify-center bg-white/20 px-1.5 rounded-md text-[10px]">
          {ALERTS.length}
        </span>
      </button>

      {/* Alerts Dropdown */}
      <div 
        className={`absolute top-full right-0 mt-4 w-80 md:w-96 bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl rounded-2xl border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] transition-all duration-300 origin-top-right overflow-hidden ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}
      >
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-headline font-bold text-slate-800 dark:text-white flex items-center gap-2">
            Active Warnings
            <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-widest">Live</span>
          </h3>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        <div className="max-h-[400px] overflow-y-auto hide-scrollbar">
          {ALERTS.map((alert) => (
            <div 
              key={alert.id}
              className="p-4 border-b border-slate-50 dark:border-slate-800/50 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group/alert"
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${getSeverityStyle(alert.severity)}`}>
                  <span className="material-symbols-outlined text-[20px]">{getSeverityIcon(alert.severity)}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-headline font-bold text-sm text-slate-800 dark:text-white group-hover/alert:text-primary transition-colors">
                      {alert.title}
                    </h4>
                    <span className="text-[9px] text-slate-400 font-medium whitespace-nowrap pt-0.5">
                      {alert.timestamp}
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-primary dark:text-primary-container uppercase tracking-tight mt-1">
                    {alert.region}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {alert.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-slate-50/50 dark:bg-slate-800/30 flex justify-center">
          <button className="text-xs font-bold text-primary hover:text-primary/80 transition-all flex items-center gap-1 group/more">
            View All Advisories
            <span className="material-symbols-outlined text-xs group-hover/more:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveAlerts;
