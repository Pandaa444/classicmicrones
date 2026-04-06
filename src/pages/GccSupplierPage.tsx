import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Paintbrush, FileText, Package, FlaskConical, Truck, Shield, Factory, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Helmet } from "react-helmet-async";

const applications = [
  {
    icon: Paintbrush,
    title: "Paints & Coatings",
    points: [
      "Enhances whiteness and hiding power in emulsions",
      "Improves paint consistency and reduces settling",
      "Cost-effective extender for interior and exterior paints",
      "Provides excellent surface finish and coverage",
    ],
  },
  {
    icon: Package,
    title: "Plastics & PVC",
    points: [
      "Increases impact strength and dimensional stability",
      "Reduces material cost without compromising quality",
      "Improves surface finish of injection-moulded parts",
      "Enhances thermal stability in PVC compounds",
    ],
  },
  {
    icon: FileText,
    title: "Paper Industry",
    points: [
      "Increases paper brightness and opacity",
      "Improves printability and ink absorption",
      "Reduces production costs as a filler material",
      "Enhances smoothness for coating-grade applications",
    ],
  },
  {
    icon: FlaskConical,
    title: "Pharma & Cosmetics",
    points: [
      "High-purity grades suitable for pharmaceutical excipients",
      "Ultra-fine particles for smooth cosmetic formulations",
      "Consistent quality for regulatory compliance",
      "Low heavy-metal content ensures safety standards",
    ],
  },
];

const advantages = [
  "Up to 98% CaCO₃ purity across all grades",
  "Whiteness levels of 90% to 97%",
  "Available in mesh sizes from 200 to 2500",
  "Low moisture content (< 0.5%)",
  "Consistent particle size distribution",
  "Coated and uncoated grades available",
  "Low impurity levels (Fe₂O₃ < 0.1%, SiO₂ < 0.5%)",
  "Suitable for food-contact and pharma-grade applications",
];

const GccSupplierPage = () => (
  <>
    <Helmet>
      <title>GCC Supplier India | Ground Calcium Carbonate – Classic Micrones</title>
      <meta name="description" content="Classic Micrones is a trusted GCC supplier in India. We provide high-purity Ground Calcium Carbonate powder for paint, plastic, paper, and pharma industries. Bulk supply available." />
      <link rel="canonical" href="https://classicmicrones.com/gcc-supplier-india" />
    </Helmet>

    {/* Hero */}
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            Ground Calcium Carbonate
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-3xl md:text-5xl font-heading font-extrabold leading-tight mb-6">
            Trusted GCC Supplier in India
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Classic Micrones supplies premium-grade Ground Calcium Carbonate (GCC) powder to industries across India. Sourced from our own mines in Makrana, Rajasthan, our GCC is processed using advanced grinding technology to deliver exceptional purity, whiteness, and consistency for your manufacturing needs.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-teal-dark font-bold text-base px-8 h-12">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="https://wa.me/918529067010" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 h-12">
                WhatsApp Us
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>

    {/* What is GCC */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Understanding GCC" title="What is Ground Calcium Carbonate (GCC)?" />
          <div className="text-muted-foreground space-y-4">
            <p className="leading-relaxed">
              Ground Calcium Carbonate (GCC) is produced by mechanically crushing, grinding, and classifying natural calcium carbonate minerals such as marble, limestone, and chalk. Unlike <Link to="/pcc-vs-gcc-difference" className="text-accent hover:underline font-medium">Precipitated Calcium Carbonate (PCC)</Link>, which is synthetically produced through a chemical process, GCC retains the natural crystal structure of the source mineral.
            </p>
            <p className="leading-relaxed">
              GCC is the most widely used form of calcium carbonate in industrial applications due to its cost-effectiveness, natural abundance, and versatile properties. It serves as a functional filler, coating pigment, and reinforcing agent across multiple industries.
            </p>
            <p className="leading-relaxed">
              As a leading <Link to="/calcium-carbonate-manufacturer-india" className="text-accent hover:underline font-medium">calcium carbonate manufacturer in India</Link>, Classic Micrones produces GCC in various mesh sizes (200 to 2500) to cater to the specific particle size requirements of different industrial applications. Our GCC is known for its high whiteness (up to 97%), consistent quality, and competitive pricing.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Applications */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading label="Applications" title="GCC Applications Across Industries" description="Ground Calcium Carbonate is an essential raw material in numerous manufacturing processes." />
        <div className="grid md:grid-cols-2 gap-8">
          {applications.map((app, i) => (
            <motion.div key={app.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <app.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-primary text-lg">{app.title}</h3>
              </div>
              <ul className="space-y-2">
                {app.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8">
          Learn more about how our GCC works specifically in <Link to="/marble-powder-for-paint-industry" className="text-accent hover:underline font-medium">paint manufacturing</Link> and <Link to="/caco3-for-paper-industry" className="text-accent hover:underline font-medium">paper production</Link>.
        </p>
      </div>
    </section>

    {/* Product Advantages */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <SectionHeading label="Product Quality" title="GCC Product Advantages" description="Our Ground Calcium Carbonate meets the highest quality standards for industrial use." />
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map((adv) => (
              <div key={adv} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Bulk Supply */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading label="Bulk Supply" title="Reliable Bulk GCC Supply Across India" />
          <div className="text-primary-foreground/80 space-y-4 mb-8">
            <p className="leading-relaxed">
              As one of the biggest mine owners in the Makrana region, Classic Micrones has complete control over raw material sourcing and production capacity. This means we can fulfil large-volume orders consistently, without delays or quality fluctuations.
            </p>
            <p className="leading-relaxed">
              Our strategically located warehouses and established logistics network enable timely delivery of bulk GCC orders anywhere in India. Whether you need 10 tonnes or 500 tonnes per month, we scale our supply to match your production requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Factory, title: "Own Mines", desc: "Direct control over raw material quality" },
              { icon: Truck, title: "Pan-India Delivery", desc: "On-time supply across all states" },
              { icon: Shield, title: "Consistent Quality", desc: "Every batch meets specifications" },
            ].map((item) => (
              <div key={item.title} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-5">
                <item.icon className="w-8 h-8 text-accent mb-3 mx-auto" />
                <h3 className="font-heading font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-primary-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-accent">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
            Need a Reliable GCC Supplier?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Get competitive pricing on premium Ground Calcium Carbonate. Bulk orders welcome.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light font-bold text-base px-8 h-12">
                Request a Quote
              </Button>
            </Link>
            <a href="https://wa.me/918529067010" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-semibold text-base px-8 h-12">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default GccSupplierPage;
