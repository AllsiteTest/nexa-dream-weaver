import { Smartphone, Laptop, Bike, Star as GoldStar, Car, MapPin, Home, Shield } from "lucide-react";

const RewardsSection = () => {
  const ranks = [
    {
      rank: "STAR",
      royalty: "2%",
      reward: "Mobile Fund",
      amount: "₹18,000",
      icon: Smartphone,
      color: "from-yellow-400 to-amber-500",
    },
    {
      rank: "PEARL",
      royalty: "1.75%",
      reward: "Laptop Fund",
      amount: "₹60,000",
      icon: Laptop,
      color: "from-pink-300 to-pink-400",
    },
    {
      rank: "RUBY",
      royalty: "1.50%",
      reward: "Bike Fund",
      amount: "₹2,50,000",
      icon: Bike,
      color: "from-red-400 to-red-500",
    },
    {
      rank: "GOLD",
      royalty: "1.25%",
      reward: "Gold Fund",
      amount: "₹6,50,000",
      icon: GoldStar,
      color: "from-amber-400 to-yellow-500",
    },
    {
      rank: "DIAMOND",
      royalty: "1%",
      reward: "Car Fund",
      amount: "₹25,00,000",
      icon: Car,
      color: "from-cyan-400 to-blue-500",
    },
    {
      rank: "ROYAL DIAMOND",
      royalty: "1%",
      reward: "Land Fund",
      amount: "₹51,00,000",
      icon: MapPin,
      color: "from-violet-400 to-purple-500",
    },
    {
      rank: "AMBASSADOR",
      royalty: "1%",
      reward: "Bungalow Fund",
      amount: "₹1 Crore",
      icon: Home,
      color: "from-emerald-400 to-teal-500",
    },
    {
      rank: "CROWN AMBASSADOR",
      royalty: "1%",
      reward: "Family Secure Fund",
      amount: "₹2 Crore",
      icon: Shield,
      color: "from-secondary to-gold-shine",
    },
  ];

  return (
    <section id="rewards" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Rank & Rewards
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lifestyle{" "}
            <span className="gradient-text-gold">Rewards Program</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Achieve ranks and unlock incredible lifestyle rewards. Each rank requires 5× growth from the previous rank.
          </p>
        </div>

        {/* Ranks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ranks.map((item, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>

              {/* Rank */}
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {item.rank}
              </h3>

              {/* Royalty */}
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary mb-4">
                Royalty: {item.royalty}
              </div>

              {/* Reward */}
              <p className="text-sm text-muted-foreground mb-2">{item.reward}</p>
              <p className="text-2xl font-bold gradient-text-gold">{item.amount}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted border border-border">
            <span className="text-sm text-muted-foreground">
              📌 If rank achieved before 25th, reward paid in same month.
            </span>
          </div>
        </div>

        {/* Tour Packages */}
        <div className="mt-16 glass-card p-8">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            🌍 Company Tour Packages
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { rank: "PEARL", tour: "Domestic Tour" },
              { rank: "GOLD", tour: "National Tour" },
              { rank: "ROYAL DIAMOND", tour: "International Tour" },
              { rank: "CROWN AMBASSADOR", tour: "International Tour" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted/50 text-center">
                <p className="font-semibold text-foreground mb-1">{item.rank}</p>
                <p className="text-sm text-primary">{item.tour}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
