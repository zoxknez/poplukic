import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

type CalculatorCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

/** Interaktivni alat - "instrument tabla" u teget boji. */
export function CalculatorCard({ title, description, children, className }: CalculatorCardProps) {
  return (
    <Reveal
      className={cn(
        "relative isolate overflow-hidden rounded-xl bg-navy-900 text-white shadow-[0_30px_60px_-30px_rgb(7_12_28/0.6)]",
        className
      )}
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-blueprint opacity-60" />
      <div className="flex items-center justify-between border-b border-dashed border-white/15 px-6 py-3 md:px-8">
        <span className="eyebrow text-[0.625rem] text-gold-400">Alat · kalkulator</span>
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-gold-400" />
        </span>
      </div>
      <div className="space-y-7 p-6 md:p-8">
        <div>
          <h3 className="font-display text-3xl md:text-4xl">{title}</h3>
          {description && <p className="mt-2 text-sm leading-relaxed text-white/55">{description}</p>}
        </div>
        {children}
      </div>
    </Reveal>
  );
}

/** Rezultat kalkulatora. */
export function Readout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-gold-400/30 bg-gold-400/[0.07] p-5">
      <p className="eyebrow text-[0.625rem] text-gold-400">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export function Segmented<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly (readonly [T, string])[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div
      className="grid gap-1 rounded-full border border-white/12 p-1"
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map(([id, label]) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          aria-pressed={value === id}
          className={cn(
            "rounded-full px-3 py-2.5 text-xs font-semibold transition-colors sm:text-sm",
            value === id ? "bg-gold-400 text-navy-950" : "text-white/60 hover:text-white"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function RangeField({
  id,
  label,
  value,
  unit,
  min,
  max,
  step = 1,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-4 flex items-end justify-between">
        <label htmlFor={id} className="eyebrow text-[0.625rem] text-white/45">
          {label}
        </label>
        <span className="font-display text-4xl leading-none text-gold-300 tabular-nums">
          {value.toLocaleString("de-DE")}
          <span className="ml-1 font-mono text-xs text-white/40">{unit}</span>
        </span>
      </div>
      <input
        id={id}
        type="range"
        className="range-dark"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--fill": `${((value - min) / (max - min)) * 100}%` } as React.CSSProperties}
      />
    </div>
  );
}
