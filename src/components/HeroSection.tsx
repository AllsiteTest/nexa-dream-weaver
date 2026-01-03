import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, TrendingUp, Shield, Download, Play } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp, FadeInLeft, FadeInRight, FloatingElement, PulseGlow } from "./AnimatedSection";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen hero-gradient overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-5rem)] py-12 gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Badge */}
            <FadeInUp>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">ISO 9001:2015 Certified | Startup India</span>
              </motion.div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                Transform Your Life with{" "}
                <span className="gradient-text-gold text-glow">Nexaura Wellness</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Join India's fastest-growing wellness network. Build your dream lifestyle with premium products, ethical income, and a supportive community.
              </p>
            </FadeInUp>

            {/* CTA Buttons */}
            <FadeInUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/products">
                  <Button variant="gold" size="xl" className="group w-full sm:w-auto">
                    Explore Products
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/business-plan">
                  <Button variant="outline-light" size="xl" className="w-full sm:w-auto">
                    View Business Plan
                  </Button>
                </Link>
              </div>
            </FadeInUp>

            {/* App Download */}
            <FadeInUp delay={0.4}>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-foreground/10 border border-primary-foreground/20 hover:bg-foreground/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-foreground flex items-center justify-center">
                  <Play className="w-5 h-5 text-foreground fill-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-primary-foreground/60">Download on</p>
                  <p className="text-sm font-semibold text-primary-foreground">Google Play Store</p>
                </div>
                <Download className="w-5 h-5 text-primary-foreground/60 group-hover:text-secondary transition-colors" />
              </a>
            </FadeInUp>

            {/* Stats */}
            <FadeInUp delay={0.5}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10">
                {[
                  { icon: Star, value: "8+", label: "Years Experience" },
                  { icon: Users, value: "50K+", label: "Active Partners" },
                  { icon: TrendingUp, value: "16", label: "Income Levels" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center lg:justify-start gap-1 text-secondary mb-1">
                      <stat.icon className="w-5 h-5 fill-secondary" />
                      <span className="text-3xl font-bold text-primary-foreground">{stat.value}</span>
                    </div>
                    <p className="text-sm text-primary-foreground/60">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </FadeInUp>
          </div>

          {/* Hero Visual */}
          <FadeInRight delay={0.3} className="flex-1 relative max-w-lg">
            <FloatingElement>
              <PulseGlow className="rounded-3xl">
                <div className="glass-card-elevated p-8 bg-card/20 backdrop-blur-xl border-primary/20">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-gold-shine flex items-center justify-center"
                    >
                      <span className="text-3xl font-bold text-secondary-foreground">₹</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                      Earn Up To
                    </h3>
                    <p className="text-4xl font-bold gradient-text-gold mb-2">₹2 Crore+</p>
                    <p className="text-primary-foreground/60 text-sm">Family Secure Royal Fund</p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {["Multiple Income Streams", "Lifestyle Rewards", "Global Community"].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 text-primary-foreground/80"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </PulseGlow>
            </FloatingElement>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm shadow-lg"
            >
              Est. 2025
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-card border border-border font-semibold text-sm shadow-lg"
            >
              🏆 ISO Certified
            </motion.div>
          </FadeInRight>
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
