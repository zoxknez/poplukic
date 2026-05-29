import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { SubPageHero } from "@/components/layout/SubPageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktirajte ${siteConfig.name} — upit za palete, gajbice, rezanu građu ili transport.`,
};

export default function ContactPage() {
  return (
    <>
      <SubPageHero
        label="Kontakt"
        title="Pišite nam"
        description="Ponuda, uzorak ili logistika — odgovaramo u roku od 24 radna sata."
        image="/images/palete.png"
        imageAlt="Kontakt POP-LUKIĆ"
        badges={["24h odgovor", "Besplatan savet"]}
      />
      <ContactSection compact />
    </>
  );
}
