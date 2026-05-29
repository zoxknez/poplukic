type SpecRow = { label: string; value: string };

export function SpecTable({ title, rows }: { title?: string; rows: SpecRow[] }) {
  return (
    <div className="panel-warm rounded-3xl border border-wood-200/50 overflow-hidden shadow-wood-sm">
      {title && (
        <div className="px-6 py-4 border-b border-wood-200/40 bg-gradient-to-r from-wood-50/80 to-transparent text-center md:text-left">
          <h3 className="font-serif text-lg font-bold text-wood-950">{title}</h3>
        </div>
      )}
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "bg-white/50" : "bg-wood-50/30"}
            >
              <th className="text-left font-medium text-stone-500 px-6 py-4 w-2/5 align-top">
                {row.label}
              </th>
              <td className="px-6 py-4 text-wood-950 font-medium">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
