import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BusinessFormula from "@/components/BusinessFormula";
import PackagesSection from "@/components/PackagesSection";
import IncomeSection from "@/components/IncomeSection";
import RewardsSection from "@/components/RewardsSection";
import LeadershipSection from "@/components/LeadershipSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BusinessFormula />
      <PackagesSection />
      <IncomeSection />
      <RewardsSection />
      <LeadershipSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
