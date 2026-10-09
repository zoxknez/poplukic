"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowUpRight, Check, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { cn } from "@/lib/utils";
import { consumeQuotePrefill } from "@/lib/quote-prefill";

type QuoteFormProps = {
  product?: string;
  defaultMessage?: string;
  title?: string;
  description?: string;
  formId?: string;
  className?: string;
};

export function QuoteForm({
  product,
  defaultMessage = "",
  title = "Zahtev za ponudu",
  description = "Odgovor stiže u roku od 24 radna sata.",
  formId = "upit",
  className,
}: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState(defaultMessage);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const prefill = consumeQuotePrefill();
    if (prefill) setMessage(prefill);

    const handler = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (detail) {
        setMessage(detail);
        setStatus("idle");
        setFlash(true);
        window.setTimeout(() => setFlash(false), 1400);
      }
    };

    window.addEventListener("quote-prefill", handler);
    return () => window.removeEventListener("quote-prefill", handler);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const messageValue = String(data.get("message") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    const fullMessage = [
      product ? `Proizvod / usluga: ${product}` : null,
      phone ? `Telefon: ${phone}` : null,
      "",
      messageValue || defaultMessage,
    ]
      .filter((line) => line !== null)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: fullMessage,
          website,
          privacyAccepted,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Slanje nije uspelo.");
      }

      setStatus("success");
      setMessage(defaultMessage);
      setPrivacyAccepted(false);
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Došlo je do greške.");
    }
  }

  return (
    <div
      id={formId}
      className={cn(
        "relative isolate scroll-mt-24 overflow-hidden rounded-xl bg-navy-950 text-white shadow-[0_40px_80px_-30px_rgb(7_12_28/0.55)] ring-1 ring-white/10 transition-shadow duration-700",
        flash && "ring-2 ring-gold-400",
        className
      )}
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-blueprint opacity-60" />
      <div aria-hidden className="absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-[radial-gradient(circle,rgb(216_180_106/0.2),transparent_65%)]" />

      <div className="flex items-center justify-between border-b border-dashed border-white/15 px-6 py-3.5 md:px-8">
        <span className="eyebrow text-[0.625rem] text-gold-400">Brzi upit</span>
        <span className="eyebrow text-[0.625rem] text-white/40">Odgovor ≤ 24 h</span>
      </div>

      {status === "success" ? (
        <div className="flex flex-col items-center px-6 py-16 text-center md:px-8">
          <span className="flex size-16 items-center justify-center rounded-full bg-gold-400 text-navy-950">
            <Check size={30} strokeWidth={2.5} />
          </span>
          <h3 className="mt-6 font-display text-4xl">Upit je poslat</h3>
          <p className="mt-2 max-w-xs text-sm text-white/60">
            Upit je primljen. Ponuda stiže na navedenu email adresu u roku od 24 radna sata.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-8 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 transition hover:border-gold-400 hover:text-gold-300"
          >
            Novi upit
          </button>
        </div>
      ) : (
        <div className="px-6 pb-8 pt-7 md:px-8 md:pb-10">
          <h3 id={`${formId}-title`} className="font-display text-[2.5rem] md:text-5xl">
            {title}
          </h3>
          <p className="mt-2 text-sm text-white/55">{description}</p>
          {product && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-sm border border-gold-400/40 bg-gold-400/10 px-2.5 py-1 eyebrow text-[0.625rem] text-gold-200">
              Predmet · {product}
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-8 grid gap-7 md:grid-cols-2" aria-labelledby={`${formId}-title`}>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <Input name="name" label="Ime i prezime / firma *" required placeholder="Naziv firme ili ime" autoComplete="organization" />
            <Input name="email" type="email" label="Email *" required placeholder="primer@firma.rs" autoComplete="email" />
            <div className="md:col-span-2">
              <Input name="phone" type="tel" label="Telefon" placeholder="+381 6X XXX XXXX" autoComplete="tel" />
            </div>
            <div className="md:col-span-2">
              <Textarea
                name="message"
                label="Specifikacija *"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Proizvod, dimenzije, količina, rok isporuke..."
              />
            </div>

            <label className="flex cursor-pointer items-start gap-3 text-sm text-white/60 md:col-span-2">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="peer sr-only"
                required
              />
              <span
                aria-hidden
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-[4px] border border-white/25 transition peer-checked:border-gold-400 peer-checked:bg-gold-400 peer-checked:text-navy-950 peer-focus-visible:ring-2 peer-focus-visible:ring-gold-400 text-transparent"
              >
                <Check size={13} strokeWidth={3} />
              </span>
              <span>
                Saglasan/saglasna sam sa{" "}
                <Link href="/privacy" className="text-gold-300 underline-offset-4 hover:underline">
                  politikom privatnosti
                </Link>
                . *
              </span>
            </label>

            {status === "error" && (
              <p className="flex items-center gap-2 rounded-md border border-stamp/40 bg-stamp/15 px-4 py-3 text-sm text-red-200 md:col-span-2">
                <AlertCircle size={16} className="shrink-0" />
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex items-center justify-between rounded-full bg-gold-400 py-2 pl-7 pr-2 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 disabled:opacity-70 md:col-span-2"
            >
              {status === "loading" ? "Slanje..." : "Pošaljite upit"}
              <span className="flex size-10 items-center justify-center rounded-full bg-navy-950 text-gold-300 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45">
                {status === "loading" ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <ArrowUpRight size={18} />
                )}
              </span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
