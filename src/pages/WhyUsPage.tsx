import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Award, Truck, Factory, Settings, HeartHandshake, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const reasons = [
  {
    icon: Shield,
    title: "98% Calcium Purity",
    desc: "Our CaCO₃ consistently tests at 95–98% purity, ensuring your end products meet the highest quality standards.",
    points: ["Lab-tested every batch", "Certificate of Analysis provided", "Meets international purity benchmarks"],
  },
  {
    icon: Award,
    title: "Consistent Quality",
    desc: "Advanced quality control processes ensure batch-to-batch consistency in whiteness, particle size, and chemical composition.",
    points: ["Multi-stage quality checks", "Statistical process control", "Full batch traceability"],
  },
  {
    icon: Truck,
    title: "Own Mines & Reliable Supply",
    desc: "As one of the biggest mine owners in Makrana, we control the entire supply chain from mine to delivery.",
    points: ["Own mines in Makrana region", "Pan-India delivery network", "Complete supply chain control"],
  },
  {
    icon: Factory,
    title: "Modern Manufacturing",
    desc: "State-of-the-art grinding, micronizing, and classification equipment for precise particle size control.",
    points: ["Latest European machinery", "200 to 2500 mesh capability", "Dust-free processing environment"],
  },
  {
    icon: Settings,
    title: "Customization Options",
    desc: "We manufacture CaCO₃ powder to your exact specifications — mesh size, purity level, packaging, and more.",
    points: ["Custom particle size distribution", "Tailored purity levels", "Flexible packaging options"],
  },
  {
    icon: HeartHandshake,
    title: "Competitive Pricing",
    desc: "Direct from our own mines and factory — no middlemen. We pass the cost savings directly to you.",
    points: ["Factory-direct pricing", "Bulk order discounts", "Long-term contract benefits"],
  },
];

const WhyUsPage = () => (
  <div>
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mt-3 mb-6">
            The Classic Micrones Advantage
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            When you choose Classic Micrones, you choose a partner committed to your success.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-accent/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <r.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-primary text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{r.desc}</p>
              <ul className="space-y-2">
                {r.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Numbers */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <SectionHeading label="By The Numbers" title="Our Track Record Speaks" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "5+", label: "Years in Business" },
            { value: "50+", label: "Companies Served" },
            { value: "Own Mines", label: "Biggest Mine Owners" },
            { value: "98%", label: "Max Purity" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-heading font-extrabold text-accent">{s.value}</div>
              <div className="text-sm text-primary-foreground/60 mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-accent">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-accent-foreground mb-4">Ready to Experience the Difference?</h2>
        <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
          Join 50+ companies who trust Classic Microns for their CaCO₃ needs.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light font-bold">
            Get Started Today
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default WhyUsPage;
