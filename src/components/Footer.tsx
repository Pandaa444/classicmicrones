import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-heading font-bold mb-4">Classic Microns</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Leading manufacturer and supplier of high-purity Calcium Carbonate (CaCO₃) powder for industrial applications across India.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "About Us", path: "/about" },
              { label: "Products", path: "/products" },
              { label: "Industries", path: "/industries" },
              { label: "Why Choose Us", path: "/why-us" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-accent">Industries</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Paint & Coatings</li>
            <li>Paper Manufacturing</li>
            <li>Plastics & PVC</li>
            <li>Pharma & Cosmetics</li>
            <li>Construction</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-accent">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
              E-6 RIICO Ind. Area, Bidiyad, Makrana, Rajasthan, India
            </li>
            <li className="flex items-center gap-2 text-primary-foreground/70">
              <Phone className="w-4 h-4 shrink-0 text-accent" />
              <a href="tel:+918529067010" className="hover:text-accent transition-colors">+91 85290 67010</a>
            </li>
            <li className="flex items-center gap-2 text-primary-foreground/70">
              <Phone className="w-4 h-4 shrink-0 text-accent" />
              <a href="tel:+919462567010" className="hover:text-accent transition-colors">+91 94625 67010</a>
            </li>
            <li className="flex items-center gap-2 text-primary-foreground/70">
              <Mail className="w-4 h-4 shrink-0 text-accent" />
              <a href="mailto:cmminchem@gmail.com" className="hover:text-accent transition-colors">cmminchem@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Classic Microns. All rights reserved.</p>
        <p>Calcium Carbonate Manufacturer & Supplier — India</p>
      </div>
    </div>
  </footer>
);

export default Footer;
