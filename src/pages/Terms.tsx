import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInUp } from "@/components/AnimatedSection";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="page-header pb-12">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Terms & Conditions
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-primary-foreground/80">Last updated: March 2025</p>
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

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <FadeInUp>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Nexaura Wellness Marketing Pvt. Ltd. ("Nexaura," "Company," "we," "us," or "our"). These Terms and Conditions govern your use of our website, products, and direct selling business opportunity. By accessing our services, you agree to be bound by these terms in accordance with the Consumer Protection (Direct Selling) Rules, 2021 and other applicable Indian laws.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Company Information</h2>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>Company Name:</strong> Nexaura Wellness Marketing Pvt. Ltd.</li>
                  <li><strong>Incorporation Date:</strong> 19 March 2025</li>
                  <li><strong>Nature of Business:</strong> Direct Selling & Wellness Marketing</li>
                  <li><strong>Registered Office:</strong> India</li>
                  <li><strong>Website:</strong> www.nexauraindia.com</li>
                  <li><strong>Certifications:</strong> ISO 9001:2015 Certified, Startup India Recognized</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Direct Selling Guidelines (As per Indian Government Policy)</h2>
                <p className="text-muted-foreground mb-4">
                  Nexaura operates in compliance with the Consumer Protection (Direct Selling) Rules, 2021 issued by the Government of India. Key compliance points:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>No pyramid scheme or money circulation scheme operations</li>
                  <li>Direct sellers must not make any false or misleading income claims</li>
                  <li>Products are sold through direct selling with actual product delivery</li>
                  <li>No requirement to purchase products as a condition for joining</li>
                  <li>Clear disclosure of all terms and conditions before enrollment</li>
                  <li>Buyback guarantee for unsold products within 90 days</li>
                  <li>Complete transparency in compensation plan</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become a Direct Seller with Nexaura, you must:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside mt-4">
                  <li>Be at least 18 years of age</li>
                  <li>Be a citizen or permanent resident of India</li>
                  <li>Have a valid PAN card and Aadhaar card</li>
                  <li>Agree to abide by the Nexaura Code of Ethics</li>
                  <li>Not have been previously terminated as a Nexaura Direct Seller</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="glass-card p-8 mb-8" id="refund">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Refund & Return Policy</h2>
                <p className="text-muted-foreground mb-4">
                  In accordance with Consumer Protection (Direct Selling) Rules, 2021:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li><strong>Cooling-off Period:</strong> 7 days from the date of purchase</li>
                  <li><strong>Product Returns:</strong> Unopened, unused products can be returned within 30 days for full refund</li>
                  <li><strong>Damaged Products:</strong> Immediately report and return within 48 hours of delivery</li>
                  <li><strong>Buyback Policy:</strong> 90% buyback on marketable products within 90 days of purchase</li>
                  <li><strong>Refund Timeline:</strong> Refunds processed within 15 working days</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="glass-card p-8 mb-8" id="shipping">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Shipping Policy</h2>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Shipping across India through reputed courier partners</li>
                  <li>Delivery within 7-10 working days for most locations</li>
                  <li>Free shipping on orders above ₹999</li>
                  <li>Order tracking available through our app and website</li>
                  <li>COD available for select locations</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Compensation Plan Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Our compensation plan is designed to reward genuine sales efforts:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Income is earned through actual product sales to end consumers</li>
                  <li>No income is guaranteed - earnings depend on individual effort and sales</li>
                  <li>Recruitment alone does not generate income</li>
                  <li>All income claims are based on actual documented results</li>
                  <li>Payments are made as per the published payout schedule</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.7}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Code of Ethics</h2>
                <p className="text-muted-foreground mb-4">
                  All Direct Sellers must:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Conduct business honestly and ethically</li>
                  <li>Not make false claims about products or income potential</li>
                  <li>Respect customer privacy and data</li>
                  <li>Provide accurate product information</li>
                  <li>Honor return and refund policies</li>
                  <li>Not engage in misleading recruitment practices</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.8}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nexaura reserves the right to terminate a Direct Seller's agreement for violations of terms, unethical conduct, fraudulent activities, or legal violations. Upon termination, the Direct Seller must cease all business activities and return any company materials.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.9}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any disputes shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in India, and the decision shall be final and binding.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={1.0}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions are governed by the laws of India, including but not limited to the Consumer Protection Act, 2019, Consumer Protection (Direct Selling) Rules, 2021, and other applicable regulations.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={1.1}>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact for Grievances</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any complaints or grievances, please contact our Grievance Officer:
                </p>
                <ul className="text-muted-foreground space-y-2 mt-4">
                  <li><strong>Email:</strong> grievance@nexauraindia.com</li>
                  <li><strong>Phone:</strong> +91 XXXX XXXXXX</li>
                  <li><strong>Response Time:</strong> Within 48 working hours</li>
                </ul>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
