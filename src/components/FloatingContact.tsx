"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Diskretan dock koji se pojavljuje tek posle hero sekcije. */
export function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-40 flex items-center gap-1 rounded-full border border-white/10 bg-navy-950/85 p-1 shadow-[0_20px_40px_-15px_rgb(7_12_28/0.6)] backdrop-blur-xl transition-all duration-500 ease-[var(--ease-out-expo)] md:bottom-6 md:right-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp kontakt"
        className="flex size-11 items-center justify-center rounded-full text-[#25D366] transition hover:bg-white/10"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href={siteConfig.phoneHref}
        aria-label={`Pozovite ${siteConfig.phone}`}
        className="flex h-11 items-center gap-2 rounded-full bg-gold-400 px-4 text-sm font-semibold text-navy-950 transition hover:bg-gold-300"
      >
        <Phone size={16} />
        <span className="hidden sm:inline">Pozovite</span>
      </a>
    </div>
  );
}
