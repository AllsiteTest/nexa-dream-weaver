import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin, ExternalLink, Download, Play } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-glow flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">NEXAURA</span>
                <span className="text-[10px] text-background/60 -mt-1 tracking-widest">WELLNESS</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6 max-w-sm">
              Nexaura Wellness Marketing Pvt. Ltd. - India's trusted direct selling & wellness company empowering individuals since 2025.
            </p>

            {/* App Download */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Play className="w-8 h-8 fill-background" />
                <div>
                  <p className="text-[10px] text-background/60">GET IT ON</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </motion.div>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "Business Plan", href: "/business-plan" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Refund Policy", href: "/terms#refund" },
                { name: "Shipping Policy", href: "/terms#shipping" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-6">
              <h5 className="font-semibold text-sm mb-3">Certifications</h5>
              <ul className="space-y-1 text-xs text-background/60">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  ISO 9001:2015
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Startup India
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Income Tax Registered
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span>info@nexauraindia.com</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span>+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>India</span>
              </li>
              <li>
                <a
                  href="https://www.nexauraindia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:underline text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  www.nexauraindia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2025 Nexaura Wellness Marketing Pvt. Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>CIN: XXXXXXXXXXXXXXX</span>
              <span>|</span>
              <span>Incorporated: 19 March 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
