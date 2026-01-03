import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Zap, Shield } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Wellness Capsules",
    category: "Health Supplement",
    price: "₹1,299",
    nv: "150 NV",
    image: "🌿",
    icon: Leaf,
    color: "from-green-400 to-emerald-500",
    features: ["100% Natural", "Immunity Boost", "Daily Wellness"],
  },
  {
    id: 2,
    name: "Energy Booster",
    category: "Performance",
    price: "₹999",
    nv: "100 NV",
    image: "⚡",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
    features: ["Instant Energy", "Mental Clarity", "No Caffeine"],
  },
  {
    id: 3,
    name: "Heart Care Plus",
    category: "Cardiovascular",
    price: "₹1,599",
    nv: "180 NV",
    image: "❤️",
    icon: Heart,
    color: "from-rose-400 to-red-500",
    features: ["Heart Health", "Blood Pressure", "Cholesterol"],
  },
  {
    id: 4,
    name: "Immunity Shield",
    category: "Immune Support",
    price: "₹1,199",
    nv: "130 NV",
    image: "🛡️",
    icon: Shield,
    color: "from-blue-400 to-indigo-500",
    features: ["Strong Immunity", "Antioxidants", "Daily Protection"],
  },
];

const ProductShowcase = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Premium <span className="gradient-text">Wellness Products</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            High-quality, scientifically formulated products for your complete wellness journey.
          </p>
        </FadeInUp>

        {/* Products Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card-elevated p-6 h-full card-shine"
              >
                {/* Product Image */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 text-3xl`}>
                  {product.image}
                </div>

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground mb-3">
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span key={i} className="text-xs text-muted-foreground">
                      • {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-2xl font-bold text-foreground">{product.price}</span>
                  <span className="text-sm text-primary font-medium">{product.nv}</span>
                </div>

                {/* CTA */}
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All */}
        <FadeInUp className="text-center">
          <Link to="/products">
            <Button variant="hero" size="lg" className="group">
              View All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ProductShowcase;
