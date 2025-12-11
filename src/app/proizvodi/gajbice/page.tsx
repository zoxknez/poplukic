"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check, Package, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GajbicePage() {
  return (
    <main className="min-h-screen pt-40 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link href="/#proizvodi" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-wood-600 hover:border-wood-500 text-wood-100 hover:text-white transition-all duration-300 group mb-8 backdrop-blur-sm shadow-lg hover:shadow-wood-500/20">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          <span className="font-medium">Nazad na proizvode</span>
        </Link>

        {/* Hero Section */}
        <div className="glass-dark rounded-3xl overflow-hidden mb-12">
          <div className="relative h-[40vh] md:h-[50vh]">
            <Image 
              src="https://picsum.photos/seed/crates-hero/1920/1080" 
              alt="Drvene Gajbice Hero" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                Drvene Gajbice
              </motion.h1>
              <p className="text-xl text-stone-300 max-w-2xl">
                Vrhunska ambalaža za voće i povrće. Kapacitet proizvodnje do 15,000 komada dnevno.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Left Column: Details */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Intro Text */}
            <section className="glass-dark p-8 rounded-3xl">
              <p className="text-lg text-stone-300 leading-relaxed mb-6">
                Naše drvene gajbice su dizajnirane specifično za skladištenje i transport osetljivih poljoprivrednih proizvoda poput jabuka, breskvi, grožđa, paradajza i krompira.
                Prirodna struktura drveta omogućava ventilaciju, sprečavajući truljenje i produžavajući svežinu vaših proizvoda.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-wood-900/30 p-4 rounded-xl border border-wood-500/20 flex items-center gap-3">
                  <div className="bg-wood-500 p-2 rounded-lg text-white"><Package size={20}/></div>
                  <div>
                    <span className="block text-xs text-wood-300 uppercase tracking-wider">Kapacitet</span>
                    <span className="text-white font-bold text-lg">15,000 kom/dan</span>
                  </div>
                </div>
                <div className="bg-wood-900/30 p-4 rounded-xl border border-wood-500/20 flex items-center gap-3">
                  <div className="bg-wood-500 p-2 rounded-lg text-white"><Layers size={20}/></div>
                  <div>
                    <span className="block text-xs text-wood-300 uppercase tracking-wider">Materijal</span>
                    <span className="text-white font-bold text-lg">Prirodno Drvo</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Products List */}
            <section className="glass-dark p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-6">Asortiman</h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 border-b border-white/5 pb-6 last:border-0">
                  <div className="w-full md:w-48 h-32 relative rounded-xl overflow-hidden shrink-0">
                    <Image src="https://picsum.photos/seed/crate1/400/300" alt="Gotove Gajbice" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Gotove Gajbice</h3>
                    <p className="text-stone-400 text-sm mb-3">
                      Spremne za upotrebu odmah nakon isporuke. Čvrsta konstrukcija garantuje bezbedan transport vaših proizvoda.
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      <li className="px-2 py-1 bg-white/5 rounded text-xs text-stone-300">Jednoredne</li>
                      <li className="px-2 py-1 bg-white/5 rounded text-xs text-stone-300">Dvoredne</li>
                      <li className="px-2 py-1 bg-white/5 rounded text-xs text-stone-300">Holandezi</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 border-b border-white/5 pb-6 last:border-0">
                  <div className="w-full md:w-48 h-32 relative rounded-xl overflow-hidden shrink-0">
                    <Image src="https://picsum.photos/seed/crate2/400/300" alt="Elementi za gajbice" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Patosi i Elementi</h3>
                    <p className="text-stone-400 text-sm mb-3">
                      Isporučujemo i pojedinačne elemente (patose i stranice) koji se sklapaju neposredno pre upotrebe.
                      Ovo je idealno rešenje za uštedu prostora i sprečavanje pojave buđi tokom dugog skladištenja prazne ambalaže.
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      <li className="px-2 py-1 bg-white/5 rounded text-xs text-stone-300">Patosi</li>
                      <li className="px-2 py-1 bg-white/5 rounded text-xs text-stone-300">Stranice</li>
                      <li className="px-2 py-1 bg-white/5 rounded text-xs text-stone-300">Uglovi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="glass-dark p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-6">Prednosti Drvene Ambalaže</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Prirodna ventilacija proizvoda",
                  "Veća čvrstoća od kartona",
                  "Mogućnost višestruke upotrebe",
                  "Ekološki prihvatljivo (reciklabilno)",
                  "Prilagodljive dimenzije",
                  "Otpornost na vlagu (uz pravilan tretman)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-300 text-sm">
                    <Check size={16} className="text-wood-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            <div className="glass-dark p-8 rounded-3xl sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Poručite Gajbice</h3>
              <p className="text-stone-400 text-sm mb-6">
                Trebaju vam gajbice za predstojeću sezonu? Kontaktirajte nas na vreme da rezervišete proizvodne kapacitete.
              </p>
              <form className="space-y-4">
                <input type="text" placeholder="Ime i Prezime" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wood-500" />
                <input type="email" placeholder="Email Adresa" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wood-500" />
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-stone-400 text-sm focus:outline-none focus:border-wood-500">
                  <option>Tip Gajbice...</option>
                  <option>Jednoredna</option>
                  <option>Dvoredna</option>
                  <option>Samo elementi</option>
                </select>
                <button className="w-full bg-wood-600 hover:bg-wood-500 text-white font-bold py-3 rounded-lg transition-all">
                  Pošalji Upit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
