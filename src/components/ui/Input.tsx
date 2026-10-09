import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const fieldClass =
  "peer block w-full rounded-none border-0 border-b border-white/15 bg-transparent px-0 pb-3 pt-2 text-[0.9375rem] text-white placeholder:text-white/25 transition-colors duration-300 hover:border-white/30 focus:border-gold-400 focus:outline-none focus:ring-0";

export function FieldLabel({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="eyebrow block text-[0.625rem] text-white/45">
      {children}
    </label>
  );
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="relative">
      {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
      <input id={inputId} className={cn(fieldClass, error && "border-stamp", className)} {...props} />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gold-400 transition-transform duration-500 ease-[var(--ease-out-expo)] peer-focus:scale-x-100"
      />
      {error && <p className="mt-1 text-xs text-red-300">{error}</p>}
    </div>
  );
}
