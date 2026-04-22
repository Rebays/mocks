export type MenuItem = {
  title: string;
  href: string;
  isNew?: boolean;
  isPrimary?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
  spotlight?: {
    title: string;
    description: string;
    fileInfo: string;
  };
};

export const MENU_DATA: Record<string, MenuCategory> = {
  "audit-work": {
    id: "audit-work",
    label: "Our Audit Work",
    items: [
      { title: "Financial Audits", href: "#" },
      { title: "Performance Audits", href: "#" },
      { title: "Special Investigations", href: "#" },
      { title: "Provincial Audits", href: "#" },
      { title: "SOEs", href: "#" },
    ],
    spotlight: {
      title: "2025 National Budget Audit",
      description: "Featured Report",
      fileInfo: "PDF (4.2 MB)",
    },
  },
  "reports": {
    id: "reports",
    label: "Reports & Publications",
    items: [
      { title: "Latest Audit Reports", href: "/reports", isNew: true },
      { title: "Archive Library", href: "#" },
      { title: "Annual Reports", href: "#" },
      { title: "Audit Work Plans", href: "#" },
      { title: "Standards & Manuals", href: "#" },
    ],
    spotlight: {
      title: "Annual Audit Plan 2024",
      description: "Strategic Document",
      fileInfo: "PDF (1.8 MB)",
    },
  },
  "integrity": {
    id: "integrity",
    label: "Integrity & Reporting",
    items: [
      { title: "Report Misconduct (Secure Portal)", href: "#", isPrimary: true },
      { title: "Whistleblower FAQ", href: "#" },
      { title: "The Audit Process", href: "#" },
      { title: "Compliance & Ethics", href: "#" },
    ],
    spotlight: {
      title: "Whistleblower Policy",
      description: "Integrity Guide",
      fileInfo: "PDF (0.9 MB)",
    },
  },
  "about": {
    id: "about",
    label: "About Us",
    items: [
      { title: "The Auditor-General", href: "/about" },
      { title: "Mission & Vision", href: "/about" },
      { title: "Corporate Services", href: "#" },
      { title: "News & Media", href: "#" },
      { title: "Careers at OAG", href: "#" },
    ],
    spotlight: {
      title: "OAG Corporate Profile",
      description: "Institutional Overview",
      fileInfo: "PDF (2.4 MB)",
    },
  },
};
