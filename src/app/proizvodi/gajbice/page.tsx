import type { Metadata } from "next";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import { SpecTable } from "@/components/SpecTable";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CheckList } from "@/components/ui/CheckList";
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
      sidebarNote="Za velike porudžbine obezbeđen je besplatan uzorak gajbice pre serijske proizvodnje."
      hero={{
        title: "Drvene gajbice",
        description:
          "Prozračna drvena ambalaža za sveže plodove - jednoredne, dvoredne i holandez formata. Do 15.000 komada dnevno.",
        image: "/images/gajbice-branded.png",
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
          { label: "Uglovi", value: "Tvrdo drvo - stek do 500 kg" },
          { label: "Materijal", value: "Topola - biorazgradivo, bez hemije" },
        ]}
      />

      <ContentBlock title="Ponuda" accent="forest">
        <div className="grid sm:grid-cols-2 gap-4">
          <FeatureCard
            title="Sklopljene (gotove) gajbice"
            description="Spremne za berbu i transport. Ojačani trouglasti uglovi za slaganje u visinu u hladnjačama."
          />
          <FeatureCard
            title="Elementi i patosi"
            description="Patosi, letvice i uglovi u rasutom stanju - do 5× više komada po šleperu, sklapanje na licu mesta."
          />
        </div>
      </ContentBlock>

      <ContentBlock title="Prednosti drveta" accent="forest">
        <CheckList
          accent="forest"
          columns={2}
          items={[
            "Prirodna ventilacija – manje kondenzacije i buđi",
            "Čvrstoća steka - drveni uglovi izdržavaju pritisak",
            "100% biorazgradivo i reciklabilno",
            "Bez lepkova – bezbedan kontakt sa hranom",
            "Otpornost na vlagu u hladnjačama",
            "Modularne dimenzije za EUR palete",
          ]}
        />
      </ContentBlock>
    </ProductPageLayout>
  );
}
