import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Tag, fadeUp } from "@/components/common/UI";
import { motion } from "framer-motion";
import { Shield, Lock, RefreshCcw, Truck, Award, Mail, Phone, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function PolicySection({ title, icon: Icon, children, index }: { title: string; icon: any; children: React.ReactNode; index: number }) {
  return (
    <motion.div 
      variants={fadeUp}
      className={`p-8 rounded-[2rem] border border-foreground/5 shadow-sm hover:shadow-md transition-all ${index % 2 === 0 ? "bg-card" : "bg-card/40"}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-xl bg-foreground text-background flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-lg md:text-xl font-black tracking-tight">{title}</h2>
      </div>
      <div className="space-y-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Section immediate stagger className="pt-16 pb-12 px-6 bg-[var(--gradient-beige)]">
        <div className="mx-auto max-w-3xl text-center">
          <Tag className="scale-90">Legal & Transparency</Tag>
          <motion.h1 variants={fadeUp} className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
            TERMS & CONDITIONS
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            By accessing and using the Gadget Dash website and purchasing our products, you agree to be bound by our standard terms and policies.
          </motion.p>
        </div>
      </Section>

      <Section stagger className="py-12 px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          
          <PolicySection title="Standard Terms" icon={Shield} index={0}>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                All product specifications and prices are subject to change without prior notice.
              </li>
              <li className="flex gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                Orders will be confirmed only after full payment is received.
              </li>
              <li className="flex gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                Gadget Dash reserves the right to cancel any order due to unforeseen circumstances.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="Privacy Policy" icon={Lock} index={1}>
            <p>We value your privacy. Your personal information (name, contact details, and payment info) will be used only for order processing and communication. We do not share or sell customer data to third parties.</p>
            <p className="font-bold text-foreground">Data is encrypted and securely stored.</p>
            <p>You can request deletion of your data anytime by contacting our support.</p>
          </PolicySection>

          <PolicySection title="Return & Refund Policy" icon={RefreshCcw} index={2}>
            <p>We offer returns and refunds in case of damaged or defective products received, or if the wrong product was shipped.</p>
            <div className="mt-4 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-foreground">Conditions:</p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                  Request must be made within 3 days of delivery.
                </li>
                <li className="flex gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                  Product must be unused and returned in original packaging.
                </li>
                <li className="flex gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                  Refunds will be processed within 5 to 7 business days after inspection.
                </li>
              </ul>
            </div>
          </PolicySection>

          <PolicySection title="Shipping & Delivery" icon={Truck} index={3}>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                Orders are shipped within 1 to 2 business days after confirmation.
              </li>
              <li className="flex gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                Delivery time is 3 to 7 business days depending on the location.
              </li>
              <li className="flex gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                Tracking details will be shared after dispatch.
              </li>
              <li className="flex gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                We ship pan India using reliable courier partners.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="Warranty & Support" icon={Award} index={4}>
            <p>Suraj Ishwar's Theft Shield comes with a 2 Years warranty. This covers only manufacturing defects or non-functionality.</p>
            <p className="p-4 rounded-xl bg-foreground/5 text-xs">
              <span className="font-bold text-foreground">Important:</span> Once the product is delivered, you need to scan the QR code and register your warranty from the warranty card. Only then is the warranty accepted.
            </p>
            <p>The warranty does not cover damage due to misuse, improper installation, or water damage.</p>
            <p>For support or replacement, contact our customer service with your order ID and video proof.</p>
          </PolicySection>

          <motion.div variants={fadeUp} className="p-10 rounded-[2.5rem] bg-foreground text-background text-center">
            <h2 className="text-xl md:text-2xl font-black mb-6">Need help?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+918698521649" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-60">Call Us</div>
                  <div className="text-sm font-bold">+91-8698521649</div>
                </div>
              </a>
              <a href="mailto:info@gadgetdash.in" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-60">Email Support</div>
                  <div className="text-sm font-bold">info@gadgetdash.in</div>
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </Section>

      <Footer />
    </div>
  );
}
