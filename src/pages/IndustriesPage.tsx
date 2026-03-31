import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Paintbrush, FileText, Package, FlaskConical, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Paintbrush,
    title: "Paint & Coatings Industry",
    description: "Calcium Carbonate is one of the most widely used extender pigments in the paint and coatings industry. It provides excellent opacity, whiteness, and consistency to paint formulations.",
    benefits: [
      "Acts as a cost-effective extender pigment",
      "Improves paint opacity and whiteness",
      "Enhances coating smoothness and finish",
      "Provides excellent dispersion properties",
      "Reduces overall production costs",
    ],
    applications: "Interior and exterior paints, primers, putty, texture coatings, industrial coatings",
  },
  {
    icon: FileText,
    title: "Paper Manufacturing",
    description: "In the paper industry, CaCO₃ serves as both a filler and coating pigment. It improves paper brightness, opacity, and printability while reducing the amount of expensive wood pulp required.",
    benefits: [
      "Increases paper brightness and opacity",
      "Improves surface smoothness for better printability",
      "Reduces wood pulp consumption",
      "Enhances ink absorption and drying",
      "Cost-effective filler solution",
    ],
    applications: "Writing paper, printing paper, packaging board, tissue paper, specialty papers",
  },
  {
    icon: Package,
    title: "Plastics & PVC Industry",
    description: "Calcium Carbonate is the most commonly used mineral filler in the plastics industry. It improves mechanical properties, reduces production costs, and enhances the surface finish of plastic products.",
    benefits: [
      "Increases stiffness and dimensional stability",
      "Reduces shrinkage and warping",
      "Improves surface finish and whiteness",
      "Lowers production costs significantly",
      "Enhances impact resistance in PVC",
    ],
    applications: "PVC pipes, cables, profiles, PE films, PP compounds, master batches",
  },
  {
    icon: FlaskConical,
    title: "Pharma & Cosmetics",
    description: "Ultra-fine, high-purity Calcium Carbonate is used in pharmaceutical and cosmetic formulations as an excipient, filler, and active ingredient for calcium supplementation.",
    benefits: [
      "Pharmaceutical-grade purity (98%+)",
      "Consistent and controlled particle size",
      "Safe and non-toxic excipient",
      "Excellent flow properties for tableting",
      "Ideal for calcium supplement formulations",
    ],
    applications: "Calcium tablets, antacid formulations, toothpaste, cosmetic powders, skincare products",
  },
];

const IndustriesPage = () => (
  <div>
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Industries</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mt-3 mb-6">
            Industries We Serve
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our Calcium Carbonate powder is trusted across diverse industries for its consistent quality and reliable performance.
          </p>
        </motion.div>
      </div>
    </section>

    {industries.map((ind, i) => (
      <section key={ind.title} className={`section-padding ${i % 2 === 0 ? "bg-surface" : ""}`}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                <ind.icon className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">{ind.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{ind.description}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="font-heading font-semibold text-primary mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  {ind.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-primary mb-3">Applications</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.applications}</p>
                <Link to="/contact" className="inline-flex mt-4">
                  <Button className="bg-accent text-accent-foreground hover:bg-teal-dark font-semibold text-sm">
                    Get Quote for This Industry <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    ))}

    <section className="section-padding bg-accent">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-accent-foreground mb-4">Serving Your Industry?</h2>
        <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
          Tell us about your application and we'll recommend the perfect CaCO₃ grade.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light font-bold">
            Discuss Your Requirements
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default IndustriesPage;
