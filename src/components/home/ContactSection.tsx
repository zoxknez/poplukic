import { ArrowUpRight } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { siteConfig } from "@/lib/site";
import { MaskLines, Reveal } from "@/components/motion";
import { OpenBadge } from "@/components/OpenBadge";
import { cn } from "@/lib/utils";

const rows = [
  { k: "Telefon", v: siteConfig.phone, href: siteConfig.phoneHref, big: true },
  { k: "Email", v: siteConfig.email, href: `mailto:${siteConfig.email}`, big: false },
  {
    k: "Pogon",
    v: siteConfig.address.full,
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`,
    big: false,
    external: true,
  },
];

type ContactSectionProps = {
  compact?: boolean;
};

export function ContactSection({ compact = false }: ContactSectionProps) {
  return (
    <section
      id="kontakt"
      className={cn("relative overflow-hidden bg-pine-100", compact ? "py-16 md:py-24" : "py-24 md:py-36")}
    >
      <div aria-hidden className="absolute inset-0 bg-blueprint-ink opacity-70" />
      <div className="relative mx-auto grid max-w-[90rem] gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-5">
          {!compact && (
            <Reveal className="flex items-center gap-4">
              <span className="eyebrow text-stamp">(06)</span>
              <span className="eyebrow text-ink/50">Kontakt</span>
            </Reveal>
          )}
          <h2 className="mt-6 font-display text-[clamp(3rem,7vw,6.5rem)] text-navy-900">
            <MaskLines
              lines={[
                "Pošaljite",
                <span key="s" className="accent-serif text-gold-700 text-[1.05em]">
                  specifikaciju.
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md leading-relaxed text-ink/65">
              Nakon prijema specifikacije proizvoda i količine, ponuda se priprema u roku od 24
              radna sata. Dostupan je i direktan telefonski kontakt.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 border-t border-ink/15">
            {rows.map((r) => (
              <a
                key={r.k}
                href={r.href}
                target={r.external ? "_blank" : undefined}
                rel={r.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-6 border-b border-ink/15 py-5"
              >
                <span className="min-w-0">
                  <span className="eyebrow block text-ink/45">{r.k}</span>
                  <span
                    className={cn(
                      "mt-1.5 block break-words text-navy-900 transition-colors group-hover:text-gold-700",
                      r.big ? "font-display text-4xl md:text-5xl" : "text-lg font-medium"
                    )}
                  >
                    {r.v}
                  </span>
                </span>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-ink/40 transition-transform duration-500 group-hover:rotate-45 group-hover:text-gold-700"
                />
              </a>
            ))}
            <div className="flex items-center justify-between gap-6 border-b border-ink/15 py-5">
              <span>
                <span className="eyebrow block text-ink/45">Radno vreme</span>
                <span className="mt-1.5 block text-lg font-medium text-navy-900">
                  {siteConfig.hours.label}
                </span>
                <span className="text-sm text-ink/50">{siteConfig.hours.sub}</span>
              </span>
              <OpenBadge />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 overflow-hidden rounded-lg ring-1 ring-ink/10">
            <iframe
              title="Mapa - POP-LUKIĆ"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address.full)}&output=embed`}
              className="h-56 w-full border-0 grayscale-[85%] sepia-[20%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <div className="lg:sticky lg:top-28">
            <QuoteForm formId="upit" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
