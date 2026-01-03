import { Sparkles, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-emerald-glow flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold">NEXAURA</span>
                <span className="text-[10px] text-background/60 -mt-1 tracking-wider">WELLNESS</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Nexaura Wellness Marketing Pvt. Ltd. - India's trusted direct selling & wellness company.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Products", "Business Plan", "Rewards", "Contact"].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-background/70 hover:text-secondary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                ISO 9001:2015 Certified
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                Startup India Recognized
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                Income Tax Registered
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 text-secondary" />
                info@nexauraindia.com
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-secondary" />
                +91 XXXX XXXXXX
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
            <p>Incorporated: 19 March 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
