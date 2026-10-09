import Image from "next/image";
import Link from "next/link";
import { MaskLines, Reveal } from "@/components/motion";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  label?: string;
  code?: string;
  title: string;
  /** Opcioni drugi red naslova, ispisan zlatnim serifnim kurzivom. */
  accent?: string;
  description?: string;
  image: string;
  imageAlt: string;
  badges?: readonly string[];
  breadcrumbs?: BreadcrumbItem[];
};

export function Breadcrumbs({ items, dark = true }: { items: BreadcrumbItem[]; dark?: boolean }) {
  return (
    <nav aria-label="Putanja">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 && <span className={dark ? "text-white/25" : "text-ink/25"}>/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className={`eyebrow text-[0.625rem] transition-colors ${dark ? "text-white/45 hover:text-gold-300" : "text-ink/45 hover:text-gold-700"}`}
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={`eyebrow text-[0.625rem] ${dark ? "text-gold-400" : "text-gold-700"}`}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  label,
  code,
  title,
  accent,
  description,
  image,
  imageAlt,
  badges = [],
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-blueprint [mask-image:radial-gradient(ellipse_80%_70%_at_70%_40%,black,transparent)]" />
        <div className="absolute -right-40 top-0 size-[48rem] rounded-full bg-[radial-gradient(circle,rgb(216_180_106/0.16),transparent_62%)]" />
        <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-[90rem] px-4 pb-14 pt-24 sm:px-6 md:pb-20 md:pt-32 lg:px-10">
        {breadcrumbs.length > 0 && (
          <Reveal y={10}>
            <Breadcrumbs items={breadcrumbs} />
          </Reveal>
        )}

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            {(label || code) && (
              <Reveal y={10} className="flex items-center gap-4">
                {code && <span className="eyebrow text-gold-400">[ {code} ]</span>}
                {label && <span className="eyebrow text-white/50">{label}</span>}
              </Reveal>
            )}
            <h1 className="mt-6 font-display text-[clamp(3.25rem,9vw,8.5rem)]">
              <MaskLines
                onMount
                lines={[
                  title,
                  ...(accent
                    ? [
                        <span key="acc" className="accent-serif text-gold-sheen text-[1.04em]">
                          {accent}
                        </span>,
                      ]
                    : []),
                ]}
              />
            </h1>
            {description && (
              <Reveal delay={0.3}>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                  {description}
                </p>
              </Reveal>
            )}
            {badges.length > 0 && (
              <Reveal delay={0.4} className="mt-8 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="eyebrow rounded-sm border border-white/12 bg-white/[0.03] px-2.5 py-1.5 text-[0.625rem] text-white/65"
                  >
                    {b}
                  </span>
                ))}
              </Reveal>
            )}
          </div>

          <Reveal delay={0.2} className="lg:col-span-5">
            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-white/10 lg:aspect-[5/6]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              </div>
              <span aria-hidden className="absolute -left-2 -top-2 size-5 border-l border-t border-gold-400/60" />
              <span aria-hidden className="absolute -bottom-2 -right-2 size-5 border-b border-r border-gold-400/60" />
              <figcaption className="eyebrow mt-4 flex justify-between text-[0.6rem] text-white/40">
                <span>Fig. — {imageAlt}</span>
                <span className="text-gold-400/70">BVS · RS</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
