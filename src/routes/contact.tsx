import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Tag, fadeUp } from "@/components/common/UI";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building2, Send, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 86985 21649",
      href: "tel:+918698521649"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@gadgetdash.in",
      href: "mailto:info@gadgetdash.in"
    },
    {
      icon: Building2,
      label: "Company",
      value: "GADGET DASH",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Section immediate stagger className="pt-24 pb-16 px-6 bg-[var(--gradient-beige)]">
        <div className="mx-auto max-w-4xl text-center">
          <Tag className="scale-90">Get in Touch</Tag>
          <motion.h1 variants={fadeUp} className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            CONTACT US
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Contact us about anything related to our company or services. <br />
            We'll do our best to get back to you as soon as possible.
          </motion.p>
        </div>
      </Section>

      <Section stagger className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-5 gap-12">
          {/* Contact Form (Left) */}
          <motion.div variants={fadeUp} className="lg:col-span-3 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-4">Name *</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full h-14 px-6 rounded-2xl border border-foreground/5 bg-card focus:ring-2 focus:ring-foreground transition-all text-sm font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-4">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  className="w-full h-14 px-6 rounded-2xl border border-foreground/5 bg-card focus:ring-2 focus:ring-foreground transition-all text-sm font-medium"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-4">Email *</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full h-14 px-6 rounded-2xl border border-foreground/5 bg-card focus:ring-2 focus:ring-foreground transition-all text-sm font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-4">Company</label>
                <input 
                  type="text" 
                  placeholder="Your Company Name" 
                  className="w-full h-14 px-6 rounded-2xl border border-foreground/5 bg-card focus:ring-2 focus:ring-foreground transition-all text-sm font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-4">Subject *</label>
              <input 
                type="text" 
                placeholder="What is this regarding?" 
                className="w-full h-14 px-6 rounded-2xl border border-foreground/5 bg-card focus:ring-2 focus:ring-foreground transition-all text-sm font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-4">Question *</label>
              <textarea 
                placeholder="Tell us more..." 
                rows={5}
                className="w-full p-6 rounded-[2rem] border border-foreground/5 bg-card focus:ring-2 focus:ring-foreground transition-all text-sm font-medium resize-none"
              />
            </div>

            <button className="w-full h-16 rounded-[2rem] bg-foreground text-background font-black uppercase tracking-[0.3em] text-[11px] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
              <Send className="h-4 w-4" /> Send Message
            </button>
          </motion.div>

          {/* Info Sidebar (Right) */}
          <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
            <div className="p-10 rounded-[3rem] bg-foreground text-background space-y-10 shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-xl font-black tracking-tight mb-8">Direct Contact Info</h3>
                <div className="space-y-8">
                  {contactInfo.map((item) => (
                    <a key={item.label} href={item.href} className="flex items-start gap-5 group/item">
                      <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-[var(--gold)] group-hover/item:text-black transition-colors">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{item.label}</div>
                        <div className="text-base font-bold text-white/90 group-hover/item:text-white transition-colors">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 h-64 w-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            </div>

            <div className="p-10 rounded-[3rem] bg-card border border-foreground/5 space-y-6">
              <div className="h-12 w-12 rounded-2xl bg-foreground/5 flex items-center justify-center">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-black mb-2">Need Instant Help?</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  Our WhatsApp support team is available 24/7 for urgent security concerns.
                </p>
                <a 
                  href={`https://wa.me/918698521649`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground hover:gap-4 transition-all"
                >
                  Chat with us now <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

// Reuse ArrowRight from lucide if needed, or add it to imports
import { ArrowRight } from "lucide-react";
