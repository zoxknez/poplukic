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

const fleet = [
  {
    code: "A",
    title: "Mega šleperi (do 24 t)",
    desc: "Ceradni (Curtainsider) šleperi za brz bočni utovar viljuškarom. Do 33 EUR paletnih mesta po vožnji.",
    items: ["Nosivost 24.000 kg", "Bočni, zadnji i krovni utovar", "CMR osiguranje robe"],
    position: "object-center",
  },
  {
    code: "B",
    title: "Solo kamioni (do 7,5 t)",
    desc: "Za gradska stovarišta i gazdinstva bez pristupa velikim vozilima. Hidraulična rampa i paletar uključeni po dogovoru.",
    items: ["Do 15 EUR paleta", "Isporuka u Vojvodini za 12-24 h", "GPS praćenje u realnom vremenu"],
    position: "object-left",
  },
];

export default function TransportPage() {
  return (
    <ProductPageLayout
      productName="Transport i logistika"
      href="/usluge/transport"
      sidebarNote="Transport prvenstveno za asortiman kompanije; slobodan tovarni prostor dostupan po dogovoru."
      hero={{
        code: "TRN",
        label: "Usluge",
        title: "Transport",
        titleAccent: "i logistika.",
        description:
          "Sopstveni kamioni i šleperi - brza isporuka ambalaže i građe. CMR dokumentacija za izvoz.",
        image: "/images/transport-branded.png",
        imageAlt: "Transport POP-LUKIĆ",
        badges: ["24-48 h", "GPS praćenje"],
        breadcrumbs: [
          { label: "Početna", href: "/" },
          { label: "Transport" },
        ],
      }}
    >
      <LogisticsCalculator />

      {fleet.map((f) => (
        <ContentBlock key={f.code} flush>
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[15rem]">
              <Image
                src="/images/transport-branded.png"
                alt={f.title}
                fill
                className={`object-cover ${f.position}`}
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              <span className="eyebrow absolute left-4 top-4 rounded-sm bg-navy-950/85 px-2 py-1 text-[0.6rem] text-gold-300">
                Vozilo {f.code}
              </span>
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <h2 className="font-display text-3xl text-navy-900 md:text-4xl">{f.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{f.desc}</p>
              <CheckList className="mt-6" items={f.items} />
            </div>
          </div>
        </ContentBlock>
      ))}

      <ContentBlock title="Garancija pouzdanosti" index="C">
        <CheckList
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
