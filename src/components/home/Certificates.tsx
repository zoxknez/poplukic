import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { MaskLines, Reveal } from "@/components/motion";

function IspmStamp() {
  return (
    <svg viewBox="0 0 300 190" className="w-full" aria-hidden>
      <rect x="6" y="6" width="288" height="178" rx="10" fill="none" stroke="currentColor" strokeWidth="7" />
      <rect x="20" y="20" width="260" height="150" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="118" x2="280" y2="118" stroke="currentColor" strokeWidth="2" />
      <line x1="150" y1="118" x2="150" y2="170" stroke="currentColor" strokeWidth="2" />
      <text x="150" y="88" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="62" fill="currentColor" letterSpacing="-2">
        ISPM 15
      </text>
      <text x="85" y="153" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="currentColor">
        RS
      </text>
      <text x="215" y="153" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="28" fill="currentColor">
        HT
      </text>
    </svg>
  );
}

function RingStamp() {
  return (
    <svg viewBox="0 0 240 240" className="w-full" aria-hidden>
      <defs>
        <path id="ring" d="M120,120 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
      </defs>
      <circle cx="120" cy="120" r="114" fill="none" stroke="currentColor" strokeWidth="6" />
      <circle cx="120" cy="120" r="70" fill="none" stroke="currentColor" strokeWidth="2" />
      <text fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" letterSpacing="2.2" fill="currentColor">
        <textPath href="#ring">ODRŽIVO ŠUMSKO DRVO · FSC™ C132511 · BANAT ·</textPath>
      </text>
      <text x="120" y="118" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="44" fill="currentColor">
        FSC™
      </text>
      <text x="120" y="146" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" letterSpacing="2" fill="currentColor">
        SERTIFIKOVANO
      </text>
    </svg>
  );
}

export function Certificates() {
  const [ispm, fsc] = siteConfig.certifications;

  return (
    <section className="relative overflow-hidden bg-paper py-24 md:py-36">
      <div aria-hidden className="absolute inset-0 bg-blueprint-ink [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="relative mx-auto grid max-w-[90rem] gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal className="flex items-center gap-4">
            <span className="eyebrow text-stamp">(05)</span>
            <span className="eyebrow text-ink/50">Sertifikati</span>
          </Reveal>
          <h2 className="mt-6 font-display text-[clamp(3rem,6.5vw,6rem)] text-navy-900">
            <MaskLines
              lines={[
                "Žig koji",
                <span key="o" className="accent-serif text-stamp text-[1.05em]">
                  otvara granice.
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md leading-relaxed text-ink/65">
              Dokumentovana usklađenost za domaće tržište i izvoz u Evropsku uniju. Svaka izvozna
              paleta nosi fitosanitarnu oznaku, a sirovina ima FSC™ lanac nadzora.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
            {[ispm, fsc].map((c) => (
              <div key={c.id} className="flex items-baseline justify-between gap-6 py-5">
                <span className="font-display text-3xl text-navy-900">{c.name}</span>
                <span className="text-right text-sm text-ink/60">{c.detail}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              href="/kontakt#upit"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-navy-900"
            >
              <span className="border-b border-navy-900/30 pb-1 transition-colors group-hover:border-stamp group-hover:text-stamp">
                Zatražite dokumentaciju
              </span>
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45 group-hover:text-stamp" />
            </Link>
          </Reveal>
        </div>

        {/* "Dokument" sa žigovima */}
        <div className="relative lg:col-span-6 lg:col-start-7">
          <Reveal className="relative rotate-[1.5deg] rounded-sm bg-pine-50 p-6 shadow-[0_40px_80px_-40px_rgb(7_12_28/0.5),0_0_0_1px_rgb(12_17_34/0.06)] md:p-10">
            <div className="flex items-start justify-between border-b-2 border-navy-900 pb-4">
              <div>
                <p className="eyebrow text-ink/45">Otpremnica / Packing list</p>
                <p className="mt-1 font-display text-3xl text-navy-900">{siteConfig.name}</p>
              </div>
              <p className="text-right font-mono text-[0.65rem] leading-relaxed text-ink/50">
                MB {siteConfig.legal.mb}
                <br />
                PIB {siteConfig.legal.pib}
              </p>
            </div>

            <dl className="mt-6 space-y-3 font-mono text-xs">
              {[
                ["Roba", "EUR paleta 1200 × 800 × 144"],
                ["Tretman", "HT - 56 °C / 30 min (jezgro)"],
                ["Sirovina", "FSC™ C132511"],
                ["Mesto utovara", siteConfig.address.city],
                ["Prevoz", "Sopstveni - CMR"],
              ].map(([k, val]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-dashed border-ink/15 pb-3">
                  <dt className="text-ink/45 uppercase tracking-wider">{k}</dt>
                  <dd className="text-right text-navy-900">{val}</dd>
                </div>
              ))}
            </dl>

            <div className="relative mt-8 grid grid-cols-2 items-center gap-6 pb-2 md:gap-10">
              <div className="sd-stamp text-stamp mix-blend-multiply" style={{ "--r": "-9deg" } as React.CSSProperties}>
                <div className="ink-mask">
                  <IspmStamp />
                </div>
              </div>
              <div className="sd-stamp text-navy-800 mix-blend-multiply" style={{ "--r": "12deg" } as React.CSSProperties}>
                <div className="ink-mask">
                  <RingStamp />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between">
              <span className="accent-serif text-2xl text-navy-800/70">Odobreno za otpremu</span>
              <span className="eyebrow text-ink/35">Kontrola kvaliteta</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
