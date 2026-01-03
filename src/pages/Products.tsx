import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Leaf, Heart, Zap, Shield, Star, Sparkles, Droplet, Sun, Moon, Brain } from "lucide-react";

const categories = [
  { name: "All", count: 12 },
  { name: "Health Supplements", count: 4 },
  { name: "Personal Care", count: 3 },
  { name: "Weight Management", count: 2 },
  { name: "Immunity", count: 3 },
];

const products = [
  {
    id: 1,
    name: "Wellness Capsules Pro",
    category: "Health Supplements",
    price: "₹1,299",
    mrp: "₹1,599",
    nv: "150 NV",
    image: "🌿",
    icon: Leaf,
    color: "from-green-400 to-emerald-500",
    description: "Premium daily wellness supplement for overall health.",
    benefits: ["Boosts Immunity", "Increases Energy", "Natural Ingredients"],
    rating: 4.8,
    reviews: 256,
  },
  {
    id: 2,
    name: "Energy Booster Plus",
    category: "Health Supplements",
    price: "₹999",
    mrp: "₹1,299",
    nv: "100 NV",
    image: "⚡",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
    description: "Natural energy enhancement without caffeine.",
    benefits: ["Instant Energy", "Mental Clarity", "Sustained Power"],
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 3,
    name: "Heart Care Premium",
    category: "Health Supplements",
    price: "₹1,599",
    mrp: "₹1,999",
    nv: "180 NV",
    image: "❤️",
    icon: Heart,
    color: "from-rose-400 to-red-500",
    description: "Complete cardiovascular health support formula.",
    benefits: ["Heart Health", "Blood Pressure", "Cholesterol Control"],
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 4,
    name: "Immunity Shield Max",
    category: "Immunity",
    price: "₹1,199",
    mrp: "₹1,499",
    nv: "130 NV",
    image: "🛡️",
    icon: Shield,
    color: "from-blue-400 to-indigo-500",
    description: "Advanced immunity booster with antioxidants.",
    benefits: ["Strong Immunity", "Antioxidant Rich", "Daily Protection"],
    rating: 4.8,
    reviews: 278,
  },
  {
    id: 5,
    name: "Protein Power",
    category: "Weight Management",
    price: "₹1,899",
    mrp: "₹2,299",
    nv: "200 NV",
    image: "💪",
    icon: Star,
    color: "from-purple-400 to-violet-500",
    description: "High-quality protein for muscle building.",
    benefits: ["Muscle Growth", "Fast Recovery", "Lean Mass"],
    rating: 4.6,
    reviews: 145,
  },
  {
    id: 6,
    name: "Glow Skin Serum",
    category: "Personal Care",
    price: "₹899",
    mrp: "₹1,199",
    nv: "90 NV",
    image: "✨",
    icon: Sparkles,
    color: "from-pink-400 to-rose-500",
    description: "Natural skin glow and anti-aging formula.",
    benefits: ["Radiant Skin", "Anti-Aging", "Deep Hydration"],
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 7,
    name: "Hydra Plus",
    category: "Personal Care",
    price: "₹799",
    mrp: "₹999",
    nv: "80 NV",
    image: "💧",
    icon: Droplet,
    color: "from-cyan-400 to-blue-500",
    description: "Ultimate hydration for healthy skin.",
    benefits: ["Deep Moisture", "Soft Skin", "All Day Hydration"],
    rating: 4.5,
    reviews: 167,
  },
  {
    id: 8,
    name: "Vitamin D3 Gold",
    category: "Health Supplements",
    price: "₹699",
    mrp: "₹899",
    nv: "70 NV",
    image: "☀️",
    icon: Sun,
    color: "from-yellow-400 to-amber-500",
    description: "Essential vitamin D for bone health.",
    benefits: ["Strong Bones", "Calcium Absorption", "Immune Support"],
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 9,
    name: "Sleep Well",
    category: "Health Supplements",
    price: "₹849",
    mrp: "₹1,099",
    nv: "85 NV",
    image: "🌙",
    icon: Moon,
    color: "from-indigo-400 to-purple-500",
    description: "Natural sleep support for restful nights.",
    benefits: ["Better Sleep", "Stress Relief", "Calm Mind"],
    rating: 4.6,
    reviews: 198,
  },
  {
    id: 10,
    name: "Brain Boost",
    category: "Health Supplements",
    price: "₹1,399",
    mrp: "₹1,799",
    nv: "150 NV",
    image: "🧠",
    icon: Brain,
    color: "from-teal-400 to-cyan-500",
    description: "Cognitive enhancement and memory support.",
    benefits: ["Mental Clarity", "Focus", "Memory Boost"],
    rating: 4.7,
    reviews: 176,
  },
];

const Products = () => {
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
              Premium Quality
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our <span className="gradient-text-gold">Products</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Discover our range of scientifically formulated wellness products designed to enhance your health and lifestyle.
            </p>
          </FadeInUp>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <FadeInUp className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat.name} ({cat.count})
              </motion.button>
            ))}
          </FadeInUp>

          {/* Products Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-card-elevated p-6 h-full card-shine group"
                >
                  {/* Image */}
                  <div className="relative mb-4">
                    <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-6xl group-hover:scale-105 transition-transform`}>
                      {product.image}
                    </div>
                    {/* Discount Badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-destructive text-destructive-foreground text-xs font-semibold">
                      {Math.round((1 - parseInt(product.price.replace(/[₹,]/g, "")) / parseInt(product.mrp.replace(/[₹,]/g, ""))) * 100)}% OFF
                    </div>
                  </div>

                  {/* Category */}
                  <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground mb-2">
                    {product.category}
                  </span>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-secondary text-secondary"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.mrp}</span>
                    <span className="text-sm text-primary font-medium ml-auto">{product.nv}</span>
                  </div>

                  {/* CTA */}
                  <Button variant="hero" className="w-full">
                    Add to Cart
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
