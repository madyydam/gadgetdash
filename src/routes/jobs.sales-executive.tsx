import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Tag, fadeUp } from "@/components/common/UI";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Currency, 
  Target, 
  CheckCircle2, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Clock, 
  Star,
  Users,
  Zap,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  Rocket
} from "lucide-react";

export const Route = createFileRoute("/jobs/sales-executive")({
  component: SalesExecutivePage,
});

function SalesExecutivePage() {
  const WHATSAPP = "918698521649";
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hi! I'm interested in the Sales Executive position at Gadget Dash. I've read the role details and I'm ready to apply."
  )}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Section immediate stagger className="pt-20 pb-12 px-6 bg-[var(--gradient-beige)]">
        <div className="mx-auto max-w-4xl">
          <Link to="/jobs" className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowRight className="h-3 w-3 rotate-180" /> Back to Careers
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Tag className="mb-4">Immediate Hiring</Tag>
              <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                Sales Executive
              </h1>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Pune, MH, India</span>
                <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> 100 Open Positions</span>
                <span className="flex items-center gap-1.5 text-foreground"><TrendingUp className="h-4 w-4" /> Earn up to ₹90,000+ / mo</span>
              </div>
            </div>
            <a 
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-10 py-5 text-base font-black text-background transition hover:opacity-90 shadow-xl"
            >
              Apply Now !
            </a>
          </div>
        </div>
      </Section>

      <Section stagger className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            
            {/* Overview */}
            <motion.div variants={fadeUp} className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                At Gadget Dash, we are looking for passionate and confident Sales Executives who want to grow with one of India’s fastest-growing smart mobility brands.
              </p>
              <p>
                Your role will include on-ground sales, product demonstrations, and building strong customer relationships while promoting Suraj Ishwar’s <span className="text-foreground font-bold">Theft Shield</span>, India’s trusted two-wheeler anti-theft system.
              </p>
              <p>
                This job is ideal for self-motivated individuals who believe in hard work, communication, and growth. You’ll earn attractive daily commissions and get the opportunity to become part of our expanding business family.
              </p>
            </motion.div>

            {/* Responsibilities */}
            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                <Target className="h-5 w-5" /> Responsibilities
              </h2>
              <ul className="space-y-4">
                {[
                  "Promote and sell Gadget Dash Theft Shield in local markets (Narhe, Dhayari, Ambegaon, Vadgaon, Pune & nearby areas).",
                  "Demonstrate product features and explain benefits to customers.",
                  "Achieve daily sales targets (minimum 10 units per day).",
                  "Maintain customer feedback and report daily performance.",
                  "Coordinate with the internal team for marketing support and updates."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Commission Structure */}
            <motion.div variants={fadeUp} className="p-8 rounded-[2.5rem] bg-foreground text-background shadow-2xl overflow-hidden relative">
              <div className="relative z-10">
                <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                  <Currency className="h-5 w-5 text-background/60" /> Final Sales Commission Structure
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead className="bg-background/10">
                      <tr>
                        <th className="p-4 font-black">Units Sold per Day</th>
                        <th className="p-4 font-black">Commission per Product</th>
                        <th className="p-4 font-black text-right">Total Earning per Day</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-background/10">
                      {[
                        { u: "1 Product", c: "₹300", t: "₹300" },
                        { u: "2 Products", c: "₹300", t: "₹600" },
                        { u: "3 Products", c: "₹300", t: "₹900" },
                        { u: "4 Products", c: "₹320", t: "₹1280" },
                        { u: "5 Products", c: "₹340", t: "₹1700" },
                        { u: "6 Products", c: "₹360", t: "₹2160" },
                        { u: "7 Products", c: "₹380", t: "₹2660" },
                        { u: "8 Products", c: "₹400", t: "₹3200" },
                        { u: "9 Products", c: "₹400", t: "₹3600" },
                        { u: "10 Products or More", c: "₹400 + ₹500 Bonus", t: "₹4000+" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-background/5 transition-colors">
                          <td className="p-4 opacity-80">{row.u}</td>
                          <td className="p-4 opacity-80">{row.c}</td>
                          <td className="p-4 text-right font-black">{row.t}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-8 space-y-3 p-6 rounded-2xl bg-background/5 border border-background/10">
                  <p className="text-xs font-bold text-background">• For every 10-unit milestone, a ₹500 performance bonus will be added.</p>
                  <p className="text-xs opacity-60">• Daily sales targets will be tracked individually by the Ground Team Head.</p>
                  <p className="text-xs opacity-60">• Weekly top performers will receive recognition and extra incentives.</p>
                  <p className="pt-4 text-sm font-black text-background">Base Salary: ₹25,000/month (performance-based deductions apply if target missed).</p>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-background/5 blur-3xl" />
            </motion.div>

            {/* Incentives & Growth */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} className="p-8 rounded-[2rem] bg-card border border-foreground/5 shadow-sm">
                <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5" /> Additional Incentives
                </h3>
                <div className="space-y-4 text-xs text-muted-foreground">
                  <p>The <span className="font-bold text-foreground">Top Performer of the Month</span> will receive a special performance bonus and be featured on Gadget Dash’s official Instagram handle.</p>
                  <p>Consistent performers will be eligible for promotions to <span className="font-bold text-foreground">Sales Lead</span> or <span className="font-bold text-foreground">Area Manager</span> roles.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="p-8 rounded-[2rem] bg-card border border-foreground/5 shadow-sm">
                <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" /> Growth Philosophy
                </h3>
                <div className="space-y-4 text-xs italic text-muted-foreground">
                  <p>Let’s stay consistent, disciplined, and customer-focused.</p>
                  <p className="font-black text-foreground not-italic">Every sale builds Trust, Reputation, and the Future of Gadget Dash.</p>
                </div>
              </motion.div>
            </div>

            {/* Why Join Gadget Dash? */}
            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-black mb-8 text-center uppercase tracking-widest">Why Join Gadget Dash?</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Currency, t: "High Earning Potential" },
                  { icon: Rocket, t: "Fast Career Growth" },
                  { icon: Users, t: "Dynamic & Supportive Team" },
                  { icon: Star, t: "Real-world Experience" }
                ].map(v => (
                  <div key={v.t} className="text-center space-y-3">
                    <div className="h-12 w-12 rounded-2xl bg-foreground/5 flex items-center justify-center mx-auto">
                      <v.icon className="h-6 w-6" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-tight leading-tight">{v.t}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What We Offer ! */}
            <motion.div variants={fadeUp} className="p-10 rounded-[2.5rem] bg-card/40 border border-foreground/5">
              <h2 className="text-xl font-black mb-6">What We Offer !</h2>
              <p className="text-sm text-muted-foreground mb-8">At Gadget Dash, we don’t just offer jobs, we offer growth, learning, and real-world experience. As part of our Sales & Marketing team, you’ll gain:</p>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {[
                  "Hands-on experience in field marketing",
                  "Attractive daily commissions & incentives",
                  "Free training on sales & communication",
                  "Certificate of Excellence",
                  "Fast-track to Team Lead / Manager",
                  "Work with a passionate founding team",
                  "Lifetime technical & business mentorship"
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-xs text-muted-foreground">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trainings Section */}
            <motion.div variants={fadeUp} className="space-y-6">
              <h2 className="text-xl font-black flex items-center gap-2"><BookOpen className="h-5 w-5" /> Trainings</h2>
              <p className="text-sm text-muted-foreground">At Gadget Dash, we believe learning never stops. Every team member receives hands-on training and continuous mentorship to enhance their skills.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  {[
                    "Product Knowledge & Technical Understanding",
                    "Sales & Communication Techniques",
                    "Field Marketing Strategies",
                    "Customer Handling & Pitching Skills",
                    "Digital Marketing & Brand Promotion",
                    "Real-time Practice Sessions with Live Demos"
                  ].map((t, i) => (
                    <div key={i} className="flex gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-foreground/40" />
                      {t}
                    </div>
                  ))}
                </div>
                <div className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10 text-center flex flex-col justify-center">
                  <div className="text-3xl font-black mb-1">12</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Training sessions per year</div>
                  <p className="mt-4 text-[10px] italic opacity-60">You’ll also get lifetime guidance and technical support from the core team.</p>
                </div>
              </div>
            </motion.div>

            {/* Footer Apply Card */}
            <motion.div variants={fadeUp} className="p-12 rounded-[3rem] bg-foreground text-background text-center relative overflow-hidden">
               <div className="relative z-10">
                 <h2 className="text-2xl font-black mb-2">Ready to Start?</h2>
                 <p className="text-sm opacity-60 mb-8 max-w-lg mx-auto">Click below to apply directly through WhatsApp and start your journey with Gadget Dash today.</p>
                 <a 
                   href={waLink}
                   target="_blank"
                   rel="noreferrer"
                   className="inline-flex items-center justify-center rounded-full bg-background px-12 py-5 text-base font-black text-foreground transition hover:scale-105 shadow-2xl"
                 >
                   Apply Now !
                 </a>
                 <div className="mt-8 flex justify-center gap-8 opacity-60">
                   <div className="text-center">
                     <div className="text-xs font-black">Flexible</div>
                     <div className="text-[9px] uppercase font-bold tracking-widest">Hours</div>
                   </div>
                   <div className="text-center">
                     <div className="text-xs font-black">₹25,000</div>
                     <div className="text-[9px] uppercase font-bold tracking-widest">Base Salary</div>
                   </div>
                 </div>
               </div>
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Briefcase className="h-32 w-32" />
               </div>
            </motion.div>

          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
