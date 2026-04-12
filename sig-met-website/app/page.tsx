import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ProvinceScroller from "@/components/ProvinceScroller";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <BentoGrid />
      <ProvinceScroller />
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
