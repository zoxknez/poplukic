"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { CalculatorCard, RangeField, Readout, Segmented } from "@/components/ui/CalculatorCard";
import { AddToQuoteButton } from "@/components/calculators/AddToQuoteButton";

const pallets = {
  light: { name: "Laka paleta", dynamic: "do 500 kg", dims: "Po meri" },
  standard: { name: "EUR paleta 1200×800", dynamic: "do 1.500 kg", dims: "1200 × 800 × 144 mm" },
  industrial: { name: "Industrijska 1200×1000", dynamic: "do 2.000 kg", dims: "1200 × 1000 × 144 mm" },
  heavy: { name: "Teška paleta po meri", dynamic: "2.500 kg+", dims: "Po specifikaciji" },
} as const;

type LoadType = "even" | "concentrated" | "point";

const loadOptions = [
  ["even", "Ravnomerno"],
  ["concentrated", "U centru"],
  ["point", "Tačkasto"],
] as const;

const loadFactor: Record<LoadType, number> = { even: 1, concentrated: 1.25, point: 1.4 };

export function PalletCalculator() {
  const [weight, setWeight] = useState(1200);
  const [loadType, setLoadType] = useState<LoadType>("even");

  const effectiveWeight = weight * loadFactor[loadType];

  const recommendation = useMemo(() => {
    if (effectiveWeight <= 500) return pallets.light;
    if (effectiveWeight <= 1400) return pallets.standard;
    if (effectiveWeight <= 2000) return pallets.industrial;
    return pallets.heavy;
  }, [effectiveWeight]);

  const capacity =
    effectiveWeight <= 500 ? 500 : effectiveWeight <= 1500 ? 1500 : effectiveWeight <= 2000 ? 2000 : 2500;
  const stress = Math.min(100, Math.round((effectiveWeight / capacity) * 100));
  const loadLabel = loadOptions.find(([id]) => id === loadType)![1];

  const quoteText = [
    "Preporuka iz kalkulatora paleta:",
    `- Model: ${recommendation.name}`,
    `- Dimenzije: ${recommendation.dims}`,
    `- Težina tereta: ${weight} kg (${loadLabel})`,
    `- Dinamička nosivost: ${recommendation.dynamic}`,
  ].join("\n");

  return (
    <CalculatorCard
      title="Odabir palete"
      description="Unesite težinu tereta i raspored opterećenja - dobijate preporuku modela."
    >
      <RangeField
        id="pallet-weight"
        label="Težina tereta"
        unit="kg"
        min={100}
        max={2500}
        step={50}
        value={weight}
        onChange={setWeight}
      />

      <div>
        <p className="eyebrow mb-3 text-[0.625rem] text-white/45">Raspored tereta</p>
        <Segmented options={loadOptions} value={loadType} onChange={setLoadType} />
      </div>

      <div>
        <div className="mb-2 flex justify-between font-mono text-[0.6875rem] text-white/45">
          <span>Opterećenje konstrukcije</span>
          <span
            className={cn(
              "font-semibold",
              stress > 80 ? "text-red-300" : stress > 50 ? "text-gold-300" : "text-emerald-300"
            )}
          >
            {stress}%
          </span>
        </div>
        <div className="flex h-2 gap-[3px]" aria-hidden>
          {Array.from({ length: 24 }, (_, i) => {
            const on = (i + 1) / 24 <= stress / 100;
            return (
              <span
                key={i}
                className={cn(
                  "flex-1 rounded-[1px] transition-colors duration-300",
                  !on ? "bg-white/10" : stress > 80 ? "bg-red-400" : stress > 50 ? "bg-gold-400" : "bg-emerald-400"
                )}
              />
            );
          })}
        </div>
      </div>

      <Readout label="Preporuka">
        <p className="font-display text-3xl">{recommendation.name}</p>
        <p className="mt-1 text-sm text-white/60">
          {recommendation.dims} · Dinamička nosivost {recommendation.dynamic}
        </p>
      </Readout>

      <AddToQuoteButton text={quoteText} />
    </CalculatorCard>
  );
}
