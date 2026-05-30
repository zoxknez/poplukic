import { PageHero } from "@/components/PageHero";

import { QuoteForm } from "@/components/QuoteForm";

import type { BreadcrumbItem } from "@/components/ui/PageNav";



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

    backSublabel?: string;

    breadcrumbs?: BreadcrumbItem[];

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

  const breadcrumbs: BreadcrumbItem[] = hero.breadcrumbs ?? [

    { label: "Početna", href: "/" },

    { label: "Proizvodni program", href: "/#proizvodi" },

    { label: hero.title },

  ];



  return (

    <div className="relative bg-cream min-h-screen">

      <div className="absolute inset-x-0 top-16 md:top-[4.25rem] h-48 bg-gradient-to-b from-wood-100/40 to-transparent pointer-events-none" aria-hidden />



      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-20">

        <PageHero {...hero} breadcrumbs={breadcrumbs} />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start mt-4 md:mt-6">

          <div className="lg:col-span-2 space-y-8 w-full">{children}</div>

          <aside className="lg:sticky lg:top-28 space-y-4 w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">

            <QuoteForm product={productName} premium formId="upit" />

            {sidebarNote && (

              <p className="text-xs text-stone-500 leading-relaxed text-center lg:text-left card-nested p-4 border-wood-200/35">

                {sidebarNote}

              </p>

            )}

          </aside>

        </div>

      </div>

    </div>

  );

}


