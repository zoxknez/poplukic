"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { CalculatorCard } from "@/components/ui/CalculatorCard";
import { Select } from "@/components/ui/Select";

const destinations = [
  { id: "vojvodina", name: "Vojvodina", time: "12–24 h" },
  { id: "beograd", name: "Beograd", time: "24 h" },
  { id: "central", name: "Centralna Srbija", time: "24–48 h" },
  { id: "south", name: "Jug Srbije", time: "48 h" },
  { id: "eu", name: "Izvoz / EU", time: "48–72 h + carina" },
];

export function LogisticsCalculator() {
  const [cargo, setCargo] = useState<"pallets" | "crates">("pallets");
  const [qty, setQty] = useState(24);
  const [dest, setDest] = useState("vojvodina");

  const result = useMemo(() => {
    if (cargo === "pallets") {
      if (qty <= 15) return { vehicle: "Solo kamion (7,5 t)", cap: 15 };
      if (qty <= 33) return { vehicle: "Mega šleper (24 t)", cap: 33 };
      return { vehicle: "Šleper + prikolica", cap: 66 };
    }
    if (qty <= 1200) return { vehicle: "Solo kamion", cap: 1200 };
    if (qty <= 3000) return { vehicle: "Standardni šleper", cap: 3000 };
    return { vehicle: "Mega šleper", cap: 4500 };
  }, [cargo, qty]);

  const fill = Math.min(100, Math.round((qty / result.cap) * 100));
  const destInfo = destinations.find((d) => d.id === dest)!;

  return (
    <CalculatorCard
      title="Planiranje transporta"
      description="Procena vozila i roka isporuke."
      accent="amber"
    >
      <div className="grid grid-cols-2 gap-2">
        {(["pallets", "crates"] as const).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => {
              setCargo(type);
              setQty(type === "pallets" ? 24 : 1000);
            }}
            className={cn(
              "py-2.5 rounded-xl text-sm font-semibold border transition-all",
              cargo === type
                ? "bg-wood-100 border-wood-400 text-wood-900 shadow-sm"
                : "bg-white/60 border-stone-200 text-stone-600 hover:border-wood-300"
            )}
          >
            {type === "pallets" ? "Palete" : "Gajbice"}
          </button>
        ))}
      </div>

      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-stone-700">Količina</span>
          <span className="font-mono font-bold text-wood-800">{qty} kom</span>
        </div>
        <input
          type="range"
          min={cargo === "pallets" ? 1 : 100}
          max={cargo === "pallets" ? 76 : 5000}
          step={cargo === "pallets" ? 1 : 100}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        />
      </div>

      <Select
        label="Destinacija"
        value={dest}
        onChange={(e) => setDest(e.target.value)}
      >
        {destinations.map((d) => (
          <option key={d.id} value={d.id}>
            {d.name} — {d.time}
          </option>
        ))}
      </Select>

      <div className="rounded-2xl bg-gradient-to-br from-wood-50 to-wood-100/50 border border-wood-200/60 p-5 space-y-2.5 text-sm text-center md:text-left">
        <p>
          <span className="text-stone-500">Vozilo: </span>
          <strong className="text-wood-950">{result.vehicle}</strong>
        </p>
        <p>
          <span className="text-stone-500">Popunjenost: </span>
          <strong className="text-wood-950">{fill}%</strong>
        </p>
        <p>
          <span className="text-stone-500">Rok ({destInfo.name}): </span>
          <strong className="text-wood-950">{destInfo.time}</strong>
        </p>
      </div>
    </CalculatorCard>
  );
}
