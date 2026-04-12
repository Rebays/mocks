import type { Metadata } from "next";
import { Inter, Manrope, Public_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-next",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-headline-next",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-label-next",
});

export const metadata: Metadata = {
  title: "Inland Revenue Portal",
  description: "Authoritative and modernized tax administration system for the Solomon Islands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${publicSans.variable} font-body bg-background text-on-surface antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
