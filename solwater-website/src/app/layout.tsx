import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solomon Water | Safe Water for a Healthy Nation",
  description: "Official website for Solomon Water, providing safe and sustainable water services to the Solomon Islands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
