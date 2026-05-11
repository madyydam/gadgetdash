import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section, Tag, fadeUp } from "@/components/common/UI";
import { 
  ShieldAlert, 
  Settings, 
  Wrench, 
  Headphones, 
  Truck, 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  Users,
  History,
  ExternalLink,
  Quote
} from "lucide-react";
import { motion } from "framer-motion";
import tech1 from "@/assets/tech1.webp";
import tech2 from "@/assets/tech2.webp";
import tech3 from "@/assets/tech3.webp";
import tech4 from "@/assets/tech4.webp";
import tech5 from "@/assets/tech5.webp";
import tech6 from "@/assets/tech6.webp";
import tech7 from "@/assets/tech7.webp";
import surajImg from "@/assets/suraj.webp";

export const Route = createFileRoute("/our-services")({
  component: OurServices,
});

function TechnicianCard({ tech, index }: { tech: any; index: number }) {
  return (
    <motion.div 
      variants={fadeUp}
      className="p-6 rounded-[2rem] bg-card border border-foreground/5 shadow-sm hover:shadow-xl transition-all group overflow-hidden"
    >
      <div className="relative h-40 -mx-6 -mt-6 mb-6 overflow-hidden">
        <img 
          src={tech.img} 
          alt={tech.garage} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
          <Wrench className="h-5 w-5" />
        </div>
        <span className="absolute top-4 right-4 text-[10px] font-black bg-black/50 backdrop-blur-md px-2 py-1 rounded-md border border-white/20 text-white">0{index + 1}</span>
      </div>
      
      <h3 className="text-base font-black mb-1 leading-tight">{tech.garage}</h3>
      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">
        <User className="h-3 w-3" /> {tech.owner}
      </div>

      <div className="space-y-3 mb-8">
        <div className="flex gap-3 text-xs text-muted-foreground">
          <Phone className="h-4 w-4 shrink-0 text-foreground/40" />
          <a href={`tel:${tech.phone}`} className="hover:text-foreground transition-colors">{tech.phone}</a>
        </div>
        {tech.email !== "NA" && (
          <div className="flex gap-3 text-xs text-muted-foreground">
            <Mail className="h-4 w-4 shrink-0 text-foreground/40" />
            <a href={`mailto:${tech.email}`} className="hover:text-foreground transition-colors truncate">{tech.email}</a>
          </div>
        )}
        <div className="flex gap-3 text-xs text-muted-foreground">
          <History className="h-4 w-4 shrink-0 text-foreground/40" />
          <span>{tech.exp}</span>
        </div>
        <a 
          href={tech.location}
          target="_blank"
          rel="noreferrer"
          className="flex gap-3 text-xs text-muted-foreground leading-relaxed hover:text-foreground transition-colors group/addr"
        >
          <MapPin className="h-4 w-4 shrink-0 text-foreground/40 group-hover/addr:text-foreground transition-colors" />
          <span className="text-[11px] border-b border-transparent group-hover/addr:border-foreground/20">{tech.address}</span>
        </a>
      </div>

      <a 
        href={tech.location}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-foreground/5 text-[10px] font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
      >
        View on Maps <ExternalLink className="h-3 w-3" />
      </a>
    </motion.div>
  );
}

