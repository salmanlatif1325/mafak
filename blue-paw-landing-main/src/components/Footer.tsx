import { motion } from "framer-motion";
import { ChevronUp, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="py-16 grid md:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold text-primary-foreground mb-4">
              MAFAK <span className="text-secondary-light">PHARMA</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              A leading Animal Health Pharmaceutical company delivering high-quality poultry and livestock healthcare products across Pakistan.
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-secondary-light" />
                <span className="text-sm">Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-4 h-4 text-secondary-light" />
                <a href="mailto:info@mafakpharma.com" className="text-sm hover:text-secondary-light transition-colors">
                  info@mafakpharma.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Products", "Why Choose Us", "Research & Quality", "Leadership", "Network", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/[ &]/g, (match) => match === " " ? "" : "-")}`}
                    className="text-primary-foreground/80 hover:text-secondary-light transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-primary-foreground text-lg mb-4">Our Products</h4>
            <ul className="space-y-3">
              {["Veterinary Medicines", "Vaccines & Biologicals", "Feed Additives", "Probiotics", "Vitamins & Minerals", "Growth Promoters"].map((product) => (
                <li key={product}>
                  <span className="text-primary-foreground/80 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-semibold text-primary-foreground text-lg mb-4">Get Started</h4>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Ready to partner with us? Contact our team for product inquiries, distribution opportunities, or technical support.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg transition-all duration-300 font-medium text-sm"
            >
              Contact Us
              <ChevronUp className="w-4 h-4 rotate-[-90deg]" />
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} MAFAK Pharma. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
