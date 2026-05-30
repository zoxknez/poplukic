"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { setQuotePrefill, scrollToQuoteForm } from "@/lib/quote-prefill";

type AddToQuoteButtonProps = {
  text: string;
  label?: string;
};

export function AddToQuoteButton({ text, label = "Dodaj u upit" }: AddToQuoteButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="w-full rounded-full border-dashed hover:border-solid"
      onClick={() => {
        setQuotePrefill(text);
        scrollToQuoteForm();
      }}
    >
      {label}
      <ArrowDown size={14} className="animate-bounce" style={{ animationDuration: "2s" }} />
    </Button>
  );
}
