"use client";

import { useOpenStatus } from "@/lib/hours";
import { cn } from "@/lib/utils";

export function OpenBadge({ className }: { className?: string }) {
  const status = useOpenStatus();
  return (
    <span
      className={cn(
        "eyebrow inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-[0.625rem]",
        !status && "border-ink/15 text-ink/40",
        status?.open && "border-emerald-700/30 bg-emerald-50 text-emerald-800",
        status && !status.open && "border-stamp/30 bg-stamp/5 text-stamp",
        className
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          !status ? "bg-ink/30" : status.open ? "bg-emerald-600" : "bg-stamp"
        )}
      />
      {status ? status.label : "Radno vreme"}
    </span>
  );
}
