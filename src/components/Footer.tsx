import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { siteConfig, products } from "@/lib/site";

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-5 text-[0.625rem] text-gold-400/80">{title}</p>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

const linkClass = "text-white/60 transition-colors hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div aria-hidden className="absolute inset-0 -z-10 bg-blueprint opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        {/* CTA */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-16 md:flex-row md:items-end md:justify-between md:py-24">
          <p className="font-display text-[clamp(2.75rem,6.5vw,6rem)] text-white">
            Sledeća tura
            <br />
            <span className="accent-serif text-gold-300">kreće iz Banata.</span>
          </p>
          <Link
            href="/kontakt#upit"
            className="group inline-flex items-center gap-3 self-start rounded-full bg-gold-400 py-2 pl-7 pr-2 text-sm font-semibold text-navy-950 transition hover:bg-gold-300 md:self-auto"
          >
            Zatražite ponudu
            <span className="flex size-10 items-center justify-center rounded-full bg-navy-950 text-gold-300 transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>

        {/* Kolone */}
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-4">
              <Logo size="lg" href="/" className="ring-1 ring-gold-500/40" />
              <div>
                <p className="font-display text-2xl">{siteConfig.name}</p>
                <p className="eyebrow mt-1 text-[0.6rem] text-white/40">Od {siteConfig.founded}. godine</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">{siteConfig.description}</p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <Col title="Asortiman">
              {products.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className={linkClass}>
                    {p.title}
                  </Link>
                </li>
              ))}
            </Col>
          </div>

          <div className="md:col-span-2">
            <Col title="Kompanija">
              <li>
                <Link href="/o-nama" className={linkClass}>O nama</Link>
              </li>
              <li>
                <Link href="/kontakt" className={linkClass}>Kontakt</Link>
              </li>
              <li>
                <Link href="/privacy" className={linkClass}>Privatnost</Link>
              </li>
              <li>
                <Link href="/terms" className={linkClass}>Uslovi korišćenja</Link>
              </li>
            </Col>
          </div>

          <div className="col-span-2 md:col-span-3">
            <Col title="Kontakt">
              <li>
                <a href={siteConfig.phoneHref} className="font-display text-2xl text-white transition-colors hover:text-gold-300">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-all`}>
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-white/60">{siteConfig.address.full}</li>
              <li className="pt-2 font-mono text-xs text-white/40">
                MB {siteConfig.legal.mb} · PIB {siteConfig.legal.pib}
              </li>
            </Col>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Sva prava zadržana.
          </p>
          <div className="flex items-center gap-6">
            <span className="eyebrow text-[0.6rem]">ISPM 15 · FSC™ C132511</span>
            <a href="#main-content" className="group inline-flex items-center gap-2 text-white/60 hover:text-white">
              Na vrh
              <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Monumentalni potpis */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="text-gold-sheen -mb-[0.18em] whitespace-nowrap text-center font-display text-[18.5vw] leading-[0.8] opacity-90">
          {siteConfig.shortName}
        </p>
      </div>
    </footer>
  );
}
