"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { CalculatorCard } from "@/components/ui/CalculatorCard";

const pallets = {
  light: { name: "Laka paleta", dynamic: "do 500 kg", dims: "Po meri" },
  standard: { name: "EUR paleta 1200×800", dynamic: "do 1.500 kg", dims: "1200 × 800 × 144 mm" },
  industrial: { name: "Industrijska 1200×1000", dynamic: "do 2.000 kg", dims: "1200 × 1000 × 144 mm" },
  heavy: { name: "Teška paleta po meri", dynamic: "2.500 kg+", dims: "Po specifikaciji" },
} as const;

type LoadType = "even" | "concentrated" | "point";

export function PalletCalculator() {
  const [weight, setWeight] = useState(1200);
  const [loadType, setLoadType] = useState<LoadType>("even");

  const recommendation = useMemo(() => {
    let w = weight;
    if (loadType === "point") w *= 1.4;
    if (loadType === "concentrated") w *= 1.25;
    if (w <= 500) return pallets.light;
    if (w <= 1400) return pallets.standard;
    if (w <= 2000) return pallets.industrial;
    return pallets.heavy;
  }, [weight, loadType]);

  const stress = Math.min(
    100,
    Math.round(
      (weight /
        (weight <= 500 ? 500 : weight <= 1500 ? 1500 : weight <= 2000 ? 2000 : 2500)) *
        100
    )
  );

  return (
    <CalculatorCard
      title="Pomoć pri odabiru palete"
      description="Unesite težinu tereta - dobijate preporuku modela."
    >
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-stone-700">Težina tereta</span>
          <span className="font-mono font-bold text-wood-800">{weight} kg</span>
        </div>
        <input
          type="range"
          min={100}
          max={2500}
          step={50}
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto md:max-w-none md:mx-0">
        {(
          [
            ["even", "Ravnomerno"],
            ["concentrated", "U centru"],
            ["point", "Tačkasto"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setLoadType(id)}
            className={cn(
              "py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all",
              loadType === id
                ? "bg-wood-100 border-wood-400 text-wood-900 shadow-sm"
                : "bg-white/60 border-stone-200 text-stone-600 hover:border-wood-300 hover:bg-wood-50/50"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-cream-dark/80 border border-wood-200/50 p-4">
        <div className="flex justify-between text-xs text-stone-500 mb-2">
          <span>Opterećenje konstrukcije</span>
          <span
            className={cn(
              "font-bold",
              stress > 80 ? "text-red-600" : stress > 50 ? "text-amber-600" : "text-forest-600"
            )}
          >
            {stress}%
          </span>
        </div>
        <div className="h-2.5 bg-stone-200/80 rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-300",
              stress > 80 ? "bg-red-500" : stress > 50 ? "bg-amber-500" : "bg-forest-500"
            )}
            style={{ width: `${stress}%` }}
          />
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-wood-50 to-wood-100/50 border border-wood-200/60 p-5 text-center md:text-left">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-wood-600 mb-1">
          Preporuka
        </p>
        <p className="font-serif text-lg font-bold text-wood-950">{recommendation.name}</p>
        <p className="text-sm text-stone-600 mt-2">
          {recommendation.dims} · Dinamička nosivost: {recommendation.dynamic}
        </p>
      </div>
    </CalculatorCard>
  );
}
