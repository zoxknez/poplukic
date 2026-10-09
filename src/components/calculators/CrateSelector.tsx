"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CalculatorCard, Readout } from "@/components/ui/CalculatorCard";
import { AddToQuoteButton } from "@/components/calculators/AddToQuoteButton";

const fruits = {
  apple: { name: "Jabuke", crate: "Dvoredna gajbica", dims: "500 × 300 × 220 mm", weight: "10-12 kg" },
  peach: { name: "Breskve", crate: "Jednoredna gajbica", dims: "500 × 300 × 120 mm", weight: "5-7 kg" },
  berry: { name: "Bobice", crate: "Plitki holandez", dims: "400 × 300 × 80 mm", weight: "2,5-3,5 kg" },
  plum: { name: "Šljive", crate: "Holandez", dims: "500 × 300 × 150 mm", weight: "7-8,5 kg" },
  tomato: { name: "Paradajz", crate: "Duboki holandez", dims: "600 × 400 × 200 mm", weight: "12-14 kg" },
} as const;

type FruitId = keyof typeof fruits;

export function CrateSelector() {
  const [selected, setSelected] = useState<FruitId>("apple");
  const info = fruits[selected];

  const quoteText = [
    "Preporuka iz kalkulatora gajbica:",
    `- Kultura: ${info.name}`,
    `- Gajbica: ${info.crate}`,
    `- Dimenzije: ${info.dims}`,
    `- Neto težina: ${info.weight}`,
  ].join("\n");

  return (
    <CalculatorCard title="Gajbica po plodu" description="Izaberite kulturu za preporučenu ambalažu.">
      <div className="flex flex-wrap gap-2">
        {(Object.keys(fruits) as FruitId[]).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setSelected(id)}
            aria-pressed={selected === id}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              selected === id
                ? "border-gold-400 bg-gold-400 text-navy-950"
                : "border-white/15 text-white/65 hover:border-white/35 hover:text-white"
            )}
          >
            {fruits[id].name}
          </button>
        ))}
      </div>

      <Readout label="Preporučeno">
        <p className="font-display text-3xl">{info.crate}</p>
        <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-white/10 pt-4 text-sm">
          <div>
            <dt className="eyebrow text-[0.6rem] text-white/40">Dimenzije</dt>
            <dd className="mt-1 font-mono text-white">{info.dims}</dd>
          </div>
          <div>
            <dt className="eyebrow text-[0.6rem] text-white/40">Neto težina</dt>
            <dd className="mt-1 font-mono text-white">{info.weight}</dd>
          </div>
        </dl>
      </Readout>

      <AddToQuoteButton text={quoteText} />
    </CalculatorCard>
  );
}
