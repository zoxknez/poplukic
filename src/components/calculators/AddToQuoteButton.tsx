"use client";

import { ArrowDownRight } from "lucide-react";
import { setQuotePrefill, scrollToQuoteForm } from "@/lib/quote-prefill";

type AddToQuoteButtonProps = {
  text: string;
  label?: string;
};

export function AddToQuoteButton({ text, label = "Dodaj u upit" }: AddToQuoteButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        setQuotePrefill(text);
        scrollToQuoteForm();
      }}
      className="group flex w-full items-center justify-between rounded-full border border-dashed border-gold-400/60 px-6 py-3.5 text-sm font-semibold text-gold-200 transition hover:border-solid hover:bg-gold-400 hover:text-navy-950"
    >
      {label}
      <ArrowDownRight size={16} className="transition-transform group-hover:translate-y-0.5" />
    </button>
  );
}
