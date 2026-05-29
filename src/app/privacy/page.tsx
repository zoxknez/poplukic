import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politika privatnosti",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Politika privatnosti">
      <p>
        Kompanija <strong>{siteConfig.name}</strong> poštuje privatnost posetilaca sajta{" "}
        {siteConfig.url}. Ova politika objašnjava koji podaci se prikupljaju i kako se koriste.
      </p>

      <h2>Podaci koji se prikupljaju</h2>
      <p>
        Kada se popuni kontakt forma, prikupljaju se ime, email adresa, opcioni broj telefona i
        sadržaj poruke. Ovi podaci služe isključivo za odgovor na primljeni upit i pripremu ponude.
      </p>

      <h2>Čuvanje podataka</h2>
      <p>
        Poruke se čuvaju u poslovnom sistemu kompanije onoliko dugo koliko je potrebno za obradu
        upita i vođenje poslovne dokumentacije, u skladu sa važećim propisima.
      </p>

      <h2>Prava korisnika</h2>
      <p>
        Korisnik može zatražiti uvid, ispravku ili brisanje svojih podataka slanjem emaila na{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>Kontakt</h2>
      <p>
        {siteConfig.name}
        <br />
        {siteConfig.address.full}
        <br />
        {siteConfig.email}
      </p>

      <p className="text-sm text-stone-500">Poslednja izmena: maj 2026.</p>
    </LegalPage>
  );
}
