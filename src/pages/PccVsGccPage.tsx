import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Factory, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { Helmet } from "react-helmet-async";

const comparisonData = [
  { property: "Full Name", pcc: "Precipitated Calcium Carbonate", gcc: "Ground Calcium Carbonate" },
  { property: "Production Method", pcc: "Chemical synthesis (carbonation process)", gcc: "Mechanical grinding of natural marble/limestone" },
  { property: "Source", pcc: "Synthetically produced from limestone", gcc: "Naturally occurring marble, limestone, chalk" },
  { property: "Crystal Structure", pcc: "Controlled (calcite, aragonite, vaterite)", gcc: "Natural calcite (rhombohedral)" },
  { property: "Particle Shape", pcc: "Uniform, controlled shapes (cubic, scalenohedral)", gcc: "Irregular, angular particles" },
  { property: "Particle Size Range", pcc: "0.02 – 5 microns (ultra-fine)", gcc: "1 – 75 microns (fine to coarse)" },
  { property: "Purity (CaCO₃)", pcc: "97% – 99%", gcc: "95% – 98%" },
  { property: "Whiteness", pcc: "95% – 98%", gcc: "90% – 97%" },
  { property: "Oil Absorption", pcc: "25 – 50 g/100g (higher)", gcc: "15 – 22 g/100g (lower)" },
  { property: "Cost", pcc: "Higher (complex manufacturing)", gcc: "Lower (simpler processing)" },
  { property: "Availability", pcc: "Limited production capacity", gcc: "Widely available in bulk" },
  { property: "Best For", pcc: "Specialty applications requiring ultra-fine particles", gcc: "General industrial applications, bulk use" },
];

const gccAdvantages = [
  "Significantly lower cost per tonne compared to PCC",
  "Available in large bulk quantities for industrial-scale production",
  "Lower oil absorption — better for paint and coating formulations",
  "Simpler supply chain — sourced directly from natural mineral deposits",
  "Consistent quality from mine-to-factory controlled production",
  "Wide range of mesh sizes (200–2500) for diverse applications",
  "Proven performance across paint, paper, plastic, and pharma industries",
  "Environmental advantage — lower energy consumption in production",
];

const PccVsGccPage = () => (
  <>
    <Helmet>
      <title>PCC vs GCC: Key Differences Explained | Classic Micrones</title>
      <meta name="description" content="Compare Precipitated (PCC) vs Ground (GCC) Calcium Carbonate — properties, cost and applications. Guidance from a trusted Indian GCC supplier." />
      <link rel="canonical" href="https://classicmicrones.lovable.app/pcc-vs-gcc-difference" />
    </Helmet>

    {/* Hero */}
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">
            Industry Knowledge
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-3xl md:text-5xl font-heading font-extrabold leading-tight mb-6">
            PCC vs GCC: Understanding the Difference
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
            Precipitated Calcium Carbonate (PCC) and Ground Calcium Carbonate (GCC) are both forms of CaCO₃, but they differ significantly in production method, properties, cost, and applications. This guide helps you understand which type is right for your manufacturing needs.
          </motion.p>
        </div>
      </div>
    </section>

    {/* Definitions */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-heading font-bold text-primary text-xl mb-4">What is PCC?</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              <strong>Precipitated Calcium Carbonate (PCC)</strong> is a synthetic form of CaCO₃ manufactured through a chemical process called carbonation. Limestone is first calcined (heated) to produce calcium oxide (quicklime), which is then slaked with water to form calcium hydroxide. Carbon dioxide gas is passed through this slurry to "precipitate" pure calcium carbonate crystals.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This controlled process allows manufacturers to engineer specific particle sizes, crystal shapes, and surface characteristics. PCC is typically ultra-fine (0.02–5 microns) and is used in specialty applications where precise particle control is critical.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card border border-accent/30 rounded-lg p-6">
            <h2 className="font-heading font-bold text-primary text-xl mb-4">What is GCC?</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              <strong>Ground Calcium Carbonate (GCC)</strong> is produced by mechanically crushing, grinding, and classifying natural calcium carbonate minerals—primarily marble, limestone, and chalk. The mineral retains its natural crystal structure through the process.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              GCC is the most widely used form of calcium carbonate in industrial applications. Its natural origin, cost-effectiveness, and availability in large volumes make it the preferred choice for <Link to="/marble-powder-for-paint-industry" className="text-accent hover:underline font-medium">paint</Link>, <Link to="/caco3-for-paper-industry" className="text-accent hover:underline font-medium">paper</Link>, plastics, and other manufacturing industries. As a leading <Link to="/gcc-supplier-india" className="text-accent hover:underline font-medium">GCC supplier in India</Link>, Classic Micrones offers grades from 200 to 2500 mesh.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading label="Side-by-Side" title="PCC vs GCC: Detailed Comparison" description="A comprehensive property-by-property comparison to help you make informed decisions." />
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg overflow-hidden overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left px-5 py-3 font-heading font-semibold">Property</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold">PCC</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold border-l border-primary-foreground/20">GCC</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.property} className={i % 2 === 0 ? "bg-card" : "bg-surface"}>
                    <td className="px-5 py-3 font-medium text-foreground">{row.property}</td>
                    <td className="px-5 py-3 text-muted-foreground">{row.pcc}</td>
                    <td className="px-5 py-3 text-muted-foreground border-l border-border">{row.gcc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    {/* When to Use */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <SectionHeading label="Decision Guide" title="When to Use PCC vs GCC" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-heading font-bold text-primary mb-4">Use PCC When:</h3>
            <ul className="space-y-3">
              {[
                "You need ultra-fine particles (< 2 microns)",
                "Specific crystal shapes are required (scalenohedral, cubic)",
                "Specialty applications like premium sealants or adhesives",
                "Maximum whiteness (98%+) is critical",
                "Low-volume, high-value formulations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-bold text-primary mb-4">Use GCC When:</h3>
            <ul className="space-y-3">
              {[
                "Cost-effectiveness is a priority",
                "Bulk volumes are required for production",
                "Paint, paper, or plastic manufacturing",
                "General-purpose filler applications",
                "Lower oil absorption is beneficial",
                "Reliable, consistent supply is essential",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Why GCC */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <SectionHeading label="Industry Reality" title="Why GCC is More Practical for Most Industries" description="For the majority of industrial applications, Ground Calcium Carbonate offers the best balance of quality, cost, and availability." />
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {gccAdvantages.map((adv) => (
            <div key={adv} className="flex items-start gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm text-primary-foreground/80">{adv}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-primary-foreground/60 text-sm">
            Learn more about our <Link to="/calcium-carbonate-manufacturer-india" className="text-accent hover:underline font-medium">calcium carbonate manufacturing process</Link> and how we ensure premium quality in every batch.
          </p>
        </div>
      </div>
    </section>

    {/* Soft CTA */}
    <section className="section-padding bg-accent">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
            Need Help Choosing the Right Grade?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Our technical team can recommend the ideal CaCO₃ grade for your specific application. Get expert guidance and competitive pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light font-bold text-base px-8 h-12">
                Talk to Our Experts
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

export default PccVsGccPage;
