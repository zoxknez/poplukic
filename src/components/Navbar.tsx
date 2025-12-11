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
        visible: { y: 0 },
        hidden: { y: "-140%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark border-b-0 rounded-b-2xl mx-4 mt-4 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-wood-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-white leading-none tracking-wide">POP-LUKIĆ</span>
            <span className="text-[10px] text-wood-300 tracking-[0.2em] uppercase">Wood & Transport</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-300">
          <Link href="/" className="hover:text-wood-300 transition-colors">Početna</Link>
          <Link href="#proizvodi" className="hover:text-wood-300 transition-colors">Proizvodi</Link>
          <Link href="#usluge" className="hover:text-wood-300 transition-colors">Usluge</Link>
          <Link href="#sertifikati" className="hover:text-wood-300 transition-colors">Sertifikati</Link>
          <Link href="#kontakt" className="px-4 py-2 bg-wood-600 hover:bg-wood-500 text-white rounded-full transition-all shadow-lg hover:shadow-wood-500/20">
            Kontakt
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden text-white">
          <Menu />
        </div>
      </div>
    </motion.nav>
  );
}
