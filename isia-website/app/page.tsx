import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Standards from "@/components/Standards";
import Advantages from "@/components/Advantages";
import Commitment from "@/components/Commitment";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Standards />
      <Advantages />
      <Commitment />
      <Insights />
      <Footer />
    </main>
  );
}
