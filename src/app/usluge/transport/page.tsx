import type { Metadata } from "next";
import Image from "next/image";
import { ProductPageLayout } from "@/components/ProductPageLayout";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { CheckList } from "@/components/ui/CheckList";
import { LogisticsCalculator } from "@/components/calculators/LogisticsCalculator";

export const metadata: Metadata = {
  title: "Transport i logistika",
  description:
    "Sopstveni vozni park - šleperi do 24 t i solo kamioni. Isporuka paleta i gajbica širom Srbije i regiona.",
};

export default function TransportPage() {
  return (
    <ProductPageLayout
      productName="Transport i logistika"
      sidebarNote="Transport prvenstveno za asortiman kompanije; slobodan tovarni prostor dostupan po dogovoru."
      hero={{
        title: "Transport i logistika",
        description:
          "Sopstveni kamioni i šleperi – brza isporuka ambalaže i građe. CMR dokumentacija za izvoz.",
        image: "/images/transport-branded.png",
        imageAlt: "Transport POP-LUKIĆ",
        badges: ["24-48 h", "GPS praćenje"],
        accent: "neutral",
        backHref: "/",
        backLabel: "Nazad na početnu",
        backSublabel: "Početna strana",
        breadcrumbs: [
          { label: "Početna", href: "/" },
          { label: "Transport" },
        ],
      }}
    >
      <LogisticsCalculator />

      <ContentBlock flush accent="neutral">
        <div className="grid md:grid-cols-2">
          <div className="relative h-56 md:h-auto min-h-[260px] group">
            <Image
              src="/images/transport-branded.png"
              alt="Šleper"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wood-950/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-wood-950/10" />
          </div>
          <div className="p-6 md:p-8 lg:p-10 text-center md:text-left flex flex-col justify-center">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-wood-950 title-accent inline-block">
              Mega šleperi (do 24 t)
            </h2>
            <p className="text-sm text-stone-600 mt-5 leading-relaxed">
              Ceradni (Curtainsider) šleperi za brz bočni utovar viljuškarom. Do 33 EUR paletnih
              mesta po vožnji.
            </p>
            <CheckList
              className="mt-6"
              items={[
                "Nosivost 24.000 kg",
                "Bočni, zadnji i krovni utovar",
                "CMR osiguranje robe",
              ]}
            />
          </div>
        </div>
      </ContentBlock>

      <ContentBlock flush accent="neutral">
        <div className="grid md:grid-cols-2">
          <div className="relative h-56 md:h-auto min-h-[260px] md:order-2 group">
            <Image
              src="/images/transport-branded.png"
              alt="Solo kamion POP-LUKIĆ"
              fill
              className="object-cover object-left transition-transform duration-700 group-hover:scale-105"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wood-950/50 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:to-wood-950/10" />
          </div>
          <div className="p-6 md:p-8 lg:p-10 md:order-1 text-center md:text-left flex flex-col justify-center">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-wood-950 title-accent inline-block">
              Solo kamioni (do 7,5 t)
            </h2>
            <p className="text-sm text-stone-600 mt-5 leading-relaxed">
              Za gradska stovarišta i gazdinstva bez pristupa velikim vozilima. Hidraulična rampa i
              paletar uključeni po dogovoru.
            </p>
            <CheckList
              className="mt-6"
              items={[
                "Do 15 EUR paleta",
                "Isporuka u Vojvodini za 12-24 h",
                "GPS praćenje u realnom vremenu",
              ]}
            />
          </div>
        </div>
      </ContentBlock>

      <ContentBlock title="Garancija pouzdanosti" accent="neutral">
        <CheckList
          columns={1}
          items={[
            "Tačni termini - berba ne čeka ambalažu",
            "CMR i carinska dokumentacija za izvoz",
            "Satelitsko praćenje vozila",
          ]}
        />
      </ContentBlock>
    </ProductPageLayout>
  );
}
