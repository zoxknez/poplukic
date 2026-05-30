import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type ContentBlockProps = {
  title?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  accent?: "wood" | "forest" | "neutral";
  flush?: boolean;
};

const accentBars = {
  wood: "from-wood-600 via-wood-400 to-wood-200",
  forest: "from-forest-700 via-forest-500 to-forest-200",
  neutral: "from-stone-600 via-stone-400 to-stone-200",
};

export function ContentBlock({
  title,
  icon: Icon,
  children,
  className,
  accent = "wood",
  flush = false,
}: ContentBlockProps) {
  return (
    <div
      className={cn(
        "panel-warm relative rounded-3xl border border-wood-200/50 overflow-hidden shadow-wood-sm",
        className
      )}
    >
      <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", accentBars[accent])} />
      <div className={cn(!flush && "p-6 md:p-8 lg:p-9")}>
        {title && (
          <div className={cn("mb-6 md:mb-8 pb-5 border-b border-wood-200/40", flush && "px-6 md:px-8 pt-6 md:pt-8")}>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-wood-950 text-center md:text-left flex flex-col md:flex-row items-center md:items-center gap-3">
              {Icon && (
                <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-wood-100 to-wood-200/60 border border-wood-200/60 text-wood-700 shrink-0 shadow-inner">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
              )}
              <span className="title-accent">{title}</span>
            </h2>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
