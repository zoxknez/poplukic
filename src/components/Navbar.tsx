"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -20, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-0 right-0 z-50 px-6"
    >
      <div className="max-w-7xl mx-auto glass-wood rounded-full px-8 py-3 flex justify-between items-center border-wood-500/20 backdrop-blur-2xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-wood-400 to-wood-700 rounded-xl flex items-center justify-center text-white font-serif font-bold text-2xl shadow-xl group-hover:scale-105 transition-transform duration-500">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl text-white leading-none tracking-tight group-hover:text-wood-200 transition-colors">POP-LUKIĆ</span>
            <span className="text-[10px] text-wood-400 italic font-medium">Lider u preradi drveta</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-[15px] font-medium">
          {[
            { name: "Početna", href: "/" },
            { name: "Proizvodi", href: "#proizvodi" },
            { name: "Usluge", href: "#usluge" },
            { name: "Sertifikati", href: "#sertifikati" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-wood-100/70 hover:text-wood-200 transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-wood-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="#kontakt"
            className="px-6 py-2.5 bg-wood-600 hover:bg-wood-500 text-white rounded-full transition-all duration-500 shadow-[0_0_20px_rgba(171,101,61,0.2)] hover:shadow-[0_0_30px_rgba(171,101,61,0.4)] hover:-translate-y-0.5"
          >
            Kontaktirajte nas
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden text-wood-100 hover:text-wood-300 transition-colors cursor-pointer">
          <Menu size={24} />
        </div>
      </div>
    </motion.nav>
  );
}
