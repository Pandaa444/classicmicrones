import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-heading font-extrabold mb-5">Classic Micrones</h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Leading manufacturer and supplier of high-purity Calcium Carbonate (CaCO₃) powder for industrial applications across India.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-5 text-accent text-sm tracking-wide uppercase">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "About Us", path: "/about" },
              { label: "Products", path: "/products" },
              { label: "Industries", path: "/industries" },
              { label: "Why Choose Us", path: "/why-us" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-5 text-accent text-sm tracking-wide uppercase">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/calcium-carbonate-manufacturer-india" className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                CaCO₃ Manufacturer India
              </Link>
            </li>
            <li>
              <Link to="/gcc-supplier-india" className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                GCC Supplier India
              </Link>
            </li>
            <li>
              <Link to="/marble-powder-for-paint-industry" className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                Marble Powder for Paint
              </Link>
            </li>
            <li>
              <Link to="/caco3-for-paper-industry" className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                CaCO₃ for Paper Industry
              </Link>
            </li>
            <li>
              <Link to="/pcc-vs-gcc-difference" className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                PCC vs GCC Difference
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-5 text-accent text-sm tracking-wide uppercase">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 text-primary-foreground/60">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
              E-6 RIICO Ind. Area, Bidiyad, Makrana, Rajasthan, India
            </li>
            <li className="flex items-center gap-3 text-primary-foreground/60">
              <Phone className="w-4 h-4 shrink-0 text-accent" />
              <a href="tel:+918529067010" className="hover:text-accent transition-colors">+91 85290 67010</a>
            </li>
            <li className="flex items-center gap-3 text-primary-foreground/60">
              <Phone className="w-4 h-4 shrink-0 text-accent" />
              <a href="tel:+919462567010" className="hover:text-accent transition-colors">+91 94625 67010</a>
            </li>
            <li className="flex items-center gap-3 text-primary-foreground/60">
              <Mail className="w-4 h-4 shrink-0 text-accent" />
              <a href="mailto:sales@classicmicrones.com" className="hover:text-accent transition-colors">sales@classicmicrones.com</a>
            </li>
            <li className="flex items-center gap-3 text-primary-foreground/60">
              <Mail className="w-4 h-4 shrink-0 text-accent" />
              <a href="mailto:purchase@classicmicrones.com" className="hover:text-accent transition-colors">purchase@classicmicrones.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
        <p>© {new Date().getFullYear()} Classic Micrones. All rights reserved.</p>
        <p>Calcium Carbonate Manufacturer & Supplier — India</p>
      </div>
    </div>
  </footer>
);

export default Footer;
