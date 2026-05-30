import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageNavProps = {
  backHref: string;
  backLabel: string;
  sublabel?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
};

export function PageNav({
  backHref,
  backLabel,
  sublabel = "Navigacija",
  breadcrumbs = [],
  className,
}: PageNavProps) {
  return (
    <nav
      className={cn("w-full", className)}
      aria-label="Navigacija stranice"
    >
      {breadcrumbs.length > 0 && (
        <ol className="flex flex-wrap items-center justify-center lg:justify-start gap-x-1 gap-y-1 mb-4 md:mb-5">
          {breadcrumbs.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight
                  size={12}
                  className="text-stone-300 shrink-0 mx-0.5"
                  aria-hidden
                />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500 hover:text-wood-800 transition-colors px-1 py-0.5 rounded-md hover:bg-wood-50/80"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] text-wood-800 px-1"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      )}

      <div className="flex justify-center lg:justify-start">
        <Link
          href={backHref}
          className="group inline-flex max-w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-500 focus-visible:ring-offset-2 rounded-full"
        >
          <span
            className={cn(
              "inline-flex items-center gap-3 sm:gap-4",
              "rounded-full border border-wood-200/70 bg-white/75 backdrop-blur-md",
              "px-2 py-2 sm:pr-6 sm:pl-2",
              "shadow-wood-sm",
              "transition-all duration-300 ease-out",
              "group-hover:border-wood-300 group-hover:bg-white group-hover:shadow-wood-md group-hover:-translate-y-0.5"
            )}
          >
            <span
              className={cn(
                "flex items-center justify-center shrink-0",
                "w-10 h-10 sm:w-11 sm:h-11 rounded-full",
                "bg-gradient-to-br from-wood-100 to-wood-200/70",
                "border border-wood-200/80 text-wood-800",
                "shadow-inner",
                "transition-all duration-300",
                "group-hover:from-wood-900 group-hover:to-wood-800 group-hover:border-wood-900 group-hover:text-white group-hover:shadow-wood-md"
              )}
            >
              <ArrowLeft
                size={18}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </span>

            <span className="flex flex-col items-start text-left min-w-0 pr-1 sm:pr-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 group-hover:text-wood-600 transition-colors">
                {sublabel}
              </span>
              <span className="text-sm sm:text-[0.9375rem] font-semibold text-wood-950 group-hover:text-wood-800 transition-colors truncate max-w-[14rem] sm:max-w-none">
                {backLabel}
              </span>
            </span>
          </span>
        </Link>
      </div>
    </nav>
  );
}
