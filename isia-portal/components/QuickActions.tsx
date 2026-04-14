import React from 'react';

const actions = [
  {
    title: "Renew Membership",
    description: "Extend your professional status and access exclusive benefits for another year.",
    icon: "autorenew",
    action: "Renew Now",
    iconBg: "bg-primary-container/10",
    iconColor: "text-primary-container",
    hoverBg: "group-hover:bg-primary-container",
    hoverIcon: "group-hover:text-white"
  },
  {
    title: "Register for Training",
    description: "Browse the latest workshops, webinars, and certification courses for Q3.",
    icon: "school",
    action: "View Calendar",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    hoverBg: "group-hover:bg-secondary",
    hoverIcon: "group-hover:text-on-secondary"
  },
  {
    title: "Download Certificate",
    description: "Get your current digital membership certificate and professional credentials.",
    icon: "card_membership",
    action: "Download PDF",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
    hoverBg: "group-hover:bg-tertiary",
    hoverIcon: "group-hover:text-white"
  }
];

const QuickActions = () => {
  return (
    <>
      {actions.map((item, index) => (
        <div key={index} className="lg:col-span-4 group cursor-pointer">
          <div className="bg-white p-6 rounded-xl border border-outline-variant hover:border-primary-container hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
            <div>
              <div className={`w-12 h-12 ${item.iconBg} ${item.iconColor} rounded flex items-center justify-center mb-4 ${item.hoverBg} ${item.hoverIcon} transition-colors`}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
            </div>
            <div className="mt-6 flex items-center text-primary-container font-semibold text-sm">
              {item.action} <span className="material-symbols-outlined ml-1 text-sm">{item.icon === 'card_membership' ? 'download' : 'arrow_forward'}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default QuickActions;
