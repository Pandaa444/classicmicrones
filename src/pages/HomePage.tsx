import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Award, Truck, Factory, Paintbrush, FileText, FlaskConical, Package, CheckCircle, Phone, ArrowRight, Star } from "lucide-react";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-factory.jpg";
import productImg from "@/assets/product-powder.jpg";
import warehouseImg from "@/assets/warehouse.jpg";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Calcium Purity" },
  { value: "50+", label: "Companies Served" },
  { value: "Own Mines", label: "Biggest Mine Owners" },
];

const industries = [
  { icon: Paintbrush, title: "Paint & Coatings", desc: "Superior whiteness and particle consistency for premium paints." },
  { icon: FileText, title: "Paper Industry", desc: "High brightness filler for improved paper quality and opacity." },
  { icon: Package, title: "Plastics & PVC", desc: "Reinforcing filler to reduce costs while maintaining strength." },
  { icon: FlaskConical, title: "Pharma & Cosmetics", desc: "Ultra-fine, high-purity powder for pharmaceutical applications." },
];

const whyUs = [
  { icon: Shield, title: "98% Purity", desc: "Lab-tested, consistently high calcium content." },
  { icon: Award, title: "Certified Quality", desc: "ISO-standard manufacturing processes." },
  { icon: Truck, title: "Reliable Supply", desc: "On-time delivery across India." },
  { icon: Factory, title: "Custom Grades", desc: "Tailored mesh sizes for your application." },
];

const testimonials = [
  { name: "Rajesh Sharma", company: "Excel Paints Pvt Ltd", text: "Classic Micrones has been our trusted supplier for over 5 years. The consistency in quality and timely delivery sets them apart." },
  { name: "Anita Desai", company: "Greenfield Plastics", text: "Their CaCO₃ powder significantly improved our PVC compound quality while reducing our overall production costs." },
  { name: "Vikram Mehta", company: "Meridian Paper Mills", text: "Outstanding whiteness and particle size consistency. Their technical support team is always available to help." },
  { name: "Kuldeep Singh", company: "K.S. Microfillers", text: "We've been sourcing CaCO₃ from Classic Micrones for years. Their purity levels are unmatched and supply is always on time." },
  { name: "Manoj Gupta", company: "CMI Industries", text: "Excellent product quality and professional service. Classic Micrones delivers exactly what they promise — every single batch." },
  { name: "Suresh Patel", company: "Shree Polymer Industries", text: "Best calcium carbonate supplier we've worked with. Great pricing, consistent quality, and very responsive team." },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

const HomePage = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Calcium Carbonate Processing Plant" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
      </div>
      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease }}
            className="inline-flex items-center gap-2 bg-accent/15 text-accent px-5 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <Star className="w-4 h-4" /> Trusted by 50+ companies · Own Mine Owners
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary-foreground leading-[1.05] mb-8"
          >
            High Purity Calcium Carbonate for{" "}
            <span className="text-accent">Industrial Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease }}
            className="text-lg md:text-xl text-primary-foreground/75 mb-10 leading-relaxed max-w-2xl"
          >
            Premium CaCO₃ powder with up to 98% purity. Serving paint, paper, plastics, and pharma industries with consistent quality and reliable supply.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-teal-dark font-bold text-base px-8 h-13 rounded-full">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-teal-dark font-bold text-base px-8 h-13 rounded-full">
                View Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-primary-foreground/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease }}
              className="text-center py-10 md:py-14"
            >
              <div className="text-3xl md:text-5xl font-heading font-extrabold text-accent">{s.value}</div>
              <div className="text-sm text-primary-foreground/50 mt-2 tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Product Highlight */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">Our Product</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-primary mb-8 leading-[1.1]">
              Premium Grade CaCO₃ Powder
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
              Our Calcium Carbonate powder is manufactured from the finest quality marble sourced from Rajasthan's rich mineral deposits. Every batch undergoes rigorous quality testing to ensure consistent purity, whiteness, and particle size distribution.
            </p>
            <ul className="space-y-4 mb-10">
              {["Up to 98% Calcium Carbonate content", "Whiteness: 95%+ brightness", "Available in 200 to 2500 mesh sizes", "Low moisture and impurity levels", "Bulk supply available"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/products">
              <Button className="bg-accent text-accent-foreground hover:bg-teal-dark font-semibold rounded-full px-6">
                View Full Specifications <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <img src={productImg} alt="High purity CaCO₃ powder" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-2xl w-full" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          label="Industries We Serve"
          title="Powering Diverse Industries"
          description="Our calcium carbonate is the backbone of manufacturing processes across multiple sectors."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease }}
              className="bg-card border border-border/60 rounded-2xl p-8 hover:shadow-xl hover:border-accent/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/8 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
                <ind.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-primary text-lg mb-3">{ind.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link to="/industries">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 font-semibold rounded-full px-8">
              Explore All Industries <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <SectionHeading
          label="Why Classic Micrones"
          title="Built on Quality, Driven by Trust"
          description="We are committed to delivering the finest calcium carbonate with unmatched consistency."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8"
            >
              <item.icon className="w-10 h-10 text-accent mb-5" />
              <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Warehouse / Supply */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <img src={warehouseImg} alt="Classic Micrones warehouse and supply chain" loading="lazy" width={1200} height={800} className="rounded-2xl shadow-xl w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">Bulk Supply</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-primary mb-8 leading-[1.1]">
              Reliable Supply, On-Time Delivery
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
              As one of the biggest mine owners in the Makrana region, we have complete control over raw material sourcing. Combined with strategically located warehouses, we ensure timely delivery of bulk orders anywhere in India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="bg-accent text-accent-foreground hover:bg-teal-dark font-semibold rounded-full px-6">
                  Request Bulk Quote
                </Button>
              </Link>
              <a href="tel:+918529067010">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 font-semibold rounded-full px-6">
                  <Phone className="mr-2 w-4 h-4" /> Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Industry Leaders"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease }}
              className="bg-card border border-border/60 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-heading font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-accent">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-accent-foreground mb-6 leading-[1.1]">
            Ready to Elevate Your Production?
          </h2>
          <p className="text-accent-foreground/80 mb-10 text-base md:text-lg leading-relaxed">
            Get premium quality CaCO₃ powder at competitive prices. Contact us today for a custom quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light font-bold text-base px-10 h-13 rounded-full">
                Get a Free Quote
              </Button>
            </Link>
            <a href="https://wa.me/918529067010" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-semibold text-base px-10 h-13 rounded-full">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default HomePage;
