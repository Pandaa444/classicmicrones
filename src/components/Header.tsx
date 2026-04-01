import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Industries", path: "/industries" },
  { label: "Why Us", path: "/why-us" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Classic Micrones" width={40} height={40} className="w-10 h-10" />
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-lg text-primary">Classic Micrones</span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">CaCO₃ Specialists</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-accent bg-accent/10"
                  : "text-foreground/80 hover:text-accent hover:bg-accent/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+918529067010" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            +91 85290 67010
          </a>
          <Link to="/contact">
            <Button className="bg-accent text-accent-foreground hover:bg-teal-dark font-semibold">
              Get Quote
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent bg-accent/10"
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-2 bg-accent text-accent-foreground hover:bg-teal-dark font-semibold">
                Get Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
