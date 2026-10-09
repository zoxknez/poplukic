"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/site";
import { MaskLines, Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export function ProductsIndex() {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  return (
    <section id="proizvodi" className="relative scroll-mt-16 bg-paper pb-24 pt-16 md:pb-36 md:pt-24">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal className="flex items-center gap-4">
              <span className="eyebrow text-stamp">(01)</span>
              <span className="eyebrow text-ink/50">Proizvodni program</span>
            </Reveal>
            <h2 className="mt-6 font-display text-[clamp(3rem,8vw,7.5rem)] text-navy-900">
              <MaskLines
                lines={[
                  "Četiri linije.",
                  <span key="a" className="accent-serif text-gold-600 text-[1.05em]">
                    jedan pogon.
                  </span>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-ink/65 md:text-lg">
              Od standardnih EUR paleta do poljoprivrednih gajbica i sušene građe - sve iz jednog
              pogona, sa istim standardom kontrole i dokumentacijom za izvoz.
            </p>
          </Reveal>
        </div>

        {/* Index */}
        <ul
          className="mt-16 border-t border-ink/15 md:mt-24"
          onPointerMove={(e) => {
            x.set(e.clientX);
            y.set(e.clientY);
          }}
          onPointerLeave={() => setActive(null)}
        >
          {products.map((p, i) => (
            <li key={p.href} className="border-b border-ink/15">
              <Link
                href={p.href}
                onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-5 overflow-hidden py-7 sm:gap-x-8 md:py-10 lg:grid-cols-[5rem_minmax(0,1fr)_minmax(0,22rem)_4rem]"
              >
                {/* Fill */}
                <span
                  aria-hidden
                  className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-navy-900 transition-transform duration-700 ease-[var(--ease-out-expo)] lg:group-hover:scale-y-100"
                />

                <span className="relative eyebrow self-start pt-2 text-ink/45 transition-colors duration-500 lg:group-hover:text-gold-400 md:pt-4 lg:pl-4">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="relative min-w-0">
                  <span className="block font-display text-[clamp(2.4rem,7vw,6.5rem)] text-navy-900 transition-[color,transform] duration-700 ease-[var(--ease-out-expo)] lg:group-hover:translate-x-4 lg:group-hover:text-white">
                    {p.title}
                  </span>
                  <span className="mt-2 block eyebrow text-gold-700 transition-colors duration-500 lg:group-hover:text-gold-300">
                    {p.code} · {p.subtitle}
                  </span>
                </span>

                <span className="relative col-span-3 lg:col-span-1">
                  {/* Mobile thumbnail */}
                  <span className="relative mb-5 block aspect-[16/10] overflow-hidden rounded-md lg:hidden">
                    <Image src={p.image} alt={p.title} fill sizes="100vw" className="object-cover" />
                    <span className="absolute left-3 top-3 eyebrow rounded-sm bg-navy-950/80 px-2 py-1 text-[0.6rem] text-gold-300 backdrop-blur">
                      Fig. {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <ul className="grid gap-1.5">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-3 text-sm text-ink/70 transition-colors duration-500 lg:group-hover:text-white/75"
                      >
                        <span className="h-px w-4 bg-current opacity-50" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </span>

                <span className="relative col-start-3 row-start-1 flex size-12 items-center justify-center self-start justify-self-end rounded-full border border-ink/20 text-navy-900 transition-all duration-500 ease-[var(--ease-out-expo)] md:size-14 lg:col-start-4 lg:mr-4 lg:self-center lg:group-hover:rotate-45 lg:group-hover:border-gold-400 lg:group-hover:bg-gold-400">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Cursor preview */}
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block"
      >
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              exit={{ opacity: 0, scale: 0.6, rotate: -8 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative -translate-x-1/2 -translate-y-[115%] h-[15rem] w-[21rem] overflow-hidden rounded-md shadow-[0_30px_80px_-20px_rgb(7_12_28/0.6)] ring-1 ring-gold-400/40"
            >
              {products.map((p, i) => (
                <Image
                  key={p.href}
                  src={p.image}
                  alt=""
                  fill
                  sizes="336px"
                  className={cn(
                    "object-cover transition-[opacity,transform] duration-500 ease-[var(--ease-out-expo)]",
                    active === i ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  )}
                />
              ))}
              <span className="absolute bottom-2 left-2 eyebrow rounded-sm bg-navy-950/85 px-2 py-1 text-[0.6rem] text-gold-300">
                {products[active].code} — Fig. {String(active + 1).padStart(2, "0")}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
