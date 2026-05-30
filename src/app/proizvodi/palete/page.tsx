import type { Metadata } from "next";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import { SpecTable } from "@/components/SpecTable";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CheckList } from "@/components/ui/CheckList";
import { PalletCalculator } from "@/components/calculators/PalletCalculator";

export const metadata: Metadata = {
  title: "Drvene palete",
  description:
    "EUR palete, industrijske palete 1200×1000 i palete po meri. ISPM 15 termički tretman za izvoz.",
};

const catalog = [
  {
    title: "EUR palete 1200×800",
    desc: "Najčešći standard za regale i drumski transport. EPAL raspored dasaka, termički tretirane za izvoz.",
  },
  {
    title: "Industrijske 1200×1000",
    desc: "Robusnija konstrukcija za teže terete, hemijsku industriju i džambo vreće.",
  },
  {
    title: "Boks palete",
    desc: "Sa bočnim rešetkama za voće i povrće u hladnjačama - optimalan protok vazduha.",
  },
  {
    title: "Palete po meri",
    desc: "Dimenzije, debljina dasaka i nosivost prema crtežu ili specifikaciji kupca.",
  },
];

export default function PaletePage() {
  return (
    <ProductPageLayout
      productName="Drvene palete"
      sidebarNote="Nakon prijema upita, kompanija priprema zvaničnu ponudu sa cenom, rokom proizvodnje i uslovima transporta u roku od 24 sata."
      hero={{
        title: "Drvene palete",
        description:
          "Standardne EUR palete, industrijske i namenske konstrukcije – sertifikovane za domaće tržište i izvoz u EU.",
        image: "/images/palete.png",
        imageAlt: "Drvene palete POP-LUKIĆ",
        badges: ["ISPM 15", "EUR / EPAL"],
        accent: "wood",
      }}
    >
      <PalletCalculator />

      <SpecTable
        title="Standardne dimenzije"
        rows={[
          { label: "EUR", value: "1200 × 800 × 144 mm" },
          { label: "Industrijska", value: "1200 × 1000 × 144 mm" },
          { label: "Dinamička nosivost", value: "1.500 - 2.000 kg (zavisno od modela)" },
          { label: "Tretman", value: "ISPM 15 HT - fitosanitarni žig za izvoz" },
          { label: "Materijal", value: "Topola / bor – bez kritičnih čvorova" },
        ]}
      />

      <ContentBlock title="Proizvodni program">
        <div className="grid sm:grid-cols-2 gap-4">
          {catalog.map((item) => (
            <FeatureCard key={item.title} title={item.title} description={item.desc} />
          ))}
        </div>
      </ContentBlock>

      <ContentBlock title="Kvalitet i sertifikati">
        <CheckList
          items={[
            "ISPM 15 termički tretman u komorama kompanije, za izvoz",
            "Pneumatsko kovanje eksera - simetrična i stabilna konstrukcija",
            "Kontrola sirovine - bez oslabljenih mesta na kritičnim tačkama",
          ]}
        />
      </ContentBlock>
    </ProductPageLayout>
  );
}
