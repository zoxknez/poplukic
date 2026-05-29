import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

type LegalPageProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="bg-cream min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-12 md:py-16 text-center md:text-left">
        <Link
          href="/"
          className="inline-flex items-center justify-center md:justify-start gap-2 w-full md:w-auto text-sm font-medium text-stone-600 hover:text-wood-800 transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Nazad na početnu
        </Link>

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
