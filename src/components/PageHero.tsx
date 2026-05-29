import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  backHref?: string;
  backLabel?: string;
  badges?: string[];
  accent?: "wood" | "forest" | "neutral";
};

const accentOverlays = {
  wood: "from-wood-950/92 via-wood-950/50 to-wood-950/10",
  forest: "from-forest-950/92 via-forest-950/50 to-forest-950/10",
  neutral: "from-stone-950/92 via-stone-950/50 to-stone-950/10",
};

export function PageHero({
  title,
  description,
  image,
  imageAlt,
  backHref = "/#proizvodi",
  backLabel = "Nazad na asortiman",
  badges = [],
  accent = "wood",
}: PageHeroProps) {
  return (
    <div className="pt-6 md:pt-8 pb-2">
      <Link
        href={backHref}
        className="inline-flex items-center justify-center lg:justify-start gap-2 w-full lg:w-auto text-sm font-medium text-stone-600 hover:text-wood-800 transition-colors mb-6 md:mb-8"
      >
        <ArrowLeft size={16} />
        {backLabel}
      </Link>

      <div className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[340px] md:min-h-[400px] shadow-wood-xl ring-1 ring-wood-200/40">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-t", accentOverlays[accent])} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 grain-overlay opacity-[0.12] pointer-events-none" />

        <div className="absolute inset-0 flex flex-col justify-end items-center lg:items-start text-center lg:text-left p-6 sm:p-8 md:p-12 lg:p-14">
          <div className="w-full max-w-3xl">
            {badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1 rounded-full bg-white/12 backdrop-blur-sm border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white"
                  >
                    {b}
                  </span>
                ))}
              </div>
            )}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.08] text-balance">
              {title}
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
