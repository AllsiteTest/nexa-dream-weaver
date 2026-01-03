import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BusinessFormula from "@/components/BusinessFormula";
import ProductShowcase from "@/components/ProductShowcase";
import PackagesSection from "@/components/PackagesSection";
import IncomeSection from "@/components/IncomeSection";
import RewardsSection from "@/components/RewardsSection";
import AppDownload from "@/components/AppDownload";
import LeadershipSection from "@/components/LeadershipSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductShowcase />
      <BusinessFormula />
      <PackagesSection />
      <IncomeSection />
      <RewardsSection />
      <AppDownload />
      <LeadershipSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
