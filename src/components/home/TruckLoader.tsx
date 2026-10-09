"use client";

import { useMemo, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import {
  cargoRange,
  destinations,
  fillPercent,
  pickVehicle,
  type Cargo,
  type DestinationId,
} from "@/lib/logistics";
import { setQuotePrefill, scrollToQuoteForm } from "@/lib/quote-prefill";
import { MaskLines, Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

const SLOT_W = 60;
const SLOT_H = 40;
const PAD = 8;
const CAB = 78;

function TrailerSvg({
  cols,
  filled,
  withCab,
  label,
}: {
  cols: number;
  filled: number;
  withCab: boolean;
  label: string;
}) {
  const bedW = cols * SLOT_W + PAD * 2;
  const bedH = 3 * SLOT_H + PAD * 2;
  const offset = withCab ? CAB + 10 : 22;
  const width = offset + bedW + 4;

  return (
    <svg viewBox={`0 0 ${width} ${bedH + 26}`} className="w-full" role="img" aria-label={label}>
      {/* točkovi */}
      {[0.12, 0.2, 0.82, 0.9].map((f) => (
        <rect key={f} x={offset + bedW * f} y={bedH + 4} width={34} height={8} rx={3} fill="#070c1c" />
      ))}

      {withCab ? (
        <g>
          <rect x={0} y={10} width={CAB} height={bedH - 20} rx={14} fill="#222e52" stroke="#d8b46a" strokeOpacity={0.5} />
          <rect x={10} y={22} width={22} height={bedH - 44} rx={6} fill="#63719e" opacity={0.5} />
          <rect x={CAB - 4} y={bedH / 2 - 6} width={14} height={12} fill="#222e52" />
          <rect x={6} y={bedH + 4} width={30} height={8} rx={3} fill="#070c1c" />
        </g>
      ) : (
        <line x1={0} y1={bedH / 2} x2={22} y2={bedH / 2} stroke="#d8b46a" strokeOpacity={0.5} strokeWidth={3} />
      )}

      {/* prikolica */}
      <rect
        x={offset}
        y={0}
        width={bedW}
        height={bedH}
        rx={6}
        fill="#0d152c"
        stroke="#d8b46a"
        strokeOpacity={0.55}
        strokeWidth={1.5}
      />

      {Array.from({ length: cols * 3 }, (_, i) => {
        const col = Math.floor(i / 3);
        const row = i % 3;
        const x = offset + PAD + col * SLOT_W + 3;
        const y = PAD + row * SLOT_H + 3;
        const on = i < filled;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={SLOT_W - 6}
              height={SLOT_H - 6}
              rx={2}
              fill="none"
              stroke="#ffffff"
              strokeOpacity={0.12}
              strokeDasharray="3 3"
            />
            <g
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                transform: on ? "scale(1)" : "scale(0.4)",
                opacity: on ? 1 : 0,
                transition: `transform 450ms cubic-bezier(0.22,1,0.36,1) ${col * 18}ms, opacity 300ms ease ${col * 18}ms`,
              }}
            >
              <rect x={x} y={y} width={SLOT_W - 6} height={SLOT_H - 6} rx={2} fill="#dfc8a0" />
              {[0.18, 0.5, 0.82].map((f) => (
                <rect
                  key={f}
                  x={x + 2}
                  y={y + (SLOT_H - 6) * f - 2.5}
                  width={SLOT_W - 10}
                  height={5}
                  fill="#b58a55"
                  opacity={0.55}
                />
              ))}
            </g>
          </g>
        );
      })}
    </svg>
  );
}

