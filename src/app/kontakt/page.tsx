import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt sa kompanijom ${siteConfig.name} - upit za palete, gajbice, rezanu građu ili transport.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Kontakt"
        code="24 h"
        title="Kontakt"
        accent="i zahtev za ponudu."
        description="Ponuda, uzorak ili logistika - odgovor u roku od 24 radna sata."
        image="/images/gajbice-branded.png"
        imageAlt="Gajbice POP-LUKIĆ"
        badges={["24h odgovor", "Besplatan savet"]}
        breadcrumbs={[
          { label: "Početna", href: "/" },
          { label: "Kontakt" },
        ]}
      />
      <ContactSection compact />
    </>
  );
}
