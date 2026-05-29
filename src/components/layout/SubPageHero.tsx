import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type SubPageHeroProps = {
  label: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  backHref?: string;
  backLabel?: string;
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
  badges = [],
}: SubPageHeroProps) {
  return (
    <section className="relative pt-4 md:pt-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-4">
        <Link
          href={backHref}
          className="inline-flex items-center justify-center lg:justify-start gap-2 w-full lg:w-auto text-sm font-medium text-stone-600 hover:text-wood-800 transition-colors"
        >
          <ArrowLeft size={16} />
          {backLabel}
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-8 md:pb-12">
        <div className="relative rounded-3xl overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[360px] shadow-wood-xl ring-1 ring-wood-200/40">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood-950/90 via-wood-950/45 to-wood-950/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-wood-950/60 via-transparent to-transparent" />

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
              {description && (
                <p className="mt-4 text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
