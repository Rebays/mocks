import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portal from "@/components/Portal";
import News from "@/components/News";
import KnowledgeHub from "@/components/KnowledgeHub";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative">
        <Hero />
        <Portal />
        <News />
        <KnowledgeHub />
      </main>
      <Footer />
    </div>
  );
}
