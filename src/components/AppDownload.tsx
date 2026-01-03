import { Button } from "@/components/ui/button";
import { Download, Play, Smartphone, Star, Shield, Zap } from "lucide-react";
import { FadeInUp, FadeInLeft, FadeInRight } from "./AnimatedSection";
import { motion } from "framer-motion";

const AppDownload = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <FadeInLeft>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-sm font-medium text-primary-foreground mb-6">
                <Smartphone className="w-4 h-4" />
                Mobile App Available
              </span>
            </FadeInLeft>

            <FadeInLeft delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Download <span className="gradient-text-gold">Nexaura App</span>
              </h2>
            </FadeInLeft>

            <FadeInLeft delay={0.2}>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
                Manage your business on the go. Track earnings, view your team, place orders, and access training materials anytime, anywhere.
              </p>
            </FadeInLeft>

            {/* Features */}
            <FadeInLeft delay={0.3}>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Zap, label: "Fast & Easy" },
                  { icon: Shield, label: "Secure" },
                  { icon: Star, label: "4.8 Rating" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 justify-center lg:justify-start text-primary-foreground/80">
                    <item.icon className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeInLeft>

            {/* Download Button */}
            <FadeInLeft delay={0.4}>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-foreground text-background hover:opacity-90 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs opacity-80">GET IT ON</p>
                    <p className="text-xl font-bold">Google Play</p>
                  </div>
                  <Download className="w-6 h-6 ml-2" />
                </motion.div>
              </a>
            </FadeInLeft>
          </div>

          {/* Phone Mockup */}
          <FadeInRight className="flex-1 relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-64"
            >
              {/* Phone Frame */}
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground rounded-full z-10" />
                <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* App Screen Content */}
                  <div className="p-4 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-6 mt-8">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-glow flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">N</span>
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">Nexaura</p>
                        <p className="text-[10px] text-muted-foreground">Welcome back!</p>
                      </div>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-primary to-emerald-glow rounded-2xl p-4 mb-4">
                      <p className="text-primary-foreground/80 text-xs mb-1">Total Earnings</p>
                      <p className="text-2xl font-bold text-primary-foreground">₹1,25,000</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-muted rounded-xl p-3">
                        <p className="text-[10px] text-muted-foreground">Team Size</p>
                        <p className="font-bold text-foreground">156</p>
                      </div>
                      <div className="bg-muted rounded-xl p-3">
                        <p className="text-[10px] text-muted-foreground">This Month</p>
                        <p className="font-bold text-foreground">₹25,000</p>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="space-y-2 flex-1">
                      {["Products", "My Team", "Orders"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <div className="w-3 h-3 rounded bg-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-xl" />
            </motion.div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
