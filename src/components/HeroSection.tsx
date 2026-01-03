import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, TrendingUp, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen hero-gradient overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)] py-12 gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">ISO 9001:2015 Certified | Startup India Recognized</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Transform Your Life with{" "}
              <span className="gradient-text-gold">Nexaura Wellness</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Join India's fastest-growing wellness network. Build your dream lifestyle with premium products, ethical income, and a supportive community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="gold" size="xl" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-light" size="xl">
                Explore Products
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-secondary mb-1">
                  <Star className="w-5 h-5 fill-secondary" />
                  <span className="text-3xl font-bold text-primary-foreground">8+</span>
                </div>
                <p className="text-sm text-primary-foreground/60">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-secondary mb-1">
                  <Users className="w-5 h-5" />
                  <span className="text-3xl font-bold text-primary-foreground">50K+</span>
                </div>
                <p className="text-sm text-primary-foreground/60">Active Partners</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-secondary mb-1">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-3xl font-bold text-primary-foreground">16</span>
                </div>
                <p className="text-sm text-primary-foreground/60">Income Levels</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex-1 relative max-w-lg">
            <div className="relative animate-float">
              {/* Main Card */}
              <div className="glass-card p-8 bg-card/20 backdrop-blur-xl border-primary/20">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-gold-shine flex items-center justify-center">
                    <span className="text-3xl font-bold text-secondary-foreground">₹</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                    Earn Up To
                  </h3>
                  <p className="text-4xl font-bold gradient-text-gold mb-2">₹2 Crore+</p>
                  <p className="text-primary-foreground/60 text-sm">Family Secure Royal Fund</p>
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-3">
                  {["Multiple Income Streams", "Lifestyle Rewards", "Global Community"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-primary-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm shadow-lg">
                Est. 2025
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-card border border-border font-semibold text-sm shadow-lg">
                🏆 ISO Certified
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
