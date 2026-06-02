import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorldCupSection from "@/components/WorldCupSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import CTAButton from "@/components/CTAButton";
import TelegramSection from "@/components/TelegramSection";
import StatusBar from "@/components/StatusBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <WorldCupSection />
          <FeaturesGrid />
          <CTAButton />
          <TelegramSection />
        </main>
        <StatusBar />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