export function TruckLoader() {
  const [cargo, setCargo] = useState<Cargo>("pallets");
  const [qty, setQty] = useState(cargoRange.pallets.initial);
  const [dest, setDest] = useState<DestinationId>("vojvodina");

  const range = cargoRange[cargo];
  const v = useMemo(() => pickVehicle(cargo, qty), [cargo, qty]);
  const fill = fillPercent(qty, v.cap);
  const destInfo = destinations.find((d) => d.id === dest)!;
  const slotsPerUnit = v.cols * 3;
  const totalSlots = slotsPerUnit * v.units;
  const filled = cargo === "pallets" ? qty : Math.ceil((qty / v.cap) * totalSlots);

  const quoteText = [
    "Preporuka iz kalkulatora transporta:",
    `- Teret: ${cargo === "pallets" ? "Palete" : "Gajbice"}`,
    `- Količina: ${qty} kom`,
    `- Destinacija: ${destInfo.name}`,
    `- Vozilo: ${v.vehicle}`,
    `- Popunjenost: ${fill}%`,
    `- Rok isporuke: ${destInfo.time}`,
  ].join("\n");

  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <div aria-hidden className="absolute inset-0 -z-10 bg-blueprint opacity-70" />
      <div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-6 md:py-32 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal className="flex items-center gap-4">
              <span className="eyebrow text-gold-400">(04)</span>
              <span className="eyebrow text-white/50">Logistika · kalkulator</span>
            </Reveal>
            <h2 className="mt-6 font-display text-[clamp(2.75rem,7vw,6.5rem)]">
              <MaskLines
                lines={[
                  "Koliko staje",
                  <span key="u">
                    u <span className="accent-serif text-gold-300">jedan</span> šleper?
                  </span>,
                ]}
              />
            </h2>
          </div>
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="leading-relaxed text-white/60">
              Pomerite klizač i pogledajte kako se prikolica puni. Procena vozila i roka isporuke
              ide direktno u upit.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="mt-14 grid overflow-hidden rounded-xl border border-white/10 bg-navy-950/70 backdrop-blur md:mt-20 lg:grid-cols-[22rem_1fr]"
        >
          {/* Kontrole */}
          <div className="space-y-8 border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
            <div>
              <p className="eyebrow mb-3 text-white/40">Teret</p>
              <div className="grid grid-cols-2 rounded-full border border-white/12 p-1">
                {(["pallets", "crates"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setCargo(type);
                      setQty(cargoRange[type].initial);
                    }}
                    className={cn(
                      "rounded-full py-2.5 text-sm font-semibold transition-colors",
                      cargo === type ? "bg-gold-400 text-navy-950" : "text-white/60 hover:text-white"
                    )}
                    aria-pressed={cargo === type}
                  >
                    {type === "pallets" ? "Palete" : "Gajbice"}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-end justify-between">
                <label htmlFor="truck-qty" className="eyebrow text-white/40">
                  Količina
                </label>
                <span className="font-display text-5xl leading-none text-gold-300 tabular-nums">
                  {qty.toLocaleString("de-DE")}
                  <span className="ml-1 font-mono text-xs text-white/40">kom</span>
                </span>
              </div>
              <input
                id="truck-qty"
                type="range"
                className="range-dark"
                min={range.min}
                max={range.max}
                step={range.step}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                style={{ "--fill": `${((qty - range.min) / (range.max - range.min)) * 100}%` } as React.CSSProperties}
              />
              <div className="mt-2 flex justify-between font-mono text-[0.625rem] text-white/30">
                <span>{range.min}</span>
                <span>{range.max.toLocaleString("de-DE")}</span>
              </div>
            </div>

            <fieldset>
              <legend className="eyebrow mb-3 text-white/40">Destinacija</legend>
              <div className="flex flex-wrap gap-2">
                {destinations.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDest(d.id)}
                    aria-pressed={dest === d.id}
                    className={cn(
                      "rounded-full border px-3.5 py-2 text-xs font-medium transition-colors",
                      dest === d.id
                        ? "border-gold-400 bg-gold-400/10 text-gold-200"
                        : "border-white/12 text-white/55 hover:border-white/30 hover:text-white"
                    )}
                  >
                    {d.name}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Vizualizacija */}
          <div className="flex flex-col p-6 md:p-8">
            <div className="flex flex-1 flex-col justify-center gap-6 py-4">
              {Array.from({ length: v.units }, (_, u) => (
                <div key={u}>
                  <p className="eyebrow mb-2 text-[0.6rem] text-white/35">
                    {u === 0 ? v.vehicle : "Prikolica"} · {slotsPerUnit} mesta
                  </p>
                  <TrailerSvg
                    cols={v.cols}
                    withCab={u === 0}
                    filled={Math.max(0, Math.min(slotsPerUnit, filled - u * slotsPerUnit))}
                    label={`${v.vehicle}, popunjeno ${fill}%`}
                  />
                </div>
              ))}
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-4">
              {[
                ["Vozilo", v.vehicle],
                ["Popunjenost", `${fill}%`],
                ["Destinacija", destInfo.name],
                ["Rok", destInfo.time],
              ].map(([k, val]) => (
                <div key={k} className="bg-navy-950 px-4 py-3.5">
                  <dt className="eyebrow text-[0.6rem] text-white/35">{k}</dt>
                  <dd className="mt-1 text-sm font-semibold text-white" aria-live="polite">
                    {val}
                  </dd>
                </div>
              ))}
            </dl>

            <button
              type="button"
              onClick={() => {
                setQuotePrefill(quoteText);
                scrollToQuoteForm();
              }}
              className="group mt-6 inline-flex items-center justify-between gap-3 self-stretch rounded-full border border-dashed border-gold-400/60 px-6 py-3.5 text-sm font-semibold text-gold-200 transition hover:border-solid hover:bg-gold-400 hover:text-navy-950 sm:self-end"
            >
              Dodaj procenu u upit
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
