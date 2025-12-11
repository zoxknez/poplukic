"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Check, ShieldCheck, Box } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PaletePage() {
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
              src="https://picsum.photos/seed/pallets-hero/1920/1080" 
              alt="Drvene Palete Hero" 
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
                Drvene Palete
              </motion.h1>
              <p className="text-xl text-stone-300 max-w-2xl">
                Standardne, industrijske i palete po meri. Sertifikovan kvalitet za domaće i inostrano tržište.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Left Column: Details */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Types Section */}
            <section className="glass-dark p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Box className="text-wood-500" /> Tipovi Paleta
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-bold text-wood-300 mb-2">Standardne Palete</h3>
                  <p className="text-stone-400 text-sm mb-4">Najčešće korišćene palete u transportu i logistici.</p>
                  <ul className="space-y-2 text-sm text-stone-300">
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Dimenzije:</span> <span className="text-white font-mono">1200 x 800 mm</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Tip:</span> <span className="text-white">EUR / EPAL stil</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-bold text-wood-300 mb-2">Industrijske Palete</h3>
                  <p className="text-stone-400 text-sm mb-4">Robusne palete za teže terete i industrijsku primenu.</p>
                  <ul className="space-y-2 text-sm text-stone-300">
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Dimenzije:</span> <span className="text-white font-mono">1200 x 1000 mm</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Nosivost:</span> <span className="text-white">Pojačana</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-bold text-wood-300 mb-2">Boks Palete</h3>
                  <p className="text-stone-400 text-sm mb-4">Idealne za skladištenje voća i povrća.</p>
                  <ul className="space-y-2 text-sm text-stone-300">
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Dimenzije:</span> <span className="text-white font-mono">1200 x 1000 x 1200 mm</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Namena:</span> <span className="text-white">Poljoprivreda</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-bold text-wood-300 mb-2">Vanstandardne Palete</h3>
                  <p className="text-stone-400 text-sm mb-4">Izrada paleta prema vašim specifičnim dimenzijama.</p>
                  <ul className="space-y-2 text-sm text-stone-300">
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Dimenzije:</span> <span className="text-white">Po zahtevu</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Konstrukcija:</span> <span className="text-white">Prilagođena</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Quality Section */}
            <section className="glass-dark p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <ShieldCheck className="text-wood-500" /> Kvalitet i Standardi
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Sve naše palete se proizvode od visokokvalitetnog drveta uz primenu savremene tehnologije. 
                  Posebnu pažnju posvećujemo termičkoj obradi drveta kako bismo osigurali dugotrajnost i bezbednost.
                </p>
                <ul className="grid gap-4 mt-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-1 rounded text-green-500 mt-1"><Check size={16} /></div>
                    <div>
                      <strong className="text-white block">ISPM 15 Sertifikat (IPPC)</strong>
                      Termički tretman (HT) u našim sušarama eliminiše štetočine i mikroorganizme, čineći palete spremnim za međunarodni transport.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-1 rounded text-green-500 mt-1"><Check size={16} /></div>
                    <div>
                      <strong className="text-white block">Higijenska ispravnost</strong>
                      Proces proizvodnje garantuje mikrobiološku ispravnost, što je ključno za prehrambenu industriju.
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            <div className="glass-dark p-8 rounded-3xl sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Zatražite Ponudu</h3>
              <p className="text-stone-400 text-sm mb-6">
                Pošaljite nam upit sa željenim dimenzijama i količinama. Odgovorićemo u najkraćem roku.
              </p>
              <form className="space-y-4">
                <input type="text" placeholder="Ime i Prezime" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wood-500" />
                <input type="email" placeholder="Email Adresa" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wood-500" />
                <textarea rows={3} placeholder="Detalji o paletama..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wood-500"></textarea>
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
