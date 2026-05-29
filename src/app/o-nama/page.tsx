import type { Metadata } from "next";
import Image from "next/image";
import { Factory, ShieldCheck, Truck } from "lucide-react";
import { SubPageHero } from "@/components/layout/SubPageHero";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "O nama",
  description: `Kompanija ${siteConfig.name} - proizvodnja drvene ambalaže i rezane građe u Banatskom Velikom Selu.`,
};

export default function AboutPage() {
  return (
    <>
      <SubPageHero
        label="O kompaniji"
        title={siteConfig.name}
        description="Proizvodnja drvene ambalaže i rezane građe u srcu Banata - od 2005. godine."
        image="/images/lumber.png"
        imageAlt="Pogon POP-LUKIĆ"
        badges={["Od 2005.", "FSC™", "ISPM 15"]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="text-center lg:text-left">
              <PageHeader
                label="Priča kompanije"
                title="Lider u drvnoj"
                titleBold="ambalaži regiona"
                description="Tradicija drvoprerađivačke industrije Banata uz modernu opremu i sertifikovane procese."
              />
              <div className="space-y-5 text-stone-600 leading-relaxed -mt-4 max-w-xl mx-auto lg:mx-0">
                <p>
                  Kompanija <strong className="text-wood-950">{siteConfig.name}</strong> iz
                  Banatskog Velikog Sela specijalizovana je za proizvodnju drvenih paleta,
                  poljoprivrednih gajbica i rezane građe. Kompanija opslužuje kupce u celoj Srbiji i
                  regionu.
                </p>
                <p>
                  Kompanija kontroliše ceo lanac – od sirovine iz održivih izvora, preko sušenja i
                  termičkog tretmana, do gotovih proizvoda i isporuke sopstvenim voznim parkom.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0 w-full">
              {siteConfig.stats.map((s) => (
                <div
                  key={s.label}
                  className="panel-warm rounded-2xl border border-wood-200/50 p-6 text-center hover:-translate-y-0.5 transition-transform"
                >
                  <div className="font-serif text-2xl md:text-3xl font-bold text-wood-950">
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-stone-500 mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-dark border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <PageHeader
            label="Vrednosti"
            title="Na čemu gradimo"
            titleBold="poverenje"
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: ShieldCheck,
                title: "Kvalitet",
                desc: "ISPM 15 i FSC™ u svakodnevnoj praksi proizvodnje.",
              },
              {
                icon: Factory,
                title: "Kapacitet",
                desc: "Serijska proizvodnja za sezonu berbe i industriju.",
              },
              {
                icon: Truck,
                title: "Logistika",
                desc: "Sopstveni transport – isporuka na vreme.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="panel-warm rounded-3xl border border-wood-200/50 p-8 text-center"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-wood-100 border border-wood-200/60 text-wood-700 mb-5">
                  <Icon size={26} strokeWidth={1.25} />
                </span>
                <h3 className="font-serif text-xl font-bold text-wood-950">{title}</h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 flex justify-center">
            <Button href="/kontakt" size="lg" className="rounded-full">
              Kontakt sa timom
            </Button>
          </div>
        </div>
      </section>

      <section className="relative h-56 md:h-72 overflow-hidden">
        <Image src="/images/palete.png" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-wood-950/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <p className="font-serif text-2xl md:text-3xl font-bold text-white max-w-2xl">
            Pouzdan partner za ambalažu, građu i logistiku – sve na jednom mestu.
          </p>
        </div>
      </section>
    </>
  );
}
