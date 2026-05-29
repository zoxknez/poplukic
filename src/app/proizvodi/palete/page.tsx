import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import { SpecTable } from "@/components/SpecTable";
import { ContentBlock } from "@/components/ui/ContentBlock";
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
    desc: "Sa bočnim rešetkama za voće i povrće u hladnjačama — optimalan protok vazduha.",
  },
  {
    title: "Palete po meri",
    desc: "Dimenzije, debljina dasaka i nosivost po vašem crtežu ili specifikaciji.",
  },
];

export default function PaletePage() {
  return (
    <ProductPageLayout
      productName="Drvene palete"
      sidebarNote="Nakon slanja upita pripremamo zvaničnu ponudu sa cenom, rokom proizvodnje i uslovima transporta u roku od 24h."
      hero={{
        title: "Drvene palete",
        description:
          "Standardne EUR palete, industrijske i namenske konstrukcije — sertifikovane za domaće tržište i izvoz u EU.",
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
          { label: "Dinamička nosivost", value: "1.500 – 2.000 kg (zavisno od modela)" },
          { label: "Tretman", value: "ISPM 15 HT — fitosanitarni žig za izvoz" },
          { label: "Materijal", value: "Topola / bor — bez kritičnih čvorova" },
        ]}
      />

      <ContentBlock title="Proizvodni program">
        <div className="grid sm:grid-cols-2 gap-4">
          {catalog.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-wood-200/40 bg-white/60 p-5 hover:border-wood-300/60 transition-colors text-center md:text-left"
            >
              <h3 className="font-semibold text-wood-950">{item.title}</h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock title="Kvalitet i sertifikati">
        <ul className="space-y-3 max-w-md mx-auto md:mx-0 text-left md:text-left">
          {[
            "ISPM 15 termički tretman u sopstvenim komorama za izvoz",
            "Pneumatsko kovanje eksera — simetrična i stabilna konstrukcija",
            "Kontrola sirovine — bez oslabljenih mesta na kritičnim tačkama",
          ].map((text) => (
            <li key={text} className="flex gap-3 text-sm text-stone-600">
              <CheckCircle2 className="text-wood-600 shrink-0 mt-0.5" size={18} />
              {text}
            </li>
          ))}
        </ul>
      </ContentBlock>
    </ProductPageLayout>
  );
}
