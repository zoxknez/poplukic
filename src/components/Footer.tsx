import { MapPin, Mail, Phone, ShieldCheck, TreePine } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#050505] text-wood-100/50 py-24 border-t border-wood-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-wood-600 to-wood-900 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl shadow-2xl">
              P
            </div>
            <h3 className="text-white text-2xl font-serif font-bold tracking-tight">POP-LUKIĆ DOO</h3>
          </div>
          <p className="text-base leading-relaxed mb-10 max-w-md font-light text-wood-100/60">
            Od 2005. godine postavljamo standarde u drvnoj industriji. Naša posvećenost preciznosti, kvalitetu i održivosti čini nas liderom u regionu za proizvodnju drvene ambalaže i transport.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2.5 bg-wood-950/50 px-4 py-2 rounded-full border border-wood-800/30">
              <ShieldCheck size={18} className="text-wood-400" />
              <span className="text-xs font-medium text-wood-100 italic">ISPM 15 sertifikovano</span>
            </div>
            <div className="flex items-center gap-2.5 bg-forest-950/50 px-4 py-2 rounded-full border border-forest-800/30">
              <TreePine size={18} className="text-forest-400" />
              <span className="text-xs font-medium text-wood-100 italic">FSC™ sertifikat</span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-serif font-bold text-lg mb-8 tracking-wide">Kontakt</h4>
          <ul className="space-y-6 text-[15px]">
            <li className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-wood-950 flex items-center justify-center text-wood-400 group-hover:bg-wood-600 group-hover:text-white transition-all duration-500">
                <MapPin size={18} />
              </div>
              <span className="group-hover:text-wood-200 transition-colors">Nikole Tesle 61,<br />23312 Banatsko Veliko Selo</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-wood-950 flex items-center justify-center text-wood-400 group-hover:bg-wood-600 group-hover:text-white transition-all duration-500">
                <Mail size={18} />
              </div>
              <a href="mailto:office.poplukic@gmail.com" className="group-hover:text-wood-200 transition-colors">office.poplukic@gmail.com</a>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-wood-950 flex items-center justify-center text-wood-400 group-hover:bg-wood-600 group-hover:text-white transition-all duration-500">
                <Phone size={18} />
              </div>
              <span className="group-hover:text-wood-200 transition-colors">+381 (0) XX XXX XXX</span>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="text-white font-serif font-bold text-lg mb-8 tracking-wide">Info</h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex justify-between border-b border-wood-900 pb-3">
              <span className="text-wood-100/40">Matični broj:</span>
              <span className="text-wood-200 font-medium tracking-wider">08736057</span>
            </li>
            <li className="flex justify-between border-b border-wood-900 pb-3">
              <span className="text-wood-100/40">PIB:</span>
              <span className="text-wood-200 font-medium tracking-wider">101080332</span>
            </li>
            <li className="flex justify-between pt-1">
              <span className="text-wood-100/40">Delatnost:</span>
              <span className="text-wood-200 font-medium text-sm">Prerada drveta</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-10 border-t border-wood-950 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-wood-100/30">
        <p>&copy; {new Date().getFullYear()} POP-LUKIĆ DOO. Sva prava zadržana.</p>
        <div className="flex gap-10">
          <Link href="/privacy" className="hover:text-wood-300 transition-colors">Politika privatnosti</Link>
          <Link href="/terms" className="hover:text-wood-300 transition-colors">Uslovi korišćenja</Link>
        </div>
      </div>
    </footer>
  );
}
