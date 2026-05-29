import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type ContentBlockProps = {
  title?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
};

export function ContentBlock({ title, icon: Icon, children, className }: ContentBlockProps) {
  return (
    <div
      className={cn(
        "panel-warm rounded-3xl border border-wood-200/50 p-6 md:p-8 shadow-wood-sm",
        className
      )}
    >
      {title && (
        <h2
          className={cn(
            "font-serif text-xl md:text-2xl font-bold text-wood-950 mb-6",
            "text-center md:text-left flex flex-col md:flex-row items-center md:items-center gap-3"
          )}
        >
          {Icon && (
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-wood-100 border border-wood-200/60 text-wood-700 shrink-0">
              <Icon size={20} strokeWidth={1.5} />
            </span>
          )}
          <span>{title}</span>
        </h2>
      )}
      {children}
    </div>
  );
}
