"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
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
    <CalculatorCard
      title="Gajbica po vrsti ploda"
      description="Izaberite kulturu za preporučenu ambalažu."
      accent="forest"
    >
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {(Object.keys(fruits) as FruitId[]).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setSelected(id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-all",
              selected === id
                ? "bg-forest-100 border-forest-400 text-forest-900 shadow-sm"
                : "bg-white/60 border-stone-200 text-stone-600 hover:border-forest-300 hover:bg-forest-50/40"
            )}
          >
            {fruits[id].name}
          </button>
        ))}
      </div>

      <div className="insight-panel insight-panel-forest text-center md:text-left">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest-700">
          Preporučeno
        </p>
        <p className="font-serif text-lg font-bold text-wood-950">{info.crate}</p>
        <dl className="grid grid-cols-2 gap-3 text-sm max-w-sm mx-auto md:mx-0">
          <div>
            <dt className="text-stone-500">Dimenzije</dt>
            <dd className="font-mono font-semibold text-wood-900 mt-0.5">{info.dims}</dd>
          </div>
          <div>
            <dt className="text-stone-500">Neto težina</dt>
            <dd className="font-semibold text-wood-900 mt-0.5">{info.weight}</dd>
          </div>
        </dl>
      </div>

      <AddToQuoteButton text={quoteText} />
    </CalculatorCard>
  );
}
