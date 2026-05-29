import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "muted" | "dark";
};

const variants = {
  default: "bg-cream",
  muted: "bg-cream-dark",
  dark: "bg-wood-950 text-white",
};

export function Section({ id, className, children, variant = "default" }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", variants[variant], className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {label && (
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-widest mb-3",
            light ? "text-wood-300" : "text-wood-600"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
          light ? "text-white" : "text-wood-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            light ? "text-stone-300" : "text-stone-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
