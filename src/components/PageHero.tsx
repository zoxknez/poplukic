import Image from "next/image";
import { cn } from "@/lib/utils";
import { PageNav, type BreadcrumbItem } from "@/components/ui/PageNav";

type PageHeroProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  backHref?: string;
  backLabel?: string;
  backSublabel?: string;
  breadcrumbs?: BreadcrumbItem[];
  badges?: string[];
  accent?: "wood" | "forest" | "neutral";
};

const accentOverlays = {
  wood: "from-wood-950/92 via-wood-950/50 to-wood-950/10",
  forest: "from-forest-950/92 via-forest-950/50 to-forest-950/10",
  neutral: "from-stone-950/92 via-stone-950/50 to-stone-950/10",
};

const accentRings = {
  wood: "ring-wood-200/40 group-hover:ring-wood-300/50",
  forest: "ring-forest-200/40 group-hover:ring-forest-300/50",
  neutral: "ring-stone-200/40 group-hover:ring-stone-300/50",
};

export function PageHero({
  title,
  description,
  image,
  imageAlt,
  backHref = "/#proizvodi",
  backLabel = "Nazad na asortiman",
  backSublabel = "Proizvodni program",
  breadcrumbs = [],
  badges = [],
  accent = "wood",
}: PageHeroProps) {
  return (
    <div className="pt-6 md:pt-8 pb-2">
      <PageNav
        backHref={backHref}
        backLabel={backLabel}
        sublabel={backSublabel}
        breadcrumbs={breadcrumbs}
        className="mb-7 md:mb-9"
      />

      <div className="group relative">
        <div
          className={cn(
            "relative rounded-3xl overflow-hidden",
            "min-h-[300px] sm:min-h-[340px] md:min-h-[420px]",
            "shadow-wood-xl ring-1 transition-shadow duration-500",
            accentRings[accent],
            "group-hover:shadow-wood-2xl"
          )}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className={cn("absolute inset-0 bg-gradient-to-t", accentOverlays[accent])} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
          <div className="absolute inset-0 grain-overlay opacity-[0.14] pointer-events-none" />

          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end items-center lg:items-start text-center lg:text-left p-6 sm:p-8 md:p-12 lg:p-14">
            <div className="w-full max-w-3xl">
              {badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
                  {badges.map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-white tracking-tight leading-[1.06] text-balance drop-shadow-sm">
                {title}
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-stone-200/95 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {description}
              </p>
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
  );
}
