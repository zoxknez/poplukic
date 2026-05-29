import type { Metadata } from "next";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import { SpecTable } from "@/components/SpecTable";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { HumidityGuide } from "@/components/calculators/HumidityGuide";

export const metadata: Metadata = {
  title: "Rezana građa",
  description:
    "Rezana građa topole i hrasta. KD sušenje 8-12%, vazdušno sušena i sveža seča. Sušara i parna komora.",
};

export default function RezanaGradjaPage() {
  return (
    <ProductPageLayout
      productName="Rezana građa"
      sidebarNote="Za porudžbine preko 10 m³ obezbeđujemo popust i organizaciju transporta do vaše adrese."
      hero={{
        title: "Rezana građa",
        description:
          "Topola za ambalažu i industriju, hrast za stolariju i parket. Kompjutersko sušenje i parenje u sopstvenom pogonu.",
        image: "/images/lumber.png",
        imageAlt: "Rezana građa POP-LUKIĆ",
        badges: ["KD 10-12%", "Sušara 200 m³"],
        accent: "wood",
      }}
    >
      <HumidityGuide />

      <SpecTable
        title="Topola"
        rows={[
          { label: "Debljine", value: "25 / 50 / 80 mm" },
          { label: "Dužine", value: "2,0 - 4,0 m" },
          { label: "Klasa", value: "I (bez čvorova) i II" },
          { label: "Vlažnost", value: "Sveža, AD ili KD po zahtevu" },
        ]}
      />

      <SpecTable
        title="Hrast"
        rows={[
          { label: "Vlažnost", value: "KD 10-12% (stolarski standard)" },
          { label: "Primena", value: "Parket, masivne ploče, nameštaj" },
          { label: "Klasa", value: "A / B (samice i polusamice)" },
        ]}
      />

      <ContentBlock title="Tehnologija prerade">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-wood-200/50 bg-gradient-to-br from-wood-50/80 to-white/60 p-6 text-center md:text-left">
            <h3 className="font-serif text-lg font-bold text-wood-950">Kompjutersko sušenje</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Kondenzacione i konvencionalne sušare kapaciteta 200 m³. Softver prati temperaturu i
              vlažnost u realnom vremenu - sprečava unutrašnja pucanja.
            </p>
          </div>
          <div className="rounded-2xl border border-forest-200/50 bg-gradient-to-br from-forest-50/80 to-white/60 p-6 text-center md:text-left">
            <h3 className="font-serif text-lg font-bold text-wood-950">Parenje drveta</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Parna komora za ujednačavanje boje, sterilizaciju i povećanje elastičnosti drveta pre
              dalje obrade (bukva, orah i druge vrste po zahtevu).
            </p>
          </div>
        </div>
      </ContentBlock>
    </ProductPageLayout>
  );
}
