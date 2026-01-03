import { Package, FileText, Wallet, Users, Settings } from "lucide-react";

const BusinessFormula = () => {
  const formula = [
    {
      icon: Package,
      title: "Product",
      desc: "High-quality wellness products that deliver real results",
      color: "from-primary to-emerald-glow",
    },
    {
      icon: FileText,
      title: "Plan",
      desc: "Simple & scalable MLM plan for all levels",
      color: "from-secondary to-gold-shine",
    },
    {
      icon: Wallet,
      title: "Payout",
      desc: "Fair, timely & performance-based income",
      color: "from-primary to-emerald-glow",
    },
    {
      icon: Users,
      title: "People",
      desc: "Strong team culture & leadership growth",
      color: "from-secondary to-gold-shine",
    },
    {
      icon: Settings,
      title: "Process",
      desc: "Easy, transparent business system",
      color: "from-primary to-emerald-glow",
    },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Success Framework
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Nexaura{" "}
            <span className="gradient-text-gold">5P Formula</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven framework ensures stability, duplication, and sustainability for long-term success.
          </p>
        </div>

        {/* Formula Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {formula.map((item, i) => (
            <div
              key={i}
              className="group glass-card p-6 w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] min-w-[200px] hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-4xl font-display font-bold text-muted-foreground/30 mb-2">
                0{i + 1}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-medium">
              ✨ Creates stability + duplication + sustainability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessFormula;
