import { motion } from "framer-motion";
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
  Phone,
  Mail,
  ArrowRight,
  Share2,
  Globe2,
} from "lucide-react";
import logo from "@/assets/logo.png";
import bikeTheft from "@/assets/bike-theft.jpg";
import heroBg from "@/assets/hero-bg.png";
import deviceImg from "@/assets/theft-shield-device.jpg";
import productPremium from "@/assets/product-premium.jpg";
import productStandard from "@/assets/product-standard.jpg";

const WHATSAPP = "918698521649";
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hi! I want to know more about Gadget Dash Theft Shield."
)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

function Section({
  children,
  className = "",
  id,
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  immediate?: boolean;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, amount: 0.1 } })}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-foreground/15 bg-background/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80 backdrop-blur">
      {children}
    </span>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-start rounded-xl bg-card/80 px-3 py-2.5 shadow-[var(--shadow-card)] ring-1 ring-foreground/5 backdrop-blur">
      <Icon className="h-3.5 w-3.5 text-foreground" />
      <div className="mt-1 text-sm font-bold leading-none tracking-tight text-foreground">{value}</div>
      <div className="mt-0.5 text-[10px] text-muted-foreground">{label}</div>
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Gadget Dash" className="h-8 w-auto md:h-10" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#compare" className="hover:text-foreground">Compare</a>
          <a href="#reviews" className="hover:text-foreground">Reviews</a>
          <a href="#offer" className="hover:text-foreground">Offer</a>
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-foreground/5 sm:inline-flex"
          >
            View Demo
          </a>
          <a
            href="#offer"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Buy Now
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <Section immediate className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--gradient-beige)" }} />
      {/* Hero background image — right-aligned on all screens */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "right center",
          backgroundSize: "cover",
        }}
      />
      {/* Fade overlay so left side stays readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-transparent md:via-background/70" />

      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 md:grid-cols-2 md:gap-8 md:px-8 md:py-16">
        <div className="text-left">
          <motion.h1
            variants={fadeUp}
            className="max-w-xl text-3xl font-black leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Stay One Step
            <br />
            Ahead of Thieves.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-md text-sm text-muted-foreground md:text-base"
          >
            The premium smart bike security system, engineered in India to detect, alert
            and block — 24/7.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
            <a
              href="#offer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold text-background shadow-[var(--shadow-soft)] md:text-sm md:px-6 md:py-3"
            >
              Buy Now
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/50 px-5 py-2.5 text-xs font-semibold text-foreground backdrop-blur md:text-sm md:px-6 md:py-3"
            >
              View Demo
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 grid max-w-md grid-cols-3 gap-2">
            <StatCard icon={ShieldCheck} value="95%" label="risk down" />
            <StatCard icon={Check} value="2-Yr" label="warranty" />
            <StatCard icon={Users} value="1,500+" label="riders" />
          </motion.div>
        </div>
        <div className="hidden md:block" />
      </div>
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
    <Section className="border-y border-foreground/5 bg-card/60">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
          Trusted, Certified, and Built for India
        </p>
        <div className="mx-auto mt-2 h-px w-10 bg-foreground/20" />
        <div className="mt-6 grid grid-cols-4 gap-4">
          {TRUST.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-background md:h-12 md:w-12">
                <Icon className="h-4 w-4 text-foreground md:h-5 md:w-5" />
              </div>
              <div className="mt-2 whitespace-pre-line text-[10px] font-medium leading-tight text-foreground/80 md:text-xs">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProblemSection() {
  return (
    <Section className="relative">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-2 md:gap-12 md:px-8 md:py-16">
        <div className="flex flex-col justify-center">
          <Tag>The Reality</Tag>
          <h2 className="mt-3 text-2xl font-black leading-[1.05] tracking-tight md:text-4xl">
            Bike Theft is a<br />Real Problem.
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted-foreground md:text-base">
            Every day, thousands of riders across India lose more than just a vehicle.
            They lose their daily livelihood, savings, and peace of mind.
          </p>
          <div className="mt-4 h-px w-8 bg-foreground/30" />
          <p className="mt-3 text-sm font-semibold text-foreground md:text-base">
            Don't be the next statistic.<br />Protect what's yours.
          </p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] md:aspect-auto">
          <img
            src={bikeTheft}
            alt="Hooded thief stealing a bike at night"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-12 md:px-8">
        <div className="grid grid-cols-3 gap-2 rounded-2xl bg-card/80 p-2 shadow-[var(--shadow-card)] ring-1 ring-foreground/5 backdrop-blur sm:divide-x sm:divide-foreground/10">
          {[
            { icon: Radar, value: "1,800+", label: "Bike thefts in Pune (yearly)" },
            { icon: Building2, value: "13,000+", label: "Bike thefts in Bengaluru (yearly)" },
            { icon: ShieldCheck, value: "<20%", label: "National recovery rate" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 px-2 py-2 sm:px-4">
              <div className="hidden h-9 w-9 items-center justify-center rounded-lg bg-foreground/5 sm:flex">
                <s.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-base font-bold tracking-tight md:text-xl">{s.value}</div>
                <div className="text-[10px] leading-tight text-muted-foreground md:text-xs">{s.label}</div>
              </div>
            </div>
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
    <Section className="relative overflow-hidden bg-[var(--dark-bg)] text-[oklch(0.97_0.01_80)]">
      <div className="absolute inset-x-0 top-0 -z-0 mx-auto h-72 w-[60%] rounded-full bg-[oklch(0.45_0.05_75)]/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-2 md:gap-12 md:px-8 md:py-16">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            The Solution
          </span>
          <h2 className="mt-3 text-2xl font-black leading-[1.05] tracking-tight md:text-4xl">
            Meet Suraj Ishwar's<br />Theft Shield
          </h2>
          <p className="mt-3 max-w-md text-sm text-white/70 md:text-base">
            An all-in-one smart bike security system — engineered to detect, alert,
            block and protect your two-wheeler 24/7.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <f.icon className="h-4 w-4" />
                </div>
                <div className="mt-2 whitespace-pre-line text-[10px] font-medium leading-tight text-white/85">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 mx-auto h-full w-3/4 rounded-full bg-[oklch(0.7_0.08_75)]/15 blur-3xl" />
          <img
            src={deviceImg}
            alt="Theft Shield device"
            loading="lazy"
            className="mx-auto w-full max-w-xs md:max-w-sm"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 md:px-8">
        <div className="grid grid-cols-3 gap-2 rounded-2xl bg-white/95 p-2 text-foreground shadow-2xl sm:divide-x sm:divide-foreground/10">
          {[
            { icon: ShieldCheck, value: "95%", label: "theft risk reduction" },
            { icon: Check, value: "2-Year", label: "Warranty" },
            { icon: Users, value: "1,500+", label: "riders protected" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 px-2 py-2 sm:px-4">
              <div className="hidden h-9 w-9 items-center justify-center rounded-lg bg-foreground/5 sm:flex">
                <s.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-base font-bold tracking-tight md:text-xl">{s.value}</div>
                <div className="text-[10px] leading-tight text-muted-foreground md:text-xs">{s.label}</div>
              </div>
            </div>
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
    <Section id="features" className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Tag>Engineered Inside</Tag>
          <h2 className="mt-3 text-2xl font-black tracking-tight md:text-4xl">
            Every feature, obsessed over.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Six layers of intelligent protection working together — silently, around the clock.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] ring-1 ring-foreground/5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background transition group-hover:bg-[var(--gold)] group-hover:text-foreground">
                <f.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-3 text-sm font-bold">{f.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
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
    <Section id="compare" className="bg-card/50">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Tag>The Difference</Tag>
          <h2 className="mt-3 text-2xl font-black tracking-tight md:text-4xl">
            Why basic locks fail.
          </h2>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl bg-background shadow-[var(--shadow-soft)] ring-1 ring-foreground/5">
          <div className="grid grid-cols-5 border-b border-foreground/10 bg-foreground/[0.03] text-[10px] font-semibold uppercase tracking-wider md:text-xs">
            <div className="p-2.5 text-foreground/70 md:p-3">Feature</div>
            {cols.map((c, i) => (
              <div
                key={c}
                className={`p-2.5 text-center md:p-3 ${
                  i === cols.length - 1 ? "bg-foreground text-background" : "text-foreground/70"
                }`}
              >
                {c}
              </div>
            ))}
          </div>
          {rows.map((r) => (
            <div key={r.feature} className="grid grid-cols-5 border-b border-foreground/5 last:border-0">
              <div className="p-2.5 text-xs font-medium md:p-3 md:text-sm">{r.feature}</div>
              {r.v.map((ok, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-center p-2.5 md:p-3 ${
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
        </div>
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
    <Section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {items.map((b, i) => (
            <div
              key={b.title}
              className="rounded-2xl border border-foreground/10 bg-card p-4"
            >
              <div className="text-xs font-mono text-muted-foreground">0{i + 1}</div>
              <h3 className="mt-2 text-sm font-bold tracking-tight md:text-base">{b.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{b.desc}</p>
            </div>
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
    <Section id="reviews" className="bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Tag>Real Riders</Tag>
          <h2 className="mt-3 text-2xl font-black tracking-tight md:text-4xl">
            Loved across India.
          </h2>
          <div className="mt-3 flex items-center justify-center gap-1 text-foreground">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-2 text-xs font-semibold md:text-sm">4.9 / 5 from 1,200+ reviews</span>
          </div>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-background p-4 shadow-[var(--shadow-card)] ring-1 ring-foreground/5"
            >
              <div className="flex gap-1 text-foreground">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-foreground/80">"{t.text}"</p>
              <div className="mt-3 text-xs font-semibold">
                {t.name} <span className="font-normal text-muted-foreground">· {t.city}</span>
              </div>
            </div>
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
    <Section id="offer" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-beige)" }} />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Tag>Limited Launch Offer</Tag>
          <h2 className="mt-3 text-2xl font-black tracking-tight md:text-4xl">
            Pick your protection.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.name}
              className={`relative overflow-hidden rounded-2xl p-4 shadow-[var(--shadow-soft)] ring-1 transition hover:-translate-y-1 md:p-5 ${
                p.highlight
                  ? "bg-[var(--dark-bg)] text-[oklch(0.97_0.01_80)] ring-foreground/20"
                  : "bg-card text-foreground ring-foreground/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest ${
                    p.highlight ? "bg-[var(--gold)] text-foreground" : "bg-foreground text-background"
                  }`}
                >
                  {p.tag}
                </span>
                <div className="text-right">
                  <div className={`text-[10px] line-through ${p.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                    {p.old}
                  </div>
                  <div className="text-xl font-black tracking-tight md:text-2xl">{p.price}</div>
                </div>
              </div>
              <div className="mt-3 flex h-32 items-center justify-center overflow-hidden rounded-xl bg-white/5 md:h-40">
                <img src={p.img} alt={p.name} loading="lazy" className="max-h-full max-w-[60%] object-contain" />
              </div>
              <h3 className="mt-3 text-base font-bold tracking-tight md:text-lg">{p.name}</h3>
              <ul className="mt-2 space-y-1">
                {p.perks.map((perk) => (
                  <li key={perk} className={`flex items-center gap-2 text-xs ${p.highlight ? "text-white/85" : "text-foreground/80"}`}>
                    <Check className="h-3 w-3 shrink-0" /> {perk}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a
                  href={`${waLink}&text=${encodeURIComponent("I want to order " + p.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition hover:opacity-90 ${
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
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition ${
                    p.highlight
                      ? "border-white/30 text-white hover:bg-white/10"
                      : "border-foreground/20 hover:bg-foreground/5"
                  }`}
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Chat
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {[
            { icon: Gift, t: "Free Keychain", d: "With every order" },
            { icon: KeyRound, t: "Premium Remote", d: "Free in Premium pack" },
            { icon: ShieldCheck, t: "Lifetime Support", d: "We're always a call away" },
            { icon: MessageCircle, t: "WhatsApp Community", d: "Join 1,500+ riders" },
          ].map((b) => (
            <div
              key={b.t}
              className="flex items-center gap-2 rounded-xl bg-card/80 p-2.5 ring-1 ring-foreground/5 backdrop-blur"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                <b.icon className="h-3.5 w-3.5" />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-semibold">{b.t}</div>
                <div className="text-[10px] text-muted-foreground">{b.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section className="bg-[var(--dark-bg)] text-[oklch(0.97_0.01_80)]">
      <div className="mx-auto max-w-4xl px-5 py-14 text-center md:px-8 md:py-20">
        <Tag>
          <span className="text-foreground">Don't wait until it's gone</span>
        </Tag>
        <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-tight md:text-5xl">
          Protect Your Bike Today.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/70">
          Join 1,500+ riders across India who sleep peacefully knowing Theft Shield
          is on guard.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <a
            href="#offer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-foreground transition hover:opacity-90 md:text-sm"
          >
            Buy Now <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/10 md:text-sm"
          >
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp +91 8698521649
          </a>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <img src={logo} alt="Gadget Dash" className="h-14 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Premium smart bike security, built in India by Suraj Ishwar. Stay one
            step ahead of thieves.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +91 8698521649
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> hello@gadgetdash.in
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />{" "}
              <a href={waLink} target="_blank" rel="noreferrer" className="hover:text-foreground">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Company</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground">Features</a></li>
            <li><a href="#offer" className="hover:text-foreground">Pricing</a></li>
            <li><a href="#reviews" className="hover:text-foreground">Reviews</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-foreground">Refund Policy</a></li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full border border-foreground/15 p-2 hover:bg-foreground/5">
              <Share2 className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Website" className="rounded-full border border-foreground/15 p-2 hover:bg-foreground/5">
              <Globe2 className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-foreground/10 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gadget Dash by Suraj Ishwar · Made in India
      </div>
    </footer>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-foreground/10 bg-background/90 p-3 backdrop-blur-xl md:hidden">
      <a
        href="#offer"
        className="flex-1 rounded-full bg-foreground py-3 text-center text-sm font-semibold text-background"
      >
        Buy Now
      </a>
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm font-semibold"
      >
        <MessageCircle className="h-4 w-4" /> Chat
      </a>
    </div>
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