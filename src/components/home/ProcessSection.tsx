import Image from "next/image";
import { TreePine, Flame, Factory, Truck, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { processSteps } from "@/lib/site";
import { cn } from "@/lib/utils";

const stepMeta: Record<string, { icon: LucideIcon; tag: string }> = {
  "01": { icon: TreePine, tag: "Sirovina" },
  "02": { icon: Flame, tag: "Sušara" },
  "03": { icon: Factory, tag: "Pogon" },
  "04": { icon: Truck, tag: "Logistika" },
};

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(194,126,78,0.08),transparent)]" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-wood-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="section-intro mb-14 md:mb-16">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line bg-wood-500" aria-hidden />
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-wood-700">
              Proces
            </p>
            <span className="section-eyebrow-line bg-wood-500 lg:hidden" aria-hidden />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-wood-950 tracking-tight leading-[1.12] text-balance">
            Od sirovine do
            <span className="block font-bold">isporuke</span>
          </h2>
          <p className="mt-5 text-stone-600 leading-relaxed max-w-lg mx-auto lg:mx-0 text-[1.0625rem]">
            Kontrolisana proizvodnja u svakoj fazi – od sečenja drveta do isporuke na adresu
            kupca, bez gubitka kvaliteta.
          </p>
        </div>

        {/* Timeline + cards */}
        <div className="relative">
          {/* Desktop connector */}
          <div
            className="hidden lg:block absolute top-[7.25rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-wood-200 via-wood-400 to-wood-200"
            aria-hidden
          />
          <div className="hidden lg:grid lg:grid-cols-4 absolute top-[6.85rem] left-0 right-0 pointer-events-none">
            {processSteps.map((s) => (
              <div key={s.step} className="flex justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-wood-500 ring-4 ring-white shadow-md shadow-wood-500/30" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {processSteps.map((step, index) => {
              const { icon: Icon, tag } = stepMeta[step.step] ?? { icon: Factory, tag: "" };
              const isLast = index === processSteps.length - 1;

              return (
                <article
                  key={step.step}
                  className="group panel-warm relative rounded-3xl border border-wood-200/45 overflow-hidden transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Step image */}
                  <div className="relative h-36 md:h-40 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wood-950/75 via-wood-950/20 to-wood-950/10" />
                    <span className="absolute top-3 left-4 px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white">
                      {tag}
                    </span>
                    <span className="absolute bottom-3 right-4 font-serif text-3xl font-bold text-white/30 group-hover:text-white/45 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <div className="p-6 md:p-7 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-wood-100 to-wood-200/60 border border-wood-200/60 text-wood-800 shadow-inner">
                        <Icon size={20} strokeWidth={1.5} />
                      </span>
                      <span className="text-xs font-mono font-bold text-wood-600">{step.step}</span>
                    </div>

                    <h3 className="font-serif text-lg md:text-xl font-bold text-wood-950 leading-snug group-hover:text-wood-800 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">{step.desc}</p>

                    {!isLast && (
                      <div className="lg:hidden mt-5 flex justify-center text-wood-300" aria-hidden>
                        <ArrowRight size={18} className="rotate-90 sm:rotate-0" />
                      </div>
                    )}
                  </div>

                  {/* Mobile vertical connector */}
                  {index < processSteps.length - 1 && (
                    <div
                      className="sm:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 w-px h-6 bg-wood-300"
                      aria-hidden
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div
          className={cn(
            "mt-12 md:mt-16 rounded-3xl overflow-hidden",
            "bg-gradient-to-r from-wood-950 via-wood-900 to-wood-950",
            "border border-wood-800/50 shadow-wood-xl"
          )}
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center px-6 py-6 md:px-10 md:py-8 text-center md:text-left">
            <div>
              <p className="text-wood-300 text-sm leading-relaxed max-w-xl mx-auto md:mx-0">
                Svaki korak dokumentovan i proverljiv - od prijema sirovine do otpreme gotovih
                proizvoda sa sertifikatima{" "}
                <span className="text-white font-medium">ISPM 15</span> i{" "}
                <span className="text-white font-medium">FSC™</span>.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 shrink-0">
              {processSteps.map((s) => (
                <span
                  key={s.step}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-[10px] font-bold text-white/80"
                >
                  {s.step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
