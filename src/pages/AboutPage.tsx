import { motion } from "framer-motion";
import { Target, Eye, Award, Shield, Users, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import warehouseImg from "@/assets/warehouse.jpg";

const AboutPage = () => (
  <div>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">About Us</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mt-3 mb-6">
            Built on Purity, Powered by Trust
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Classic Micrones is a premier manufacturer of Calcium Carbonate powder, serving industries across India with unmatched quality and reliability.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={warehouseImg} alt="Classic Microns facility" loading="lazy" width={1200} height={800} className="rounded-lg shadow-xl w-full" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">Our Story</span>
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">A Legacy of Quality Manufacturing</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded 5 years ago in the mineral-rich heartland of Rajasthan, Classic Micrones began with a simple mission: to produce the purest Calcium Carbonate powder for Indian industries. We are one of the biggest mine owners in the Makrana region, giving us direct control over raw material quality.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Today, we are one of the most trusted names in the CaCO₃ industry, with our own mines, a state-of-the-art manufacturing facility, and advanced quality control labs — ensuring complete supply chain control from mine to delivery.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our commitment to quality has earned us the trust of over 50 companies across paint, paper, plastics, and pharmaceutical industries.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-surface">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Target, title: "Our Mission", text: "To deliver the highest quality Calcium Carbonate powder that meets and exceeds international standards, while maintaining sustainable and responsible manufacturing practices." },
            { icon: Eye, title: "Our Vision", text: "To become India's most trusted and preferred Calcium Carbonate supplier, recognized globally for quality, innovation, and customer-centric operations." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <item.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Strengths */}
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionHeading label="Our Strengths" title="What Sets Us Apart" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Factory, title: "Modern Infrastructure", desc: "State-of-the-art grinding and micronizing equipment for precise particle sizes." },
            { icon: Shield, title: "Quality Assurance", desc: "Every batch is lab-tested for purity, whiteness, and particle size distribution." },
            { icon: Award, title: "Industry Certifications", desc: "ISO-compliant manufacturing processes with full traceability." },
            { icon: Users, title: "Customer Focus", desc: "Dedicated technical support and custom formulation assistance." },
            { icon: Target, title: "R&D Capabilities", desc: "Continuous investment in product improvement and grade development." },
            { icon: Eye, title: "Sustainability", desc: "Eco-conscious manufacturing with minimal waste and energy efficiency." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <item.icon className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-heading font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-accent">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-accent-foreground mb-4">Partner with Classic Micrones</h2>
        <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
          Experience the difference that premium-quality CaCO₃ can make in your manufacturing process.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light font-bold">
            Contact Us Today
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default AboutPage;
