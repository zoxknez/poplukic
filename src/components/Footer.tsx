import { MapPin, Mail, Phone, ShieldCheck, TreePine } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-stone-950/80 backdrop-blur-xl text-stone-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white text-2xl font-bold mb-6">POP-LUKIĆ DOO</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-md">
            Vaš pouzdan partner u drvnoj industriji. Proizvodnja paleta, gajbica i rezane građe vrhunskog kvaliteta, uz sopstvenu logistiku i transport.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded border border-white/10">
              <ShieldCheck size={16} className="text-wood-400"/>
              <span className="text-xs font-semibold text-white">ISPM 15 Sertifikovano</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded border border-white/10">
              <TreePine size={16} className="text-green-500"/>
              <span className="text-xs font-semibold text-white">FSC-C132511</span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-6">Kontakt Informacije</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-wood-400 mt-0.5 shrink-0"/>
              <span>Nikole Tesle 61,<br/>23312 Banatsko Veliko Selo</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-wood-400 shrink-0"/>
              <a href="mailto:office.poplukic@gmail.com" className="hover:text-white transition-colors">office.poplukic@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-wood-400 shrink-0"/>
              <span>+381 (0) XX XXX XXX</span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-bold mb-6">Podaci o Firmi</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Matični broj:</span>
              <span className="text-white">08736057</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>PIB:</span>
              <span className="text-white">101080332</span>
            </li>
            <li className="flex justify-between pt-2">
              <span>Delatnost:</span>
              <span className="text-white">Prerada drveta</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} POP-LUKIĆ DOO. Sva prava zadržana.</p>
      </div>
    </footer>
  );
}
