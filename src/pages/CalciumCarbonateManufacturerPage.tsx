import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Phone, Shield, Award, Truck, Factory, Paintbrush, FileText, Package, FlaskConical, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Helmet } from "react-helmet-async";

const tdsData = [
  { property: "Chemical Name", value: "Calcium Carbonate (CaCO₃)" },
  { property: "CaCO₃ Content", value: "95% – 98%" },
  { property: "Whiteness", value: "90% – 97%" },
  { property: "Moisture Content", value: "< 0.5%" },
  { property: "pH Value", value: "8.5 – 9.5" },
  { property: "Specific Gravity", value: "2.7 g/cm³" },
  { property: "Mesh Size Available", value: "200 – 2500 mesh" },
  { property: "Oil Absorption", value: "15 – 22 g/100g" },
  { property: "Loss on Ignition", value: "42% – 44%" },
  { property: "MgCO₃ Content", value: "< 1.5%" },
  { property: "SiO₂ Content", value: "< 0.5%" },
  { property: "Fe₂O₃ Content", value: "< 0.1%" },
];

const industries = [
  { icon: Paintbrush, title: "Paint & Coatings", desc: "Enhances whiteness, opacity, and coverage in interior and exterior paints." },
  { icon: FileText, title: "Paper Industry", desc: "Improves brightness, smoothness, and printability of paper products." },
  { icon: Package, title: "Plastics & PVC", desc: "Acts as a cost-effective reinforcing filler for strength and dimensional stability." },
  { icon: FlaskConical, title: "Pharma & Cosmetics", desc: "Ultra-fine, high-purity grades for pharmaceutical and cosmetic formulations." },
  { icon: Building, title: "Construction", desc: "Used in putty, cement, tiles, and various construction materials." },
  { icon: Factory, title: "Rubber Industry", desc: "Improves tear resistance and processing characteristics of rubber compounds." },
];

const whyUs = [
  { icon: Shield, title: "98% Purity", desc: "Lab-tested calcium carbonate with consistently high CaCO₃ content across every batch." },
  { icon: Award, title: "ISO Certified", desc: "Our manufacturing processes follow ISO-standard quality management systems." },
  { icon: Factory, title: "Own Mine Owners", desc: "As one of the biggest mine owners in Makrana, we control raw material quality from source." },
  { icon: Truck, title: "Pan-India Supply", desc: "Reliable bulk supply with on-time delivery across India through our logistics network." },
];

const CalciumCarbonateManufacturerPage = () => (
  <>
    <Helmet>
      <title>Calcium Carbonate Manufacturer India | Classic Micrones</title>
      <meta name="description" content="Leading calcium carbonate manufacturer in India. High-purity CaCO₃ powder (up to 98%) for paint, paper, plastic and pharma industries. Get a quote." />
      <link rel="canonical" href="https://classicmicrones.lovable.app/calcium-carbonate-manufacturer-india" />
    </Helmet>

    {/* Hero */}
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            Trusted Industrial Mineral Supplier
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-3xl md:text-5xl font-heading font-extrabold leading-tight mb-6">
            Leading Calcium Carbonate Manufacturer in India
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Classic Micrones is a premier manufacturer and supplier of high-purity Calcium Carbonate (CaCO₃) powder based in Makrana, Rajasthan. With our own mines and state-of-the-art processing facilities, we deliver consistent quality CaCO₃ with up to 98% purity for diverse industrial applications across India.
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

    {/* What is CaCO3 */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Understanding the Material" title="What is Calcium Carbonate (CaCO₃)?" />
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="leading-relaxed mb-4">
              Calcium Carbonate (CaCO₃) is a naturally occurring mineral found abundantly in marble, limestone, and chalk deposits. It is one of the most widely used industrial minerals globally, valued for its exceptional whiteness, chemical stability, and versatility across manufacturing processes.
            </p>
            <p className="leading-relaxed mb-4">
              In its processed form, CaCO₃ powder serves as a critical raw material and functional filler in industries ranging from paints and coatings to paper manufacturing, plastics, pharmaceuticals, and construction. The quality of calcium carbonate—determined by its purity, whiteness, particle size, and moisture content—directly impacts the end-product quality.
            </p>
            <p className="leading-relaxed mb-6">
              At Classic Micrones, we source our raw marble from the mineral-rich deposits of Makrana, Rajasthan—the same region renowned for the marble used in the Taj Mahal. This natural advantage, combined with our advanced grinding and classification technology, allows us to produce calcium carbonate powder with purity levels of up to 98%, making it suitable for the most demanding industrial applications.
            </p>
            <p className="leading-relaxed">
              Whether you need <Link to="/gcc-supplier-india" className="text-accent hover:underline font-medium">Ground Calcium Carbonate (GCC)</Link> for paint formulations or ultra-fine CaCO₃ for <Link to="/caco3-for-paper-industry" className="text-accent hover:underline font-medium">paper manufacturing</Link>, our product range covers mesh sizes from 200 to 2500, ensuring the right fit for every application.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Manufacturing Quality */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading label="Our Process" title="Manufacturing Excellence & Quality Control" description="Every batch of our CaCO₃ powder undergoes rigorous quality testing to ensure it meets the highest industrial standards." />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-primary text-lg">Raw Material Sourcing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              As one of the biggest mine owners in the Makrana region, we have complete control over raw material quality from extraction to final processing. Our marble deposits are known for their exceptional whiteness and high calcium content.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-primary text-lg">Advanced Processing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our state-of-the-art grinding and classification equipment ensures precise particle size distribution, consistent whiteness, and minimal impurities. We produce both coated and uncoated grades to meet diverse application needs.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-primary text-lg">Quality Testing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every production batch is tested in our in-house laboratory for CaCO₃ content, whiteness, moisture, particle size, pH, and impurity levels. We maintain detailed quality records for full traceability.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-primary text-lg">Custom Grades</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We offer customized mesh sizes (200 to 2500 mesh) and coating options to match the exact requirements of your application—whether it's for <Link to="/marble-powder-for-paint-industry" className="text-accent hover:underline font-medium">paint formulations</Link>, plastic compounds, or pharmaceutical products.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* TDS Table */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <SectionHeading label="Technical Data" title="Product Specifications (TDS)" description="Our calcium carbonate powder meets stringent quality parameters across all grades." />
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
                {tdsData.map((row, i) => (
                  <tr key={row.property} className={i % 2 === 0 ? "bg-card" : "bg-surface"}>
                    <td className="px-6 py-3 font-medium text-foreground">{row.property}</td>
                    <td className="px-6 py-3 text-muted-foreground">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            * Values may vary slightly by grade and mesh size. Contact us for grade-specific TDS.
          </p>
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading label="Applications" title="Industries We Serve" description="Our calcium carbonate powder powers manufacturing processes across diverse industrial sectors in India." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div key={ind.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent/30 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <ind.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">{ind.title}</h3>
              <p className="text-sm text-muted-foreground">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <SectionHeading label="Our Advantage" title="Why Choose Classic Micrones?" description="We combine raw material ownership, advanced processing, and reliable supply to deliver India's best CaCO₃ powder." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6">
              <item.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-heading font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-primary-foreground/70 mb-4">Discover the <Link to="/pcc-vs-gcc-difference" className="text-accent hover:underline font-medium">difference between PCC and GCC</Link> to find the right grade for your needs.</p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-accent">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
            Get Premium Quality CaCO₃ from India's Trusted Manufacturer
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Whether you need bulk supply for paint, paper, plastics, or pharma — we deliver consistent quality at competitive prices.
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

export default CalciumCarbonateManufacturerPage;
