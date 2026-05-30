import Image from "next/image";
import { PageNav, type BreadcrumbItem } from "@/components/ui/PageNav";

type SubPageHeroProps = {
  label: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  backHref?: string;
  backLabel?: string;
  backSublabel?: string;
  breadcrumbs?: BreadcrumbItem[];
  badges?: string[];
};

export function SubPageHero({
  label,
  title,
  description,
  image,
  imageAlt,
  backHref = "/",
  backLabel = "Nazad na početnu",
  backSublabel = "Početna strana",
  breadcrumbs = [],
  badges = [],
}: SubPageHeroProps) {
  return (
    <section className="relative pt-4 md:pt-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-4 md:pb-6">
        <PageNav
          backHref={backHref}
          backLabel={backLabel}
          sublabel={backSublabel}
          breadcrumbs={breadcrumbs}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-8 md:pb-12">
        <div className="group relative">
          <div className="relative rounded-3xl overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[380px] shadow-wood-xl ring-1 ring-wood-200/40 transition-shadow duration-500 group-hover:shadow-wood-2xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wood-950/92 via-wood-950/45 to-wood-950/15" />
            <div className="absolute inset-0 bg-gradient-to-r from-wood-950/60 via-transparent to-transparent" />
            <div className="absolute inset-0 grain-overlay opacity-[0.12] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end items-center lg:items-start text-center lg:text-left p-6 sm:p-8 md:p-12 lg:p-14">
              <div className="w-full max-w-3xl">
                <div className="section-eyebrow mb-3 md:mb-4">
                  <span className="section-eyebrow-line bg-wood-400/80" aria-hidden />
                  <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-wood-300">
                    {label}
                  </p>
                  <span className="section-eyebrow-line bg-wood-400/80 lg:hidden" aria-hidden />
                </div>
                {badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
                    {badges.map((b) => (
                      <span
                        key={b}
                        className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-white tracking-tight leading-[1.06] text-balance">
                  {title}
                </h1>
                {description && (
                  <p className="mt-4 text-sm sm:text-base md:text-lg text-stone-200/95 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    {description}
                  </p>
                )}
                <div className="mt-6 md:mt-8 flex justify-center lg:justify-start">
                  <span className="inline-block h-1 w-16 rounded-full bg-gradient-to-r from-wood-400 via-wood-300 to-transparent opacity-90" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-3xl border border-wood-300/25 bg-wood-100/30 hidden md:block"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
