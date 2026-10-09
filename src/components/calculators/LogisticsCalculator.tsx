"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { CalculatorCard, RangeField, Readout, Segmented } from "@/components/ui/CalculatorCard";
import { AddToQuoteButton } from "@/components/calculators/AddToQuoteButton";
import {
  cargoRange,
  destinations,
  fillPercent,
  pickVehicle,
  type Cargo,
  type DestinationId,
} from "@/lib/logistics";

const cargoOptions = [
  ["pallets", "Palete"],
  ["crates", "Gajbice"],
] as const;

export function LogisticsCalculator() {
  const [cargo, setCargo] = useState<Cargo>("pallets");
  const [qty, setQty] = useState(cargoRange.pallets.initial);
  const [dest, setDest] = useState<DestinationId>("vojvodina");

  const range = cargoRange[cargo];
  const result = useMemo(() => pickVehicle(cargo, qty), [cargo, qty]);
  const fill = fillPercent(qty, result.cap);
  const destInfo = destinations.find((d) => d.id === dest)!;

  const quoteText = [
    "Preporuka iz kalkulatora transporta:",
    `- Teret: ${cargo === "pallets" ? "Palete" : "Gajbice"}`,
    `- Količina: ${qty} kom`,
    `- Destinacija: ${destInfo.name}`,
    `- Vozilo: ${result.vehicle}`,
    `- Popunjenost: ${fill}%`,
    `- Rok isporuke: ${destInfo.time}`,
  ].join("\n");

  return (
    <CalculatorCard title="Planiranje transporta" description="Procena vozila i roka isporuke.">
      <Segmented
        options={cargoOptions}
        value={cargo}
        onChange={(type) => {
          setCargo(type);
          setQty(cargoRange[type].initial);
        }}
      />

      <RangeField
        id="logistics-qty"
        label="Količina"
        unit="kom"
        min={range.min}
        max={range.max}
        step={range.step}
        value={qty}
        onChange={setQty}
      />

      <fieldset>
        <legend className="eyebrow mb-3 text-[0.625rem] text-white/45">Destinacija</legend>
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

      <Readout label="Procena">
        <p className="font-display text-3xl">{result.vehicle}</p>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gold-400 transition-[width] duration-500 ease-[var(--ease-out-expo)]"
            style={{ width: `${fill}%` }}
          />
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="eyebrow text-[0.6rem] text-white/40">Popunjenost</dt>
            <dd className="mt-1 font-mono text-white">{fill}%</dd>
          </div>
          <div>
            <dt className="eyebrow text-[0.6rem] text-white/40">Rok · {destInfo.name}</dt>
            <dd className="mt-1 font-mono text-white">{destInfo.time}</dd>
          </div>
        </dl>
      </Readout>

      <AddToQuoteButton text={quoteText} />
    </CalculatorCard>
  );
}
