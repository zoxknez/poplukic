export const destinations = [
  { id: "vojvodina", name: "Vojvodina", time: "12-24 h" },
  { id: "beograd", name: "Beograd", time: "24 h" },
  { id: "central", name: "Centralna Srbija", time: "24-48 h" },
  { id: "south", name: "Jug Srbije", time: "48 h" },
  { id: "eu", name: "Izvoz / EU", time: "48-72 h + carina" },
] as const;

export type Cargo = "pallets" | "crates";
export type DestinationId = (typeof destinations)[number]["id"];

export const cargoRange: Record<Cargo, { min: number; max: number; step: number; initial: number }> = {
  pallets: { min: 1, max: 66, step: 1, initial: 24 },
  crates: { min: 100, max: 5000, step: 100, initial: 1000 },
};

export type Vehicle = {
  vehicle: string;
  cap: number;
  /** broj paletnih mesta po jedinici i broj jedinica (kamion + prikolica) */
  cols: number;
  units: 1 | 2;
};

export function pickVehicle(cargo: Cargo, qty: number): Vehicle {
  if (cargo === "pallets") {
    if (qty <= 15) return { vehicle: "Solo kamion (7,5 t)", cap: 15, cols: 5, units: 1 };
    if (qty <= 33) return { vehicle: "Mega šleper (24 t)", cap: 33, cols: 11, units: 1 };
    return { vehicle: "Šleper + prikolica", cap: 66, cols: 11, units: 2 };
  }
  if (qty <= 1200) return { vehicle: "Solo kamion", cap: 1200, cols: 5, units: 1 };
  if (qty <= 3000) return { vehicle: "Standardni šleper", cap: 3000, cols: 11, units: 1 };
  return { vehicle: "Mega šleper", cap: 4500, cols: 11, units: 1 };
}

export function fillPercent(qty: number, cap: number) {
  return Math.min(100, Math.round((qty / cap) * 100));
}
