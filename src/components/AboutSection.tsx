import { Target, Eye, CheckCircle2, Award, Building2, Calendar } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Building2, label: "Nexaura Wellness Marketing Pvt. Ltd.", desc: "Registered Company" },
    { icon: Calendar, label: "19 March 2025", desc: "Incorporation Date" },
    { icon: Award, label: "ISO 9001:2015", desc: "Quality Certified" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Nexaura
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building India's Most Trusted{" "}
            <span className="gradient-text">Wellness Network</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Direct Selling & Wellness Marketing Company empowering individuals with financial independence and sustainable growth.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, i) => (
            <div key={i} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="glass-card p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-glow flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To become a trusted and leading wellness & direct selling company that empowers individuals with:
              </p>
              <ul className="space-y-3">
                {["Financial Independence", "Ethical Income Opportunities", "Long-term Sustainable Growth"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mission */}
          <div className="glass-card p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-gold-shine flex items-center justify-center">
                  <Target className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our commitment to excellence drives everything we do:
              </p>
              <ul className="space-y-3">
                {[
                  "Deliver high-quality wellness & lifestyle products",
                  "Provide a transparent, ethical, and scalable MLM platform",
                  "Develop leadership and equal earning opportunities"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
