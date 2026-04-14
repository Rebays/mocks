import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Insights from "@/components/Insights";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Insights />
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
}
