"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { cn } from "@/lib/utils";

type QuoteFormProps = {
  product?: string;
  defaultMessage?: string;
  title?: string;
  description?: string;
  compact?: boolean;
  bare?: boolean;
  premium?: boolean;
};

export function QuoteForm({
  product,
  defaultMessage = "",
  title = "Zatražite ponudu",
  description = "Odgovaramo u roku od 24 radna sata.",
  compact = false,
  bare = false,
  premium = false,
}: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const fullMessage = [
      product ? `Proizvod / usluga: ${product}` : null,
      phone ? `Telefon: ${phone}` : null,
      "",
      message || defaultMessage,
    ]
      .filter((line) => line !== null)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: fullMessage }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Slanje nije uspelo.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Došlo je do greške.");
    }
  }

  const formFields = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="name" label="Ime i prezime / firma *" required placeholder="Vaše ime ili naziv firme" />
      <Input
        name="email"
        type="email"
        label="Email *"
        required
        placeholder="vas@email.rs"
      />
      <Input name="phone" type="tel" label="Telefon" placeholder="+381 6X XXX XXXX" />
      <Textarea
        name="message"
        label="Poruka *"
        required
        rows={compact ? 4 : 5}
        defaultValue={defaultMessage}
        placeholder="Opišite proizvod, količinu, rok isporuke..."
      />

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          <AlertCircle size={16} className="shrink-0" />
          {errorMsg}
        </p>
      )}

      <Button type="submit" className="w-full rounded-full" disabled={status === "loading"}>
        {status === "loading" ? "Šaljem..." : "Pošalji upit"}
        <Send size={16} />
      </Button>
    </form>
  );

  if (status === "success") {
    const successBox = (
      <div className="rounded-2xl border border-forest-200 bg-gradient-to-br from-forest-50 to-white p-8 text-center">
        <CheckCircle className="w-12 h-12 text-forest-600 mx-auto mb-4" />
        <h3 className="font-serif text-xl font-bold text-wood-950 mb-2">Upit je poslat</h3>
        <p className="text-stone-600 text-sm">Hvala - javićemo vam se uskoro.</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-6 rounded-full"
          onClick={() => setStatus("idle")}
        >
          Pošalji novi upit
        </Button>
      </div>
    );

    if (premium) {
      return <div className="quote-form-shell"><div className="quote-form-inner p-6 md:p-8">{successBox}</div></div>;
    }
    return successBox;
  }

  if (premium) {
    return (
      <div className="quote-form-shell">
        <div className="quote-form-inner">
          <div className="bg-gradient-to-r from-wood-950 via-wood-900 to-wood-950 px-6 py-5 md:px-8 md:py-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-wood-300 mb-2">
              <MessageCircle size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Brzi upit</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-white">{title}</h3>
            <p className="text-sm text-stone-400 mt-1">{description}</p>
          </div>
          <div className="p-6 md:p-8 lg:p-10">{formFields}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        bare
          ? ""
          : compact
            ? ""
            : "rounded-3xl border border-stone-200/80 bg-white p-6 md:p-8 shadow-wood-md panel-warm"
      )}
    >
      {!compact && !bare && (
        <div className="mb-6 pb-6 border-b border-stone-200/80">
          <h3 className="font-serif text-xl font-bold text-wood-950">{title}</h3>
          <p className="text-stone-500 text-sm mt-1">{description}</p>
        </div>
      )}
      {formFields}
    </div>
  );
}
