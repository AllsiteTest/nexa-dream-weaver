import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadershipSection from "@/components/LeadershipSection";
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Target, Eye, CheckCircle2, Award, Building2, Calendar, Shield, Users, Globe, Heart } from "lucide-react";

const About = () => {
  const timeline = [
    { year: "2017", event: "Founders begin journey in direct selling industry" },
    { year: "2020", event: "Concept development for ethical MLM platform" },
    { year: "2024", event: "Product research and formulation begins" },
    { year: "March 2025", event: "Nexaura Wellness Marketing Pvt. Ltd. incorporated" },
    { year: "2025", event: "ISO 9001:2015 certification achieved" },
    { year: "2025", event: "Startup India recognition received" },
  ];

  const values = [
    { icon: Shield, title: "Integrity", desc: "Transparent and ethical business practices" },
    { icon: Users, title: "Community", desc: "Building strong, supportive networks" },
    { icon: Globe, title: "Impact", desc: "Creating positive change in lives" },
    { icon: Heart, title: "Care", desc: "Prioritizing wellness of our partners" },
  ];

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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-4">
              Our Story
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About <span className="gradient-text-gold">Nexaura</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Building India's most trusted wellness and direct selling company since 2025.
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

      {/* Company Info */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  <span className="gradient-text">Nexaura Wellness</span> Marketing Pvt. Ltd.
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Nexaura Wellness Marketing Pvt. Ltd. is a registered direct selling company incorporated on 19th March 2025. We are committed to providing high-quality wellness products and a transparent, ethical business opportunity to individuals across India.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  With over 8 years of experience in the direct selling industry, our founders have built Nexaura on the principles of integrity, transparency, and people-first approach.
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: Building2, label: "Registered Company" },
                    { icon: Calendar, label: "Est. March 2025" },
                    { icon: Award, label: "ISO 9001:2015" },
                  ].map((item, i) => (
                    <div key={i} className="glass-card p-4 text-center">
                      <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card-elevated p-6 bg-gradient-to-br from-primary/10 to-transparent">
                  <Eye className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    To become India's leading wellness & direct selling company empowering individuals with financial independence.
                  </p>
                </div>
                <div className="glass-card-elevated p-6 bg-gradient-to-br from-secondary/10 to-transparent">
                  <Target className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    Deliver quality products through a transparent, ethical, and scalable business platform.
                  </p>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text-gold">Core Values</span>
            </h2>
          </FadeInUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <StaggerItem key={i}>
                <div className="glass-card p-6 text-center hover-lift h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </FadeInUp>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm font-semibold text-primary">{item.year}</span>
                    <p className="text-foreground font-medium mt-1">{item.event}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <LeadershipSection />

      <Footer />
    </div>
  );
};

export default About;
