import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Sun, Layers, Shield, Factory, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Helmet } from "react-helmet-async";

const roles = [
  { icon: Layers, title: "Filler Application", desc: "CaCO₃ is added to the paper pulp to fill the gaps between cellulose fibres. This improves paper density, reduces porosity, and gives the sheet a smoother writing and printing surface. Filler-grade calcium carbonate typically accounts for 10–30% of the paper weight." },
  { icon: Sun, title: "Coating Application", desc: "In coating-grade applications, ultra-fine CaCO₃ is applied to the paper surface to enhance brightness, gloss, and printability. Coated papers are used for magazines, catalogues, and high-quality print materials where visual appeal is critical." },
];

const benefits = [
  { title: "Improved Brightness", desc: "Our CaCO₃ with 90–97% whiteness significantly enhances paper brightness, reducing the need for optical brightening agents." },
  { title: "Enhanced Smoothness", desc: "Fine particle size distribution produces a smooth paper surface ideal for high-resolution printing and writing." },
  { title: "Better Printability", desc: "Uniform CaCO₃ coating improves ink absorption and colour reproduction for offset, digital, and gravure printing." },
  { title: "Increased Opacity", desc: "Higher filler loading with our premium CaCO₃ improves paper opacity, reducing show-through in double-sided printing." },
  { title: "Cost Reduction", desc: "Replacing expensive cellulose fibres with high-quality CaCO₃ filler reduces raw material costs while maintaining paper quality." },
  { title: "Environmental Benefits", desc: "Using CaCO₃ as a filler reduces wood pulp consumption, contributing to more sustainable paper manufacturing processes." },
];

const specs = [
  { property: "CaCO₃ Content", value: "96% – 98%" },
  { property: "Whiteness", value: "93% – 97%" },
  { property: "Mesh Size (Paper Grade)", value: "600 – 2500 mesh" },
  { property: "Moisture", value: "< 0.3%" },
  { property: "pH", value: "9.0 – 9.5" },
  { property: "Oil Absorption", value: "18 – 22 g/100g" },
  { property: "Fe₂O₃", value: "< 0.05%" },
  { property: "SiO₂", value: "< 0.3%" },
  { property: "Particle Size (D97)", value: "< 10 microns" },
];

const CaCO3PaperPage = () => (
  <>
    <Helmet>
      <title>Calcium Carbonate for Paper Industry | Classic Micrones</title>
      <meta name="description" content="High-purity CaCO₃ filler for paper mills in India. Improves brightness, smoothness and opacity. Reliable bulk supply across the country." />
      <link rel="canonical" href="https://classicmicrones.lovable.app/caco3-for-paper-industry" />
    </Helmet>

    {/* Hero */}
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            Paper Industry Solutions
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-3xl md:text-5xl font-heading font-extrabold leading-tight mb-6">
            Calcium Carbonate for Paper Industry
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Classic Micrones supplies premium-grade Calcium Carbonate (CaCO₃) engineered for the paper manufacturing industry. Our paper-grade CaCO₃ enhances brightness, smoothness, and printability while reducing production costs for paper mills across India.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-teal-dark font-bold text-base px-8 h-12">
                Get Paper-Grade Quote <ArrowRight className="ml-2 w-5 h-5" />
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

    {/* Role in Paper */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <SectionHeading label="Industry Application" title="Role of CaCO₃ in Paper Manufacturing" description="Calcium Carbonate plays a dual role in paper production—as both a filler and a coating pigment." />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {roles.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-card border border-border rounded-lg p-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-primary mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-6 text-sm">
          As a leading <Link to="/calcium-carbonate-manufacturer-india" className="text-accent hover:underline font-medium">calcium carbonate manufacturer in India</Link>, we produce both filler and coating-grade CaCO₃ for paper mills.
        </p>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading label="Key Benefits" title="Benefits of CaCO₃ in Paper Production" description="Our calcium carbonate delivers measurable improvements to paper quality and production economics." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-heading font-bold text-primary mb-2 text-sm">{b.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Specs */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <SectionHeading label="Technical Data" title="Paper-Grade CaCO₃ Specifications" />
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
            Compare our <Link to="/gcc-supplier-india" className="text-accent hover:underline">GCC grades</Link> or learn the <Link to="/pcc-vs-gcc-difference" className="text-accent hover:underline">difference between PCC and GCC</Link>.
          </p>
        </div>
      </div>
    </section>

    {/* Supply Reliability */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <SectionHeading label="Supply Chain" title="Reliable Supply for Paper Mills" description="Paper mills need consistent, high-volume supply. We deliver." />
        <div className="grid sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
          {[
            { icon: Factory, title: "Own Mines", desc: "Complete raw material control" },
            { icon: Shield, title: "Batch Consistency", desc: "Lab-tested every shipment" },
            { icon: Truck, title: "Pan-India Delivery", desc: "On-time logistics network" },
            { icon: Award, title: "ISO Certified", desc: "Quality management assured" },
          ].map((item) => (
            <div key={item.title} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-5">
              <item.icon className="w-8 h-8 text-accent mb-3 mx-auto" />
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
            Enhance Your Paper Quality with Premium CaCO₃
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Get paper-grade calcium carbonate at competitive prices. Contact us for samples, specifications, and bulk pricing.
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

export default CaCO3PaperPage;
