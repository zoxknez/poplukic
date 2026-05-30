import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-stone-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "w-full rounded-xl border border-stone-200/90 bg-gradient-to-b from-white to-stone-50/50 px-4 py-3.5 text-stone-900 text-sm placeholder:text-stone-400 transition-all duration-200",
          "shadow-[inset_0_1px_2px_rgba(44,26,20,0.04)]",
          "hover:border-wood-300/80 hover:shadow-sm",
          "focus:outline-none focus:border-wood-500 focus:ring-2 focus:ring-wood-500/20 focus:bg-white",
          error && "border-red-400 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
