import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const PackagesSection = () => {
  const packages = [
    {
      name: "Bronze",
      nv: "750",
      icon: Sparkles,
      referral: "30%",
      earnings: {
        bronze: "₹225",
        silver: "₹450",
        platinum: "₹900",
      },
      features: ["Entry Level Access", "Basic Training", "Product Discounts", "Referral Income"],
      popular: false,
      gradient: "from-amber-600 to-amber-700",
      bgGradient: "from-amber-50 to-amber-100/50",
    },
    {
      name: "Silver",
      nv: "1,500",
      icon: Zap,
      referral: "40%",
      earnings: {
        bronze: "₹300",
        silver: "₹600",
        platinum: "₹1,200",
      },
      features: ["Everything in Bronze", "Advanced Training", "Higher Commissions", "Priority Support"],
      popular: true,
      gradient: "from-slate-400 to-slate-500",
      bgGradient: "from-slate-50 to-slate-100/50",
    },
    {
      name: "Platinum",
      nv: "3,000",
      icon: Crown,
      referral: "50%",
      earnings: {
        bronze: "₹375",
        silver: "₹750",
        platinum: "₹1,500",
      },
      features: ["Everything in Silver", "Leadership Training", "Maximum Commissions", "VIP Benefits"],
      popular: false,
      gradient: "from-primary to-emerald-glow",
      bgGradient: "from-emerald-50 to-emerald-100/50",
    },
  ];

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Joining Packages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your{" "}
            <span className="gradient-text">Entry Package</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start your wellness journey with the package that fits your goals. NV = Nexa Volume.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative glass-card p-8 ${pkg.popular ? "ring-2 ring-primary scale-105" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-emerald-glow text-primary-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-6`}>
                <pkg.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Package Info */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                {pkg.name}
              </h3>
              <p className="text-muted-foreground mb-4">Package</p>

              {/* NV */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-foreground">{pkg.nv}</span>
                <span className="text-muted-foreground">NV</span>
              </div>

              {/* Referral Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${pkg.bgGradient} mb-6`}>
                <span className="text-sm font-medium text-foreground">Referral Income:</span>
                <span className="font-bold text-primary">{pkg.referral}</span>
              </div>

              {/* Earnings Table */}
              <div className="space-y-2 mb-6 p-4 rounded-lg bg-muted/50">
                <p className="text-sm font-medium text-foreground mb-2">Referral Earnings:</p>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Bronze →</span>
                  <span className="font-semibold text-foreground">{pkg.earnings.bronze}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Silver →</span>
                  <span className="font-semibold text-foreground">{pkg.earnings.silver}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Platinum →</span>
                  <span className="font-semibold text-foreground">{pkg.earnings.platinum}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={pkg.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-8">
          💡 Referral income is paid instantly upon successful referral.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
