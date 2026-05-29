import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { LogisticsCalculator } from "@/components/calculators/LogisticsCalculator";

export const metadata: Metadata = {
  title: "Transport i logistika",
  description:
    "Sopstveni vozni park — šleperi do 24 t i solo kamioni. Isporuka paleta i gajbica širom Srbije i regiona.",
};

export default function TransportPage() {
  return (
    <ProductPageLayout
      productName="Transport i logistika"
      sidebarNote="Transport prvenstveno za naš asortiman; slobodan tovarni prostor dostupan po dogovoru."
      hero={{
        title: "Transport i logistika",
        description:
          "Sopstveni kamioni i šleperi — brza isporuka ambalaže i građe. CMR dokumentacija za izvoz.",
        image: "/images/transport.png",
        imageAlt: "Transport POP-LUKIĆ",
        badges: ["24–48 h", "GPS praćenje"],
        accent: "neutral",
        backHref: "/",
        backLabel: "Nazad na početnu",
      }}
    >
      <LogisticsCalculator />

      <ContentBlock className="p-0 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative h-56 md:h-auto min-h-[240px]">
            <Image src="/images/transport.png" alt="Šleper" fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-wood-950/20 md:hidden" />
          </div>
          <div className="p-6 md:p-8 lg:p-10 text-center md:text-left">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-wood-950">
              Mega šleperi (do 24 t)
            </h2>
            <p className="text-sm text-stone-600 mt-3 leading-relaxed">
              Ceradni (Curtainsider) šleperi za brz bočni utovar viljuškarom. Do 33 EUR paletnih
              mesta po vožnji.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-stone-700">
              <li className="flex gap-2">
                <CheckCircle2 className="text-wood-600 shrink-0" size={16} />
                Nosivost 24.000 kg
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="text-wood-600 shrink-0" size={16} />
                Bočni, zadnji i krovni utovar
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="text-wood-600 shrink-0" size={16} />
                CMR osiguranje robe
              </li>
            </ul>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock className="p-0 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative h-56 md:h-auto min-h-[240px] md:order-2">
            <Image src="/images/lumber.png" alt="Solo kamion" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="p-6 md:p-8 lg:p-10 md:order-1 text-center md:text-left">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-wood-950">
              Solo kamioni (do 7,5 t)
            </h2>
            <p className="text-sm text-stone-600 mt-3 leading-relaxed">
              Za gradska stovarišta i gazdinstva bez pristupa velikim vozilima. Hidraulična rampa i
              paletar uključeni po dogovoru.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-stone-700">
              <li className="flex gap-2">
                <CheckCircle2 className="text-wood-600 shrink-0" size={16} />
                Do 15 EUR paleta
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="text-wood-600 shrink-0" size={16} />
                Isporuka u Vojvodini za 12–24 h
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="text-wood-600 shrink-0" size={16} />
                GPS praćenje u realnom vremenu
              </li>
            </ul>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock title="Garancija pouzdanosti">
        <ul className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto md:max-w-none md:mx-0 text-left">
          {[
            "Tačni termini — berba ne čeka ambalažu",
            "CMR i carinska dokumentacija za izvoz",
            "Satelitsko praćenje vozila",
          ].map((text) => (
            <li key={text} className="flex gap-2 text-sm text-stone-600">
              <CheckCircle2 className="text-wood-600 shrink-0" size={18} />
              {text}
            </li>
          ))}
        </ul>
      </ContentBlock>
    </ProductPageLayout>
  );
}