function OurServices() {
  const services = [
    {
      icon: ShieldAlert,
      title: "Anti-Theft Installation",
      desc: "Professional installation by certified technicians.",
      features: ["Zero wire cutting", "OEM warranty safe", "Concealed mounting"],
    },
    {
      icon: Settings,
      title: "System Customization",
      desc: "Tailor the sensitivity and alert types of your system.",
      features: ["Sensitivity control", "Siren presets", "Mobile priority"],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      desc: "Regular health checks and battery optimization.",
      features: ["2-Year Warranty", "Free diagnostic checks", "Battery monitoring"],
    },
    {
      icon: Headphones,
      title: "Emergency Assistance",
      desc: "Dedicated support team available around the clock.",
      features: ["Instant response", "Police coordination", "Remote blocking"],
    },
    {
      icon: Truck,
      title: "On-Site Service",
      desc: "Our technicians can visit your home or workplace.",
      features: ["Doorstep service", "Scheduled visits", "Pune & major cities"],
    },
  ];

  const technicians = [
    {
      garage: "Suresh Automobile's",
      owner: "Suresh Chowdhary",
      phone: "9028333387",
      email: "NA",
      address: "Shop no G9, Greenland county, Manaji nagar, Narhe-411041",
      exp: "5+ years",
      location: "https://maps.app.goo.gl/dz8CucV6jQBxveVj7",
      img: tech1
    },
    {
      garage: "Om Auto Garage",
      owner: "Ankush Satpute",
      phone: "7038726429",
      email: "793872642a@gmail.com",
      address: "Manaji Nagar, Narhe road, near navle hospital backside, Narhe, 411041",
      exp: "5+ years",
      location: "https://maps.app.goo.gl/oAYcmj6c4nnvzv8B9",
      img: tech2
    },
    {
      garage: "ABN Group Bike Care",
      owner: "Sagar Shelar and Aysha nair",
      phone: "9049518349",
      email: "sagarshelar2311@gmail.com",
      address: "Shop No 4 Rudra Height, Near Jspm Clg, Mumbai Highway, Narhe Gaon, Pune-411041.",
      exp: "5+ years",
      location: "https://maps.app.goo.gl/ncXF5aaWcGkVvQiN8",
      img: tech3
    },
    {
      garage: "Yash Servicing Centre",
      owner: "Sachin Gaikwad",
      phone: "9518312159",
      email: "sachingaikwad0362@gmail.com",
      address: "Nalanda English medium school, Nandi, Dhayri, Pune-411041.",
      exp: "5+ years",
      location: "https://maps.app.goo.gl/dZXr3nhCESgLVxwg9",
      img: tech4
    },
    {
      garage: "Sidhant Service Point",
      owner: "Sidhant Tatkare",
      phone: "9763968657",
      email: "tatkaresiddhant08@gmail.com",
      address: "Dsk Road, Arya chinese, Dhayri -411041",
      exp: "5+ years",
      location: "https://maps.app.goo.gl/dWvCC5pr9qKgpdUi9",
      img: tech5
    },
    {
      garage: "Shravani Automobiles and Service Centre",
      owner: "Balasaheb Wagh",
      phone: "9158215857",
      email: "shrikantdhanawade1998@gmail.com",
      address: "Shop no 3 A22, om palace, ganesh nagar Dhayri gaon, Dhayri-411041.",
      exp: "5+ years",
      location: "https://maps.app.goo.gl/zGRGqvdDbxXFG5MU6",
      img: tech6
    },
    {
      garage: "Sadguru Auto Garage",
      owner: "Aaditya Nagnath Doge",
      phone: "9370154949",
      email: "adityadoge6@gmail.com",
      address: "Shop no.2, Sadashiv complex, Navle bridge service road, Narhe- 411041",
      exp: "5+ years",
      location: "https://maps.app.goo.gl/9ubsJRLWpxmjk8UZ8",
      img: tech7
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Section immediate stagger className="pt-20 pb-16 px-6 bg-[var(--gradient-beige)]">
        <div className="mx-auto max-w-3xl text-center">
          <Tag className="scale-90">Excellence in Service</Tag>
          <motion.h1 variants={fadeUp} className="mt-4 text-3xl font-black md:text-5xl font-serif italic text-foreground">
            More Than Just Hardware.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-sm text-muted-foreground md:text-base leading-relaxed">
            We provide a comprehensive ecosystem of security services designed to keep 
            you and your vehicle safe, supported by our network of authorized partners.
          </motion.p>
        </div>
      </Section>

      <Section stagger className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div 
                key={s.title} 
                variants={fadeUp}
                className="group flex flex-col p-8 rounded-[2.5rem] bg-card border border-foreground/5 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">{s.desc}</p>
                <div className="space-y-2 pt-6 border-t border-foreground/5">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                      <Zap className="h-3 w-3 text-foreground" />
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Authorized Technicians */}
      <Section stagger className="py-24 px-6 bg-card/30 border-y border-foreground/5">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <Tag>Network</Tag>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl uppercase">Our Authorized Technicians</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Professional support at your fingertips. Visit our trusted garage partners for expert installation and technical assistance.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicians.map((tech, i) => (
              <TechnicianCard key={i} tech={tech} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* Technician Tie-up Initiative */}
      <Section stagger className="py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background mb-8">
            <Users className="h-8 w-8" />
          </div>
          <Tag className="mb-4">Collaboration</Tag>
          <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-black tracking-tight uppercase mb-6">
            Authorized Technician Tie-Up
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12">
            We are introducing our Authorized Technician Tie-Up initiative for bike and scooter garages across Pune. Join our growing network of experts and become a part of the Gadget Dash mission to secure every two-wheeler.
          </motion.p>
          <motion.div variants={fadeUp} className="flex justify-center gap-4">
            <a 
              href="https://wa.me/918698521649?text=I%20want%20to%20join%20the%20Authorized%20Technician%20Tie-Up%20initiative."
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 rounded-full bg-foreground text-background font-black text-sm shadow-2xl hover:opacity-90 transition-all"
            >
              Apply for Tie-Up
            </a>
          </motion.div>
        </div>
      </Section>

      <Section stagger className="py-24 px-6 bg-foreground text-background text-center">
        <div className="mx-auto max-w-3xl">
          <motion.h2 variants={fadeUp} className="text-2xl font-black tracking-tight md:text-4xl mb-6">Ready to secure your ride?</motion.h2>
          <motion.p variants={fadeUp} className="text-base opacity-70 mb-10">
            Contact us today for professional installation or to learn more about our technician network.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+918698521649" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-black text-sm shadow-xl transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4 mr-2" /> Call Support
            </a>
            <a 
              href="https://wa.me/918698521649" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-background/20 text-background font-black text-sm transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4 mr-2" /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </Section>

      {/* CEO Quote Section */}
      <Section stagger className="py-32 px-6 bg-[var(--dark-bg)] text-white overflow-hidden relative">
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.blockquote variants={fadeUp} className="text-2xl md:text-4xl font-serif italic leading-tight mb-16 text-white/90">
            "If you don’t trust us, just test us — once you test us, you’ll always love us."
          </motion.blockquote>
          
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="h-24 w-24 rounded-full overflow-hidden ring-4 ring-[var(--gold)]/20 shadow-2xl">
                <img src={surajImg} alt="Suraj Ishwar" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-[var(--gold)] flex items-center justify-center text-black border-4 border-[var(--dark-bg)]">
                <Quote size={12} fill="currentColor" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-black uppercase tracking-[0.4em] text-[var(--gold)]">Suraj Ishwar</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">CEO — Gadget Dash</div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--gold)]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--gold)]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </Section>

      <Footer />
    </div>
  );
}
