import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { siteConfig } from "@/lib/site";

const contactItems = [
  {
    icon: MapPin,
    label: "Adresa pogona",
    value: siteConfig.address.full,
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`,
    external: true,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    icon: Clock,
    label: "Radno vreme",
    value: "Pon-Pet 07:00-16:00",
    sub: "Subota po dogovoru",
    href: null,
    external: false,
  },
];

type ContactSectionProps = {
  compact?: boolean;
};

export function ContactSection({ compact = false }: ContactSectionProps) {
  return (
    <section
      id="kontakt"
      className={`relative overflow-hidden ${compact ? "py-12 md:py-16" : "py-20 md:py-28 lg:py-32"}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-dark via-[#ebe4d8] to-cream" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-wood-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[min(520px,55vw)] h-[min(520px,55vw)] bg-forest-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grain-overlay opacity-[0.3] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left - info */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="section-intro max-w-none lg:max-w-2xl">
              <div className="section-eyebrow">
                <span className="section-eyebrow-line bg-wood-500" aria-hidden />
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-wood-700">
                  Kontakt
                </p>
                <span className="section-eyebrow-line bg-wood-500 lg:hidden" aria-hidden />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-wood-950 tracking-tight leading-[1.12] text-balance">
                Započnimo
                <span className="block font-bold">saradnju</span>
              </h2>
              <p className="mt-5 text-stone-700 leading-relaxed max-w-md mx-auto lg:mx-0">
                Pošaljite specifikaciju proizvoda i količinu - pripremićemo ponudu u roku od 24
                radna sata. Možete nas i direktno pozvati.
              </p>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-lg mx-auto lg:max-w-none lg:mx-0 w-full">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-wood-100/80 border border-wood-200/60 text-wood-700 mb-4 mx-auto sm:mx-0">
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-wood-950 leading-snug">
                      {item.value}
                    </p>
                    {"sub" in item && item.sub && (
                      <p className="text-xs text-stone-500 mt-0.5">{item.sub}</p>
                    )}
                  </>
                );

                const cardClass =
                  "panel-warm block rounded-2xl border border-wood-200/50 p-5 transition-all duration-300 hover:-translate-y-0.5 h-full text-center sm:text-left";

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className={cardClass}
                    >
                      {inner}
                    </a>
                  );
                }

                return (
                  <div key={item.label} className={cardClass}>
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Map + image accent */}
            <div className="rounded-3xl overflow-hidden border border-wood-200/50 shadow-wood-lg max-w-lg mx-auto lg:max-w-none lg:mx-0 w-full">
              <div className="relative h-40">
                <Image
                  src="/images/transport.png"
                  alt="Logistika POP-LUKIĆ"
                  fill
                  className="object-cover"
                  sizes="500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-950/80 via-wood-950/30 to-transparent" />
                <p className="absolute bottom-4 inset-x-0 text-center text-white text-sm font-medium px-4">
                  Banat · {siteConfig.address.city}
                </p>
              </div>
              <div className="h-44 bg-stone-100">
                <iframe
                  title="Mapa - POP-LUKIĆ"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address.full)}&output=embed`}
                  className="w-full h-full border-0 grayscale-[30%] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <Link
              href="/o-nama"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-wood-800 hover:text-wood-600 transition-colors group mx-auto lg:mx-0"
            >
              Više o kompaniji
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Right - form */}
          <div className="lg:col-span-7 w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">
            <QuoteForm premium />

            {/* Trust row */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { v: "24h", l: "Odgovor na upit" },
                { v: "100%", l: "Sertifikovano" },
                { v: "2005.", l: "Od godine" },
              ].map((t) => (
                <div
                  key={t.l}
                  className="rounded-2xl bg-white/50 backdrop-blur-sm border border-white/80 px-3 py-3 text-center"
                >
                  <p className="font-serif text-lg font-bold text-wood-950">{t.v}</p>
                  <p className="text-[10px] uppercase tracking-wider text-stone-500 mt-0.5">
                    {t.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
