import { Link } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import logo from "@/assets/logo.png";

const WHATSAPP = "918698521649";
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hi! I want to know more about Gadget Dash Theft Shield."
)}`;

const socialLinks = [
  { icon: FaInstagram, href: "https://instagram.com/gadgetdash.in", label: "Instagram", color: "#E4405F" },
  { icon: FaFacebookF, href: "https://facebook.com/gadgetdash", label: "Facebook", color: "#1877F2" },
  { icon: FaYoutube, href: "https://youtube.com/@gadgetdash", label: "YouTube", color: "#FF0000" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/company/gadgetdash", label: "LinkedIn", color: "#0A66C2" },
];

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Link to="/">
            <img src={logo} alt="Gadget Dash" className="h-14 w-auto" />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Premium smart bike security, built in India by Suraj Ishwar. Stay one
            step ahead of thieves.
          </p>
          <div className="mt-8 flex gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-foreground/10 hover:scale-110 transition-all shadow-sm"
                aria-label={social.label}
                style={{ color: social.color }}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +91 8698521649
            </li>
            <a href="mailto:info@gadgetdash.in" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">info@gadgetdash.in</span>
            </a>
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
            <li><Link to="/company" className="hover:text-foreground">Company</Link></li>
            <li><Link to="/our-services" className="hover:text-foreground">Our Services</Link></li>
            <li><Link to="/shop" className="hover:text-foreground">Shop</Link></li>
            <li><Link to="/jobs" className="hover:text-foreground">Jobs</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-foreground/10 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gadget Dash by Suraj Ishwar · Made in India
      </div>
    </footer>
  );
}
