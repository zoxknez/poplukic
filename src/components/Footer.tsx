import Link from "next/link";
import { MapPin, Mail, Phone, ShieldCheck, TreePine } from "lucide-react";
import { siteConfig, products } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-wood-950 text-stone-300 border-t border-wood-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 text-center md:text-left">
          <div className="lg:col-span-4 space-y-5 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-wood-700 flex items-center justify-center">
                <span className="font-serif font-bold text-white text-lg">P</span>
              </div>
              <div>
                <div className="font-serif font-bold text-white text-lg">{siteConfig.name}</div>
                <div className="text-xs text-stone-500">Od {siteConfig.founded}. godine</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wood-900 border border-wood-800 text-xs text-wood-200">
                <ShieldCheck size={12} />
                ISPM 15
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-950 border border-forest-900 text-xs text-forest-200">
                <TreePine size={12} />
                FSC™
              </span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">Asortiman</h4>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm hover:text-white transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">Kontakt</h4>
            <ul className="space-y-4 text-sm w-full max-w-xs md:max-w-none">
              <li className="flex gap-3 justify-center md:justify-start text-left">
                <MapPin size={16} className="text-wood-500 shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex gap-3 justify-center md:justify-start">
                <Mail size={16} className="text-wood-500 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3 justify-center md:justify-start">
                <Phone size={16} className="text-wood-500 shrink-0" />
                <a href={siteConfig.phoneHref} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">Firma</h4>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-stone-500 text-xs">Matični broj</dt>
                <dd className="font-mono text-white">{siteConfig.legal.mb}</dd>
              </div>
              <div>
                <dt className="text-stone-500 text-xs">PIB</dt>
                <dd className="font-mono text-white">{siteConfig.legal.pib}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-wood-900 flex flex-col md:flex-row justify-between items-center md:items-start gap-4 text-xs text-stone-500 text-center md:text-left">
          <p>© {year} {siteConfig.name}. Sva prava zadržana.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="/privacy" className="hover:text-stone-300">Politika privatnosti</Link>
            <Link href="/terms" className="hover:text-stone-300">Uslovi korišćenja</Link>
            <Link href="/kontakt" className="hover:text-stone-300">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
