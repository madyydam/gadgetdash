import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Tag, fadeUp } from "@/components/common/UI";
import { motion } from "framer-motion";
import { Quote, MessageSquare, Target, Users, Rocket, Heart, Award, Briefcase, Zap, Star, Cpu, Mail, Phone } from "lucide-react";

// Image Imports
import surajImg from "@/assets/suraj.webp";
import surajImg2 from "@/assets/suraj2.jpg";
import surajImg3 from "@/assets/suraj3.jpg";
import surajImg4 from "@/assets/suraj4.jpg";
import kartikImg from "@/assets/kartik.jpg";
import yogitaImg from "@/assets/yogita.jpg";
import sudhirImg from "@/assets/sudhir.jpg";
import teamVisionImg from "@/assets/team_vision.png";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
});

function TeamMember({ 
  name, 
  title, 
  role, 
  story, 
  quote, 
  impact, 
  index,
  img
}: { 
  name: string; 
  title: string; 
  role: string; 
  story: string[]; 
  quote?: string; 
  impact?: string;
  index: number;
  img?: string;
}) {
  return (
    <Section stagger className={`py-12 px-6 ${index % 2 === 0 ? "bg-background" : "bg-card/40"}`}>
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
          <Tag className="scale-90 origin-left">{role}</Tag>
          <motion.h2 variants={fadeUp} className="mt-4 text-xl font-black tracking-tight md:text-2xl mb-1">
            {name}
          </motion.h2>
          <motion.div variants={fadeUp} className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
            {title}
          </motion.div>
          
          <div className="space-y-3 text-xs md:text-sm text-muted-foreground leading-relaxed">
            {story.map((p, i) => (
              <motion.p key={i} variants={fadeUp}>{p}</motion.p>
            ))}
          </div>

          {impact && (
            <motion.div variants={fadeUp} className="mt-6 p-5 rounded-2xl bg-foreground text-background shadow-md">
               <div className="text-[9px] font-bold uppercase tracking-widest opacity-60 mb-1">Impact at Gadget Dash</div>
               <p className="text-xs font-medium">{impact}</p>
            </motion.div>
          )}

          {quote && (
            <motion.div variants={fadeUp} className="mt-6 flex gap-3 items-start">
              <Quote className="h-5 w-5 text-foreground/20 shrink-0" />
              <p className="text-base font-bold italic tracking-tight text-foreground">{quote}</p>
            </motion.div>
          )}
        </div>
        
        <motion.div 
          variants={fadeUp} 
          className={`flex justify-center ${index % 2 !== 0 ? "md:order-1" : ""}`}
        >
          <div className="relative h-40 w-40 md:h-56 md:w-56 overflow-hidden rounded-full shadow-2xl ring-4 ring-foreground/5">
            {img ? (
              <img 
                src={img} 
                alt={name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${index % 2 === 0 ? "from-foreground/5 to-foreground/20" : "from-foreground/10 to-foreground/5"} flex items-center justify-center`}>
                <Users className="h-12 w-12 opacity-10" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function CompanyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* CEO / Founder Story - Hero Style */}
      <Section immediate stagger className="pt-16 pb-16 px-6 bg-[var(--dark-bg)] text-white overflow-hidden">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-xl mb-4 border border-white/20">
              The Face Behind Gadget Dash
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl font-black tracking-tight md:text-5xl lg:text-6xl mb-6 leading-[1.05]">
              Hi, I'm <br />
              <span className="text-white">SURAJ ISHWAR</span>
            </motion.h1>
            
            <div className="space-y-4 text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
              <motion.p variants={fadeUp}>
                Face behind Gadget Dash and the innovator of Theft Shield.
              </motion.p>
              <motion.p variants={fadeUp}>
                My entrepreneurial journey didn’t start with success. In fact, my first startup, <span className="text-white font-bold">DUDE SALAD</span>, failed. And yes, at that time it was tough to accept.
              </motion.p>
              <motion.p variants={fadeUp}>
                But I never looked at it as the end. Instead, I treated it as the beginning of a new chapter. That failure was my greatest teacher.
              </motion.p>
            </div>
          </div>
          
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="relative h-48 w-48 md:h-72 md:w-72 overflow-hidden rounded-full shadow-2xl ring-8 ring-white/10">
              <img 
                src={surajImg} 
                alt="Suraj Ishwar" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Founder's Detailed Narrative */}
      <Section stagger className="py-16 px-6 bg-background">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            <motion.p variants={fadeUp}>
              It showed me that success doesn’t come from avoiding mistakes, but from learning, adapting, and trying again, smarter and stronger.
            </motion.p>
            <motion.p variants={fadeUp}>
              With Gadget Dash, I took those lessons and turned them into action. Our mission is simple yet powerful: to make every ride safer, smarter, and more secure.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground font-medium">
              When I created Theft Shield, I wasn’t just building another gadget. I was building a promise of trust. A product that could protect what people value the most, their hard-earned vehicles.
            </motion.p>
            <motion.p variants={fadeUp}>
              Every time a rider installs Theft Shield, they’re not just getting a device, they’re getting peace of mind, innovation they can trust, and security that lasts.
            </motion.p>
            <motion.p variants={fadeUp}>
              I believe entrepreneurship is not about building a company overnight; it’s about building something that lasts a lifetime.
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Heart, t: "Resilience", d: "Failures taught me resilience." },
              { icon: Target, t: "Patience", d: "Failures taught me patience." },
              { icon: Award, t: "Value", d: "Failures taught me the importance of creating real value for real people." }
            ].map(v => (
              <motion.div key={v.t} variants={fadeUp} className="p-6 rounded-2xl bg-card border border-foreground/5 shadow-sm">
                <v.icon className="h-6 w-6 mb-3 text-foreground" />
                <div className="font-black text-sm mb-1">{v.t}</div>
                <div className="text-[10px] text-muted-foreground leading-relaxed">{v.d}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
            <motion.p variants={fadeUp}>
              Today, with Gadget Dash, I’m not just chasing a dream, I’m turning a dream into reality. And my message to every dreamer out there is simple:
            </motion.p>
            <motion.div variants={fadeUp} className="p-8 rounded-[2rem] bg-[var(--gradient-beige)] text-center">
              <p className="text-lg md:text-2xl font-black italic tracking-tight leading-tight mb-4">
                "Don’t fear failure. Fear not trying. Because every failure takes you one step closer to the breakthrough you’ve been waiting for."
              </p>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Suraj Ishwar</div>
            </motion.div>
            <motion.p variants={fadeUp} className="pt-6 text-foreground font-black text-center text-lg md:text-xl">
              Theft Shield is that breakthrough.
            </motion.p>
            <motion.p variants={fadeUp} className="text-center italic">
              It’s a symbol of innovation, determination, and the belief that no dream is too small when you dare to fight for it.
            </motion.p>
          </div>
        </div>
      </Section>

      {/* Meet our CEO Section */}
      <Section stagger className="py-16 px-6 border-y border-foreground/5 bg-card/20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Tag>Leadership</Tag>
            <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl">Meet our CEO</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-black mb-1">Suraj Ishwar</h3>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">Chief Executive Officer</div>
              
              <div className="space-y-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                <motion.p variants={fadeUp}>
                  Every great company begins with a vision, and at the heart of Gadget Dash stands its founder and CEO, Suraj Ishwar.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Suraj’s journey is not one of overnight success, it’s a story of resilience, innovation, and unshakable belief. From the lessons of his first failed venture to building India’s next-gen mobility security brand, he has shown what it truly means to rise, rebuild, and reinvent.
                </motion.p>
                <motion.p variants={fadeUp}>
                  As CEO, Suraj is not just leading a company, he’s building a movement. His philosophy is simple: <span className="text-foreground font-semibold">Innovation should solve real problems. Leadership should inspire. And businesses should create impact that lasts beyond profits.</span>
                </motion.p>
                <motion.p variants={fadeUp}>
                  Under his leadership, Gadget Dash is shaping the future of smart mobility security with its flagship product, Theft Shield, protecting thousands of riders across India. But more than that, he is on a mission to create a brand that customers trust, employees are proud of, and competitors respect.
                </motion.p>
                
                <div className="pt-4 space-y-3">
                  <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Leadership Philosophy</motion.p>
                  {[
                    { t: "Chief Encouragement Officer", d: "inspiring his team to dream big." },
                    { t: "Chief Energy Officer", d: "fueling passion and drive in the organization." },
                    { t: "Chief Execution Officer", d: "turning vision into reality with focus and discipline." }
                  ].map(item => (
                    <motion.div key={item.t} variants={fadeUp} className="flex gap-2 items-start">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                      <p className="text-xs text-muted-foreground"><span className="font-bold text-foreground">{item.t}</span> – {item.d}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.p variants={fadeUp} className="pt-4 italic">
                  His story proves one thing: failure is not the opposite of success, it’s the foundation of it. And with Gadget Dash, Suraj Ishwar is building not just products, but a legacy of innovation, trust, and leadership in the Indian startup ecosystem.
                </motion.p>
              </div>
            </div>
            <motion.div variants={fadeUp} className="order-1 md:order-2 flex flex-col gap-6 items-center">
               <div className="relative h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-full shadow-2xl ring-4 ring-foreground/5">
                  <img 
                    src={surajImg4} 
                    alt="Suraj Ishwar" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
               </div>
               <motion.div variants={fadeUp} className="text-center max-w-xs">
                 <blockquote className="text-sm font-black italic tracking-tight text-foreground leading-snug">
                   “My goal is simple: make rides safer, make technology smarter, and make India prouder.”
                 </blockquote>
                 <div className="mt-2 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Suraj Ishwar</div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Core Team Members */}
      <div className="relative">
        <div className="mx-auto max-w-xl text-center py-16 px-6">
          <Tag>The Force Behind the Shield</Tag>
          <h2 className="mt-4 text-3xl font-black tracking-tight">Our Core Team</h2>
        </div>

        <TeamMember 
          index={0}
          img={kartikImg}
          name="Kartik Kongari"
          title="Head, Internal Operations & Outreach"
          role="Our Operations"
          story={[
            "Every dream starts small, but some journeys make that dream extraordinary. This is the journey of Kartik Kongari, a young man from Solapur, whose life stands as a living example of what perseverance, courage, and faith can truly achieve.",
            "Born and raised in a modest household, Kartik studied at Shree Datt Prashala till 10th grade, completed his 11th and 12th from Walchand College, and began his graduation soon after. Life was steady, his dreams were clear, and everything seemed on track, until the world came to a halt during the lockdown.",
            "The pandemic hit hard, not just health-wise, but financially. His family’s income stopped, and survival became a daily challenge. Yet, Kartik did not break.",
            "He stood up, looked at the situation, and told himself, 'If life is testing me, I’ll answer with action.' He started doing small jobs, ironing clothes, running errands, anything that could help the family. For months, he earned barely ₹4,000–₹5,000, but saved every possible rupee. Those savings taught him the real value of hard work and money.",
            "But his heart was still searching for something bigger. He experimented with a garments business, planning every step from suppliers to workers. Unfortunately, due to lack of manpower and support, the idea couldn’t take off. Most people would have stopped there, but Kartik wasn’t one of them.",
            "He moved on to exploring crypto trading and forex, learned everything from scratch through YouTube and forums, and with ₹10,000 as capital, grew it to ₹1.8 lakh. That success didn’t just bring him money, it brought him confidence and purpose. He realized that knowledge is power, and consistency is wealth.",
            "Still, Kartik wanted to create something meaningful, a solution for people around him. He noticed how riders in Solapur faced constant issues with bike thefts. Inspired, he thought of bringing a local transport or safety-based startup model, similar to ride-sharing services like Ola and Uber.",
            "He even reached out to the Founder of Rapido, pitching his idea directly. Although he didn’t receive a reply, that day became one of the most defining days of his life. 'I didn’t feel bad that he didn’t respond, I felt proud that I reached him.'",
            "Then came destiny’s turning point. Through a college friend, Kartik got introduced to Suraj Ishwarkatti, Founder & CEO of Gadget Dash. When Kartik first learned about Gadget Dash, he instantly felt a connection. He admired Suraj Sir’s vision, discipline, and the way he built a brand from scratch.",
            "He decided to take a step forward, he reached out. Within days, Suraj personally called him, listened to his story, and saw the same spark he once had. That one conversation changed everything. Kartik found not just an opportunity, but a purpose.",
            "His goal is not just to work, but to build, to bring Gadget Dash to every city, every rider, and every Indian who believes in 'Smart Mobility, Safe Journey.' For Kartik Kungari, Gadget Dash is not just a company, it’s a mission, a platform to build a legacy, and a family where hard work truly meets destiny."
          ]}
          impact="From ironing clothes to joining an Indian tech startup, Kartik proves that dreams do come true when you refuse to give up."
          quote="Success isn’t about where you come from, it’s about how far you’re willing to go."
        />

        <TeamMember 
          index={1}
          img={yogitaImg}
          name="Yogita Taterao Ranher"
          title="HR Executive & Culture Specialist"
          role="Our Human Resource"
          story={[
            "At Gadget Dash, we don't just hire based on what’s written on a piece of paper; we hire the fire within. Yogita Ranher entered our doors as a student intern from Zeal College, but she quickly proved that she was far beyond an ordinary trainee. While many focus on technical skills, Yogita mastered the most important skill of all, Professional Discipline.",
            "During her internship, her attention to detail, sincerity in reporting, and her ability to manage people with respect and firmness caught the eye of our Founder. Even without a formal background in Human Resources, Yogita demonstrated a natural leadership instinct.",
            "Recognizing her potential to shape the company’s future, she was handpicked for the core team as our HR Executive. She is the living proof of our core philosophy: 'Skills can be taught, but a sincere heart and a disciplined mind are rare assets.'",
            "Today, Yogita is the bridge between the company's vision and our growing team of interns. She manages internal operations, documentation, and most importantly, our workplace culture. Recently awarded as the 'Top Performer', she continues to set benchmarks for every new member who joins Gadget Dash.",
            "Her journey is a message to every student: Discipline is the greatest shortcut to success."
          ]}
          impact="Yogita set benchmarks for everyone at Gadget Dash by proving that sincerity and discipline are the ultimate shortcuts to success."
          quote="Success is 1% Talent and 99% Discipline. At Gadget Dash, I didn't just find a job; I found a platform that values my sincerity over my certificate."
        />
      </div>

      {/* Innovation & Technology Team */}
      <div className="relative bg-card/10">
        <div className="mx-auto max-w-xl text-center py-16 px-6">
          <Tag>The Engineering Lab</Tag>
          <h2 className="mt-4 text-3xl font-black tracking-tight uppercase">Innovation & Technology Team</h2>
        </div>

        <TeamMember 
          index={2}
          img={sudhirImg}
          name="Sudhir Gaikwad"
          title="Chief Technology Officer"
          role="Technology Leadership"
          story={[
            "As the Chief Technology Officer, Sudhir Gaikwad is the architect of the digital and electronic systems that power Theft Shield. With a deep expertise in embedded systems and IoT architecture, he ensures that our security solutions are not just functional, but industry-leading.",
            "Sudhir leads the innovation lab at Gadget Dash, pushing the boundaries of what's possible in two-wheeler security. His focus on low-latency communication and robust hardware design is what makes Theft Shield the most reliable system in the Indian market.",
            "He believes that true innovation lies in the intersection of hardware reliability and smart software, creating a seamless experience for every rider."
          ]}
          impact="Sudhir's leadership in technology ensures that Gadget Dash remains at the forefront of the smart mobility revolution in India."
          quote="Innovation is the bridge between a problem and its most elegant solution."
        />
      </div>

      {/* Our Vision & Team Section */}
      <Section stagger className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} className="order-2 md:order-1">
            <Tag>Our Vision</Tag>
            <h2 className="mt-4 text-2xl font-black tracking-tight md:text-4xl mb-6">
              Empowering Lives Through Innovation
            </h2>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                We are a <span className="text-foreground font-bold">Team of Passionate People</span> whose Goal is to improve everyone's life through disruptive products. 
              </p>
              <p>
                We build great products to solve Theft problems and create a world where security is seamless and accessible to all.
              </p>
            </div>
            
            <div className="mt-10 p-8 rounded-[2rem] bg-card border border-foreground/5 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest mb-6">Contact us</h3>
              <div className="space-y-4">
                <a href="mailto:hr@gadgetdash.in" className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">hr@gadgetdash.in</span>
                </a>
                <a href="tel:+918698521649" className="flex items-center gap-3 group">
                  <div className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">+91 8698521649</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeUp} className="order-1 md:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-foreground/5">
              <img 
                src={teamVisionImg} 
                alt="Our Team Vision" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="py-20 px-6 bg-foreground text-background text-center">
        <Tag className="bg-background/20 text-background"><span className="text-white">The Future</span></Tag>
        <motion.h2 variants={fadeUp} className="mt-6 text-2xl font-black md:text-4xl lg:text-5xl max-w-4xl mx-auto leading-tight">
          Together, let’s build a safer future, one ride at a time.
        </motion.h2>
        <div className="mt-10 flex justify-center gap-3">
          <motion.div variants={fadeUp} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur">
            <Zap className="h-5 w-5 text-white" />
          </motion.div>
          <motion.div variants={fadeUp} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur">
            <Rocket className="h-5 w-5 text-white" />
          </motion.div>
          <motion.div variants={fadeUp} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur">
            <Star className="h-5 w-5 text-white" />
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
