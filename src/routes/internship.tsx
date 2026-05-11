import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Tag, fadeUp } from "@/components/common/UI";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Zap, 
  Rocket, 
  CheckCircle2, 
  Laptop, 
  MessageSquare,
  Globe,
  Award,
  Users,
  ChevronRight,
  ArrowUpRight,
  Target
} from "lucide-react";

// Image Imports
import heroImg from "@/assets/internship-hero.png";
import cultureImg from "@/assets/internship-culture.png";
import techImg from "@/assets/internship-tech.png";

export const Route = createFileRoute("/internship")({
  component: InternshipPage,
});

function InternshipPage() {
  const WHATSAPP = "918698521649";
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hi! I'm interested in the Internship program at Gadget Dash."
  )}`;

  const tracks = [
    {
      title: "Embedded Systems",
      icon: Laptop,
      skills: ["C/C++", "Circuit Design", "Firmware"],
      desc: "Architect the core intelligence of our security devices."
    },
    {
      title: "Full Stack Dev",
      icon: Zap,
      skills: ["React", "Node.js", "TypeScript"],
      desc: "Build mission-critical dashboards and tracking systems."
    },
    {
      title: "Mobile Systems",
      icon: Globe,
      skills: ["React Native", "Swift", "Kotlin"],
      desc: "Develop our flagship app. Push notifications and control."
    },
    {
      title: "Hardware Engineering",
      icon: Award,
      skills: ["PCB Layout", "IoT Protocols", "Prototyping"],
      desc: "Design foundations of trusted security hardware."
    },
    {
      title: "Growth & Marketing",
      icon: Rocket,
      skills: ["Content Strategy", "SEO", "Analytics"],
      desc: "Scale our mission. Design viral campaigns and funnels."
    },
    {
      title: "UI/UX Architecture",
      icon: MessageSquare,
      skills: ["Figma", "Interaction Design", "Motion"],
      desc: "Craft visual language. Make security feel simple."
    }
  ];

  const slowStagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Cinematic Hero Section */}
      <section className="relative h-[55vh] md:h-[65vh] min-h-[400px] flex items-center pt-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={heroImg} 
            alt="Gadget Dash IoT Lab" 
            className="w-full h-full object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
          <motion.div
            variants={slowStagger}
            initial="hidden"
            animate="show"
            className="max-w-lg"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[8px] font-bold uppercase tracking-widest text-white backdrop-blur-xl mb-4 border border-white/20">
              Applications Open • Summer 2026
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl mb-4 leading-[1.1]">
              Engineer<br />
              <span className="text-white/40">The Future.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-sm text-white/70 max-w-sm mb-6 leading-relaxed">
              Step into India's most innovative IoT lab. Build products that protect 1,500+ riders daily.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-black text-black transition-all hover:scale-105 shadow-xl"
              >
                Apply Now <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </a>
              <a
                href="#tracks"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/10"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Scale Bar */}
      <div className="bg-foreground text-background py-6 md:py-8 overflow-hidden">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Target, label: "Placement Rate", value: "40%" },
              { icon: Users, label: "Tech Mentors", value: "12+" },
              { icon: Award, label: "Certification", value: "ISO" },
              { icon: Rocket, label: "Active Nodes", value: "1.5k+" },
            ].map((s) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={s.label} 
                className="flex items-center gap-3"
              >
                <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <s.icon className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <div className="text-base font-black text-white">{s.value}</div>
                  <div className="text-[7px] font-bold uppercase tracking-widest text-white/50">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tracks Section with Circular Image Focus */}
      <Section id="tracks" stagger className="py-12 px-6 relative">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
            <div className="flex flex-col">
              <Tag className="scale-90 origin-left">Specializations</Tag>
              <motion.h2 variants={fadeUp} className="mt-4 text-xl font-black tracking-tight md:text-3xl mb-4 leading-tight">
                Where Excellence Meets Hardware.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Choose a track where you can make the most impact. Every intern works on production code and real circuit designs.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="relative h-48 w-48 md:h-64 md:w-64">
                <div className="h-full w-full rounded-full overflow-hidden shadow-xl ring-1 ring-black/5">
                  <img src={techImg} alt="Engineering Tech" className="w-full h-full object-cover" />
                </div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-2 -left-2 h-20 w-20 md:h-28 md:w-28 rounded-full overflow-hidden shadow-xl border-4 border-white ring-1 ring-black/5"
                >
                   <img src={heroImg} alt="Lab work" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((t, i) => (
              <motion.div 
                key={t.title} 
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="group p-6 rounded-2xl bg-card border border-foreground/5 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background mb-4 transition-all group-hover:bg-black">
                  <t.icon className="h-4 w-4" />
                </div>
                <h3 className="text-base font-bold mb-2">{t.title}</h3>
                <p className="text-muted-foreground mb-4 text-xs leading-relaxed">{t.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {t.skills.map(s => (
                    <span key={s} className="text-[7px] font-bold px-2 py-0.5 bg-foreground/5 rounded-full uppercase tracking-widest">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* High-Contrast Culture Section */}
      <Section stagger className="py-12 px-6 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div variants={fadeUp} className="lg:col-span-2 flex justify-center">
               <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden shadow-xl ring-1 ring-white/10">
                  <img src={cultureImg} alt="Team Culture" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10" />
               </div>
            </motion.div>
            <div className="lg:col-span-3 flex flex-col">
              <Tag><span className="text-white">Life at Gadget Dash</span></Tag>
              <motion.h2 variants={fadeUp} className="mt-4 text-xl font-black tracking-tight md:text-3xl lg:text-4xl mb-4 md:mb-6 leading-[1.1]">
                Radical Transparency.<br />
                <span className="text-white/30">Relentless Growth.</span>
              </motion.h2>
              <div className="grid gap-4 md:gap-6">
                {[
                  { icon: Award, title: "Recognition", desc: "Work for an ISO-certified startup. Your experience here is gold." },
                  { icon: GraduationCap, title: "Direct Mentorship", desc: "Weekly tech sessions directly with our CEO, Suraj Ishwar." },
                  { icon: Users, title: "High-Performance", desc: "Collaborate with engineers obsessive about security." },
                ].map((item) => (
                  <motion.div variants={fadeUp} key={item.title} className="flex gap-4 group">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1 text-white">{item.title}</h3>
                      <p className="text-white/50 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CEO Insight Section */}
      <Section stagger className="py-12 px-6 bg-[var(--gradient-beige)]">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 variants={fadeUp} className="text-lg md:text-2xl font-black italic tracking-tight mb-6 leading-tight">
            "We don't look for resumes. We look for the hunger to build something that actually matters."
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="text-base font-black uppercase tracking-tighter">Suraj Ishwar</div>
            <div className="text-muted-foreground font-bold tracking-[0.2em] text-[7px] mt-1 uppercase">Founder & CEO, Gadget Dash</div>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section stagger className="py-12 px-6 relative overflow-hidden">
        <motion.div variants={fadeUp} className="mx-auto max-w-4xl relative z-10 rounded-[1.5rem] bg-black p-8 md:p-12 text-center text-white shadow-2xl">
          <Tag><span className="text-white">Start Your Mission</span></Tag>
          <h2 className="mt-4 text-2xl md:text-4xl font-black mb-6 md:mb-8 leading-tight">
            Ready to Build<br />The Shield?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-black text-black transition-all shadow-xl"
            >
              Apply via WhatsApp <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
          <motion.p variants={fadeUp} className="mt-8 text-[8px] text-white/30 font-semibold uppercase tracking-[0.3em]">
            Join the top 1% of Indian IoT talent.
          </motion.p>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}
