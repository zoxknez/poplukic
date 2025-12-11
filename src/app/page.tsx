"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Truck, TreePine, CheckCircle, Factory, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 relative">
        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1 rounded-full glass-dark text-wood-300 text-sm font-medium tracking-wider uppercase"
          >
            Lider u preradi drveta od 2005.
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Priroda u <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wood-300 to-wood-500">
              Vašoj Službi
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Kompletna rešenja za drvnu ambalažu i transport. 
            Proizvodnja paleta, gajbica i rezane građe po najvišim svetskim standardima.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#proizvodi" className="group bg-wood-600 hover:bg-wood-500 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,90,43,0.3)] hover:shadow-[0_0_30px_rgba(139,90,43,0.5)]">
              Istražite Proizvode <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <a href="#kontakt" className="glass hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all">
              Zatražite Ponudu
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats / Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: Factory, title: "Kapacitet", desc: "15,000 gajbica dnevno i velike serije paleta.", link: null },
              { icon: CheckCircle, title: "Kvalitet", desc: "ISPM 15 termički tretman i FSC sertifikovana sirovina.", link: null },
              { icon: Truck, title: "Logistika", desc: "Sopstveni vozni park za brzu isporuku širom regiona.", link: "/usluge/transport" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-dark p-8 rounded-2xl border-t border-white/10 hover:bg-white/5 transition-colors relative group">
                {item.link && <Link href={item.link} className="absolute inset-0 z-10" />}
                <div className="w-12 h-12 bg-wood-500/20 rounded-xl flex items-center justify-center text-wood-400 mb-4 group-hover:bg-wood-500/30 transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-stone-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="proizvodi" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-wood-400 font-bold tracking-widest uppercase text-sm">Naš Asortiman</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Vrhunski Proizvodi od Drveta</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pallets */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-dark rounded-3xl overflow-hidden group"
            >
              <div className="h-64 relative overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/pallets/800/600" 
                  alt="Drvene Palete" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white">Drvene Palete</h3>
                  <p className="text-wood-300">Standardne & Po Meri</p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3 text-stone-300 mb-6">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wood-500"></div>Standardne (1200x800 mm)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wood-500"></div>Industrijske (1200x1000 mm)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wood-500"></div>Boks Palete (1200x1000x1200 mm)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wood-500"></div>ISPM 15 Termički tretirane</li>
                </ul>
                <Link href="/proizvodi/palete" className="block w-full text-center py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white transition-colors">Detaljnije</Link>
              </div>
            </motion.div>

            {/* Crates */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-dark rounded-3xl overflow-hidden group"
            >
              <div className="h-64 relative overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/crates/800/600" 
                  alt="Drvene Gajbice" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white">Drvene Gajbice</h3>
                  <p className="text-wood-300">Za Voće i Povrće</p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3 text-stone-300 mb-6">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wood-500"></div>Jednoredne i dvoredne</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wood-500"></div>Patosi i elementi za gajbice</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wood-500"></div>Visok kvalitet obrade</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-wood-500"></div>Kapacitet 15,000 kom/dan</li>
                </ul>
                <Link href="/proizvodi/gajbice" className="block w-full text-center py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white transition-colors">Detaljnije</Link>
              </div>
            </motion.div>

            {/* Lumber */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-dark rounded-3xl overflow-hidden group md:col-span-2"
            >
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto relative overflow-hidden">
                  <Image 
                    src="https://picsum.photos/seed/lumber/800/600" 
                    alt="Rezana Građa" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-r"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-2">Rezana Građa</h3>
                  <p className="text-stone-400 mb-6">Hrast i Topola vrhunskog kvaliteta.</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-wood-400 font-bold mb-2">Sirova ili Sušena</h4>
                      <p className="text-sm text-stone-500">Vlažnost 8-10% (sušara) ili 22% (vazdušno).</p>
                    </div>
                    <div>
                      <h4 className="text-wood-400 font-bold mb-2">Dimenzije</h4>
                      <p className="text-sm text-stone-500">Debljine: 25, 32, 38, 50mm.<br/>Dužine: 0.3 - 4m.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="px-3 py-1 bg-white/5 rounded text-xs text-stone-300 border border-white/10">Klasa A</span>
                    <span className="px-3 py-1 bg-white/5 rounded text-xs text-stone-300 border border-white/10">Klasa B</span>
                    <span className="px-3 py-1 bg-white/5 rounded text-xs text-stone-300 border border-white/10">Klasa C</span>
                  </div>
                  <Link href="/proizvodi/rezana-gradja" className="block w-full text-center py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white transition-colors">Detaljnije</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="sertifikati" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-dark rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-wood-500 to-transparent"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Sertifikovani Kvalitet</h2>
            <p className="text-stone-300 max-w-2xl mx-auto mb-12">
              Naša posvećenost kvalitetu potvrđena je međunarodnim sertifikatima koji garantuju bezbednost i održivost naših proizvoda.
            </p>

            <div className="flex flex-wrap justify-center gap-12">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <ShieldCheck size={48} className="text-wood-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">ISPM 15</h3>
                  <p className="text-sm text-stone-400">IPPC Standard</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <TreePine size={48} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">FSC™</h3>
                  <p className="text-sm text-stone-400">FSC-C132511</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Kontaktirajte Nas</h2>
          <div className="glass-dark p-8 rounded-3xl">
            <form className="space-y-4 text-left">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-stone-400 mb-1">Ime i Prezime</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-wood-500 transition-colors" placeholder="Vaše ime" />
                </div>
                <div>
                  <label className="block text-sm text-stone-400 mb-1">Email Adresa</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-wood-500 transition-colors" placeholder="vas@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-stone-400 mb-1">Poruka</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-wood-500 transition-colors" placeholder="Kako vam možemo pomoći?"></textarea>
              </div>
              <button type="button" className="w-full bg-wood-600 hover:bg-wood-500 text-white font-bold py-4 rounded-lg transition-all shadow-lg">
                Pošalji Upit
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
