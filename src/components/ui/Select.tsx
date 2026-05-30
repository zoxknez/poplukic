import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
};

export function Select({ label, error, className, id, children, ...props }: SelectProps) {
  const selectId = id ?? props.name;

  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={selectId} className="block text-sm font-medium text-stone-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            "form-select w-full appearance-none rounded-xl border border-stone-200/90 bg-gradient-to-b from-white to-stone-50/50 px-4 py-3.5 pr-10 text-stone-900 text-sm transition-all duration-200 cursor-pointer",
            "shadow-[inset_0_1px_2px_rgba(44,26,20,0.04)]",
            "hover:border-wood-300/80 hover:shadow-sm",
            "focus:outline-none focus:border-wood-500 focus:ring-2 focus:ring-wood-500/20 focus:bg-white",
            error && "border-red-400 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
          aria-hidden
        />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
