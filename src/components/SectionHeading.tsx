import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, align = "center" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${align === "center" ? "text-center max-w-2xl mx-auto" : ""}`}
  >
    {label && (
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
        {label}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">{title}</h2>
    {description && <p className="text-muted-foreground leading-relaxed">{description}</p>}
  </motion.div>
);

export default SectionHeading;
