import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.requirement.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", company: "", phone: "", email: "", requirement: "" });
  };

  return (
    <div>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mt-3 mb-6">
              Let's Talk Business
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Whether you need a quote, technical specifications, or samples — we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                    <Input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Company name"
                      maxLength={100}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      maxLength={255}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Requirement *</label>
                  <Textarea
                    value={form.requirement}
                    onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                    placeholder="Tell us about the product grade, quantity, and delivery timeline you need..."
                    rows={5}
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-teal-dark font-bold w-full sm:w-auto px-10">
                  <Send className="mr-2 w-4 h-4" /> Submit Inquiry
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Get in Touch</h2>

              <div className="bg-surface rounded-lg p-5 flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-1 shrink-0" />
                <div>
                  <div className="font-heading font-semibold text-primary text-sm">Phone</div>
                  <a href="tel:+918529067010" className="text-muted-foreground text-sm hover:text-accent transition-colors block">+91 85290 67010</a>
                  <a href="tel:+919462567010" className="text-muted-foreground text-sm hover:text-accent transition-colors block">+91 94625 67010</a>
                </div>
              </div>

              <div className="bg-surface rounded-lg p-5 flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-1 shrink-0" />
                <div>
                  <div className="font-heading font-semibold text-primary text-sm">Email</div>
                  <a href="mailto:cmminchem@gmail.com" className="text-muted-foreground text-sm hover:text-accent transition-colors">cmminchem@gmail.com</a>
                </div>
              </div>

              <div className="bg-surface rounded-lg p-5 flex items-start gap-4">
                <span className="w-6 h-6 text-accent mt-1 shrink-0 font-heading font-bold text-sm flex items-center justify-center">DK</span>
                <div>
                  <div className="font-heading font-semibold text-primary text-sm">Contact Person</div>
                  <p className="text-muted-foreground text-sm">Divesh Kuri</p>
                </div>
              </div>

              <div className="bg-surface rounded-lg p-5 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1 shrink-0" />
                <div>
                  <div className="font-heading font-semibold text-primary text-sm">Address</div>
                  <p className="text-muted-foreground text-sm">E-6 RIICO Ind. Area, Bidiyad, Makrana, Rajasthan, India</p>
                </div>
              </div>

              <a
                href="https://wa.me/918529067010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-accent text-accent-foreground rounded-lg py-4 font-bold hover:bg-teal-dark transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              <a
                href="https://share.google/qOtxM3f0TRWXTGJWI"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted rounded-lg h-48 flex items-center justify-center text-muted-foreground text-sm hover:bg-muted/80 transition-colors"
              >
                <MapPin className="w-5 h-5 mr-2" /> View on Google Maps — Makrana, Rajasthan
              </a>

              {/* Certificates */}
              <div className="space-y-3">
                <h3 className="font-heading font-semibold text-primary text-sm">Our Certificates</h3>
                <a href="/certificates/trust-certificate.jpg" target="_blank" rel="noopener noreferrer" className="block">
                  <img src="/certificates/trust-certificate.jpg" alt="ExportersIndia Trust Certificate" className="rounded-lg border border-border w-full hover:shadow-md transition-shadow" />
                </a>
                <a href="/certificates/iso-certificate.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-surface rounded-lg p-4 hover:bg-muted transition-colors text-sm font-medium text-accent">
                  <Award className="w-5 h-5 shrink-0" />
                  View ISO Certificate (PDF)
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
