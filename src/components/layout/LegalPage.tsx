import { PageHeader } from "@/components/ui/PageHeader";
import { PageNav } from "@/components/ui/PageNav";

type LegalPageProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="bg-cream min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center md:text-left">
        <PageNav
          backHref="/"
          backLabel="Nazad na početnu"
          sublabel="Početna strana"
          breadcrumbs={[
            { label: "Početna", href: "/" },
            { label: title },
          ]}
          className="mb-10 md:mb-12"
        />

        <div className="panel-warm rounded-3xl border border-wood-200/50 p-8 md:p-12 shadow-wood-md">
          <PageHeader title={title} className="mb-8" />
          <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-wood-950 prose-a:text-wood-700 prose-p:text-stone-600 prose-p:leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
