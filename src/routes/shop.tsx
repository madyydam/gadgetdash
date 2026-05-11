import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Tag, fadeUp } from "@/components/common/UI";
import { Check, ArrowRight, MessageCircle, Star, ShoppingBag } from "lucide-react";
import productPremium from "@/assets/product-premium.jpg";
import productStandard from "@/assets/product-standard.jpg";
import { motion } from "framer-motion";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
});

function ShopPage() {
  const WHATSAPP = "918698521649";
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hi! I want to buy a Theft Shield from the shop."
  )}`;

  const products = [
    {
      name: "Theft Shield — Premium",
      price: "₹3,499",
      old: "₹4,999",
      img: productPremium,
      tag: "Most Loved",
      perks: [
        "2-Year Replacement Warranty",
        "Premium Wireless Remote",
        "Free Designer Keychain",
        "Lifetime Support",
      ],
      highlight: true,
    },
    {
      name: "Theft Shield — Standard",
      price: "₹2,499",
      old: "₹3,499",
      img: productStandard,
      tag: "Best Value",
      perks: [
        "1-Year Replacement Warranty",
        "Standard Remote Key",
        "Free Keychain",
        "Made in India",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Section immediate stagger className="pt-12 pb-10 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Tag className="scale-90">Official Store</Tag>
          <motion.h1 variants={fadeUp} className="mt-4 text-2xl font-black tracking-tight md:text-4xl flex items-center justify-center gap-2">
            Secure Your Ride <ShoppingBag className="h-6 w-6 md:h-8 md:w-8" />
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground md:text-base">
            Choose the protection level that fits your needs. Both options include 
            our signature smart technology.
          </motion.p>
        </div>
      </Section>

      <Section stagger className="py-10 px-6">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-[1.5rem] p-6 shadow-lg ring-1 md:p-8 ${
                p.highlight
                  ? "bg-[var(--dark-bg)] text-white ring-white/10"
                  : "bg-card text-foreground ring-foreground/5"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest ${
                      p.highlight ? "bg-[var(--gold)] text-foreground" : "bg-foreground text-background"
                    }`}
                  >
                    {p.tag}
                  </span>
                  <h3 className="mt-2 text-lg md:text-xl font-black tracking-tight">{p.name}</h3>
                </div>
                <div className="text-right">
                  <div className={`text-[10px] line-through opacity-50 mb-0.5`}>
                    {p.old}
                  </div>
                  <div className="text-xl font-black tracking-tight">{p.price}</div>
                </div>
              </div>

              <div className="aspect-[4/3] flex items-center justify-center overflow-hidden rounded-xl bg-white/5 mb-6 group-hover:scale-105 transition-transform duration-500 max-h-40 md:max-h-48">
                <img src={p.img} alt={p.name} loading="lazy" className="max-h-full max-w-[55%] object-contain drop-shadow-xl" />
              </div>

              <div className="space-y-3 mb-6">
                <div className="text-[9px] font-bold uppercase tracking-widest opacity-60">What's Included</div>
                <ul className="grid gap-2">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-xs">
                      <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${p.highlight ? "bg-white/10" : "bg-foreground/5"}`}>
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`${waLink}&text=${encodeURIComponent("I want to order " + p.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-xs font-bold transition ${
                    p.highlight
                      ? "bg-white text-foreground shadow-lg"
                      : "bg-foreground text-background shadow-lg"
                  }`}
                >
                  Buy Now on WhatsApp <ArrowRight className="h-3.5 w-3.5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full border py-2.5 text-xs font-bold transition ${
                    p.highlight
                      ? "border-white/10 text-white hover:bg-white/5"
                      : "border-foreground/5 text-foreground hover:bg-foreground/5"
                  }`}
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Ask a Question
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section stagger className="py-12 px-6 bg-card/50">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div variants={fadeUp} className="flex justify-center gap-1 text-[var(--gold)] mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-lg font-bold mb-2 italic">"The best investment I've made for my bike. Reliable."</motion.h2>
          <motion.p variants={fadeUp} className="text-xs text-muted-foreground font-medium">— Rahul V., Verified Buyer</motion.p>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
