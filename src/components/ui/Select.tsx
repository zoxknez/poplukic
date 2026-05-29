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
            "form-select w-full appearance-none rounded-xl border border-stone-200 bg-white px-4 py-3 pr-10 text-stone-900 text-sm transition-all cursor-pointer",
            "hover:border-stone-300 hover:shadow-sm",
            "focus:outline-none focus:border-wood-500 focus:ring-2 focus:ring-wood-500/20",
            error && "border-red-400 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
          aria-hidden
        />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
