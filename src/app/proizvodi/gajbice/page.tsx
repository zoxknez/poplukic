import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import { SpecTable } from "@/components/SpecTable";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CrateSelector } from "@/components/calculators/CrateSelector";

export const metadata: Metadata = {
  title: "Drvene gajbice",
  description:
    "Poljoprivredne drvene gajbice za voće i povrće. Kapacitet 15.000 komada dnevno. Sklopljene ili u elementima.",
};

export default function GajbicePage() {
  return (
    <ProductPageLayout
      productName="Drvene gajbice"
      sidebarNote="Za velike porudžbine obezbeđujemo besplatan uzorak gajbice pre serijske proizvodnje."
      hero={{
        title: "Drvene gajbice",
        description:
          "Prozračna drvena ambalaža za sveže plodove — jednoredne, dvoredne i holandez formata. Do 15.000 komada dnevno.",
        image: "/images/gajbice.png",
        imageAlt: "Drvene gajbice POP-LUKIĆ",
        badges: ["15.000 kom / dan", "Poljoprivreda"],
        accent: "forest",
      }}
    >
      <CrateSelector />

      <SpecTable
        title="Tipovi gajbica"
        rows={[
          { label: "Holandez", value: "500 × 300 mm (različite visine)" },
          { label: "Modularno", value: "Usklađeno sa EUR paletom 1200 × 800" },
          { label: "Isporuka", value: "Sklopljene ili elementi (rasuto)" },
          { label: "Uglovi", value: "Tvrdo drvo — stek do 500 kg" },
          { label: "Materijal", value: "Topola — biorazgradivo, bez hemije" },
        ]}
      />

      <ContentBlock title="Ponuda">
        <div className="space-y-5 max-w-lg mx-auto md:mx-0 text-center md:text-left">
          <div className="border-l-0 md:border-l-2 border-forest-500 md:pl-5 px-1">
            <h3 className="font-semibold text-wood-950">Sklopljene (gotove) gajbice</h3>
            <p className="text-sm text-stone-600 mt-1.5 leading-relaxed">
              Spremne za berbu i transport. Ojačani trouglasti uglovi za slaganje u visinu u
              hladnjačama.
            </p>
          </div>
          <div className="border-l-0 md:border-l-2 border-forest-500 md:pl-5 px-1">
            <h3 className="font-semibold text-wood-950">Elementi i patosi</h3>
            <p className="text-sm text-stone-600 mt-1.5 leading-relaxed">
              Patosi, letvice i uglovi u rasutom stanju — do 5× više komada po šleperu, sklapanje na
              licu mesta.
            </p>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock title="Prednosti drveta">
        <ul className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto md:max-w-none md:mx-0 text-left">
          {[
            "Prirodna ventilacija — manje kondenzacije i buđi",
            "Čvrstoća steka — drveni uglovi izdržavaju pritisak",
            "100% biorazgradivo i reciklabilno",
            "Bez lepkova — bezbedan kontakt sa hranom",
            "Otpornost na vlagu u hladnjačama",
            "Modularne dimenzije za EUR palete",
          ].map((text) => (
            <li key={text} className="flex gap-2 text-sm text-stone-600">
              <CheckCircle2 className="text-forest-600 shrink-0" size={16} />
              {text}
            </li>
          ))}
        </ul>
      </ContentBlock>
    </ProductPageLayout>
  );
}
