import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ShowcaseSlider from "@/components/ShowcaseSlider";
import PortfolioSection from "@/components/PortfolioSection";

import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <Marquee />
    <ServicesSection />
    <AboutSection />
    <StatsSection />
    <ShowcaseSlider />
    <PortfolioSection />
    
    <CTASection />
    <Footer />
  </div>
);

export default Index;
