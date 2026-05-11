import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, ShoppingBag } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import logo from "@/assets/logo.png";

const WHATSAPP = "918698521649";
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hi! I want to know more about Gadget Dash Theft Shield."
)}`;

export const socialLinks = [
  { icon: FaInstagram, href: "https://instagram.com/gadgetdash.in", label: "Instagram", color: "#E4405F" },
  { icon: FaFacebookF, href: "https://facebook.com/gadgetdash", label: "Facebook", color: "#1877F2" },
  { icon: FaYoutube, href: "https://youtube.com/@gadgetdash", label: "YouTube", color: "#FF0000" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/company/gadgetdash", label: "LinkedIn", color: "#0A66C2" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Force close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/company", label: "Company" },
    { to: "/warranty", label: "Warranty" },
    { to: "/terms", label: "Terms" },
    { to: "/advertisements", label: "Ads" },
    { to: "/jobs", label: "Jobs" },
    { to: "/our-services", label: "Services" },
    { to: "/shop", label: "Shop" },
    { to: "/internship", label: "Internship" },
  ];

  return (
    <header className="sticky top-0 z-[100] border-b border-foreground/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3 md:px-10">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Gadget Dash" className="h-9 w-auto md:h-11" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 text-[10px] font-bold text-foreground/60 xl:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="hover:text-foreground transition-colors uppercase tracking-[0.15em]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop Socials */}
          <div className="hidden xl:flex items-center gap-4 border-r border-foreground/10 pr-6 mr-2">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-all"
                aria-label={social.label}
                style={{ color: social.color }}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 md:gap-3">
            <Link
              to="/contact"
              className="rounded-full border border-foreground/15 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-foreground transition hover:bg-foreground/5"
            >
              Contact
            </Link>
            <Link
              to="/shop"
              className="rounded-full bg-foreground px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-background transition hover:opacity-90"
            >
              Buy
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground xl:hidden relative z-[9999] active:scale-90 transition-transform pointer-events-auto"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[9998] flex flex-col bg-[#fcfbf7] xl:hidden"
            style={{ height: "100dvh" }}
          >
            {/* 1. Header (Fixed Height) */}
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-foreground/5 px-6">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="Gadget Dash" className="h-9 w-auto" />
              </Link>
              {/* Close button space placeholder */}
              <div className="w-12" />
            </div>
            
            {/* 2. Content (Scrollable) */}
            <div className="flex min-h-0 flex-1 flex-row">
              {/* Main Nav Links (Left side) */}
              <nav className="flex-1 overflow-y-auto px-8 py-8 no-scrollbar">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      key={link.to}
                    >
                      <Link 
                        to={link.to} 
                        onClick={() => setIsOpen(false)}
                        className="inline-block py-1 text-xl font-black uppercase tracking-widest text-foreground active:opacity-50"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Vertical Socials (Right side) */}
              <div className="flex w-20 flex-col items-center gap-8 border-l border-foreground/5 bg-foreground/[0.02] py-8">
                {socialLinks.map((social, i) => (
                  <motion.a
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (i * 0.05) }}
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md border border-foreground/5"
                    aria-label={social.label}
                    style={{ color: social.color }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* 3. Footer Actions (Fixed Height) */}
            <div className="shrink-0 border-t border-foreground/10 bg-white p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-2xl border-2 border-foreground py-5 text-[11px] font-black uppercase tracking-[0.3em] text-foreground"
                >
                  <MessageCircle className="h-5 w-5" /> Contact Us
                </Link>
                <Link
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-2xl bg-foreground py-5 text-[11px] font-black uppercase tracking-[0.3em] text-background shadow-lg"
                >
                  <ShoppingBag className="h-5 w-5" /> Shop Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
