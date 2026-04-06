import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Droplets, Sun, Palette, DollarSign, Shield, Factory, Award, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Helmet } from "react-helmet-async";

const benefits = [
  { icon: Sun, title: "Superior Whiteness", desc: "Our CaCO₃ powder delivers 90–97% whiteness, providing excellent base colour and reducing the need for expensive white pigments like TiO₂." },
  { icon: Droplets, title: "Enhanced Opacity & Coverage", desc: "Fine particle size distribution ensures uniform dispersion in paint formulations, improving hiding power and coverage per litre." },
  { icon: DollarSign, title: "Cost Efficiency", desc: "As a high-quality extender filler, our marble powder reduces the overall raw material cost of paint formulations without compromising performance." },
  { icon: Palette, title: "Improved Texture & Finish", desc: "Controlled particle size and low oil absorption produce smooth, consistent paint films with excellent brush and roller application properties." },
];

const specs = [
  { property: "CaCO₃ Content", value: "95% – 98%" },
  { property: "Whiteness", value: "90% – 97%" },
  { property: "Mesh Size (Paint Grade)", value: "300 – 1000 mesh" },
  { property: "Moisture", value: "< 0.5%" },
  { property: "Oil Absorption", value: "15 – 20 g/100g" },
  { property: "pH", value: "8.5 – 9.5" },
  { property: "Specific Gravity", value: "2.7 g/cm³" },
  { property: "Fe₂O₃", value: "< 0.1%" },
  { property: "SiO₂", value: "< 0.5%" },
];

const paintApps = [
  "Interior emulsion paints",
  "Exterior weather-resistant paints",
  "Primer and undercoat formulations",
  "Textured and decorative coatings",
  "Putty and wall filler compounds",
  "Industrial and protective coatings",
  "Distemper paints",
  "Elastomeric coatings",
];

const MarblePowderPaintPage = () => (
  <>
    <Helmet>
      <title>Marble Powder for Paint Industry | CaCO₃ Filler – Classic Micrones</title>
      <meta name="description" content="High-purity marble powder (CaCO₃) for paint industry. Improve whiteness, opacity, and reduce costs. Classic Micrones – trusted supplier for paint manufacturers in India." />
      <link rel="canonical" href="https://classicmicrones.com/marble-powder-for-paint-industry" />
    </Helmet>

    {/* Hero */}
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            Paint Industry Solutions
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-3xl md:text-5xl font-heading font-extrabold leading-tight mb-6">
            Premium Marble Powder for Paint Industry
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Classic Micrones supplies high-purity Calcium Carbonate (CaCO₃) marble powder specifically optimized for the paint and coatings industry. Our paint-grade CaCO₃ enhances whiteness, improves opacity, and significantly reduces formulation costs for paint manufacturers across India.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-teal-dark font-bold text-base px-8 h-12">
                Get Paint-Grade Quote <ArrowRight className="ml-2 w-5 h-5" />
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

    {/* Role in Paints */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Industry Application" title="Role of CaCO₃ in Paint Manufacturing" />
          <div className="text-muted-foreground space-y-4">
            <p className="leading-relaxed">
              Calcium Carbonate is one of the most important raw materials in the paint and coatings industry. It serves as a primary extender filler, accounting for a significant portion of the dry weight in most paint formulations. The quality of CaCO₃ directly influences the final paint's appearance, performance, and cost.
            </p>
            <p className="leading-relaxed">
              In paint manufacturing, <Link to="/gcc-supplier-india" className="text-accent hover:underline font-medium">Ground Calcium Carbonate (GCC)</Link> is preferred for its natural whiteness, controlled particle size, and chemical inertness. It improves paint opacity, provides body and texture, and acts as a cost-effective substitute for premium pigments.
            </p>
            <p className="leading-relaxed">
              Our marble powder is sourced from the high-quality marble deposits of Makrana, Rajasthan, and processed to paint-grade specifications. The result is a product that paint manufacturers can rely on for batch-to-batch consistency, excellent dispersion characteristics, and superior whiteness.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading label="Key Benefits" title="Why Our CaCO₃ Works Best for Paint" description="Engineered for paint manufacturers who demand consistent quality and performance." />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent/30 transition-all">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Applications List */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <SectionHeading label="Use Cases" title="Paint Applications" description="Our marble powder is used across a wide range of paint and coating products." />
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-3">
          {paintApps.map((app) => (
            <div key={app} className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm text-foreground">{app}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Technical Specs */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading label="Technical Data" title="Paint-Grade CaCO₃ Specifications" />
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-6 py-3 font-heading font-semibold">Property</th>
                  <th className="text-left px-6 py-3 font-heading font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((row, i) => (
                  <tr key={row.property} className={i % 2 === 0 ? "bg-card" : "bg-surface"}>
                    <td className="px-6 py-3 font-medium text-foreground">{row.property}</td>
                    <td className="px-6 py-3 text-muted-foreground">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            For detailed technical data, view our <Link to="/calcium-carbonate-manufacturer-india" className="text-accent hover:underline">full product specifications</Link>.
          </p>
        </div>
      </div>
    </section>

    {/* Why Our Product */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <SectionHeading label="Our Advantage" title="Why Paint Manufacturers Choose Classic Micrones" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Shield, title: "98% Purity", desc: "Consistently high CaCO₃ content for reliable formulations." },
            { icon: Award, title: "ISO Certified", desc: "Quality management systems you can trust." },
            { icon: Factory, title: "Own Mines", desc: "Source-level control over raw material quality." },
            { icon: Truck, title: "Bulk Supply", desc: "Reliable delivery of large volumes across India." },
          ].map((item) => (
            <div key={item.title} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-5">
              <item.icon className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-heading font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-primary-foreground/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-accent">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
            Upgrade Your Paint Formulations
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Get premium paint-grade CaCO₃ powder at competitive bulk pricing. Contact us for samples and specifications.
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

export default MarblePowderPaintPage;
