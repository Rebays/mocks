import OfficialBanner from "@/components/OfficialBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import ProvincialImpact from "@/components/ProvincialImpact";
import LatestReports from "@/components/LatestReports";
import WhistleblowerBanner from "@/components/WhistleblowerBanner";
import MediaRoom from "@/components/MediaRoom";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <OfficialBanner />
      <Navbar />
      <Hero />
      <Dashboard />
      <ProvincialImpact />
      <LatestReports />
      <WhistleblowerBanner />
      
      {/* Media & Careers Section */}
      <section className="max-w-7xl mx-auto px-8 py-stack-lg grid grid-cols-1 lg:grid-cols-3 gap-gutter w-full">
        <MediaRoom />
        <Careers />
      </section>

      <Footer />
    </main>
  );
}
