import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { IndustryData, industries } from "@/data/industries";

const SITE = "https://classicmicrones.lovable.app";

interface Props {
  data: IndustryData;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

const IndustryTemplate = ({ data }: Props) => {
  const canonical = `${SITE}/${data.slug}`;
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Calcium Carbonate for ${data.eyebrow}`,
    description: data.metaDescription,
    brand: { "@type": "Brand", name: "Classic Micrones" },
    manufacturer: { "@type": "Organization", name: "Classic Micrones" },
    category: "Industrial Minerals",
    image: `${SITE}/src/assets/product-powder.jpg`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Classic Micrones" },
    },
  };

  // Resolve related links across industry pages and existing SEO pages.
  const relatedLink = (slug: string) => {
    const found = Object.values(industries).find((i) => i.slug === slug);
    if (found) return { to: `/${found.slug}`, label: `CaCO₃ for ${found.eyebrow}` };
    const labels: Record<string, string> = {
      "marble-powder-for-paint-industry": "Marble Powder for Paint Industry",
      "caco3-for-paper-industry": "CaCO₃ for Paper Industry",
      "gcc-supplier-india": "GCC Supplier India",
      "calcium-carbonate-manufacturer-india": "Calcium Carbonate Manufacturer India",
      "pcc-vs-gcc-difference": "PCC vs GCC — Difference Explained",
    };
    return { to: `/${slug}`, label: labels[slug] ?? slug };
  };

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.metaTitle} />
        <meta name="twitter:description" content={data.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(productLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4"
            >
              {data.eyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease }}
              className="text-3xl md:text-5xl font-heading font-extrabold leading-tight mb-6"
            >
              {data.h1}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease }}
              className="text-lg text-primary-foreground/80 leading-relaxed mb-8"
            >
              {data.intro}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-teal-dark font-bold text-base px-8 h-12">
                  Request Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/918529067010" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 h-12">
                  WhatsApp Sales
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading label="Overview" title={`Why ${data.eyebrow} Manufacturers Choose Our CaCO₃`} />
          <div className="text-muted-foreground space-y-4">
            {data.overview.map((p, i) => (
              <p key={i} className="leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Benefits" title="Industry-Specific Performance" description="Engineered properties that matter in your formulation." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-accent/30 transition-all"
              >
                <CheckCircle className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-heading font-bold text-primary text-base mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading label="Applications" title={`Where Our CaCO₃ Is Used in ${data.eyebrow}`} />
          <div className="grid sm:grid-cols-2 gap-3">
            {data.useCases.map((uc) => (
              <div key={uc} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grades */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Product Grades" title={`Recommended Grades for ${data.eyebrow}`} />
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full border-collapse bg-card border border-border rounded-2xl overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="text-left p-4 font-heading text-sm">Grade</th>
                  <th className="text-left p-4 font-heading text-sm">Mesh</th>
                  <th className="text-left p-4 font-heading text-sm">Purity</th>
                  <th className="text-left p-4 font-heading text-sm">Typical Use</th>
                </tr>
              </thead>
              <tbody>
                {data.grades.map((g, i) => (
                  <tr key={g.name} className={i % 2 === 0 ? "bg-card" : "bg-surface"}>
                    <td className="p-4 text-sm font-medium text-primary">{g.name}</td>
                    <td className="p-4 text-sm text-muted-foreground">{g.mesh}</td>
                    <td className="p-4 text-sm text-muted-foreground">{g.purity}</td>
                    <td className="p-4 text-sm text-muted-foreground">{g.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading label="Technical Data" title="Typical Specifications (TDS)" />
          <div className="grid sm:grid-cols-2 gap-3">
            {data.techSpecs.map((s) => (
              <div key={s.property} className="flex justify-between items-center bg-card border border-border rounded-xl p-4">
                <span className="text-sm text-muted-foreground">{s.property}</span>
                <span className="text-sm font-semibold text-primary">{s.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6">
            Need a detailed Technical Data Sheet? <Link to="/contact" className="text-accent hover:underline font-medium">Request TDS</Link>.
          </p>
        </div>
      </section>

      {/* QA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading label="Quality Assurance" title="Consistent, Documented, Traceable" />
          <div className="text-muted-foreground space-y-4">
            {data.qualitySection.map((p, i) => (
              <p key={i} className="leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading label="Why Classic Micrones" title="A Manufacturer, Not a Trader" />
          <div className="grid sm:grid-cols-2 gap-3">
            {data.whyChoose.map((w) => (
              <div key={w} className="flex items-start gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading label="FAQs" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {data.faqs.map((f) => (
              <details key={f.q} className="group bg-card border border-border rounded-2xl p-5">
                <summary className="cursor-pointer font-heading font-semibold text-primary text-base list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading label="Related Reading" title="Explore More" />
          <div className="grid sm:grid-cols-2 gap-4">
            {data.relatedSlugs.map((slug) => {
              const r = relatedLink(slug);
              return (
                <Link key={slug} to={r.to} className="group flex items-center justify-between bg-card border border-border rounded-2xl p-5 hover:border-accent/40 hover:shadow-md transition-all">
                  <span className="font-heading font-semibold text-primary group-hover:text-accent transition-colors">{r.label}</span>
                  <ArrowRight className="w-5 h-5 text-accent" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
              Discuss Your {data.eyebrow} Requirement
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Share grade, mesh and monthly tonnage — our sales team will respond within one working day with pricing and a Certificate of Analysis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light font-bold text-base px-8 h-12">
                  Request a Quote
                </Button>
              </Link>
              <a href="mailto:sales@classicmicrones.com">
                <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-semibold text-base px-8 h-12">
                  <Mail className="mr-2 w-4 h-4" /> sales@classicmicrones.com
                </Button>
              </a>
              <a href="tel:+918529067010">
                <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 font-semibold text-base px-8 h-12">
                  <Phone className="mr-2 w-4 h-4" /> +91 85290 67010
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IndustryTemplate;
