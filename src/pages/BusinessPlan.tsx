import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackagesSection from "@/components/PackagesSection";
import IncomeSection from "@/components/IncomeSection";
import RewardsSection from "@/components/RewardsSection";
import BusinessFormula from "@/components/BusinessFormula";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BusinessPlan = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="page-header">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeInUp>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-primary-foreground text-sm font-medium mb-4">
              Complete Business Opportunity
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Nexaura <span className="gradient-text-gold">Business Plan</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              A transparent, ethical, and scalable direct selling business opportunity with multiple income streams.
            </p>
          </FadeInUp>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="gradient-text">Nexaura?</span>
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Direct selling model - No middlemen",
              "Real quality products",
              "Low investment, high returns",
              "Repeat sales = regular income",
              "Passive income opportunity",
              "Flexible working hours",
              "Government registered company",
              "ISO 9001:2015 certified",
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-4 flex items-center gap-3 hover-lift">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5P Formula */}
      <BusinessFormula />

      {/* Packages */}
      <PackagesSection />

      {/* Income Section */}
      <IncomeSection />

      {/* Rewards */}
      <RewardsSection />

      {/* CTA */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of successful partners and build your dream lifestyle with Nexaura.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl" className="group">
                Join Nexaura Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessPlan;
