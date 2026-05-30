import { cn } from "@/lib/utils";

type SpecRow = { label: string; value: string };

export function SpecTable({ title, rows }: { title?: string; rows: SpecRow[] }) {
  return (
    <div className="panel-warm relative rounded-3xl border border-wood-200/50 overflow-hidden shadow-wood-sm">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-wood-600 via-wood-400 to-wood-200" />
      {title && (
        <div className="px-6 md:px-8 py-5 border-b border-wood-200/40 bg-gradient-to-r from-wood-50/90 via-white/50 to-transparent text-center md:text-left">
          <h3 className="font-serif text-lg md:text-xl font-bold text-wood-950 title-accent inline-block">
            {title}
          </h3>
        </div>
      )}

      <div className="hidden sm:block">
        <table className="w-full text-sm">
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={cn(
                  "transition-colors hover:bg-wood-50/50",
                  i % 2 === 0 ? "bg-white/60" : "bg-wood-50/25"
                )}
              >
                <th className="text-left font-medium text-stone-500 px-6 md:px-8 py-4 w-2/5 align-top text-xs uppercase tracking-wider">
                  {row.label}
                </th>
                <td className="px-6 md:px-8 py-4 text-wood-950 font-semibold">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dl className="sm:hidden divide-y divide-wood-200/40">
        {rows.map((row) => (
          <div key={row.label} className="px-5 py-4 bg-white/40 even:bg-wood-50/30">
            <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
              {row.label}
            </dt>
            <dd className="mt-1.5 text-sm font-semibold text-wood-950">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
