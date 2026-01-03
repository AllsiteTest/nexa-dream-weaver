import { Coins, Users, Layers, Award, Gift, Smartphone, Bike, Car, Home, MapPin, Plane } from "lucide-react";

const IncomeSection = () => {
  const incomeTypes = [
    { icon: Coins, title: "Retail Profit", desc: "Direct product sale margins" },
    { icon: Users, title: "Referral Income", desc: "30-50% on direct referrals" },
    { icon: Layers, title: "Generation Income", desc: "Up to 16 levels deep" },
    { icon: Award, title: "Rank & Royalty", desc: "Monthly rank-based bonuses" },
    { icon: Gift, title: "Monthly Rewards", desc: "Performance incentives" },
    { icon: Plane, title: "Tour Packages", desc: "Domestic & international" },
  ];

  const generationLevels = [
    { level: "L1", bronze: "30%", silver: "40%", platinum: "50%" },
    { level: "L2", bronze: "10%", silver: "10%", platinum: "10%" },
    { level: "L3", bronze: "5%", silver: "5%", platinum: "5%" },
    { level: "L4", bronze: "3%", silver: "3%", platinum: "3%" },
    { level: "L5", bronze: "2%", silver: "2%", platinum: "2%" },
    { level: "L6-16", bronze: "1%", silver: "1%", platinum: "1%" },
  ];

  return (
    <section id="plan" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Multiple Income Streams
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Unlimited{" "}
            <span className="gradient-text-gold">Earning Potential</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nexaura offers multiple ways to earn, creating sustainable long-term income.
          </p>
        </div>

        {/* Income Types Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {incomeTypes.map((item, i) => (
            <div
              key={i}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Generation Income Table */}
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            16-Level Generation Income
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Team Structure: 5 × 5 (Binary-style expansion)
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-4 text-left text-sm font-semibold text-foreground">Level</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-amber-600">Bronze</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-slate-500">Silver</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-primary">Platinum</th>
                </tr>
              </thead>
              <tbody>
                {generationLevels.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-foreground">{row.level}</td>
                    <td className="py-4 px-4 text-center text-sm text-muted-foreground">{row.bronze}</td>
                    <td className="py-4 px-4 text-center text-sm text-muted-foreground">{row.silver}</td>
                    <td className="py-4 px-4 text-center text-sm font-semibold text-primary">{row.platinum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            👉 Creates huge long-term passive income through team duplication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IncomeSection;
