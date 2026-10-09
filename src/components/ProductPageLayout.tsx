import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero, type BreadcrumbItem } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/motion";
import { products } from "@/lib/site";

type ProductPageLayoutProps = {
  hero: {
    title: string;
    titleAccent?: string;
    code?: string;
    label?: string;
    description: string;
    image: string;
    imageAlt: string;
    badges?: string[];
    breadcrumbs?: BreadcrumbItem[];
  };
  productName: string;
  href: string;
  children: React.ReactNode;
  sidebarNote?: string;
};

export function ProductPageLayout({
  hero,
  productName,
  href,
  children,
  sidebarNote,
}: ProductPageLayoutProps) {
  const breadcrumbs: BreadcrumbItem[] = hero.breadcrumbs ?? [
    { label: "Početna", href: "/" },
    { label: "Proizvodni program", href: "/#proizvodi" },
    { label: hero.title },
  ];
  const others = products.filter((p) => p.href !== href);

  return (
    <>
      <PageHero
        label={hero.label ?? "Proizvodni program"}
        code={hero.code}
        title={hero.title}
        accent={hero.titleAccent}
        description={hero.description}
        image={hero.image}
        imageAlt={hero.imageAlt}
        badges={hero.badges}
        breadcrumbs={breadcrumbs}
      />

      <section className="relative bg-paper py-16 md:py-24">
        <div aria-hidden className="absolute inset-0 bg-blueprint-ink opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_40%)]" />
        <div className="relative mx-auto grid max-w-[90rem] items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
          <div className="space-y-6 lg:col-span-7">{children}</div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:col-span-5">
            <QuoteForm product={productName} formId="upit" />
            {sidebarNote && (
              <p className="flex gap-3 rounded-lg border border-ink/10 bg-pine-50 p-4 text-sm leading-relaxed text-ink/60">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                {sidebarNote}
              </p>
            )}
          </aside>
        </div>
      </section>

      {/* Ostali proizvodi */}
      <section className="bg-navy-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <p className="font-display text-4xl md:text-6xl">
              Iz istog <span className="accent-serif text-gold-300">pogona</span>
            </p>
            <Link href="/#proizvodi" className="eyebrow hidden text-white/50 hover:text-gold-300 sm:block">
              Ceo program →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.href} delay={i * 0.08}>
                <Link
                  href={p.href}
                  className="group relative block overflow-hidden rounded-lg ring-1 ring-white/10"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover opacity-70 transition duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                    <div>
                      <span className="eyebrow text-[0.625rem] text-gold-400">{p.code}</span>
                      <p className="mt-1 font-display text-3xl">{p.title}</p>
                      <p className="text-sm text-white/55">{p.subtitle}</p>
                    </div>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 transition duration-500 group-hover:rotate-45 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-navy-950">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
