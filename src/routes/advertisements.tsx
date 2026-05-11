import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Tag, fadeUp } from "@/components/common/UI";
import { motion } from "framer-motion";
import { Play, Share2, MessageCircle } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export const Route = createFileRoute("/advertisements")({
  component: AdsPage,
});

function AdsPage() {
  const WHATSAPP = "918698521649";
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hi! I just watched your ad and I'm interested in Theft Shield."
  )}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Section immediate stagger className="pt-24 pb-20 px-6 bg-[var(--dark-bg)] text-white overflow-hidden relative">
        <div className="mx-auto max-w-6xl relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Ad Preview (Left) */}
          <motion.div 
            variants={fadeUp} 
            className="relative aspect-video w-full overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-white/10 bg-gradient-to-br from-[var(--gold)]/20 to-black flex items-center justify-center group"
          >
            <div className="text-white/40 flex flex-col items-center gap-4">
              <FaYoutube size={64} className="group-hover:scale-110 transition-transform" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em]">Ad Preview</p>
            </div>
            <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Text Content (Right) */}
          <div className="text-left">
            <Tag className="bg-white/10 text-white border-white/20 scale-90 origin-left">Watch & Learn</Tag>
            <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-black tracking-tight md:text-6xl uppercase">
              OUR <br/> ADVERTISEMENTS
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-white/60 text-sm leading-relaxed max-w-md">
              Discover how Suraj Ishwar's Theft Shield is revolutionizing two-wheeler security across India through our latest media campaigns.
            </motion.p>
          </div>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-full bg-[var(--gold)]/5 blur-[120px] -z-0" />
      </Section>

      <Section stagger className="py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Tag className="scale-90">Our Premium Product</Tag>
          <motion.h2 variants={fadeUp} className="mt-6 text-2xl font-black tracking-tight md:text-4xl">
            Trusted by Thousands.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            Here’s how thousands of riders are protecting their two-wheelers! 🚀 
            Watch our ad and see why Suraj Ishwar’s <span className="text-foreground font-bold">Theft Shield</span> is trusted by bikers across India.
          </motion.p>
          
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-4">
            <a 
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-bold text-background transition hover:opacity-90 shadow-xl"
            >
              <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
            </a>
            <a 
              href="https://youtu.be/B6DRWuJ0DA8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-8 py-4 text-sm font-bold text-foreground transition hover:bg-foreground/5"
            >
              <FaYoutube className="h-4 w-4" style={{ color: "#FF0000" }} /> Watch on YouTube
            </a>
          </motion.div>
        </div>
      </Section>

      <Section stagger className="pb-20 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-6">
          {[
            { title: "Smart Security", desc: "See how Theft Shield blocks theft in real-time." },
            { title: "Rider Safety", desc: "Engineered for Indian roads and conditions." },
            { title: "Easy Control", desc: "Manage everything from your premium remote." }
          ].map((feat, i) => (
            <motion.div 
              key={feat.title}
              variants={fadeUp}
              className="p-8 rounded-[2rem] bg-card border border-foreground/5 text-center shadow-sm"
            >
              <div className="mx-auto h-12 w-12 rounded-full bg-foreground/5 flex items-center justify-center mb-4">
                <Play className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-base font-black mb-2">{feat.title}</h3>
              <p className="text-xs text-muted-foreground">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
