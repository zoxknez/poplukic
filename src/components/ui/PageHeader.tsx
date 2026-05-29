import { cn } from "@/lib/utils";

type PageHeaderProps = {
  label?: string;
  title: string;
  titleBold?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function PageHeader({
  label,
  title,
  titleBold,
  description,
  align = "left",
  light = false,
  className,
}: PageHeaderProps) {
  const centered = align === "center";
  const lineClass = cn("section-eyebrow-line", light ? "bg-wood-400/60" : "bg-wood-500");

  return (
    <div
      className={cn(
        "mb-10 md:mb-14 max-w-2xl",
        centered
          ? "text-center mx-auto"
          : "text-center lg:text-left mx-auto lg:mx-0",
        className
      )}
    >
      {label && (
        <div className={cn("section-eyebrow", centered && "justify-center")}>
          <span className={lineClass} aria-hidden />
          <p
            className={cn(
              "text-[11px] font-medium uppercase tracking-[0.28em]",
              light ? "text-wood-300" : "text-wood-700"
            )}
          >
            {label}
          </p>
          <span className={cn(lineClass, !centered && "lg:hidden")} aria-hidden />
        </div>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-normal tracking-tight leading-[1.12] text-balance",
          light ? "text-white" : "text-wood-950"
        )}
      >
        {title}
        {titleBold && <span className="block font-bold">{titleBold}</span>}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-[1.0625rem] leading-relaxed max-w-xl mx-auto lg:mx-0",
            light ? "text-stone-300" : "text-stone-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
