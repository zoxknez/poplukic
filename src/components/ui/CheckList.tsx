import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckListProps = {
  items: string[];
  columns?: 1 | 2;
  className?: string;
};

export function CheckList({ items, columns = 1, className }: CheckListProps) {
  return (
    <ul className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2", className)}>
      {items.map((text) => (
        <li key={text} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink/70">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-[5px] bg-navy-900 text-gold-300">
            <Check size={13} strokeWidth={3} />
          </span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
