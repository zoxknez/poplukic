import Image from "next/image";
import { processSteps, siteConfig } from "@/lib/site";
import { MaskLines, Reveal } from "@/components/motion";

const meta: Record<string, { tag: string; spec: string[] }> = {
  "01": { tag: "Sirovina", spec: ["Topola · bor · hrast", "FSC™ lanac nadzora", "Ulazna kontrola"] },
  "02": { tag: "Sušara", spec: ["KD 8-12% vlage", "Komore 200 m³", "ISPM 15 · HT 56 °C / 30 min"] },
  "03": { tag: "Pogon", spec: ["Pneumatsko kovanje", "EUR i mere kupca", "15.000 gajbica / dan"] },
  "04": { tag: "Logistika", spec: ["Šleperi do 24 t", "CMR dokumentacija", "GPS praćenje"] },
};

/** Pruge u stilu bar-koda, deterministički iz broja koraka. */
function Barcode({ seed }: { seed: number }) {
  const bars = Array.from({ length: 34 }, (_, i) => ((i * 7 + seed * 13) % 5) + 1);
  return (
    <span aria-hidden className="flex h-9 items-stretch gap-[2px]">
      {bars.map((w, i) => (
        <span key={i} className="bg-navy-900" style={{ width: w }} />
      ))}
    </span>
  );
}

export function ProcessStack() {
  return (
    <section className="relative bg-woodgrain">
      <div className="mx-auto max-w-[90rem] px-4 pb-24 pt-24 sm:px-6 md:pb-36 md:pt-36 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal className="flex items-center gap-4">
                <span className="eyebrow text-stamp">(03)</span>
                <span className="eyebrow text-ink/50">Proces</span>
              </Reveal>
              <h2 className="mt-6 font-display text-[clamp(3rem,6.5vw,6rem)] text-navy-900">
                <MaskLines
                  lines={[
                    "Od trupca",
                    <span key="d" className="accent-serif text-gold-700 text-[1.05em]">
                      do rampe.
                    </span>,
                  ]}
                />
              </h2>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-sm leading-relaxed text-ink/65">
                  Svaka faza je dokumentovana i proverljiva - od prijema sirovine do otpreme
                  gotovih proizvoda sa ISPM 15 i FSC™ oznakama.
                </p>
              </Reveal>
              <Reveal delay={0.2} className="mt-10 hidden gap-2 lg:flex">
                {processSteps.map((s) => (
                  <span
                    key={s.step}
                    className="eyebrow flex size-10 items-center justify-center rounded-full border border-navy-900/25 text-navy-900"
                  >
                    {s.step}
                  </span>
                ))}
              </Reveal>
            </div>
          </div>

          {/* Stacked label cards */}
          <ol className="relative lg:col-span-8">
            {processSteps.map((step, i) => {
              const m = meta[step.step];
              return (
                <li
                  key={step.step}
                  className="sticky mb-8 last:mb-0"
                  style={{ top: `calc(6rem + ${i * 1.75}rem)` }}
                >
                  <article className="overflow-hidden rounded-xl border border-navy-900/15 bg-pine-50 shadow-[0_30px_60px_-30px_rgb(7_12_28/0.45)]">
                    {/* Label header */}
                    <header className="flex items-center justify-between gap-4 border-b border-dashed border-navy-900/25 px-5 py-3 md:px-7">
                      <span className="eyebrow text-navy-900">
                        Korak {step.step} / 0{processSteps.length}
                      </span>
                      <span className="eyebrow hidden text-ink/45 sm:inline">
                        {siteConfig.shortName} · BVS-RS
                      </span>
                      <span className="eyebrow rounded-sm bg-navy-900 px-2 py-1 text-[0.6rem] text-gold-300">
                        {m.tag}
                      </span>
                    </header>

                    <div className="grid md:grid-cols-[1.1fr_1fr]">
                      <div className="flex flex-col p-5 md:p-8">
                        <span className="font-display text-[5.5rem] leading-[0.75] text-stamp/90 md:text-[7.5rem]">
                          {step.step}
                        </span>
                        <h3 className="mt-6 font-display text-4xl text-navy-900 md:text-5xl">
                          {step.title}
                        </h3>
                        <p className="mt-3 leading-relaxed text-ink/65">{step.desc}</p>

                        <dl className="mt-8 grid gap-2 border-t border-navy-900/15 pt-5">
                          {m.spec.map((s, j) => (
                            <div key={s} className="flex items-baseline justify-between gap-4">
                              <dt className="eyebrow text-ink/40">Spec. {j + 1}</dt>
                              <dd className="text-right text-sm font-medium text-navy-900">{s}</dd>
                            </div>
                          ))}
                        </dl>

                        <div className="mt-8 flex items-end justify-between gap-4">
                          <Barcode seed={i + 1} />
                          <span className="font-mono text-[0.6rem] text-ink/45">
                            PL-{step.step}-{siteConfig.founded}
                          </span>
                        </div>
                      </div>
                      <div className="relative min-h-[14rem] md:min-h-full">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 35vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent md:bg-gradient-to-l" />
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
