"use client";

import { useMemo, useState } from "react";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
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
    <CalculatorCard
      title="Vlažnost drveta"
      description="Podesite procenat vlage da vidite namenu i rizik."
      accent="amber"
    >
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-stone-700">Vlažnost</span>
          <span className="font-mono font-bold text-wood-800">{humidity}%</span>
        </div>
        <input
          type="range"
          min={6}
          max={50}
          value={humidity}
          onChange={(e) => setHumidity(Number(e.target.value))}
          aria-label="Vlažnost drveta u procentima"
          aria-valuemin={6}
          aria-valuemax={50}
          aria-valuenow={humidity}
        />
      </div>

      <div className="insight-panel insight-panel-amber text-center md:text-left space-y-3 text-sm">
        <p className="font-serif font-bold text-lg text-wood-950">{active.title}</p>
        <p>
          <span className="text-stone-500">Pogodno za: </span>
          <span className="text-stone-700">{active.use}</span>
        </p>
        <p>
          <span className="text-stone-500">Rizik deformacije: </span>
          <strong className="text-wood-900">{active.risk}</strong>
        </p>
      </div>

      <AddToQuoteButton text={quoteText} />
    </CalculatorCard>
  );
}
