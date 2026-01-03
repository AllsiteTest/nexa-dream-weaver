import { Award, CheckCircle2 } from "lucide-react";

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Mrs. Nupur Sarkar Saha",
      role: "Managing Director & Founder",
      experience: "8+ years in Direct Selling",
      focus: ["Ethical Practices", "Transparent Income Systems", "People-First Approach"],
    },
    {
      name: "Mr. Kalyan Mandal",
      role: "Founder Director",
      experience: "8+ years in Direct Selling",
      focus: ["Leadership Development", "Team Building", "Business Strategy"],
    },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Leadership
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our{" "}
            <span className="gradient-text">Visionary Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Guided by experience, driven by ethics, committed to your success.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <div key={i} className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-emerald-glow flex items-center justify-center">
                <span className="text-3xl font-bold text-primary-foreground">
                  {leader.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {leader.name}
              </h3>
              <p className="text-primary font-medium mb-2">{leader.role}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-sm text-secondary mb-6">
                <Award className="w-4 h-4" />
                {leader.experience}
              </div>

              {/* Focus Areas */}
              <ul className="space-y-2">
                {leader.focus.map((item, j) => (
                  <li key={j} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
