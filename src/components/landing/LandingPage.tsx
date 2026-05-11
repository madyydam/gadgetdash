import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  BellRing,
  Lock,
  Radar,
  MapPin,
  KeyRound,
  Power,
  Vibrate,
  Globe,
  Building2,
  Landmark,
  Users,
  Star,
  Check,
  X,
  Gift,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import deviceImg from "@/assets/theft-shield-device.jpg";
import productPremium from "@/assets/product-premium.jpg";
import productStandard from "@/assets/product-standard.jpg";
import bikeTheftNew from "@/assets/bike-theft-new.png";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { Section, Tag, StatCard, fadeUp } from "@/components/common/UI";

const WHATSAPP = "918698521649";
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hi! I want to know more about Gadget Dash Theft Shield."
)}`;

const slowFadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
} as const;

const slowStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
} as const;

function Hero() {
  return (
    <Section immediate stagger className="relative overflow-hidden min-h-[550px] flex items-center bg-background">
      {/* Hero background image with slow zoom */}
      <motion.img
        src={heroBg}
        alt="Hero Background"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 h-full w-full object-left object-cover md:object-right"
      />
      {/* Very light gradient only on the left for text contrast */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-background/40 via-transparent to-transparent md:from-background/60" 
      />

      <motion.div 
        variants={slowStagger}
        initial="hidden"
        animate="show"
        className="relative z-20 mx-auto grid max-w-[1440px] items-center gap-8 px-6 py-12 md:grid-cols-2 md:gap-10 md:px-10 md:py-20"
      >
        <div className="text-left">
          <motion.h1
            variants={slowFadeUp}
            className="max-w-3xl text-3xl font-black leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Stay One Step Ahead of Thieves.
          </motion.h1>

          <motion.p
            variants={slowFadeUp}
            className="mt-4 max-w-md text-sm text-muted-foreground md:text-lg"
          >
            The premium smart bike security system, engineered in India to detect, alert
            and block — 24/7.
          </motion.p>

          <motion.div variants={slowFadeUp} className="mt-6 flex flex-wrap gap-3">
            <motion.a
              href="#offer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-6 py-3 text-xs font-semibold text-background shadow-[var(--shadow-soft)] md:text-sm md:px-7 md:py-3.5"
            >
              Buy Now
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </motion.a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-foreground/20 bg-background/50 px-6 py-3 text-xs font-semibold text-foreground backdrop-blur md:text-sm md:px-7 md:py-3.5 hover:bg-foreground/5 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div variants={slowFadeUp} className="mt-8 grid max-w-sm grid-cols-3 gap-3">
            <StatCard icon={ShieldCheck} value="95%" label="risk down" />
            <StatCard icon={Check} value="2-Yr" label="warranty" />
            <StatCard icon={Users} value="1,500+" label="riders" />
          </motion.div>
        </div>
        <div className="hidden md:block" />
      </motion.div>
    </Section>
  );
}

const TRUST = [
  { icon: Globe, label: "ISO 9001:2015\nCertified" },
  { icon: Building2, label: "MSME\nRegistered" },
  { icon: Landmark, label: "Govt.\nRecognized" },
  { icon: ShieldCheck, label: "Trusted by\nRiders" },
];

function TrustStrip() {
  return (
    <Section stagger className="border-y border-foreground/5 bg-card/60">
      <div className="mx-auto max-w-[1440px] px-6 py-10 md:px-10 md:py-14">
        <motion.p variants={fadeUp} className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/80">
          Trusted, Certified, and Built for India
        </motion.p>
        <motion.div variants={fadeUp} className="mx-auto mt-2 h-px w-8 bg-foreground/20" />
        <div className="mt-8 grid grid-cols-4 gap-4 md:gap-6">
          {TRUST.map(({ icon: Icon, label }) => (
            <motion.div key={label} variants={fadeUp} className="flex flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-background md:h-14 md:w-14">
                <Icon className="h-4 w-4 text-foreground md:h-6 md:w-6" />
              </div>
              <div className="mt-2 whitespace-pre-line text-[10px] font-medium leading-tight text-foreground/80 md:text-xs">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProblemSection() {
  return (
    <Section stagger className="relative">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-16 md:grid-cols-2 md:gap-12 md:px-10 md:py-20">
        <div className="flex flex-col justify-center">
          <Tag className="scale-90 origin-left">The Reality</Tag>
          <motion.h2 variants={fadeUp} className="mt-4 text-2xl font-black leading-[1.05] tracking-tight md:text-4xl">
            Bike Theft is a<br />Real Problem.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-lg text-sm text-muted-foreground md:text-base">
            Every day, thousands of riders across India lose more than just a vehicle.
            They lose their daily livelihood, savings, and peace of mind.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-4 h-px w-8 bg-foreground/30" />
          <motion.p variants={fadeUp} className="mt-4 text-sm font-semibold text-foreground md:text-lg">
            Don't be the next statistic.<br />Protect what's yours.
          </motion.p>
        </div>
        <motion.div variants={fadeUp} className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] md:aspect-auto">
          <img
            src={bikeTheftNew}
            alt="Hooded thief stealing a bike at night"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 pb-16 md:px-10">
        <div className="grid grid-cols-3 gap-2 rounded-2xl bg-card/80 p-3 shadow-[var(--shadow-card)] ring-1 ring-foreground/5 backdrop-blur sm:divide-x sm:divide-foreground/10">
          {[
            { icon: Radar, value: "1,800+", label: "Bike thefts in Pune (yearly)" },
            { icon: Building2, value: "13,000+", label: "Bike thefts in Bengaluru (yearly)" },
            { icon: ShieldCheck, value: "<20%", label: "National recovery rate" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="flex items-center gap-3 px-3 py-3 sm:px-6">
              <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 sm:flex">
                <s.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-lg font-bold tracking-tight md:text-xl">{s.value}</div>
                <div className="text-[10px] leading-tight text-muted-foreground md:text-xs">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SolutionSection() {
  const features = [
    { icon: BellRing, label: "Instant\nAlerts" },
    { icon: Lock, label: "Engine\nLock" },
    { icon: ShieldCheck, label: "Tamper\nDetection" },
  ];
  return (
    <Section stagger className="relative overflow-hidden bg-[var(--dark-bg)] text-[oklch(0.97_0.01_80)]">
      <div className="absolute inset-x-0 top-0 -z-0 mx-auto h-80 w-[60%] rounded-full bg-[oklch(0.45_0.05_75)]/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1440px] gap-8 px-6 py-16 md:grid-cols-2 md:gap-12 md:px-10 md:py-20">
        <div className="flex flex-col justify-center">
          <motion.span variants={fadeUp} className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            The Solution
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-2xl font-black leading-[1.05] tracking-tight md:text-4xl">
            Meet Suraj Ishwar's<br />Theft Shield
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-lg text-white/70 text-sm md:text-base">
            An all-in-one smart bike security system — engineered to detect, alert,
            block and protect your two-wheeler 24/7.
          </motion.p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {features.map((f) => (
              <motion.div key={f.label} variants={fadeUp} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="mt-2 whitespace-pre-line text-[10px] font-medium leading-tight text-white/85 md:text-xs">
                  {f.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={fadeUp} className="relative">
          <div className="absolute inset-0 -z-10 mx-auto h-full w-3/4 rounded-full bg-[oklch(0.7_0.08_75)]/15 blur-3xl" />
          <img
            src={deviceImg}
            alt="Theft Shield device"
            loading="lazy"
            className="mx-auto w-full max-w-xs md:max-w-sm"
          />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 pb-16 md:px-10">
        <div className="grid grid-cols-3 gap-2 rounded-2xl bg-white/95 p-3 text-foreground shadow-xl sm:divide-x sm:divide-foreground/10">
          {[
            { icon: ShieldCheck, value: "95%", label: "theft risk reduction" },
            { icon: Check, value: "2-Year", label: "Warranty" },
            { icon: Users, value: "1,500+", label: "riders protected" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="flex items-center gap-3 px-3 py-3 sm:px-6">
              <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 sm:flex">
                <s.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-lg font-bold tracking-tight md:text-xl">{s.value}</div>
                <div className="text-[10px] leading-tight text-muted-foreground md:text-xs">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const FEATURES = [
  { icon: BellRing, title: "Motion Sensor Alarm", desc: "Loud siren triggers the moment your bike is touched." },
  { icon: KeyRound, title: "Remote Key System", desc: "Arm, disarm and locate from a sleek wireless remote." },
  { icon: Power, title: "Engine Immobilizer", desc: "Cuts power instantly — the bike will not start." },
  { icon: MapPin, title: "Bike Locator", desc: "Find your parked bike in crowded lots with one tap." },
  { icon: KeyRound, title: "Self Start", desc: "Premium push-to-start convenience, every ride." },
  { icon: Vibrate, title: "Vibration Detection", desc: "Smart sensors detect tampering before it escalates." },
];

function FeaturesGrid() {
  return (
    <Section id="features" stagger className="bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Tag className="scale-90">Engineered Inside</Tag>
          <motion.h2 variants={fadeUp} className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
            Every feature, obsessed over.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-sm text-muted-foreground md:text-base">
            Six layers of intelligent protection working together — silently, around the clock.
          </motion.p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group rounded-2xl bg-card p-5 shadow-[var(--shadow-card)] ring-1 ring-foreground/5 transition hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background transition group-hover:bg-[var(--gold)] group-hover:text-foreground">
                <f.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ComparisonSection() {
  const rows = [
    { feature: "Engine immobilizer", v: [false, false, false, true] },
    { feature: "Tamper detection", v: [false, false, false, true] },
    { feature: "Remote arm / disarm", v: [false, false, false, true] },
    { feature: "Cannot be cut or broken", v: [false, false, false, true] },
  ];
  const cols = ["Handle Lock", "Disc Lock", "Chain Lock", "Theft Shield"];
  return (
    <Section id="compare" stagger className="bg-card/50">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Tag className="scale-90">The Difference</Tag>
          <motion.h2 variants={fadeUp} className="mt-4 text-2xl font-black tracking-tight md:text-4xl">
            Why basic locks fail.
          </motion.h2>
        </div>
        <motion.div variants={fadeUp} className="mt-8 overflow-hidden rounded-2xl bg-background shadow-[var(--shadow-soft)] ring-1 ring-foreground/5">
          <div className="grid grid-cols-5 border-b border-foreground/10 bg-foreground/[0.03] text-[10px] font-semibold uppercase tracking-wider md:text-xs">
            <div className="p-3 text-foreground/70 md:p-5">Feature</div>
            {cols.map((c, i) => (
              <div
                key={c}
                className={`p-3 text-center md:p-5 ${
                  i === cols.length - 1 ? "bg-foreground text-background" : "text-foreground/70"
                }`}
              >
                {c}
              </div>
            ))}
          </div>
          {rows.map((r) => (
            <div key={r.feature} className="grid grid-cols-5 border-b border-foreground/5 last:border-0">
              <div className="p-3 text-xs font-medium md:p-5 md:text-sm">{r.feature}</div>
              {r.v.map((ok, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-center p-3 md:p-5 ${
                    i === r.v.length - 1 ? "bg-foreground/[0.03]" : ""
                  }`}
                >
                  {ok ? (
                    <Check className="h-4 w-4 text-foreground" />
                  ) : (
                    <X className="h-4 w-4 text-foreground/30" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function BenefitsSection() {
  const items = [
    { title: "Peace of mind", desc: "Sleep easy knowing your bike is watched, always." },
    { title: "Works everywhere", desc: "Pan-India network coverage, no dead zones." },
    { title: "Saves money", desc: "Lower insurance premiums and zero replacement cost." },
    { title: "Universal fit", desc: "Compatible with every two-wheeler in India." },
  ];
  return (
    <Section stagger className="bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {items.map((b, i) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-foreground/10 bg-card p-5"
            >
              <div className="text-[10px] font-mono text-muted-foreground">0{i + 1}</div>
              <h3 className="mt-2 text-sm font-bold tracking-tight md:text-base">{b.title}</h3>
              <p className="mt-1 text-[11px] text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const TESTIMONIALS = [
  {
    name: "Rohan M.",
    city: "Pune",
    text: "Caught a thief in the act. Got the alert on my phone within seconds. Worth every rupee.",
  },
  {
    name: "Aisha K.",
    city: "Bengaluru",
    text: "Sleek, easy to install, and the remote feels premium. My RE Classic finally feels safe.",
  },
  {
    name: "Vikram S.",
    city: "Mumbai",
    text: "I run a delivery fleet of 12 bikes — Theft Shield on every one. Zero losses in a year.",
  },
];

function ReviewsSection() {
  return (
    <Section id="reviews" stagger className="bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <Tag className="scale-90">Real Riders</Tag>
          <motion.h2 variants={fadeUp} className="mt-2 text-xl font-black tracking-tight md:text-3xl">
            Loved across India.
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-2 flex items-center justify-center gap-1 text-foreground">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
            <span className="ml-2 text-[10px] font-semibold md:text-xs">4.9 / 5 from 1,200+ reviews</span>
          </motion.div>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-xl bg-background p-4 shadow-[var(--shadow-card)] ring-1 ring-foreground/5"
            >
              <div className="flex gap-1 text-foreground">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-foreground/80">"{t.text}"</p>
              <div className="mt-3 text-[10px] font-semibold">
                {t.name} <span className="font-normal text-muted-foreground">· {t.city}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function OfferSection() {
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
    <Section id="offer" stagger className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-beige)" }} />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Tag className="scale-90">Limited Launch Offer</Tag>
          <motion.h2 variants={fadeUp} className="mt-2 text-2xl font-black tracking-tight md:text-4xl">
            Pick your protection.
          </motion.h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {products.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative overflow-hidden rounded-2xl p-4 shadow-[var(--shadow-soft)] ring-1 transition md:p-6 ${
                p.highlight
                  ? "bg-[var(--dark-bg)] text-[oklch(0.97_0.01_80)] ring-foreground/20"
                  : "bg-card text-foreground ring-foreground/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-widest ${
                    p.highlight ? "bg-[var(--gold)] text-foreground" : "bg-foreground text-background"
                  }`}
                >
                  {p.tag}
                </span>
                <div className="text-right">
                  <div className={`text-[9px] line-through ${p.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                    {p.old}
                  </div>
                  <div className="text-lg font-black tracking-tight md:text-xl">{p.price}</div>
                </div>
              </div>
              <div className="mt-3 flex h-32 items-center justify-center overflow-hidden rounded-xl bg-white/5 md:h-40">
                <img src={p.img} alt={p.name} loading="lazy" className="max-h-full max-w-[60%] object-contain" />
              </div>
              <h3 className="mt-3 text-base font-bold tracking-tight md:text-lg">{p.name}</h3>
              <ul className="mt-2 space-y-1">
                {p.perks.map((perk) => (
                  <li key={perk} className={`flex items-center gap-2 text-[11px] ${p.highlight ? "text-white/85" : "text-foreground/80"}`}>
                    <Check className="h-3 w-3 shrink-0" /> {perk}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a
                  href={`${waLink}&text=${encodeURIComponent("I want to order " + p.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[11px] font-semibold transition hover:opacity-90 ${
                    p.highlight
                      ? "bg-white text-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  Buy on WhatsApp <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-[11px] font-semibold transition ${
                    p.highlight
                      ? "border-white/30 text-white hover:bg-white/10"
                      : "border-foreground/20 hover:bg-foreground/5"
                  }`}
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Chat
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {[
            { icon: Gift, t: "Free Keychain", d: "With every order" },
            { icon: KeyRound, t: "Premium Remote", d: "Free in Premium pack" },
            { icon: ShieldCheck, t: "Lifetime Support", d: "We're always a call away" },
            { icon: MessageCircle, t: "WhatsApp Community", d: "Join 1,500+ riders" },
          ].map((b) => (
            <motion.div
              key={b.t}
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex items-center gap-2 rounded-xl bg-card/80 p-2 ring-1 ring-foreground/5 backdrop-blur"
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                <b.icon className="h-3 w-3" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] font-semibold">{b.t}</div>
                <div className="text-[9px] text-muted-foreground">{b.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section stagger className="bg-[var(--dark-bg)] text-[oklch(0.97_0.01_80)]">
      <div className="mx-auto max-w-4xl px-5 py-12 text-center md:px-8 md:py-16">
        <Tag className="scale-90">
          <span className="text-foreground">Don't wait until it's gone</span>
        </Tag>
        <motion.h2 variants={fadeUp} className="mt-4 text-2xl font-black leading-[1.05] tracking-tight md:text-4xl">
          Protect Your Bike Today.
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-lg text-xs text-white/70 md:text-sm">
          Join 1,500+ riders across India who sleep peacefully knowing Theft Shield
          is on guard.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-2">
          <a
            href="#offer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[11px] font-semibold text-foreground transition hover:opacity-90 md:text-xs"
          >
            Buy Now <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-[11px] font-semibold text-white transition hover:bg-white/10 md:text-xs"
          >
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp +91 8698521649
          </a>
        </motion.div>
      </div>
    </Section>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <ComparisonSection />
      <BenefitsSection />
      <ReviewsSection />
      <OfferSection />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}