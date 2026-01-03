import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInUp, FadeInLeft, FadeInRight } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, Download, Play } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
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
              Get In Touch
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Contact <span className="gradient-text-gold">Us</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Ready to start your wellness journey? Get in touch with our team today.
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

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeInLeft>
              <div className="glass-card-elevated p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send us a message</h2>
                <p className="text-muted-foreground mb-6">Fill out the form and we'll get back to you shortly.</p>

                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <Input placeholder="Your full name" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <Input placeholder="+91 XXXXX XXXXX" className="h-12" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <Input type="email" placeholder="your@email.com" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">City / State</label>
                    <Input placeholder="Your city and state" className="h-12" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">I'm interested in</label>
                    <select className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground">
                      <option value="">Select an option</option>
                      <option value="joining">Joining as a Partner</option>
                      <option value="products">Buying Products</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="support">Customer Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <Textarea placeholder="Tell us more about your inquiry..." rows={4} />
                  </div>

                  <Button variant="hero" size="lg" className="w-full group">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </FadeInLeft>

            {/* Info */}
            <FadeInRight>
              <div className="space-y-6">
                {/* Contact Cards */}
                <div className="grid gap-4">
                  {[
                    { icon: Phone, label: "Phone", value: "+91 XXXX XXXXXX", sub: "Mon-Sat, 10AM-6PM" },
                    { icon: Mail, label: "Email", value: "info@nexauraindia.com", sub: "We reply within 24 hours" },
                    { icon: MapPin, label: "Address", value: "India", sub: "Registered Office" },
                    { icon: Clock, label: "Business Hours", value: "10:00 AM - 6:00 PM", sub: "Monday to Saturday" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-5 flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-semibold text-foreground">{item.value}</p>
                        <p className="text-xs text-muted-foreground">{item.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Download App */}
                <div className="glass-card-elevated p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <h3 className="font-bold text-foreground mb-3">Download Our App</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the Nexaura app for the best experience. Manage your business on the go.
                  </p>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-foreground text-background"
                    >
                      <Play className="w-8 h-8 fill-current" />
                      <div>
                        <p className="text-[10px] opacity-80">GET IT ON</p>
                        <p className="font-bold">Google Play</p>
                      </div>
                      <Download className="w-5 h-5 ml-2" />
                    </motion.div>
                  </a>
                </div>

                {/* Website */}
                <div className="glass-card p-5">
                  <p className="text-sm text-muted-foreground mb-1">Official Website</p>
                  <a
                    href="https://www.nexauraindia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    www.nexauraindia.com
                  </a>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
