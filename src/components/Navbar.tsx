"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import { siteConfig, navLinks, products } from "@/lib/site";
import { useOpenStatus } from "@/lib/hours";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

function StatusPill({ className }: { className?: string }) {
  const status = useOpenStatus();
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-2 text-white/60 tabular-nums",
        className
      )}
      aria-live="polite"
    >
      <span className="relative flex size-2">
        {status?.open && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
        )}
        <span
          className={cn(
            "relative inline-flex size-2 rounded-full",
            status ? (status.open ? "bg-emerald-400" : "bg-stamp") : "bg-white/30"
          )}
        />
      </span>
      {status ? (
        <>
          <span className="text-white/90">{status.time}</span>
          <span>{status.label}</span>
        </>
      ) : (
        <span>BVS · RS</span>
      )}
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname.startsWith("/proizvodi");
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!mega) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMega(false);
    const onClick = (e: MouseEvent) => {
      if (!megaRef.current?.contains(e.target as Node)) setMega(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [mega]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "relative transition-[background-color,backdrop-filter,border-color] duration-500",
          scrolled || open || mega
            ? "bg-navy-950/85 backdrop-blur-xl border-b border-white/[0.07]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 md:h-[4.5rem] max-w-[90rem] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
          {/* Brand */}
          <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="POP-LUKIĆ početna">
            <Logo size="sm" href="" priority className="ring-1 ring-gold-500/40" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.35rem] text-white tracking-wide">
                {siteConfig.shortName}
              </span>
              <span className="eyebrow mt-1 text-[0.6rem] text-gold-400/80">
                Est. {siteConfig.founded} · Banat
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Glavna navigacija">
            {navLinks.map((link, i) => {
              const index = String(i + 1).padStart(2, "0");
              const active = isActive(link.href);
              const linkClass = cn(
                "group relative flex items-center gap-2 px-3.5 py-2 text-[0.8125rem] font-medium transition-colors",
                active ? "text-white" : "text-white/60 hover:text-white"
              );
              const inner = (
                <>
                  <span className="font-mono text-[0.625rem] text-gold-400/70">{index}</span>
                  {link.name}
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-px h-px origin-left bg-gold-400 transition-transform duration-500 ease-[var(--ease-out-expo)]",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </>
              );

              if ("children" in link) {
                return (
                  <div key={link.name} ref={megaRef} className="relative">
                    <button
                      type="button"
                      aria-expanded={mega}
                      aria-haspopup="true"
                      onClick={() => setMega((v) => !v)}
                      className={linkClass}
                    >
                      {inner}
                      <ChevronDown
                        size={13}
                        className={cn("opacity-60 transition-transform duration-300", mega && "rotate-180")}
                      />
                    </button>
                  </div>
                );
              }

              return (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {inner}
                </Link>
              );
            })}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <StatusPill className="hidden xl:inline-flex" />
            <a
              href={siteConfig.phoneHref}
              className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-gold-400 hover:text-gold-300 lg:hidden"
              aria-label={`Pozovite ${siteConfig.phone}`}
            >
              <Phone size={16} />
            </a>
            <Link
              href="/kontakt#upit"
              className="group hidden md:inline-flex items-center gap-2 rounded-full bg-gold-400 pl-5 pr-1.5 py-1.5 text-[0.8125rem] font-semibold text-navy-950 transition hover:bg-gold-300"
            >
              Zatražite ponudu
              <span className="flex size-7 items-center justify-center rounded-full bg-navy-950 text-gold-300 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Zatvori meni" : "Otvori meni"}
              className="relative flex size-10 items-center justify-center rounded-full border border-white/15 lg:hidden"
            >
              <span
                className={cn(
                  "absolute h-px w-4 bg-white transition-transform duration-500 ease-[var(--ease-out-expo)]",
                  open ? "rotate-45" : "-translate-y-[3px]"
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-4 bg-white transition-transform duration-500 ease-[var(--ease-out-expo)]",
                  open ? "-rotate-45" : "translate-y-[3px]"
                )}
              />
            </button>
          </div>
        </div>

        {/* Scroll progress (CSS scroll-timeline) */}
        <span
          aria-hidden
          className="scroll-progress absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600"
        />

        {/* Mega menu */}
        <AnimatePresence>
          {mega && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-full hidden lg:block border-b border-white/[0.07] bg-navy-950/95 backdrop-blur-xl"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="mx-auto grid max-w-[90rem] grid-cols-4 gap-4 px-10 py-8">
                {products.map((p, i) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="group relative overflow-hidden rounded-xl border border-white/10"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="320px"
                        className="object-cover opacity-70 transition duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <span className="eyebrow text-gold-400">
                        {String(i + 1).padStart(2, "0")} / {p.code}
                      </span>
                      <p className="mt-1 font-display text-2xl text-white">{p.title}</p>
                      <p className="text-xs text-white/55">{p.subtitle}</p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="absolute right-4 top-4 text-white/50 transition group-hover:rotate-45 group-hover:text-gold-300"
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 top-16 z-40 flex flex-col overflow-y-auto bg-navy-950 bg-blueprint lg:hidden"
          >
            <nav className="flex flex-col px-5 pt-6" aria-label="Mobilna navigacija">
              {[
                ...navLinks.filter((l) => !("children" in l)).slice(0, 2),
                ...products.map((p) => ({ name: p.title, href: p.href })),
                { name: "Kontakt", href: "/kontakt" },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-baseline justify-between border-b border-white/10 py-4",
                      isActive(link.href) ? "text-gold-300" : "text-white"
                    )}
                  >
                    <span className="font-display text-[2.6rem] leading-none">{link.name}</span>
                    <span className="font-mono text-xs text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto space-y-4 px-5 pb-8 pt-10">
              <StatusPill />
              <a
                href={siteConfig.phoneHref}
                className="block font-display text-3xl text-gold-300"
              >
                {siteConfig.phone}
              </a>
              <Link
                href="/kontakt#upit"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-between rounded-full bg-gold-400 px-6 py-4 font-semibold text-navy-950"
              >
                Zatražite ponudu
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
