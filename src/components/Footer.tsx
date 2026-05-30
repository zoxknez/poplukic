import Link from "next/link";
import { MapPin, Mail, Phone, ShieldCheck, TreePine, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { siteConfig, products } from "@/lib/site";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-5 w-full">
      <span className="inline-flex items-center justify-center md:justify-start gap-2.5 w-full">
        <span className="w-8 h-px bg-wood-600 shrink-0 md:w-6 md:bg-wood-700" aria-hidden />
        {children}
        <span className="w-8 h-px bg-wood-600 shrink-0 md:hidden" aria-hidden />
      </span>
    </h4>
  );
}

function ContactRow({
  icon: Icon,
  href,
  children,
}: {
  icon: typeof MapPin;
  href?: string;
  children: React.ReactNode;
}) {
  const textClass =
    "min-w-0 flex-1 text-sm leading-snug text-stone-300 pt-1.5 break-words";

  return (
    <li className="flex items-start gap-3 w-full text-left">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-wood-900/60 border border-wood-800/50 text-wood-500 shrink-0">
        <Icon size={15} />
      </span>
      {href ? (
        <a href={href} className={`${textClass} hover:text-white transition-colors`}>
          {children}
        </a>
      ) : (
        <span className={textClass}>{children}</span>
      )}
    </li>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-wood-950 text-stone-300 border-t border-wood-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(194,126,78,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 grain-overlay opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 text-center md:text-left">
          <div className="lg:col-span-4 space-y-5 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Logo size="lg" href="/" className="ring-wood-700/50 shadow-wood-lg" />
              <div className="text-left">
                <div className="font-serif font-bold text-white text-lg">{siteConfig.name}</div>
                <div className="text-xs text-stone-500">Od {siteConfig.founded}. godine</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-wood-900/80 border border-wood-700/50 text-xs text-wood-200 backdrop-blur-sm">
                <ShieldCheck size={12} />
                ISPM 15
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-950/80 border border-forest-800/50 text-xs text-forest-200 backdrop-blur-sm">
                <TreePine size={12} />
                FSC™
              </span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col items-center md:items-start w-full">
            <FooterHeading>Asortiman</FooterHeading>
            <ul className="w-full max-w-[18rem] md:max-w-none mx-auto md:mx-0 rounded-2xl border border-wood-800/45 bg-wood-900/30 p-2 md:p-0 md:border-0 md:bg-transparent md:rounded-none space-y-0.5 md:space-y-3">
              {products.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="footer-link group flex items-center justify-center md:justify-start gap-1.5 py-3 px-4 rounded-xl md:rounded-none md:py-0 md:px-0 hover:bg-wood-900/55 md:hover:bg-transparent transition-colors w-full"
                  >
                    {p.title}
                    <ArrowUpRight
                      size={12}
                      className="opacity-45 md:opacity-0 -translate-x-1 group-hover:opacity-60 md:group-hover:opacity-60 group-hover:translate-x-0 transition-all shrink-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col items-center md:items-start w-full">
            <FooterHeading>Kontakt</FooterHeading>
            <ul className="w-full max-w-xs md:max-w-none mx-auto md:mx-0 space-y-4 rounded-2xl border border-wood-800/50 bg-wood-900/25 p-4 md:p-0 md:border-0 md:bg-transparent md:rounded-none">
              <ContactRow icon={MapPin}>{siteConfig.address.full}</ContactRow>
              <ContactRow icon={Mail} href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </ContactRow>
              <ContactRow icon={Phone} href={siteConfig.phoneHref}>
                {siteConfig.phone}
              </ContactRow>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col items-center md:items-start w-full">
            <FooterHeading>Firma</FooterHeading>
            <dl className="space-y-3 w-full md:max-w-none mx-auto md:mx-0">
              <div className="card-nested px-5 py-4 md:px-4 md:py-3 bg-wood-900/30 border-wood-800/40 text-center md:text-left w-full rounded-2xl">
                <dt className="text-stone-400 text-xs md:text-[10px] uppercase tracking-[0.18em] font-semibold">
                  Matični broj
                </dt>
                <dd className="font-mono text-white text-xl md:text-sm font-semibold mt-2 md:mt-1 tracking-[0.08em]">
                  {siteConfig.legal.mb}
                </dd>
              </div>
              <div className="card-nested px-5 py-4 md:px-4 md:py-3 bg-wood-900/30 border-wood-800/40 text-center md:text-left w-full rounded-2xl">
                <dt className="text-stone-400 text-xs md:text-[10px] uppercase tracking-[0.18em] font-semibold">
                  PIB
                </dt>
                <dd className="font-mono text-white text-xl md:text-sm font-semibold mt-2 md:mt-1 tracking-[0.08em]">
                  {siteConfig.legal.pib}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="section-divider mt-14 mb-8 opacity-30" />

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 text-xs text-stone-500 text-center md:text-left">
          <p>© {year} {siteConfig.name}. Sva prava zadržana.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="/privacy" className="hover:text-stone-300 transition-colors">
              Politika privatnosti
            </Link>
            <Link href="/terms" className="hover:text-stone-300 transition-colors">
              Uslovi korišćenja
            </Link>
            <Link href="/kontakt" className="hover:text-stone-300 transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
