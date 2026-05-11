import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Tag, fadeUp } from "@/components/common/UI";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Search, 
  MapPin, 
  TrendingUp, 
  ArrowRight, 
  Users, 
  Zap, 
  Target, 
  Award,
  ShieldCheck,
  Star,
  BookOpen
} from "lucide-react";
import teamImg from "@/assets/team_vision.png";

export const Route = createFileRoute("/jobs/")({
  component: JobsPage,
});

function JobsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Section immediate stagger className="pt-20 pb-16 px-6 bg-[var(--gradient-beige)] overflow-hidden">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <Tag className="mb-4">Work at Gadget Dash</Tag>
            <h1 className="text-4xl font-black tracking-tight md:text-7xl mb-6 uppercase">
              JOIN THE <br />
              <span className="font-serif italic text-[var(--gold)]">MISSION</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mb-8">
              At Gadget Dash, we don’t just offer jobs, we offer growth, learning, and real-world experience. Join the team redefining mobility security in India.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search for roles (e.g. Sales, Engineer)..." 
                className="w-full h-14 pl-12 pr-6 rounded-full border border-foreground/10 bg-background/50 backdrop-blur-xl focus:ring-2 focus:ring-foreground transition-all text-sm"
              />
            </div>
          </div>
          <motion.div variants={fadeUp} className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-foreground/5">
            <img src={teamImg} alt="Our Team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section stagger className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, t: "Fast Growth", d: "Experience the speed of a high-growth Indian startup." },
              { icon: Target, t: "Impact", d: "Your effort directly contributes to making India safer." },
              { icon: Star, t: "Recognition", d: "We reward discipline, consistency, and hard work." }
            ].map(v => (
              <motion.div key={v.t} variants={fadeUp} className="p-8 rounded-[2rem] bg-card border border-foreground/5 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-foreground/5 flex items-center justify-center mb-4">
                  <v.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-sm font-black mb-2 uppercase tracking-tight">{v.t}</h3>
                <p className="text-xs text-muted-foreground">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Job Offers Section */}
      <Section stagger className="py-20 px-6 border-t border-foreground/5 bg-card/20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <Tag>Current Openings</Tag>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">Our Job Offers</h2>
            </div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Showing 1 Featured Opportunity
            </div>
          </div>

          <div className="grid gap-6">
            <Link to="/jobs/sales-executive">
              <motion.div 
                variants={fadeUp}
                className="group relative overflow-hidden p-8 rounded-[2.5rem] bg-background border border-foreground/10 hover:border-foreground/30 transition-all shadow-sm hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black md:text-2xl">Sales Executive</h3>
                      <span className="px-3 py-1 rounded-full bg-foreground/5 text-[9px] font-bold uppercase tracking-widest">Immediate Hiring</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs font-bold text-muted-foreground">
                      <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Pune, MH, India</span>
                      <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> 100 Open Positions</span>
                      <span className="flex items-center gap-1.5 text-foreground"><TrendingUp className="h-4 w-4" /> Earn up to ₹90,000+ / mo</span>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
                      Join India’s next-gen mobility security brand. We are looking for passionate individuals to promote Suraj Ishwar's Theft Shield across Pune.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:block text-right">
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Limited Seats</div>
                      <div className="text-sm font-black text-foreground">Join Fast</div>
                    </div>
                    <div className="h-14 w-14 rounded-full bg-foreground text-background flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-foreground/5 blur-3xl group-hover:bg-foreground/10 transition-all" />
              </motion.div>
            </Link>
          </div>
        </div>
      </Section>

      {/* Perks & Benefits */}
      <Section stagger className="py-24 px-6 bg-foreground text-background">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Tag className="bg-background/20 text-background">What We Offer</Tag>
            <h2 className="mt-6 text-3xl font-black md:text-5xl">Beyond Just a Salary</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "High Commissions", desc: "Attractive daily commissions and monthly incentives." },
              { icon: ShieldCheck, title: "Excellence Certificate", desc: "Certificate of Excellence after successful performance." },
              { icon: TrendingUp, title: "Career Growth", desc: "Opportunity to move into Team Lead / Manager roles." },
              { icon: BookOpen, title: "Expert Training", desc: "Free training on sales strategy and communication." },
              { icon: Award, title: "Mentorship", desc: "Lifetime technical & business mentorship from the core team." },
              { icon: Users, title: "Great Culture", desc: "Work with a passionate founding team that values innovation." }
            ].map((perk, i) => (
              <motion.div key={i} variants={fadeUp} className="p-6 rounded-2xl bg-background/10 border border-background/5">
                <div className="h-10 w-10 rounded-xl bg-background/20 flex items-center justify-center mb-4">
                   {perk.icon ? <perk.icon className="h-5 w-5" /> : <TrendingUp className="h-5 w-5" />}
                </div>
                <h3 className="font-bold text-sm mb-2">{perk.title}</h3>
                <p className="text-xs opacity-60 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeUp} className="mt-16 text-center">
            <p className="text-sm md:text-base opacity-70 italic max-w-2xl mx-auto">
              "At Gadget Dash, your success is our success. Every effort you make directly builds your future — and ours."
            </p>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
