import { Reveal } from "@/components/motion";

type SpecRow = { label: string; value: string };

/** Tehnički list (datasheet) sa specifikacijama. */
export function SpecTable({ title, rows }: { title?: string; rows: SpecRow[] }) {
  return (
    <Reveal className="overflow-hidden rounded-xl border border-ink/10 bg-pine-50">
      <div className="flex items-center justify-between gap-4 bg-navy-900 px-6 py-4 text-white md:px-8">
        <h3 className="font-display text-2xl md:text-3xl">{title ?? "Specifikacija"}</h3>
        <span className="eyebrow text-[0.625rem] text-gold-400">Tehnički list</span>
      </div>
      <dl>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className="grid gap-1 border-b border-dashed border-ink/15 px-6 py-4 last:border-b-0 sm:grid-cols-[2.5rem_minmax(0,14rem)_1fr] sm:items-baseline sm:gap-4 md:px-8"
          >
            <span className="hidden font-mono text-[0.625rem] text-ink/35 sm:block">
              {String(i + 1).padStart(2, "0")}
            </span>
            <dt className="eyebrow text-[0.625rem] text-ink/50">{row.label}</dt>
            <dd className="font-medium text-navy-900">{row.value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
