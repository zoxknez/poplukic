import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Pallet3D } from "@/components/three/Pallet3D";
import { MaskLines, Magnetic, Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

const stats = [
  { value: "15.000+", label: "Gajbica dnevno" },
  { value: "20+", label: "Godina u Banatu" },
  { value: "24-48h", label: "Isporuka u Srbiji" },
  { value: "100%", label: "FSC™ sirovina" },
];

function CropMarks() {
  const mark = "absolute size-5 border-gold-400/50";
  return (
    <>
      <span className={`${mark} left-0 top-0 border-l border-t`} />
      <span className={`${mark} right-0 top-0 border-r border-t`} />
      <span className={`${mark} bottom-0 left-0 border-b border-l`} />
      <span className={`${mark} bottom-0 right-0 border-b border-r`} />
    </>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      {/* Atmosfera */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-blueprint [mask-image:radial-gradient(ellipse_70%_60%_at_65%_45%,black,transparent)]" />
        <div className="absolute right-[-10%] top-[10%] size-[min(900px,110vw)] rounded-full bg-[radial-gradient(circle,rgb(216_180_106/0.22),transparent_62%)]" />
        <div className="absolute left-[-20%] bottom-[-30%] size-[700px] rounded-full bg-[radial-gradient(circle,rgb(47_60_100/0.6),transparent_65%)]" />
        <div className="grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />
      </div>

      <div className="mx-auto grid min-h-[100svh] max-w-[90rem] grid-rows-[1fr_auto] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-6 pt-24 md:pt-28 lg:grid-cols-12 lg:gap-4 lg:pt-24">
          {/* Copy */}
          <div className="relative z-10 lg:col-span-6 xl:col-span-6">
            <Reveal y={12} className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="eyebrow text-gold-400">[ Od {siteConfig.founded}. ]</span>
              <span className="h-px w-10 bg-white/20" />
              <span className="eyebrow text-white/50">
                {siteConfig.address.city} · RS · 45.05°N 20.79°E
              </span>
            </Reveal>

            <h1 className="mt-6 font-display text-[clamp(3.4rem,8.4vw,8.75rem)] text-white">
              <MaskLines
                onMount
                delay={0.1}
                lines={[
                  "Drvo koje",
                  <span key="nosi">
                    <span className="accent-serif text-gold-sheen pr-[0.08em] text-[1.08em] leading-[0.8]">
                      nosi
                    </span>{" "}
                    teret
                  </span>,
                  "industrije.",
                ]}
              />
            </h1>

            <Reveal delay={0.45} className="mt-8 grid max-w-xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="text-base leading-relaxed text-white/65 md:text-lg">
                Palete, gajbice i rezana građa iz jednog pogona u Banatu - ISPM 15 tretirano,
                FSC™ sertifikovano i isporučeno sopstvenim kamionima.
              </p>
            </Reveal>

            <Reveal delay={0.6} className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link
                  href="/kontakt#upit"
                  className="group inline-flex items-center gap-3 rounded-full bg-gold-400 py-2 pl-7 pr-2 text-sm font-semibold text-navy-950 shadow-[0_10px_40px_-10px_rgb(216_180_106/0.7)] transition-colors hover:bg-gold-300"
                >
                  Zatražite ponudu
                  <span className="flex size-10 items-center justify-center rounded-full bg-navy-950 text-gold-300 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>
              </Magnetic>
              <Link
                href="#proizvodi"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Proizvodni program
                <ArrowDownRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </Link>
            </Reveal>

            <Reveal delay={0.75} className="mt-10 flex flex-wrap gap-2">
              {["ISPM 15 · HT", "FSC™ C132511", "Sopstveni vozni park"].map((chip) => (
                <span
                  key={chip}
                  className="eyebrow rounded-sm border border-white/12 bg-white/[0.03] px-2.5 py-1.5 text-[0.625rem] text-white/60"
                >
                  {chip}
                </span>
              ))}
            </Reveal>
          </div>

          {/* 3D */}
          <div className="relative -mx-4 sm:mx-0 lg:col-span-6 xl:col-span-6">
            <div className="relative aspect-square max-h-[78svh] w-full lg:aspect-[5/6]">
              <div className="absolute inset-3 sm:inset-6">
                <CropMarks />
              </div>
              <Pallet3D
                className="absolute inset-0"
                fallback={
                  <div className="absolute inset-8 overflow-hidden rounded-lg">
                    <Image
                      src="/images/palete.png"
                      alt="Drvene palete POP-LUKIĆ"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover opacity-80"
                    />
                  </div>
                }
              />
              <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-end justify-between sm:inset-x-10 sm:bottom-10">
                <p className="eyebrow text-[0.6rem] text-white/45">
                  Fig. 01 — EUR 1200 × 800
                  <br />
                  <span className="text-gold-400/80">Jedinični teret · 8 gajbica</span>
                </p>
                <p className="eyebrow hidden text-[0.6rem] text-white/35 sm:block">
                  ↔ Pomerite kursor
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <dl className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={0.8 + i * 0.08}
              className={cn(
                "flex flex-col gap-2 py-6 md:py-8",
                i % 2 === 1 && "border-l border-white/10 pl-5 md:pl-8",
                i === 2 && "md:border-l md:border-white/10 md:pl-8",
                i >= 2 && "border-t border-white/10 md:border-t-0"
              )}
            >
              <dt className="eyebrow order-2 text-[0.625rem] text-white/45">{s.label}</dt>
              <dd className="order-1 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] text-white">
                {s.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
