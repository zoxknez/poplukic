import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Factory, ShieldCheck, Truck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CountUp, MaskLines, Reveal } from "@/components/motion";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "O nama",
  description: `Kompanija ${siteConfig.name} - proizvodnja drvene ambalaže i rezane građe u Banatskom Velikom Selu.`,
};

const values = [
  { icon: ShieldCheck, title: "Kvalitet", desc: "ISPM 15 i FSC™ u svakodnevnoj praksi proizvodnje." },
  { icon: Factory, title: "Kapacitet", desc: "Serijska proizvodnja za sezonu berbe i industriju." },
  { icon: Truck, title: "Logistika", desc: "Sopstveni transport - isporuka na vreme." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="O kompaniji"
        code={`Est. ${siteConfig.founded}`}
        title={siteConfig.shortName}
        accent="drvo iz srca Banata."
        description="Proizvodnja drvene ambalaže i rezane građe u Banatskom Velikom Selu - od 2005. godine."
        image="/images/lumber.png"
        imageAlt="Pogon POP-LUKIĆ"
        badges={["Od 2005.", "FSC™", "ISPM 15"]}
        breadcrumbs={[
          { label: "Početna", href: "/" },
          { label: "O nama" },
        ]}
      />

      {/* Priča */}
      <section className="bg-paper py-24 md:py-36">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <Reveal className="flex items-center gap-4">
              <span className="eyebrow text-stamp">(01)</span>
              <span className="eyebrow text-ink/50">Priča kompanije</span>
            </Reveal>
            <h2 className="mt-6 font-display text-[clamp(2.75rem,6vw,5.5rem)] text-navy-900">
              <MaskLines
                lines={[
                  "Ceo lanac",
                  "pod jednom",
                  <span key="k" className="accent-serif text-gold-700 text-[1.05em]">
                    kontrolom.
                  </span>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-ink/70 lg:col-span-5 lg:pt-16">
            <p>
              Kompanija <strong className="font-semibold text-navy-900">{siteConfig.name}</strong> iz
              Banatskog Velikog Sela specijalizovana je za proizvodnju drvenih paleta,
              poljoprivrednih gajbica i rezane građe. Kompanija opslužuje kupce u celoj Srbiji i
              regionu.
            </p>
            <p>
              Kompanija kontroliše ceo lanac - od sirovine iz održivih izvora, preko sušenja i
              termičkog tretmana, do gotovih proizvoda i isporuke sopstvenim voznim parkom.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 max-w-[90rem] px-4 sm:px-6 lg:px-10">
          <dl className="grid grid-cols-2 border-t border-ink/15 lg:grid-cols-4">
            {siteConfig.stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className="flex flex-col-reverse border-b border-ink/15 py-8 pr-4 even:border-l even:pl-5 lg:border-b-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-8"
              >
                <dt className="eyebrow mt-2 text-ink/50">{s.label}</dt>
                <dd className="font-display text-[clamp(2.75rem,5vw,4.5rem)] text-navy-900">
                  <CountUp value={s.value} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Vrednosti */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-24 text-white md:py-32">
        <div aria-hidden className="absolute inset-0 -z-10 bg-blueprint opacity-60" />
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
          <Reveal className="flex items-center gap-4">
            <span className="eyebrow text-gold-400">(02)</span>
            <span className="eyebrow text-white/50">Vrednosti</span>
          </Reveal>
          <h2 className="mt-6 font-display text-[clamp(2.75rem,6vw,5.5rem)]">
            <MaskLines
              lines={[
                "Na čemu se gradi",
                <span key="p" className="accent-serif text-gold-300 text-[1.05em]">
                  poverenje.
                </span>,
              ]}
            />
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1} className="bg-navy-950 p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-gold-400">0{i + 1}</span>
                  <Icon size={24} strokeWidth={1.25} className="text-white/40" />
                </div>
                <h3 className="mt-14 font-display text-4xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Traka sa fotografijom */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="sd-parallax absolute inset-0">
            <Image src="/images/palete.png" alt="" fill sizes="100vw" className="object-cover opacity-45" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950/20" />
        </div>
        <div className="mx-auto flex max-w-[90rem] flex-col gap-10 px-4 py-24 sm:px-6 md:flex-row md:items-end md:justify-between md:py-36 lg:px-10">
          <p className="max-w-3xl font-display text-[clamp(2.25rem,5vw,4.5rem)]">
            Pouzdan partner za ambalažu, građu i logistiku -{" "}
            <span className="accent-serif text-gold-300">sve na jednom mestu.</span>
          </p>
          <Link
            href="/kontakt#upit"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-gold-400 py-2 pl-7 pr-2 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 md:self-auto"
          >
            Kontakt sa timom
            <span className="flex size-10 items-center justify-center rounded-full bg-navy-950 text-gold-300 transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
