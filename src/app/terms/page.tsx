import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Uslovi korišćenja",
};

export default function TermsPage() {
  return (
    <LegalPage title="Uslovi korišćenja sajta">
      <p>
        Korišćenjem sajta {siteConfig.url} prihvataju se sledeći uslovi. Sajt je informativnog
        karaktera i ne predstavlja obavezujuću ponudu dok se ne potpiše ugovor.
      </p>

      <h2>Sadržaj sajta</h2>
      <p>
        Tehničke specifikacije, slike i opisi proizvoda su orientacioni. Za zvaničnu ponudu
        potrebno je obratiti se prodajnom timu kompanije.
      </p>

      <h2>Intelektualna svojina</h2>
      <p>
        Sav sadržaj sajta zaštićen je autorskim pravom kompanije {siteConfig.name}. Zabranjeno
        je neovlašćeno kopiranje bez pisanog odobrenja.
      </p>

      <h2>Ograničenje odgovornosti</h2>
      <p>
        Kompanija nastoji da informacije budu tačne i ažurirane, ali se ne garantuje potpuna tačnost u
        svakom trenutku. Za poslovne odluke koriste se isključivo pisane ponude i ugovori.
      </p>

      <h2>Merodavno pravo</h2>
      <p>
        Na ove uslove primenjuju se propisi Republike Srbije. Za sporove je merodavan stvarno
        nadležni sud u Republici Srbiji.
      </p>

      <p className="text-sm text-stone-500">Poslednja izmena: maj 2026.</p>
    </LegalPage>
  );
}
