import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, align = "center" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    className={`mb-16 md:mb-20 ${align === "center" ? "text-center max-w-3xl mx-auto" : ""}`}
  >
    {label && (
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4">
        {label}
      </span>
    )}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-primary leading-[1.1] mb-5">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
