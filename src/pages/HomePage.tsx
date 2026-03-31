import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Award, Truck, Factory, Paintbrush, FileText, FlaskConical, Package, CheckCircle, Phone, ArrowRight, Star } from "lucide-react";
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const HomePage = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Calcium Carbonate Processing Plant" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4" /> Trusted by 500+ manufacturers
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6"
          >
            High Purity Calcium Carbonate for{" "}
            <span className="text-accent">Industrial Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-primary-foreground/80 mb-8 leading-relaxed"
          >
            Premium CaCO₃ powder with up to 98% purity. Serving paint, paper, plastics, and pharma industries with consistent quality and reliable supply.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-teal-dark font-bold text-base px-8 h-12">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 h-12">
                View Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary py-0 -mt-1">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-primary-foreground/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center py-8 md:py-12"
            >
              <div className="text-3xl md:text-4xl font-heading font-extrabold text-accent">{s.value}</div>
              <div className="text-sm text-primary-foreground/60 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Product Highlight */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Our Product</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Premium Grade CaCO₃ Powder
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our Calcium Carbonate powder is manufactured from the finest quality marble sourced from Rajasthan's rich mineral deposits. Every batch undergoes rigorous quality testing to ensure consistent purity, whiteness, and particle size distribution.
            </p>
            <ul className="space-y-3 mb-8">
              {["Up to 98% Calcium Carbonate content", "Whiteness: 95%+ brightness", "Available in 200 to 2500 mesh sizes", "Low moisture and impurity levels", "Bulk supply available"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/products">
              <Button className="bg-accent text-accent-foreground hover:bg-teal-dark font-semibold">
                View Full Specifications <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={productImg} alt="High purity CaCO₃ powder" loading="lazy" width={1024} height={1024} className="rounded-lg shadow-2xl w-full" />
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <ind.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">{ind.title}</h3>
              <p className="text-sm text-muted-foreground">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/industries">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 font-semibold">
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
          label="Why Classic Microns"
          title="Built on Quality, Driven by Trust"
          description="We are committed to delivering the finest calcium carbonate with unmatched consistency."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6"
            >
              <item.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-heading font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Warehouse / Supply */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={warehouseImg} alt="Classic Microns warehouse and supply chain" loading="lazy" width={1200} height={800} className="rounded-lg shadow-xl w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Bulk Supply</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Reliable Supply, On-Time Delivery
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a monthly production capacity of 10,000+ tons and strategically located warehouses, we ensure timely delivery of bulk orders anywhere in India. Our logistics network is designed for efficiency and reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="bg-accent text-accent-foreground hover:bg-teal-dark font-semibold">
                  Request Bulk Quote
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 font-semibold">
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
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Rajesh Sharma", company: "Excel Paints Pvt Ltd", text: "Classic Microns has been our trusted supplier for over 5 years. The consistency in quality and timely delivery sets them apart." },
            { name: "Anita Desai", company: "Greenfield Plastics", text: "Their CaCO₃ powder significantly improved our PVC compound quality while reducing our overall production costs." },
            { name: "Vikram Mehta", company: "Meridian Paper Mills", text: "Outstanding whiteness and particle size consistency. Their technical support team is always available to help." },
          ].map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-heading font-semibold text-primary text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.company}</div>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
            Ready to Elevate Your Production?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Get premium quality CaCO₃ powder at competitive prices. Contact us today for a custom quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light font-bold text-base px-8 h-12">
                Get a Free Quote
              </Button>
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-semibold text-base px-8 h-12">
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
