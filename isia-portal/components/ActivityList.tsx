import React from 'react';

const activities = [
  {
    title: "CPD Points Approved",
    subtitle: "Annual Ethics Seminar (4.5 Points)",
    date: "Oct 12, 2023",
    status: "Verified",
    statusColor: "bg-emerald-100 text-emerald-800",
    icon: "check_circle",
    iconColor: "text-emerald-600 bg-emerald-50"
  },
  {
    title: "Invoice Paid",
    subtitle: "INV-2023-4592 (Membership Fee)",
    date: "Oct 08, 2023",
    status: "Processed",
    statusColor: "bg-blue-100 text-blue-800",
    icon: "receipt_long",
    iconColor: "text-blue-600 bg-blue-50"
  },
  {
    title: "Registered for Event",
    subtitle: "Global Tax Strategy Summit 2023",
    date: "Sep 29, 2023",
    status: "Confirmed",
    statusColor: "bg-amber-100 text-amber-800",
    icon: "event_note",
    iconColor: "text-amber-600 bg-amber-50"
  }
];

const ActivityList = () => {
  return (
    <div className="lg:col-span-8">
      <div className="bg-white rounded-xl border border-outline-variant overflow-hidden h-full">
        <div className="p-6 border-b border-surface-container flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary">Recent Activity</h2>
          <button className="text-primary-container text-xs font-semibold hover:underline">View All</button>
        </div>
        <div className="divide-y divide-surface-container">
          {activities.map((activity, index) => (
            <div key={index} className="p-6 flex items-center justify-between hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${activity.iconColor} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-xl">{activity.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{activity.title}</p>
                  <p className="text-xs text-on-surface-variant font-body">{activity.subtitle}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-primary">{activity.date}</p>
                <span className={`inline-block px-2 py-0.5 ${activity.statusColor} text-[10px] font-bold rounded uppercase mt-1`}>
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
