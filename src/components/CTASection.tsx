import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const CTASection = () => {
  const highlights = [
    "Direct selling model",
    "Real products",
    "No middlemen",
    "Low investment",
    "Repeat sales = regular income",
    "Passive income opportunity",
    "Flexible working system",
  ];

  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-secondary/30 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">Start Your Success Journey Today</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your{" "}
            <span className="gradient-text-gold">Financial Future?</span>
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of successful partners who have already started their wellness business journey with Nexaura.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20"
              >
                <Check className="w-4 h-4 text-secondary" />
                <span className="text-sm text-primary-foreground">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" className="group">
              Join Nexaura Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-light" size="xl">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
