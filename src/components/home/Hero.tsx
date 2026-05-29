import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, TreePine } from "lucide-react";
import { siteConfig } from "@/lib/site";

const metrics = [
  { value: "15.000+", label: "Gajbica dnevno" },
  { value: "20+", label: "Godina iskustva" },
  { value: "24-48h", label: "Isporuka u Srbiji" },
];

export function Hero() {
  return (
    <section className="relative bg-cream border-b border-stone-200/80 overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,90%)] h-64 bg-wood-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[88rem] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14">
        <div className="grid lg:grid-cols-12 lg:gap-8 xl:gap-12 min-h-[calc(100dvh-4.25rem)] items-center py-12 md:py-16 lg:py-10">
          {/* Copy - centered in left zone, pulled toward image */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="w-full max-w-[32rem] mx-auto lg:mx-0 lg:ml-auto lg:mr-0 text-center lg:text-left">
              <div className="section-eyebrow mb-8 md:mb-10">
                <span className="section-eyebrow-line bg-wood-400" aria-hidden />
                <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-stone-500">
                  {siteConfig.address.city} · Od {siteConfig.founded}.
                </p>
                <span className="section-eyebrow-line bg-wood-400 lg:hidden" aria-hidden />
              </div>

              <h1 className="font-serif text-[2.35rem] sm:text-[2.75rem] lg:text-[3.1rem] xl:text-[3.45rem] font-normal text-wood-950 leading-[1.08] tracking-[-0.025em]">
                Precizna izrada
                <span className="block font-bold mt-1 text-wood-900">drvene ambalaže</span>
              </h1>

              <p className="mt-6 md:mt-8 text-base md:text-lg text-stone-600 leading-[1.7] max-w-md mx-auto lg:mx-0">
                Palete, gajbice i rezana građa za poljoprivredu, industriju i izvoz -
                sertifikovano, iz jednog pogona, sa sopstvenom logistikom.
              </p>

              <div className="mt-9 md:mt-11 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6">
                <Link
                  href="/#proizvodi"
                  className="inline-flex items-center justify-center gap-2.5 bg-wood-900 text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-wood-800 transition-all shadow-lg shadow-wood-900/15 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Proizvodni program
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-wood-800 hover:text-wood-600 transition-colors group"
                >
                  Kontakt
                  <span className="block h-px w-10 bg-wood-400 group-hover:w-14 transition-all" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="px-3 py-1.5 rounded-full bg-white border border-stone-200/80 text-[10px] font-bold uppercase tracking-wider text-wood-800 shadow-sm">
                  ISPM 15
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-forest-200/80 text-[10px] font-bold uppercase tracking-wider text-forest-800 shadow-sm">
                  FSC™
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-stone-200/80 text-[10px] font-bold uppercase tracking-wider text-stone-600 shadow-sm">
                  Sopstveni transport
                </span>
              </div>
            </div>
          </div>

          {/* Image - larger column, rounded, floating cards */}
          <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2">
            <div className="relative mx-auto lg:mx-0 max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/11] rounded-3xl overflow-hidden shadow-wood-xl ring-1 ring-wood-200/40">
                <Image
                  src="/images/palete.png"
                  alt="Drvene palete u proizvodnji POP-LUKIĆ"
                  fill
                  priority
                  className="object-cover object-[55%_center]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-wood-950/25 via-transparent to-transparent pointer-events-none" />

                {/* Floating badges on image */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-start gap-3">
                  <span className="px-3 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 text-[10px] font-bold uppercase tracking-wider text-wood-900 shadow-md">
                    {siteConfig.shortName}
                  </span>
                  <span className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-wood-950/75 backdrop-blur-md border border-white/10 text-[10px] font-medium text-white/90">
                    <ShieldCheck size={12} className="text-wood-300" />
                    Sertifikovano
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 hidden md:flex gap-3">
                  <div className="flex-1 panel-warm rounded-2xl px-4 py-3 border border-white/50 bg-white/85 backdrop-blur-md shadow-lg">
                    <p className="font-serif text-xl font-bold text-wood-950">15.000+</p>
                    <p className="text-[10px] uppercase tracking-wider text-stone-500 mt-0.5">
                      Gajbica / dan
                    </p>
                  </div>
                  <div className="flex-1 panel-warm rounded-2xl px-4 py-3 border border-white/50 bg-white/85 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-1.5">
                      <TreePine size={14} className="text-forest-700" />
                      <p className="font-serif text-lg font-bold text-wood-950">FSC™</p>
                    </div>
                    <p className="text-[10px] uppercase tracking-wider text-stone-500 mt-0.5">
                      Održivo drvo
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative offset frame */}
              <div
                className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl border border-wood-300/30 bg-wood-100/40 hidden lg:block"
                aria-hidden
              />
            </div>
          </div>
        </div>

        {/* Metrics - full container width, centered */}
        <div className="pb-10 md:pb-14 lg:pb-12 -mt-2 lg:-mt-6 relative z-10">
          <div className="panel-warm rounded-2xl md:rounded-3xl border border-wood-200/50 px-6 py-6 md:px-10 md:py-8 max-w-4xl mx-auto lg:max-w-none">
            <dl className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={i > 0 ? "md:border-l md:border-stone-200/90 md:pl-8" : ""}
                >
                  <dt className="font-serif text-2xl md:text-3xl font-bold text-wood-950 tracking-tight">
                    {m.value}
                  </dt>
                  <dd className="mt-1 text-[10px] md:text-xs text-stone-500 uppercase tracking-[0.14em]">
                    {m.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
