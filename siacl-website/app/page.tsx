import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import AboutSection from "@/components/AboutSection";
import AirportGallery from "@/components/AirportGallery";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <QuickLinks />
      <AboutSection />
      <AirportGallery />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
