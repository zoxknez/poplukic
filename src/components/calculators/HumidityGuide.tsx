"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { CalculatorCard, RangeField, Readout } from "@/components/ui/CalculatorCard";
import { AddToQuoteButton } from "@/components/calculators/AddToQuoteButton";

const ranges = [
  { min: 6, max: 10, title: "KD sušena (8-10%)", use: "Nameštaj, parket, unutrašnja stolarija", risk: "Minimalan" },
  { min: 11, max: 15, title: "Vazdušno sušena (AD)", use: "Prozori, fasade, podovi", risk: "Nizak" },
  { min: 16, max: 20, title: "Građevinska", use: "Krovne konstrukcije, grede", risk: "Umeren" },
  { min: 21, max: 50, title: "Sveža seča", use: "Oplate, jednokratna ambalaža", risk: "Visok - obavezno sušenje" },
];

export function HumidityGuide() {
  const [humidity, setHumidity] = useState(12);

  const active = useMemo(
    () => ranges.find((r) => humidity >= r.min && humidity <= r.max) ?? ranges[ranges.length - 1],
    [humidity]
  );

  const quoteText = [
    "Preporuka iz vodiča za vlažnost drveta:",
    `- Vlažnost: ${humidity}%`,
    `- Kategorija: ${active.title}`,
    `- Pogodno za: ${active.use}`,
    `- Rizik deformacije: ${active.risk}`,
  ].join("\n");

  return (
    <CalculatorCard title="Vlažnost drveta" description="Podesite procenat vlage da vidite namenu i rizik.">
      <RangeField
        id="humidity"
        label="Vlažnost"
        unit="%"
        min={6}
        max={50}
        value={humidity}
        onChange={setHumidity}
      />

      <div className="grid grid-cols-4 gap-1.5" aria-hidden>
        {ranges.map((r) => (
          <div key={r.title}>
            <span
              className={cn(
                "block h-1 rounded-full transition-colors duration-300",
                r === active ? "bg-gold-400" : "bg-white/12"
              )}
            />
            <span
              className={cn(
                "mt-2 block font-mono text-[0.6rem] transition-colors",
                r === active ? "text-gold-300" : "text-white/35"
              )}
            >
              {r.min}-{r.max}%
            </span>
          </div>
        ))}
      </div>

      <Readout label="Kategorija">
        <p className="font-display text-3xl">{active.title}</p>
        <dl className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-white/45">Pogodno za</dt>
            <dd className="text-right text-white">{active.use}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-white/45">Rizik deformacije</dt>
            <dd className="text-right font-semibold text-gold-200">{active.risk}</dd>
          </div>
        </dl>
      </Readout>

      <AddToQuoteButton text={quoteText} />
    </CalculatorCard>
  );
}
