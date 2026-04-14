import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import PortalNavbar from "@/components/PortalNavbar";
import MobileNav from "@/components/MobileNav";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-label",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Member Services - Institute Portal",
  description: "Official portal for Institute of Accountants members.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${workSans.variable} antialiased bg-background text-on-background min-h-screen`}
      >
        <PortalNavbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 md:ml-64 pt-20 p-6 md:p-10 pb-24 md:pb-10">
            {children}
          </main>
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
