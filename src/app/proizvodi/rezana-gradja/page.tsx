"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Ruler, Thermometer, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RezanaGradjaPage() {
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
              src="https://picsum.photos/seed/lumber-hero/1920/1080" 
              alt="Rezana Građa Hero" 
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
                Rezana Građa
              </motion.h1>
              <p className="text-xl text-stone-300 max-w-2xl">
                Visokokvalitetna građa od topole i hrasta. Sušena, parena i obrađena po najvišim standardima.
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
                POP-LUKIĆ DOO nudi širok asortiman rezane građe, primarno od topole i hrasta. 
                Naša pilana je opremljena savremenim mašinama koje nam omogućavaju precizno sečenje i obradu drveta prema specifičnim zahtevima kupaca.
                Pored sirove građe, nudimo i usluge termičke obrade (sušenje i parenje).
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-wood-900/30 p-4 rounded-xl border border-wood-500/20 flex flex-col items-center text-center gap-2">
                  <div className="bg-wood-500 p-2 rounded-lg text-white"><Trees size={24}/></div>
                  <span className="text-white font-bold">Topola & Hrast</span>
                </div>
                <div className="bg-wood-900/30 p-4 rounded-xl border border-wood-500/20 flex flex-col items-center text-center gap-2">
                  <div className="bg-wood-500 p-2 rounded-lg text-white"><Thermometer size={24}/></div>
                  <span className="text-white font-bold">Sušenje & Parenje</span>
                </div>
                <div className="bg-wood-900/30 p-4 rounded-xl border border-wood-500/20 flex flex-col items-center text-center gap-2">
                  <div className="bg-wood-500 p-2 rounded-lg text-white"><Ruler size={24}/></div>
                  <span className="text-white font-bold">Po Meri</span>
                </div>
              </div>
            </section>

            {/* Products List */}
            <section className="glass-dark p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-6">Proizvodni Program</h2>
              <div className="space-y-8">
                
                {/* Item 1 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 h-48 relative rounded-xl overflow-hidden shrink-0">
                    <Image src="https://picsum.photos/seed/lumber1/400/300" alt="Daska Topola" fill className="object-cover" />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold text-white mb-2">Daska Topola</h3>
                    <p className="text-stone-400 text-sm mb-4">
                      Rezana građa od topole je idealna za proizvodnju ambalaže, paleta, ali i za unutrašnju upotrebu u građevinarstvu.
                      Odlikuje se malom težinom i lakom obradom.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/5 p-3 rounded-lg">
                        <span className="block text-wood-300 text-xs uppercase">Debljine</span>
                        <span className="text-white">25mm, 50mm, 80mm</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg">
                        <span className="block text-wood-300 text-xs uppercase">Klase</span>
                        <span className="text-white">I, II, III klasa</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 h-48 relative rounded-xl overflow-hidden shrink-0">
                    <Image src="https://picsum.photos/seed/lumber2/400/300" alt="Hrastovi Elementi" fill className="object-cover" />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-bold text-white mb-2">Hrastovi Elementi i Frize</h3>
                    <p className="text-stone-400 text-sm mb-4">
                      Polufabrikati od hrasta namenjeni za dalju proizvodnju parketa, nameštaja i masivnih ploča.
                      Mogu biti sveži ili sušeni u našim sušarama.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/5 p-3 rounded-lg">
                        <span className="block text-wood-300 text-xs uppercase">Vlažnost</span>
                        <span className="text-white">KD 10-12% ili Sveže</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg">
                        <span className="block text-wood-300 text-xs uppercase">Primena</span>
                        <span className="text-white">Parket, Nameštaj</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Services */}
            <section className="glass-dark p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-6">Usluge Obrade</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-wood-900/20 p-6 rounded-xl border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-2">Sušenje Drveta</h3>
                  <p className="text-stone-400 text-sm">
                    Posedujemo savremene sušare kapaciteta 200m³. Kompjuterski vođen proces garantuje ravnomerno sušenje do željene vlažnosti bez pucanja i deformacija.
                  </p>
                </div>
                <div className="bg-wood-900/20 p-6 rounded-xl border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-2">Parenje Drveta</h3>
                  <p className="text-stone-400 text-sm">
                    Proces parenja (najčešće bukve i oraha, ali i drugih vrsta) radi ujednačavanja boje i smanjenja unutrašnjih naprezanja u drvetu.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            <div className="glass-dark p-8 rounded-3xl sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Zatražite Ponudu</h3>
              <p className="text-stone-400 text-sm mb-6">
                Pošaljite nam specifikaciju potrebne građe (dimenzije, količine, vrsta drveta) i odgovorićemo vam sa ponudom u najkraćem roku.
              </p>
              <form className="space-y-4">
                <input type="text" placeholder="Ime i Prezime" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wood-500" />
                <input type="email" placeholder="Email Adresa" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wood-500" />
                <textarea rows={4} placeholder="Specifikacija (npr. Daska Topola 50mm, 10m3...)" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wood-500"></textarea>
                <button className="w-full bg-wood-600 hover:bg-wood-500 text-white font-bold py-3 rounded-lg transition-all">
                  Pošalji Zahtev
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
