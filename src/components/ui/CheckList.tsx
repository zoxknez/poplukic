import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckListProps = {
  items: string[];
  accent?: "wood" | "forest";
  columns?: 1 | 2;
  className?: string;
};

const accentStyles = {
  wood: {
    icon: "text-wood-600 bg-wood-100/80 border-wood-200/60",
  },
  forest: {
    icon: "text-forest-700 bg-forest-100/80 border-forest-200/60",
  },
};

export function CheckList({
  items,
  accent = "wood",
  columns = 1,
  className,
}: CheckListProps) {
  const styles = accentStyles[accent];

  return (
    <ul
      className={cn(
        "space-y-3",
        columns === 2 && "grid sm:grid-cols-2 gap-3 space-y-0",
        className
      )}
    >
      {items.map((text) => (
        <li key={text} className="flex gap-3 text-sm text-stone-600 leading-relaxed">
          <span
            className={cn(
              "flex items-center justify-center w-7 h-7 rounded-lg border shrink-0 mt-0.5",
              styles.icon
            )}
          >
            <CheckCircle2 size={14} strokeWidth={2.25} />
          </span>
          <span className="pt-0.5">{text}</span>
        </li>
      ))}
    </ul>
  );
}
