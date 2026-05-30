"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

const whatsappHref = `https://wa.me/38113881200?text=${encodeURIComponent(
  "Zdravo, zanima me ponuda za proizvode POP-LUKIĆ."
)}`;

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-13 h-13 w-[3.25rem] h-[3.25rem] rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 transition-all duration-300 ring-4 ring-white/80"
        aria-label="WhatsApp kontakt"
      >
        <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
      </a>
      <a
        href={siteConfig.phoneHref}
        className="group flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-full bg-gradient-to-br from-wood-900 to-wood-700 text-white shadow-wood-lg hover:shadow-wood-xl hover:scale-105 transition-all duration-300 ring-4 ring-white/80 md:hidden"
        aria-label={`Pozovite ${siteConfig.phone}`}
      >
        <Phone size={20} className="group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
