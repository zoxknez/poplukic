import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";

type ProductPageLayoutProps = {
  hero: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    badges?: string[];
    accent?: "wood" | "forest" | "neutral";
    backHref?: string;
    backLabel?: string;
  };
  productName: string;
  children: React.ReactNode;
  sidebarNote?: string;
};

export function ProductPageLayout({
  hero,
  productName,
  children,
  sidebarNote,
}: ProductPageLayoutProps) {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <PageHero {...hero} />
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start mt-2">
          <div className="lg:col-span-2 space-y-8 w-full">{children}</div>
          <aside className="lg:sticky lg:top-28 space-y-4 w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">
            <QuoteForm product={productName} premium />
            {sidebarNote && (
              <p className="text-xs text-stone-500 leading-relaxed text-center lg:text-left panel-warm rounded-2xl border border-wood-200/40 p-4">
                {sidebarNote}
              </p>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
