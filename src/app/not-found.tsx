import { PageNav } from "@/components/ui/PageNav";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-lg w-full">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wood-600 mb-4">404</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-wood-950 tracking-tight">
          Stranica nije pronađena
        </h1>
        <p className="mt-4 text-stone-600 leading-relaxed">
          Adresa ne postoji ili je premeštena. Vratite se na početnu ili pogledajte proizvodni program.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <PageNav
            backHref="/#proizvodi"
            backLabel="Proizvodni program"
            sublabel="Asortiman"
            breadcrumbs={[
              { label: "Početna", href: "/" },
              { label: "404" },
            ]}
          />
          <Button href="/" className="rounded-full w-full sm:w-auto">
            <Home size={16} />
            Početna strana
          </Button>
        </div>
      </div>
    </div>
  );
}
