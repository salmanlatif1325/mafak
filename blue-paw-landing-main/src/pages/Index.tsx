import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ResearchQualitySection from "@/components/ResearchQualitySection";
import LeadershipSection from "@/components/LeadershipSection";
import NetworkSection from "@/components/NetworkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <ResearchQualitySection />
      <LeadershipSection />
      <NetworkSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
