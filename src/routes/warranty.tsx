import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Tag, fadeUp } from "@/components/common/UI";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, AlertCircle, QrCode, ArrowRight } from "lucide-react";
import qrImg from "@/assets/warranty-qr.jpg";

export const Route = createFileRoute("/warranty")({
  component: WarrantyPage,
});

function WarrantyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Section immediate stagger className="pt-16 pb-12 px-6 bg-[var(--gradient-beige)]">
        <div className="mx-auto max-w-3xl text-center">
          <Tag className="scale-90">Product Support</Tag>
          <motion.h1 variants={fadeUp} className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
            WARRANTY REGISTRATION
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            Thank you for purchasing Suraj Ishwar’s <span className="text-foreground font-bold">TheftShield</span> from Gadget Dash – your smart choice for anti-theft bike security! 🔐🏍️
          </motion.p>
        </div>
      </Section>

      <Section stagger className="py-12 px-6">
        <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <motion.p variants={fadeUp} className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Please take a minute to register your product for Warranty Support. This helps us offer you priority service, hassle-free warranty claims, and product updates.
            </motion.p>

            <div className="space-y-4">
              <motion.h3 variants={fadeUp} className="text-lg font-black flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-foreground" /> Why Register?
              </motion.h3>
              <ul className="space-y-3">
                {[
                  "Activate your 2-Year Warranty and 1-Year Warranty",
                  "Ensure easy verification in case of any issues",
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex gap-2 items-start text-xs md:text-sm text-muted-foreground">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div variants={fadeUp} className="p-5 rounded-2xl bg-foreground/5 border border-foreground/10 flex gap-4 items-start">
              <AlertCircle className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
              <p className="text-xs font-bold leading-relaxed">
                Register within 10 days from Product Delivered Date. Otherwise, Warranty will not be considered.
              </p>
            </motion.div>

            <motion.p variants={fadeUp} className="text-xs text-muted-foreground italic">
              📝 Kindly fill out the form with accurate details. Your information will remain confidential and be used only for support purposes.
            </motion.p>

            <motion.h4 variants={fadeUp} className="text-lg font-black text-foreground">
              Let’s keep your ride safe – starting now! 💪
            </motion.h4>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col items-center justify-center p-8 rounded-[2rem] bg-card border border-foreground/5 shadow-xl">
             <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-muted-foreground">SCAN ME FOR 🛡️</div>
             <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl shadow-xl border border-foreground/5 bg-white p-4">
                <img src={qrImg} alt="Warranty Registration QR" className="w-full h-full object-contain" />
             </div>
             <div className="mt-6 text-center">
               <div className="text-sm font-black uppercase tracking-tighter">WARRANTY REGISTRATION</div>
               <div className="text-[9px] font-bold text-muted-foreground mt-1 uppercase tracking-widest">Powered by Gadget Dash</div>
             </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
