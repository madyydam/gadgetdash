import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "918698521649";
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hi! I want to know more about Gadget Dash Theft Shield."
)}`;

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-foreground/10 bg-background/90 p-3 backdrop-blur-xl md:hidden">
      <Link
        to="/shop"
        className="flex-1 rounded-full bg-foreground py-3 text-center text-sm font-semibold text-background"
      >
        Buy Now
      </Link>
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
