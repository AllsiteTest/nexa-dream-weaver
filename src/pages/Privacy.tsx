import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInUp } from "@/components/AnimatedSection";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="page-header pb-12">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Privacy Policy
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
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nexaura Wellness Marketing Pvt. Ltd. ("Nexaura," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services in compliance with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="text-lg font-semibold text-foreground mb-3">Personal Information:</h3>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside mb-4">
                  <li>Full name, date of birth, gender</li>
                  <li>Contact details (phone number, email, address)</li>
                  <li>Identity documents (PAN, Aadhaar for KYC purposes)</li>
                  <li>Bank account details for payment processing</li>
                  <li>Photographs for identity verification</li>
                </ul>
                <h3 className="text-lg font-semibold text-foreground mb-3">Usage Information:</h3>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Device information and IP address</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Purchase and transaction history</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>To process your Direct Seller registration and KYC verification</li>
                  <li>To process orders and deliver products</li>
                  <li>To calculate and process commissions and bonuses</li>
                  <li>To communicate important updates and promotional offers</li>
                  <li>To provide customer support and resolve queries</li>
                  <li>To comply with legal and regulatory requirements</li>
                  <li>To prevent fraud and enhance security</li>
                  <li>To improve our products, services, and user experience</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">We may share your information with:</p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li><strong>Service Providers:</strong> Payment gateways, logistics partners, IT service providers</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Partners:</strong> For order fulfillment and customer service</li>
                  <li><strong>Upline/Downline:</strong> Limited business-related information for team management</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We do NOT sell your personal information to third parties for marketing purposes.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement industry-standard security measures including:
                </p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Secure servers and firewalls</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security audits</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as your account is active or as needed to provide services. After account termination, we may retain certain information for up to 8 years as required by tax laws and other regulatory requirements in India.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Object to processing of your data</li>
                  <li>Data portability</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.7}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings. Essential cookies are required for the website to function properly.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.8}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe we have collected information from a minor, please contact us immediately.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.9}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={1.0}>
              <div className="glass-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Grievance Officer</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In accordance with the Information Technology Act, 2000 and rules made thereunder, the name and contact details of the Grievance Officer are provided below:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>Name:</strong> Grievance Officer, Nexaura</li>
                  <li><strong>Email:</strong> privacy@nexauraindia.com</li>
                  <li><strong>Phone:</strong> +91 XXXX XXXXXX</li>
                  <li><strong>Working Hours:</strong> Monday to Saturday, 10:00 AM - 6:00 PM IST</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={1.1}>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any questions or concerns regarding this Privacy Policy, please contact us at:
                </p>
                <ul className="text-muted-foreground space-y-2 mt-4">
                  <li><strong>Nexaura Wellness Marketing Pvt. Ltd.</strong></li>
                  <li><strong>Email:</strong> privacy@nexauraindia.com</li>
                  <li><strong>Website:</strong> www.nexauraindia.com</li>
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

export default Privacy;
