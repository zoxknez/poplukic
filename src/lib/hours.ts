"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

export type OpenStatus = {
  open: boolean;
  time: string;
  label: string;
};

function compute(): OpenStatus {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Belgrade",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekday = get("weekday");
  const hour = Number(get("hour"));
  const minute = get("minute");
  const isWeekday = !["Sat", "Sun"].includes(weekday);
  const { open: from, close: to } = siteConfig.hours;
  const open = isWeekday && hour >= from && hour < to;

  return {
    open,
    time: `${String(hour).padStart(2, "0")}:${minute}`,
    label: open
      ? `Otvoreno do ${to}:00`
      : isWeekday && hour < from
        ? `Otvara u 0${from}:00`
        : "Zatvoreno",
  };
}

/** Radno vreme pogona po beogradskom vremenu; null do hidratacije. */
export function useOpenStatus() {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    setStatus(compute());
    const id = window.setInterval(() => setStatus(compute()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
}
