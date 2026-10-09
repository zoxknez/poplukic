import { cn } from "@/lib/utils";
import { FieldLabel, fieldClass } from "@/components/ui/Input";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
  const inputId = id ?? props.name;

  return (
    <div className="relative">
      {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
      <textarea
        id={inputId}
        className={cn(fieldClass, "min-h-[7.5rem] resize-y leading-relaxed", error && "border-stamp", className)}
        {...props}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gold-400 transition-transform duration-500 ease-[var(--ease-out-expo)] peer-focus:scale-x-100"
      />
      {error && <p className="mt-1 text-xs text-red-300">{error}</p>}
    </div>
  );
}
