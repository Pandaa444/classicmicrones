// Rich data for industry-specific landing pages.
// Each entry powers a dedicated SEO page via <IndustryTemplate />.

export interface FAQ {
  q: string;
  a: string;
}

export interface IndustryData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  overview: string[]; // 2-4 paragraphs
  benefits: { title: string; desc: string }[];
  useCases: string[];
  techSpecs: { property: string; value: string }[];
  grades: { name: string; mesh: string; purity: string; use: string }[];
  qualitySection: string[]; // 1-2 paragraphs about QA for this industry
  whyChoose: string[]; // bullet points
  faqs: FAQ[];
  relatedSlugs: string[]; // links to other industry / SEO pages
}

const standardSpecs = [
  { property: "Chemical Name", value: "Calcium Carbonate (CaCO₃)" },
  { property: "Purity", value: "95% – 98%" },
  { property: "Whiteness", value: "93% – 97%" },
  { property: "Mesh Size", value: "200 – 2500" },
  { property: "Moisture", value: "< 0.5%" },
  { property: "Oil Absorption", value: "14 – 18 g/100g" },
  { property: "pH Value", value: "8.5 – 9.5" },
  { property: "Packaging", value: "25 kg / 50 kg / Jumbo bags" },
];

export const industries: Record<string, IndustryData> = {
  paint: {
    slug: "calcium-carbonate-for-paint-industry",
    metaTitle: "Calcium Carbonate for Paint Industry | Classic Micrones",
    metaDescription:
      "High-whiteness, low-oil-absorption CaCO₃ for paint and coatings manufacturers in India. Coated and uncoated GCC grades for emulsion and primer.",
    eyebrow: "Paint & Coatings",
    h1: "Calcium Carbonate for the Paint Industry",
    intro:
      "Premium Ground Calcium Carbonate (GCC) and micronised marble powder for emulsion paints, primers, putty, distempers, texture coatings and industrial finishes. Engineered for whiteness, low oil absorption and consistent batch-to-batch performance.",
    overview: [
      "Calcium Carbonate is the most widely used extender pigment in modern paint manufacturing. It works alongside titanium dioxide to deliver hiding power, opacity and a smooth film, while bringing down formulation cost without compromising performance. For interior emulsions, exterior weather-coats, primers, putty and texture finishes, the right CaCO₃ grade is what holds the formulation together — both technically and commercially.",
      "Classic Micrones manufactures paint-grade Calcium Carbonate from our own marble reserves in Makrana, Rajasthan. Each lot is micronised to tight particle-size distribution, classified to remove oversize particles and tested for whiteness, oil absorption and moisture before dispatch. This consistency is what allows paint manufacturers to lock in a stable formulation across thousands of litres.",
      "Whether you formulate water-based emulsions, solvent-based industrial coatings, or cement-based wall putty, our coated and uncoated grades are matched to your specific binder system, sheen target and cost structure.",
    ],
    benefits: [
      { title: "High Whiteness (up to 97%)", desc: "Improves the perceived brightness of light-coloured paints and reduces TiO₂ consumption in tinted shades." },
      { title: "Low Oil Absorption", desc: "Delivers 14–18 g/100g oil absorption so binders are not over-consumed, keeping formulation cost predictable." },
      { title: "Controlled Particle Size", desc: "Mesh 500–2500 grades give smooth film build, better flow and improved hide in both matte and satin finishes." },
      { title: "Excellent Dispersion", desc: "Particles disperse cleanly in water-based and solvent systems without flocculation or grit." },
      { title: "Low Moisture (< 0.5%)", desc: "Prevents flash rusting in alkyd systems and viscosity instability in emulsions during storage." },
      { title: "Cost-Effective Extender", desc: "Replaces a portion of expensive primary pigments while maintaining opacity, sheen and mechanical film properties." },
    ],
    useCases: [
      "Interior emulsion paints (matte, satin, silk, premium)",
      "Exterior weather-resistant emulsions and elastomeric coatings",
      "Wall putty and cement-based skim coats",
      "Primers, undercoats and sealers",
      "Texture coatings and decorative finishes",
      "Industrial protective coatings and floor paints",
      "Distemper, OBD and economy-grade paints",
      "Powder coatings (specific micronised grades)",
    ],
    techSpecs: standardSpecs,
    grades: [
      { name: "Paint Premium 800", mesh: "800", purity: "97%", use: "Interior emulsions, premium satin and silk finishes" },
      { name: "Paint Ultra 1250", mesh: "1250", purity: "97%+", use: "Exterior weather-coats, low-sheen architectural paints" },
      { name: "Paint Micro 2500", mesh: "2500", purity: "98%", use: "Industrial coatings, automotive primers, high-end decoratives" },
      { name: "Putty Grade 500", mesh: "500", purity: "96%", use: "Wall putty, skim coats and cementitious finishes" },
    ],
    qualitySection: [
      "Every dispatched lot is tested for CaCO₃ content, whiteness (Hunter Lab), oil absorption, moisture and residue on 325 mesh. A Certificate of Analysis travels with every consignment, with full batch traceability back to the source mine.",
      "Our quality team works directly with paint formulators during trials — adjusting particle-size distribution, surface treatment and packaging to match the target binder system and production conditions.",
    ],
    whyChoose: [
      "Own mines in Makrana — direct control over raw material purity",
      "Coated and uncoated paint grades from one supplier",
      "Bulk supply capacity across Rajasthan, Gujarat, Maharashtra, Delhi NCR, Punjab, Haryana, MP",
      "Technical support during formulation trials",
      "Consistent particle size distribution batch after batch",
      "Competitive ex-works and FOR pricing",
    ],
    faqs: [
      { q: "What is the best Calcium Carbonate mesh size for emulsion paint?", a: "For interior emulsions, 800–1250 mesh delivers the best balance of film smoothness, opacity and cost. Premium and exterior grades typically move to 1250–2500 mesh to improve gloss control and weathering performance." },
      { q: "Do you supply coated (stearate-treated) Calcium Carbonate for paint?", a: "Yes. We supply both uncoated and stearic-acid-coated grades. Coated grades improve dispersion in solvent-based and high-binder systems and reduce moisture pick-up during storage." },
      { q: "How does CaCO₃ reduce paint manufacturing cost?", a: "Calcium Carbonate replaces a portion of expensive primary pigments such as titanium dioxide without significantly affecting hiding power, especially in mid- and economy-tier formulations. It also acts as a rheology modifier, reducing the need for additional thickeners." },
      { q: "Can you supply paint-grade CaCO₃ in bulk to large manufacturers?", a: "Yes. We support bulk orders from 10 tonnes to 500+ tonnes per month with consistent specs and pan-India delivery. Many of our paint-industry customers run annual offtake contracts with us." },
      { q: "What packaging options are available?", a: "Standard packaging is 25 kg or 50 kg HDPE/PP woven laminated bags. Jumbo bags (500 kg / 1000 kg) are available for high-volume buyers and silo-based plants." },
    ],
    relatedSlugs: ["paper", "plastic", "marble-powder-for-paint-industry", "gcc-supplier-india"],
  },

  paper: {
    slug: "calcium-carbonate-for-paper-industry",
    metaTitle: "Calcium Carbonate for Paper Industry | Classic Micrones",
    metaDescription:
      "GCC filler and coating-grade Calcium Carbonate for writing, printing, packaging and tissue paper mills in India. Bulk supply, consistent specs.",
    eyebrow: "Paper Industry",
    h1: "Calcium Carbonate for the Paper Industry",
    intro:
      "Filler-grade and coating-grade Ground Calcium Carbonate for writing, printing, packaging board and tissue paper. High brightness, low abrasivity and tight particle-size control to lift opacity and reduce pulp consumption.",
    overview: [
      "Modern paper manufacturing relies heavily on Calcium Carbonate as both a filler and a coating pigment. In the wet-end, GCC replaces a portion of expensive wood pulp while increasing brightness, opacity and printability. On the coater, it builds a smooth, ink-receptive surface that improves print quality at lower cost than 100% kaolin systems.",
      "Classic Micrones supplies paper mills with consistently white, low-abrasive, narrow-PSD Calcium Carbonate produced from high-purity Makrana marble. Our grades are engineered for neutral and alkaline papermaking systems and are compatible with standard retention aids and binders.",
    ],
    benefits: [
      { title: "High Brightness (90%+)", desc: "Lifts paper brightness without bleaching cost, improving the visual quality of writing and printing grades." },
      { title: "Improved Opacity", desc: "Higher refractive index than pulp fibres alone, delivering better hide-through for two-sided printing." },
      { title: "Lower Pulp Consumption", desc: "Filler loadings of 15–30% can replace expensive virgin and recycled pulp, cutting raw material cost." },
      { title: "Smooth, Ink-Receptive Surface", desc: "Coating-grade GCC builds a uniform surface that improves print sharpness and reduces ink demand." },
      { title: "Low Abrasivity", desc: "Soft crystal structure protects wires, felts and slitter blades, extending machine life." },
      { title: "Neutral / Alkaline Compatible", desc: "Suited for modern alkaline papermaking, supporting longer paper life and brighter finished sheets." },
    ],
    useCases: [
      "Writing and printing papers (wet-end filler)",
      "Coated woodfree and coated mechanical grades",
      "Packaging boards, duplex board and folding boxboard",
      "Tissue and hygiene paper",
      "Specialty papers — labels, release base, décor",
      "Newsprint upgrade grades",
    ],
    techSpecs: standardSpecs,
    grades: [
      { name: "Paper Filler 800", mesh: "800", purity: "97%", use: "Wet-end filler for writing, printing and packaging grades" },
      { name: "Paper Coating 1250", mesh: "1250", purity: "97%+", use: "Coating-grade for coated woodfree and coated board" },
      { name: "Paper Ultra 2500", mesh: "2500", purity: "98%", use: "High-end coated papers, label and décor grades" },
    ],
    qualitySection: [
      "Each paper-grade lot is tested for brightness, top-cut particle size, residue on 325 mesh and CaCO₃ content. Specs are aligned to ISO brightness and tightly controlled particle-size distribution to keep machine runnability stable.",
      "We work closely with mill technical teams during grade qualification and provide on-call support for retention, drainage and ash-content troubleshooting.",
    ],
    whyChoose: [
      "Consistent brightness lot-to-lot — no shade jumps on machine",
      "Filler and coating grades from one supplier",
      "Bulk and jumbo-bag packaging for high-volume mills",
      "Pan-India delivery with established mill logistics",
      "Direct mine ownership — secure long-term supply",
    ],
    faqs: [
      { q: "What is the difference between filler-grade and coating-grade CaCO₃?", a: "Filler-grade is added to the pulp slurry in the wet-end and typically has a broader particle-size distribution (around 800 mesh). Coating-grade is finer (1250–2500 mesh), more tightly classified and used in pigmented coatings applied at the coater for premium print surfaces." },
      { q: "How much pulp can CaCO₃ replace in paper?", a: "Depending on grade and machine, GCC commonly replaces 15–30% of pulp in writing and printing papers without compromising key strength properties. Some packaging and specialty grades go higher." },
      { q: "Is your GCC suitable for alkaline papermaking?", a: "Yes. Our paper-grade GCC is designed for neutral and alkaline systems (pH 7.5–9.0), which is the dominant chemistry in modern paper mills." },
      { q: "Do you supply in jumbo bags or bulk tankers?", a: "Yes. We offer 1000 kg jumbo bags and can arrange bulk supply for mills with silo storage. Standard 50 kg bagged dispatch is also available." },
    ],
    relatedSlugs: ["paint", "plastic", "caco3-for-paper-industry", "gcc-supplier-india"],
  },

  plastic: {
    slug: "calcium-carbonate-for-plastic-industry",
    metaTitle: "Calcium Carbonate for Plastic Industry | Classic Micrones",
    metaDescription:
      "Coated and uncoated CaCO₃ filler for HDPE, LDPE, PP, masterbatch and filler compounds. Improves stiffness, impact and cost in plastics.",
    eyebrow: "Plastics",
    h1: "Calcium Carbonate for the Plastic Industry",
    intro:
      "Stearate-coated and uncoated micronised Calcium Carbonate for polyolefin compounds, masterbatch, woven sacks, injection moulded parts and blown film. Engineered for clean dispersion, low moisture and consistent loading performance.",
    overview: [
      "Calcium Carbonate is the dominant mineral filler in the global plastics industry. In HDPE, LDPE, PP and masterbatch, the right grade delivers stiffness, dimensional stability, improved processability and significant raw-material savings — without sacrificing surface finish or impact performance.",
      "Classic Micrones produces plastic-grade CaCO₃ from high-purity Makrana marble, with stearic-acid surface treatment available for hydrophobic compatibility in polyolefin systems. Tightly controlled top-cut and low moisture make our grades safe for high-loading filler masterbatch and thin-film applications.",
    ],
    benefits: [
      { title: "Improved Stiffness & Modulus", desc: "Raises flexural modulus in PP and HDPE without making parts brittle when correctly loaded." },
      { title: "Stearate Coating Available", desc: "Surface-treated grades disperse cleanly in polyolefins and prevent agglomeration in the extruder." },
      { title: "Low Moisture", desc: "Pre-dried product (< 0.3% moisture available) avoids voids, lacing and surface defects in film extrusion." },
      { title: "High Loading Capacity", desc: "Suitable for filler masterbatch up to 80% loading for woven sack and non-woven applications." },
      { title: "Lower Compound Cost", desc: "Replaces a portion of virgin polymer at a fraction of the price, directly improving compound economics." },
      { title: "Better Print & Welding", desc: "Improves surface energy for printing and heat-sealing in film and bag applications." },
    ],
    useCases: [
      "HDPE / PP filler masterbatch and white masterbatch carriers",
      "Woven sacks, FIBC bulk bags, raffia tapes",
      "Blown film — agricultural, packaging, garbage liners",
      "Injection-moulded household and industrial parts",
      "Blow-moulded containers and bottles",
      "PVC pipe, profile and wire & cable compounds",
      "Non-woven and BOPP applications (fine grades)",
    ],
    techSpecs: standardSpecs,
    grades: [
      { name: "Plastic Coated 1250", mesh: "1250", purity: "98%", use: "Filler masterbatch, woven sack, film and tape applications" },
      { name: "Plastic Coated 2500", mesh: "2500", purity: "98%", use: "Thin film, BOPP, injection moulding with fine surface finish" },
      { name: "Uncoated 800", mesh: "800", purity: "97%", use: "PVC pipes, profiles, low-cost moulding compounds" },
    ],
    qualitySection: [
      "Plastic-grade lots are tested for moisture, coating level (where applicable), top-cut, whiteness and CaCO₃ content. Moisture is critical — every consignment is checked before dispatch to prevent processing issues at the customer plant.",
      "Our team supports compound houses with formulation tuning — selecting the right coated/uncoated grade for the target loading, host polymer and end use.",
    ],
    whyChoose: [
      "Surface-treated (stearic acid) and uncoated grades in stock",
      "Low-moisture dispatch suitable for film and BOPP",
      "Pan-India supply to compound houses and masterbatch makers",
      "Bulk supply with stable lead times",
      "Direct mine ownership — long-term price and supply stability",
    ],
    faqs: [
      { q: "What is filler masterbatch and where is your CaCO₃ used?", a: "Filler masterbatch is concentrated Calcium Carbonate (typically 70–80%) pelletised in a polyolefin carrier. It is added back into virgin polymer at the customer end to reduce cost and modify properties. Our 1250-mesh coated grade is the most commonly used base material for filler masterbatch in India." },
      { q: "Why use coated vs uncoated Calcium Carbonate in plastics?", a: "Stearate-coated CaCO₃ is hydrophobic and disperses much better in non-polar polymers like PE and PP. It reduces torque on the extruder, prevents agglomeration and improves the surface finish of the final product. Uncoated grades are used in PVC and price-sensitive applications." },
      { q: "What is the typical loading of CaCO₃ in HDPE/PP?", a: "Loadings vary from 10–30% in injection-moulded parts up to 70–80% in filler masterbatch for woven sacks and non-wovens. Higher loadings require finer mesh and coated grades to maintain mechanical properties." },
      { q: "Do you supply low-moisture grades for film extrusion?", a: "Yes. We supply pre-dried, low-moisture (< 0.3%) grades specifically for blown film, BOPP and tape lines where moisture causes lacing and surface defects." },
    ],
    relatedSlugs: ["pvc", "paint", "rubber", "gcc-supplier-india"],
  },

  pvc: {
    slug: "calcium-carbonate-for-pvc-industry",
    metaTitle: "Calcium Carbonate for PVC Industry | Classic Micrones",
    metaDescription:
      "Coated and uncoated CaCO₃ for PVC pipes, profiles, fittings and wire & cable compounds. High whiteness, low moisture, consistent particle size.",
    eyebrow: "PVC Industry",
    h1: "Calcium Carbonate for the PVC Industry",
    intro:
      "Filler-grade and coated CaCO₃ for PVC pipes, fittings, profiles, conduits, wire & cable and flexible compounds. Engineered for high loading, clean dispersion and stable extrusion across rigid and plasticised PVC.",
    overview: [
      "Calcium Carbonate is the single largest non-polymer ingredient in modern PVC formulations. In rigid pipes, profiles and conduits, it adds stiffness, dimensional stability and impact modification while bringing down the cost of compound. In flexible PVC — wire & cable, hoses, films — it controls hardness, mechanical strength and processing behaviour.",
      "Classic Micrones manufactures PVC-grade CaCO₃ from high-purity Makrana marble. Our coated grades are surface-treated with stearic acid for improved dispersion and lower moisture pick-up, both of which are critical to stable PVC compounding.",
    ],
    benefits: [
      { title: "High Loading Capacity", desc: "Compatible with high filler levels typical of PVC pipe and conduit formulations (up to 25 phr and beyond)." },
      { title: "Stable Extrusion", desc: "Consistent particle-size distribution keeps melt pressure and output rates stable across long production runs." },
      { title: "Impact Improvement", desc: "Fine, well-dispersed CaCO₃ contributes to improved impact strength in rigid PVC pipes." },
      { title: "Low Moisture", desc: "Reduces pinholes, voids and plate-out on twin-screw extruders." },
      { title: "High Whiteness", desc: "Maintains the bright white finish expected in plumbing pipes, electrical conduits and profiles." },
      { title: "Cost-Effective", desc: "Significantly reduces resin consumption per metre of pipe / profile output." },
    ],
    useCases: [
      "Rigid PVC pipes — plumbing, agriculture, SWR, casing",
      "PVC fittings and injection-moulded parts",
      "Door / window profiles and conduits",
      "Wire & cable insulation and jacketing",
      "PVC hoses, garden pipes and flexible films",
      "Vinyl flooring and wall panels",
    ],
    techSpecs: standardSpecs,
    grades: [
      { name: "PVC Coated 1250", mesh: "1250", purity: "98%", use: "Rigid PVC pipes, fittings and profiles" },
      { name: "PVC Coated 2500", mesh: "2500", purity: "98%", use: "Wire & cable, soft compounds, premium profiles" },
      { name: "Uncoated 800", mesh: "800", purity: "97%", use: "Economy PVC pipes and low-cost compounds" },
    ],
    qualitySection: [
      "PVC-grade lots are tested for moisture, whiteness, residue, CaCO₃ content and coating level. Every batch is dispatched with a Certificate of Analysis aligned to ISO documentation requirements.",
      "We work alongside PVC processors to fine-tune coating levels and particle size, helping reduce plate-out, improve impact and stabilise extrusion output.",
    ],
    whyChoose: [
      "Coated and uncoated grades for rigid and flexible PVC",
      "Tight moisture control — fewer compounding issues",
      "Stable lot-to-lot whiteness and PSD",
      "Pan-India bulk supply to pipe, profile and cable plants",
      "Direct mine ownership ensures long-term security of supply",
    ],
    faqs: [
      { q: "How much Calcium Carbonate goes into PVC pipe compound?", a: "Typical rigid PVC pipe formulations use 8–25 phr (parts per hundred resin) of CaCO₃, depending on the pipe class, impact requirement and target cost. Premium SWR and pressure pipes use the lower end; standard agricultural and conduit pipes use higher levels." },
      { q: "Why is coating important for PVC-grade CaCO₃?", a: "Stearate coating prevents moisture pick-up during storage and improves dispersion during compounding. This reduces plate-out on the extruder, gives a better surface finish and helps maintain mechanical properties — especially impact strength — at high filler loadings." },
      { q: "Which mesh is best for rigid PVC pipes?", a: "1250 mesh coated CaCO₃ is the most common choice for rigid PVC pipes. For premium and pressure-rated pipes, 2500 mesh coated grades are used to maximise impact and surface quality." },
      { q: "Do you offer bulk supply contracts for PVC manufacturers?", a: "Yes. We supply many PVC pipe and profile manufacturers on monthly/quarterly contracts with locked pricing and committed lead times." },
    ],
    relatedSlugs: ["plastic", "rubber", "gcc-supplier-india", "calcium-carbonate-manufacturer-india"],
  },

  pharma: {
    slug: "calcium-carbonate-for-pharma-industry",
    metaTitle: "Calcium Carbonate for Pharma Industry | High-Purity CaCO₃ Excipient — Classic Micrones",
    metaDescription:
      "High-purity Calcium Carbonate powder for pharma, nutraceutical and cosmetic applications. Ultra-fine micronised grades with low heavy-metal content and consistent specifications for regulatory use.",
    eyebrow: "Pharma & Cosmetics",
    h1: "Calcium Carbonate for the Pharma & Cosmetic Industry",
    intro:
      "Ultra-fine, high-purity micronised Calcium Carbonate for pharmaceutical excipients, calcium supplements, antacids, toothpaste, cosmetics and nutraceutical formulations. Low impurity, consistent specs and tight quality control.",
    overview: [
      "Calcium Carbonate is one of the most widely used mineral excipients in the pharmaceutical and cosmetic industries. It is the active ingredient in many antacids and calcium supplements, a key component of toothpaste, and a functional filler in tablets, lozenges and cosmetic powders.",
      "For these applications, purity, low heavy-metal content and tight particle-size control are non-negotiable. Classic Micrones supplies ultra-fine, high-purity micronised CaCO₃ produced under controlled conditions, with full batch traceability and a Certificate of Analysis on every consignment.",
    ],
    benefits: [
      { title: "98%+ Purity", desc: "High CaCO₃ content suitable for pharma excipient and nutraceutical grade applications." },
      { title: "Low Heavy Metals", desc: "Tested for Pb, As, Hg and Cd to meet stringent regulatory limits." },
      { title: "Ultra-Fine Particle Size", desc: "Up to 2500 mesh — smooth mouthfeel for chewables, antacids and toothpaste." },
      { title: "Microbiologically Controlled", desc: "Produced and packed under controlled conditions to minimise microbial load." },
      { title: "Consistent Whiteness", desc: "Stable whiteness ensures cosmetic and toothpaste shades remain visually consistent." },
      { title: "Batch Traceability", desc: "Every lot can be traced back to source mine and processing run." },
    ],
    useCases: [
      "Calcium supplement tablets and chewables",
      "Antacid tablets, suspensions and powders",
      "Tablet excipient and tableting filler",
      "Toothpaste, tooth powder and dental products",
      "Cosmetic powders, face packs and skincare formulations",
      "Animal feed and nutraceutical premixes",
    ],
    techSpecs: standardSpecs,
    grades: [
      { name: "Pharma Ultra 2500", mesh: "2500", purity: "98%+", use: "Antacids, calcium supplements, toothpaste" },
      { name: "Pharma 1250", mesh: "1250", purity: "98%", use: "Tablet excipient and nutraceutical fillers" },
      { name: "Cosmetic Grade", mesh: "2500", purity: "98%+", use: "Face powders, dental products and skincare" },
    ],
    qualitySection: [
      "Pharma-grade lots are tested for assay, heavy metals, loss on drying, acid-insoluble matter and microbiological parameters. We provide complete documentation suitable for ISO and pharmacopeial review.",
      "All pharma packaging is double-lined food-grade liners inside HDPE/PP bags or jumbo bags, with tamper-evident sealing.",
    ],
    whyChoose: [
      "High-purity grades with low heavy-metal content",
      "Documentation support — COA, MSDS, regulatory paperwork",
      "Food-grade lined packaging",
      "Pan-India dispatch to pharma and cosmetic manufacturing hubs",
      "Long-standing supply relationships with formulators",
    ],
    faqs: [
      { q: "Is your Calcium Carbonate suitable for pharmacopeial applications?", a: "Our high-purity grades are produced to specifications aligned with pharmacopeial requirements. We provide detailed COAs covering assay, heavy metals, LOD and microbiological parameters. Final qualification against IP/BP/USP/EP should be performed by the buyer for their specific product." },
      { q: "What is the typical particle size for antacid and calcium supplement use?", a: "2500 mesh ultra-fine grades give a smooth mouthfeel in chewable tablets, suspensions and antacid powders. For compressed tablets, 1250–2500 mesh grades are commonly used as excipient." },
      { q: "Do you provide a Certificate of Analysis with each lot?", a: "Yes. Every dispatched lot is accompanied by a COA covering chemical, physical and where applicable, microbiological parameters. MSDS and regulatory documentation are also available on request." },
      { q: "Is special packaging available for pharma applications?", a: "Yes. We use double-lined food-grade liners and can offer 25 kg lined bags or jumbo bags with tamper-evident sealing for pharma and food-contact use." },
    ],
    relatedSlugs: ["paint", "calcium-carbonate-manufacturer-india", "gcc-supplier-india"],
  },

  rubber: {
    slug: "calcium-carbonate-for-rubber-industry",
    metaTitle: "Calcium Carbonate for Rubber Industry | CaCO₃ Filler for Rubber Compounds — Classic Micrones",
    metaDescription:
      "Coated and uncoated Calcium Carbonate for natural and synthetic rubber compounds. Filler-grade CaCO₃ for footwear, hoses, conveyor belts, automotive parts and general rubber goods.",
    eyebrow: "Rubber Industry",
    h1: "Calcium Carbonate for the Rubber Industry",
    intro:
      "Coated and uncoated micronised Calcium Carbonate for natural and synthetic rubber compounds. Used as a cost-effective semi-reinforcing filler in footwear soles, hoses, mats, conveyor belts and general rubber goods.",
    overview: [
      "Calcium Carbonate is a primary mineral filler in the rubber industry, especially where carbon black is undesirable for colour or cost reasons. In footwear, hoses, mats, conveyor belts, automotive components and general-purpose rubber goods, GCC provides body, dimensional stability and significant cost reduction.",
      "Classic Micrones supplies coated and uncoated rubber-grade CaCO₃ from high-purity Makrana marble. Surface-treated grades disperse smoothly in non-polar rubber matrices, reducing mixing time and improving final mechanical properties.",
    ],
    benefits: [
      { title: "Semi-Reinforcing Filler", desc: "Improves tear strength and abrasion resistance in light-coloured rubber goods." },
      { title: "Cost Reduction", desc: "Allows higher loading without compromising key mechanical properties, directly lowering compound cost." },
      { title: "High Whiteness", desc: "Essential for white and light-coloured footwear, hoses and rubber goods." },
      { title: "Stearate Coating Available", desc: "Improves dispersion and reduces mixing time in NR, SBR and EPDM compounds." },
      { title: "Stable Mooney Viscosity", desc: "Consistent particle-size distribution keeps compound rheology predictable." },
      { title: "Low Moisture", desc: "Prevents porosity and surface defects in moulded and extruded rubber parts." },
    ],
    useCases: [
      "Footwear soles, micro-cellular sheets and EVA compounds",
      "Rubber hoses, tubes and seals",
      "Conveyor belt covers and mats",
      "Automotive rubber components (non-tyre)",
      "Hawai chappal, sandals and slipper compounds",
      "General-purpose moulded and extruded rubber goods",
    ],
    techSpecs: standardSpecs,
    grades: [
      { name: "Rubber Coated 1250", mesh: "1250", purity: "98%", use: "Footwear, hoses, general rubber compounds" },
      { name: "Rubber Coated 2500", mesh: "2500", purity: "98%", use: "Premium light-coloured goods, automotive seals" },
      { name: "Uncoated 800", mesh: "800", purity: "97%", use: "Economy rubber sheets, mats and low-cost compounds" },
    ],
    qualitySection: [
      "Rubber-grade lots are tested for whiteness, moisture, residue and CaCO₃ content. Coating level is verified for surface-treated grades to ensure consistent dispersion in rubber compounds.",
      "Our technical team assists footwear and rubber goods manufacturers in selecting the right coated/uncoated grade and loading for the host polymer and end-use durability requirements.",
    ],
    whyChoose: [
      "Coated and uncoated rubber-grade CaCO₃ in stock",
      "Stable lot-to-lot whiteness for colour-critical compounds",
      "Bulk supply to footwear, hose and conveyor manufacturers",
      "Competitive pricing with consistent quality",
      "Direct mine ownership — long-term price stability",
    ],
    faqs: [
      { q: "Can CaCO₃ replace carbon black in rubber?", a: "Calcium Carbonate cannot fully replace carbon black for reinforcement in high-performance black rubber goods (like tyres). However, in light-coloured, semi-reinforced and cost-driven applications — footwear, hoses, mats — CaCO₃ is the dominant filler and replaces a significant portion of more expensive reinforcing fillers." },
      { q: "Which mesh is used in footwear compounds?", a: "1250 mesh coated CaCO₃ is the workhorse grade for footwear soles, micro-cellular sheets and EVA compounds. For premium fine-textured products, 2500 mesh is preferred." },
      { q: "Why use coated CaCO₃ in rubber?", a: "Surface treatment with stearic acid makes the CaCO₃ hydrophobic, improving its compatibility with rubber polymers. This results in better dispersion, lower mixing energy, and improved mechanical properties of the final compound." },
      { q: "Do you support footwear cluster manufacturers in bulk?", a: "Yes. We supply major footwear clusters in Rajasthan, Delhi NCR, Uttar Pradesh and Maharashtra on monthly contract basis with stable lead times and competitive pricing." },
    ],
    relatedSlugs: ["plastic", "pvc", "gcc-supplier-india", "calcium-carbonate-manufacturer-india"],
  },
};

export const industrySlugs = Object.values(industries).map((i) => i.slug);
