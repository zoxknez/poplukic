import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Factory, ShieldCheck, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars: {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  highlight: string;
  stat: string;
  statLabel: string;
  image: string;
  accent: "wood" | "forest" | "amber";
}[] = [
  {
    num: "01",
    icon: Factory,
    title: "Veliki kapacitet",
    desc: "Do 15.000 gajbica dnevno i serijska proizvodnja paleta po međunarodnim standardima - bez zastoja u sezoni.",
    highlight: "Serijska proizvodnja",
    stat: "15.000+",
    statLabel: "kom / dan",
    image: "/images/palete.png",
    accent: "wood",
  },
  {
    num: "02",
    icon: ShieldCheck,
    title: "Sertifikovani kvalitet",
    desc: "ISPM 15 termički tretman i FSC™ sirovina. Dokumentacija spremna za carinu i izvoz u EU.",
    highlight: "ISPM 15 · FSC™",
    stat: "100%",
    statLabel: "sertifikovano",
    image: "/images/gajbice.png",
    accent: "forest",
  },
  {
    num: "03",
    icon: Truck,
    title: "Sopstvena logistika",
    desc: "Šleperi i solo kamioni - isporuka paleta i gajbica širom Srbije, bez posrednika.",
    highlight: "CMR dokumentacija",
    stat: "24-48h",
    statLabel: "isporuka",
    image: "/images/transport.png",
    accent: "amber",
  },
];

const accentStyles = {
  wood: {
    bar: "from-wood-600 via-wood-400 to-wood-200",
    ring: "from-wood-100 to-wood-200/80 text-wood-800 border-wood-200/60",
    chip: "bg-wood-100/90 text-wood-800 border-wood-200/50",
    glow: "bg-wood-500/15",
  },
  forest: {
    bar: "from-forest-700 via-forest-500 to-forest-200",
    ring: "from-forest-50 to-forest-100/80 text-forest-800 border-forest-200/60",
    chip: "bg-forest-50/95 text-forest-800 border-forest-200/50",
    glow: "bg-forest-500/12",
  },
  amber: {
    bar: "from-amber-700 via-amber-500 to-amber-200",
    ring: "from-amber-50 to-wood-100/80 text-amber-900 border-amber-200/50",
    chip: "bg-amber-50/95 text-amber-900 border-amber-200/50",
    glow: "bg-amber-500/12",
  },
};

export function WhyUsSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32 border-y border-wood-200/30">
      {/* Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ebe4d8] via-cream-dark to-[#e8dfd2]" />
      <div className="absolute top-[-20%] right-[-10%] w-[min(560px,70vw)] h-[min(560px,70vw)] rounded-full bg-wood-400/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[min(480px,60vw)] h-[min(480px,60vw)] rounded-full bg-forest-600/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grain-overlay opacity-[0.35] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12 md:mb-16">
          <div className="section-intro w-full">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line bg-wood-500" aria-hidden />
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-wood-700">
                Zašto POP-LUKIĆ
              </p>
              <span className="section-eyebrow-line bg-wood-500 lg:hidden" aria-hidden />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-wood-950 tracking-tight leading-[1.12] text-balance">
              Pouzdan partner
              <span className="block font-bold">za vašu proizvodnju</span>
            </h2>
            <p className="mt-5 text-stone-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Kapacitet, kvalitet i logistika pod jednim krovom - manje koordinacije, više
              sigurnosti u isporuci.
            </p>
          </div>
          <Link
            href="/o-nama"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-wood-900 text-white text-sm font-semibold hover:bg-wood-800 transition-colors shadow-md shadow-wood-900/20 group shrink-0 mx-auto lg:mx-0"
          >
            Upoznajte kompaniju
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Quick metrics band */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
          {[
            { v: "20+", l: "Godina iskustva" },
            { v: "4", l: "Linije proizvodnje" },
            { v: "ISPM 15", l: "Izvozna paleta" },
            { v: "FSC™", l: "Održivo drvo" },
          ].map((m) => (
            <div
              key={m.l}
              className="rounded-2xl bg-white/55 backdrop-blur-sm border border-white/70 px-4 py-4 md:py-5 text-center shadow-sm"
            >
              <p className="font-serif text-xl md:text-2xl font-bold text-wood-950">{m.v}</p>
              <p className="text-[11px] uppercase tracking-wider text-stone-600 mt-1">{m.l}</p>
            </div>
          ))}
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const style = accentStyles[pillar.accent];

            return (
              <article
                key={pillar.num}
                className="group panel-warm relative rounded-3xl border border-wood-200/50 overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-90",
                    style.bar
                  )}
                />
                <div
                  className={cn(
                    "absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl transition-opacity duration-500 opacity-60 group-hover:opacity-100",
                    style.glow
                  )}
                />

                {/* Background photo whisper */}
                <div className="absolute bottom-0 right-0 w-36 h-28 md:w-44 md:h-32 opacity-[0.18] group-hover:opacity-[0.28] transition-opacity duration-500">
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#faf6f0]" />
                </div>

                <div className="relative p-7 md:p-8 flex flex-col min-h-[320px] text-center md:text-left">
                  <div className="flex items-start justify-between gap-4 md:justify-between justify-center">
                    <span
                      className={cn(
                        "flex items-center justify-center w-14 h-14 rounded-2xl border bg-gradient-to-br shadow-inner",
                        style.ring
                      )}
                    >
                      <Icon size={26} strokeWidth={1.35} />
                    </span>
                    <span className="font-serif text-3xl font-bold text-wood-950/10 group-hover:text-wood-950/15 transition-colors hidden md:block">
                      {pillar.num}
                    </span>
                  </div>

                  <div className="mt-8">
                    <p className="font-serif text-3xl md:text-4xl font-bold text-wood-950 tracking-tight leading-none">
                      {pillar.stat}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500 mt-1.5">
                      {pillar.statLabel}
                    </p>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-wood-950 mt-6 group-hover:text-wood-800 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed flex-1">
                    {pillar.desc}
                  </p>

                  <span
                    className={cn(
                      "inline-flex self-center md:self-start mt-6 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                      style.chip
                    )}
                  >
                    {pillar.highlight}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Photo ribbon */}
        <div className="mt-12 md:mt-16 rounded-3xl overflow-hidden border border-wood-200/40 shadow-wood-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 h-28 md:h-36">
            {[
              "/images/palete.png",
              "/images/gajbice.png",
              "/images/lumber.png",
              "/images/transport.png",
            ].map((src, i) => (
              <div key={src} className="relative group/photo">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover/photo:scale-105"
                  sizes="25vw"
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-wood-950/25 group-hover/photo:bg-wood-950/10 transition-colors",
                    i > 0 && "border-l border-white/20"
                  )}
                />
              </div>
            ))}
          </div>
          <div className="bg-wood-950 px-6 py-4 md:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
            <p className="text-sm text-stone-300 mx-auto sm:mx-0 max-w-lg">
              <span className="text-white font-semibold">Jedan pogon</span> - palete, gajbice,
              građa i transport.
            </p>
            <p className="text-xs text-stone-500">
              Banatsko Veliko Selo · Od 2005. · PIB 101080332
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
