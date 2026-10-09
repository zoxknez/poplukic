const items = [
  "EUR palete",
  "Industrijske palete",
  "Drvene gajbice",
  "Rezana građa · topola i hrast",
  "ISPM 15 termički tretman",
  "FSC™ C132511",
  "Šleperi do 24 t",
  "15.000 kom / dan",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const list = [...items, ...items];
  return (
    <div className="flex w-max" aria-hidden>
      <ul
        className={`flex shrink-0 items-center gap-10 pr-10 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} motion-reduce:animate-none`}
      >
        {list.map((item, i) => (
          <li key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-none">
              {item}
            </span>
            <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor">
              <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Ukrštene trake - zlatna i teget - kao trake za vezivanje tereta. */
export function Ticker() {
  return (
    <section aria-label="Asortiman ukratko" className="relative z-10 -mt-px overflow-hidden bg-paper py-10 md:py-14">
      <p className="sr-only">{items.join(", ")}</p>
      <div className="relative -mx-6">
        <div className="-rotate-[1.6deg] bg-navy-900 py-3 text-white/90 md:py-4">
          <Row reverse />
        </div>
        <div className="-mt-3 rotate-[1.4deg] bg-gold-400 py-3 text-navy-950 shadow-[0_20px_40px_-20px_rgb(7_12_28/0.5)] md:py-4">
          <Row />
        </div>
      </div>
    </section>
  );
}
