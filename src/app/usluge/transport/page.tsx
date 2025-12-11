"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Truck, MapPin, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TransportPage() {
  return (
    <main className="min-h-screen pt-40 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link href="/#usluge" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-wood-600 hover:border-wood-500 text-wood-100 hover:text-white transition-all duration-300 group mb-8 backdrop-blur-sm shadow-lg hover:shadow-wood-500/20">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          <span className="font-medium">Nazad na početnu</span>
        </Link>

        {/* Hero Section */}
        <div className="glass-dark rounded-3xl overflow-hidden mb-12">
          <div className="relative h-[40vh] md:h-[50vh]">
            <Image 
              src="https://picsum.photos/seed/transport-hero/1920/1080" 
              alt="Transport i Logistika Hero" 
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
                Transport i Logistika
              </motion.h1>
              <p className="text-xl text-stone-300 max-w-2xl">
                Pouzdana isporuka naših proizvoda do vašeg skladišta. Sopstveni vozni park i profesionalni vozači.
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
                Pored proizvodnje, POP-LUKIĆ DOO nudi kompletnu logističku podršku. 
                Razumemo da je pravovremena isporuka ključna za vaše poslovanje, zato smo investirali u sopstveni vozni park.
                Vršimo transport paleta, gajbica i rezane građe širom Srbije i regiona.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-wood-900/30 p-4 rounded-xl border border-wood-500/20 flex items-center gap-3">
                  <div className="bg-wood-500 p-2 rounded-lg text-white"><Truck size={20}/></div>
                  <div>
                    <span className="block text-xs text-wood-300 uppercase tracking-wider">Vozni Park</span>
                    <span className="text-white font-bold text-lg">Sopstveni Kamioni</span>
                  </div>
                </div>
                <div className="bg-wood-900/30 p-4 rounded-xl border border-wood-500/20 flex items-center gap-3">
                  <div className="bg-wood-500 p-2 rounded-lg text-white"><MapPin size={20}/></div>
                  <div>
                    <span className="block text-xs text-wood-300 uppercase tracking-wider">Pokrivenost</span>
                    <span className="text-white font-bold text-lg">Srbija i Region</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Fleet Details */}
            <section className="glass-dark p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-6">Naš Vozni Park</h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 border-b border-white/5 pb-6 last:border-0">
                  <div className="w-full md:w-48 h-32 relative rounded-xl overflow-hidden shrink-0">
                    <Image src="https://picsum.photos/seed/truck1/400/300" alt="Šleper" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Šleperi (24t)</h3>
                    <p className="text-stone-400 text-sm mb-3">
                      Za velike isporuke paleta i rezane građe. Kapacitet do 33 paletna mesta (euro palete) ili cca 800 gajbica.
                      Idealno za industrijske kupce i stovarišta.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 border-b border-white/5 pb-6 last:border-0">
                  <div className="w-full md:w-48 h-32 relative rounded-xl overflow-hidden shrink-0">
                    <Image src="https://picsum.photos/seed/truck2/400/300" alt="Kamion sa prikolicom" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Kamioni sa Prikolicom</h3>
                    <p className="text-stone-400 text-sm mb-3">
                      Fleksibilno rešenje za srednje i velike isporuke. Mogućnost istovara na lokacijama sa otežanim pristupom za šlepere.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="glass-dark p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-6">Zašto Naš Transport?</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-wood-900/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-wood-400">
                    <Clock size={32} />
                  </div>
                  <h3 className="font-bold text-white mb-2">Tačnost</h3>
                  <p className="text-stone-400 text-sm">Poštujemo dogovorene rokove isporuke bez izuzetka.</p>
                </div>
                <div className="text-center">
                  <div className="bg-wood-900/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-wood-400">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="font-bold text-white mb-2">Sigurnost</h3>
                  <p className="text-stone-400 text-sm">Roba je osigurana i profesionalno obezbeđena tokom transporta.</p>
                </div>
                <div className="text-center">
                  <div className="bg-wood-900/40 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-wood-400">
                    <MapPin size={32} />
                  </div>
                  <h3 className="font-bold text-white mb-2">Praćenje</h3>
                  <p className="text-stone-400 text-sm">U svakom trenutku znamo gde se nalazi vaša roba.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            <div className="glass-dark p-8 rounded-3xl sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Upit za Transport</h3>
              <p className="text-stone-400 text-sm mb-6">
                Potreban vam je samo transport? Nudimo usluge prevoza i za treća lica ukoliko imamo slobodnih kapaciteta.
              </p>
              <form className="space-y-4">
                <input type="text" placeholder="Ime i Prezime" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wood-500" />
                <input type="email" placeholder="Email Adresa" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wood-500" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Utovar (Mesto)" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wood-500" />
                  <input type="text" placeholder="Istovar (Mesto)" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wood-500" />
                </div>
                <button className="w-full bg-wood-600 hover:bg-wood-500 text-white font-bold py-3 rounded-lg transition-all">
                  Zatraži Ponudu
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
