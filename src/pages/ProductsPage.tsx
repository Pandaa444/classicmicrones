import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import PageSEO from "@/components/PageSEO";
import productImg from "@/assets/product-powder.jpg";

const specs = [
  { property: "Chemical Name", value: "Calcium Carbonate (CaCO₃)" },
  { property: "CaCO₃ Content", value: "95% – 98%" },
  { property: "Whiteness", value: "93% – 97%" },
  { property: "Mesh Size", value: "200, 300, 400, 500, 800, 1000, 1250, 2500" },
  { property: "Moisture", value: "< 0.5%" },
  { property: "pH Value", value: "8.5 – 9.5" },
  { property: "Specific Gravity", value: "2.7 g/cm³" },
  { property: "Oil Absorption", value: "14 – 18 g/100g" },
  { property: "Bulk Density", value: "0.8 – 1.2 g/cm³" },
  { property: "Appearance", value: "Fine white powder" },
  { property: "Packaging", value: "25 kg, 50 kg bags / Jumbo bags" },
];

const grades = [
  {
    name: "Standard Grade",
    purity: "95%+",
    mesh: "200 – 400",
    use: "Construction, putty, basic fillers",
  },
  {
    name: "Premium Grade",
    purity: "97%+",
    mesh: "500 – 800",
    use: "Paint, paper, PVC compounds",
  },
  {
    name: "Ultra-Fine Grade",
    purity: "98%+",
    mesh: "1000 – 2500",
    use: "Pharma, cosmetics, specialty coatings",
  },
];

const ProductsPage = () => (
  <div>
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Products</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mt-3 mb-6">
            Calcium Carbonate Powder
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Available in multiple grades and mesh sizes to meet the exact requirements of your manufacturing process.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Product Overview */}
    <section className="section-padding">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={productImg} alt="CaCO₃ Calcium Carbonate Powder" loading="lazy" width={1024} height={1024} className="rounded-lg shadow-xl w-full" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Premium Quality CaCO₃</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Manufactured from the finest quality marble sourced from Rajasthan's mineral-rich deposits, our Calcium Carbonate powder delivers exceptional whiteness, consistent particle size, and high purity for demanding industrial applications.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Rigorous quality testing on every batch",
              "Multiple mesh sizes from coarse to ultra-fine",
              "Low moisture and impurity content",
              "Custom formulation available",
              "Competitive bulk pricing",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a href="/tds-brochure.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 font-semibold">
              <Download className="mr-2 w-4 h-4" /> Download TDS / Brochure (PDF)
            </Button>
          </a>
        </motion.div>
      </div>
    </section>

    {/* Grades */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <SectionHeading label="Product Grades" title="Choose the Right Grade" description="We offer three distinct grades optimized for specific industrial applications." />
        <div className="grid md:grid-cols-3 gap-6">
          {grades.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 hover:shadow-lg transition-all"
            >
              <h3 className="font-heading font-bold text-primary text-lg mb-4">{g.name}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Purity</span>
                  <span className="font-semibold text-accent">{g.purity}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Mesh Size</span>
                  <span className="font-semibold text-foreground">{g.mesh}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Applications</span>
                  <span className="font-medium text-foreground text-right max-w-[60%]">{g.use}</span>
                </div>
              </div>
              <Link to="/contact" className="block mt-6">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-teal-dark font-semibold text-sm">
                  Request Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Technical Specs Table */}
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading label="Specifications" title="Technical Data Sheet" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-6 py-3 text-sm font-heading font-semibold">Property</th>
                <th className="text-left px-6 py-3 text-sm font-heading font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((s, i) => (
                <tr key={s.property} className={i % 2 === 0 ? "bg-surface" : "bg-card"}>
                  <td className="px-6 py-3 text-sm font-medium text-foreground">{s.property}</td>
                  <td className="px-6 py-3 text-sm text-muted-foreground">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-accent">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-accent-foreground mb-4">Need a Custom Grade?</h2>
        <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
          We can manufacture CaCO₃ powder to your exact specifications. Tell us your requirements.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light font-bold">
            Get Custom Quote
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default ProductsPage;
