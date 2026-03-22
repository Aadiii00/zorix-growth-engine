import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PortfolioSection from "@/components/PortfolioSection";

import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <StatsSection />
    <WhyChooseUsSection />
    <PortfolioSection />
    
    <CTASection />
    <Footer />
  </div>
);

export default Index;
