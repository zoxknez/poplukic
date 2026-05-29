import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/site";
import { cn } from "@/lib/utils";

const layoutSpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
] as const;

export function ProductsShowcase() {
  return (
    <section id="proizvodi" className="relative bg-white py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-wood-300/50 to-transparent" />
      <div className="absolute top-32 right-0 w-72 h-72 bg-wood-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-20">
          <div className="section-intro w-full">
            <div className="section-eyebrow">
              <span className="section-eyebrow-line bg-wood-400" aria-hidden />
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
                Proizvodni program
              </p>
              <span className="section-eyebrow-line bg-wood-400 lg:hidden" aria-hidden />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-wood-950 tracking-tight leading-[1.12] text-balance">
              Kompletna ponuda
              <span className="block font-bold">od drveta</span>
            </h2>
            <p className="mt-5 text-stone-600 leading-relaxed max-w-lg mx-auto lg:mx-0 text-[1.0625rem]">
              Od standardnih EUR paleta do poljoprivrednih gajbica i sušene građe - sve iz
              jednog pogona, jedan kvalitet.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-wood-800 hover:text-wood-600 transition-colors group shrink-0 mx-auto lg:mx-0"
          >
            Zatražite ponudu
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-14 lg:gap-y-16 xl:gap-x-8">
          {products.map((product, index) => {
            const num = String(index + 1).padStart(2, "0");
            const isWide = index === 0 || index === 3;

            return (
              <article
                key={product.href}
                className={cn("group", layoutSpans[index])}
              >
                <Link href={product.href} className="block">
                  {/* Image */}
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl bg-stone-100 ring-1 ring-wood-200/40 shadow-wood-md group-hover:shadow-wood-xl transition-shadow duration-500",
                      isWide ? "aspect-[16/9] lg:aspect-[2/1]" : "aspect-[4/3] lg:aspect-[5/4]"
                    )}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes={
                        isWide
                          ? "(max-width: 1024px) 100vw, 58vw"
                          : "(max-width: 1024px) 100vw, 42vw"
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wood-950/50 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <span className="absolute top-5 left-5 md:top-6 md:left-6 font-serif text-4xl md:text-5xl font-bold text-white/40 select-none pointer-events-none">
                      {num}
                    </span>
                    <span className="absolute bottom-4 left-5 md:bottom-5 md:left-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                      {product.subtitle}
                    </span>
                  </div>

                  {/* Copy - mobile: sve centrirano; desktop: editorial levo */}
                  <div className="mt-5 md:mt-6 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-cream to-wood-50/40 border border-wood-100/80 group-hover:border-wood-200/80 transition-colors">
                    <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:justify-between lg:gap-5 lg:text-left">
                      <div className="w-full min-w-0 flex-1">
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-wood-950 tracking-tight group-hover:text-wood-700 transition-colors text-balance">
                          {product.title}
                        </h3>

                        <ul className="mt-5 md:mt-6 space-y-2.5 w-full max-w-[19rem] mx-auto lg:mx-0 lg:max-w-none list-none">
                          {product.points.map((point) => (
                            <li
                              key={point}
                              className="text-sm text-stone-600 leading-relaxed lg:flex lg:items-baseline lg:gap-3 lg:text-left"
                            >
                              <span
                                className="hidden lg:inline-block w-1 h-1 rounded-full bg-wood-400 shrink-0 translate-y-[-2px]"
                                aria-hidden
                              />
                              <span>
                                <span className="text-wood-500 font-bold lg:hidden" aria-hidden>
                                  ·{" "}
                                </span>
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <span
                        className={cn(
                          "flex items-center justify-center w-12 h-12 rounded-full border border-stone-200 text-wood-800 mt-5 lg:mt-0 shrink-0",
                          "transition-all duration-300",
                          "group-hover:bg-wood-900 group-hover:border-wood-900 group-hover:text-white"
                        )}
                        aria-hidden
                      >
                        <ArrowUpRight size={18} strokeWidth={1.75} />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-16 md:mt-20 rounded-2xl bg-wood-950 px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-stone-300 max-w-xl leading-relaxed mx-auto md:mx-0">
            Svi proizvodi sa <span className="text-white font-medium">ISPM 15</span> i{" "}
            <span className="text-white font-medium">FSC™</span> dokumentacijom - specifikacije po
            meri i logistika u ponudi.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-wood-200 hover:text-white transition-colors shrink-0 mx-auto md:mx-0"
          >
            Zatražite ponudu
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
