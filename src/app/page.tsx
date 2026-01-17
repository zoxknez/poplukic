"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Truck, TreePine, CheckCircle, Factory, ShieldCheck, Phone, Mail } from "lucide-react";
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
      <section className="min-h-[100vh] flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-wood-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-forest-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-1.5 rounded-full glass-wood text-wood-200 text-sm font-medium border-wood-500/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-wood-500 animate-ping"></span>
            Lider u preradi drveta od 2005.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 tracking-tighter leading-[0.9]"
          >
            Priroda u <br />
            <span className="text-gradient drop-shadow-sm">
              službi kvaliteta
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-2xl text-wood-100/60 mb-14 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Vrhunska rešenja za drvnu ambalažu i transport.
            Proizvodnja paleta i gajbica po najvišim evropskim standardima preciznosti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a href="#proizvodi" className="group bg-wood-600 hover:bg-wood-500 text-white px-10 py-5 rounded-full font-semibold transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(171,101,61,0.3)] hover:shadow-[0_15px_40px_rgba(171,101,61,0.5)] hover:-translate-y-1">
              Naš asortiman <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
            </a>
            <a href="#kontakt" className="glass-wood hover:bg-wood-400/10 text-wood-100 px-10 py-5 rounded-full font-semibold transition-all duration-500 border-wood-500/20 backdrop-blur-xl hover:-translate-y-1">
              Zatražite ponudu
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-wood-100/30 font-medium">Povucite naniže</span>
          <div className="w-px h-12 bg-gradient-to-b from-wood-500/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats / Features */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Factory, title: "Kapacitet", desc: "15,000 gajbica dnevno i velike serije paleta visokog kvaliteta.", link: null },
              { icon: CheckCircle, title: "Kvalitet", desc: "ISPM 15 termički tretman i FSC™ sertifikovana sirovina iz održivih izvora.", link: null },
              { icon: Truck, title: "Logistika", desc: "Sopstveni vozni park garantuje brzu isporuku širom regiona u svakom trenutku.", link: "/usluge/transport" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="glass-wood p-10 rounded-[2rem] border-wood-500/10 hover:bg-wood-500/5 transition-all duration-500 relative group">
                {item.link && <Link href={item.link} className="absolute inset-0 z-10" />}
                <div className="w-16 h-16 bg-wood-500/10 rounded-2xl flex items-center justify-center text-wood-400 mb-8 group-hover:scale-110 group-hover:bg-wood-500/20 group-hover:text-wood-300 transition-all duration-500">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 tracking-wide">{item.title}</h3>
                <p className="text-wood-100/40 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="proizvodi" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-wood-400 font-medium text-sm block mb-4"
            >
              Naš proizvodni program
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight"
            >
              Vrhunski proizvodi <span className="text-wood-500">od drveta</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Pallets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-wood rounded-[2.5rem] overflow-hidden group border-wood-500/5 hover:border-wood-500/20 transition-all duration-500"
            >
              <div className="h-80 relative overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/pallets/800/600"
                  alt="Drvene palete"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-4xl font-serif font-bold text-white mb-2">Drvene palete</h3>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-wood-500"></span>
                    <p className="text-wood-300 font-medium text-sm">Standardne i po meri</p>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <ul className="space-y-4 text-wood-100/50 mb-10 font-light">
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-wood-500" /> Standardne (1200x800 mm / 1200x1000 mm)</li>
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-wood-500" /> Boks palete i namenska ambalaža</li>
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-wood-500" /> ISPM 15 termički tretirane</li>
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-wood-500" /> Visoka nosivost i dugotrajnost</li>
                </ul>
                <Link href="/proizvodi/palete" className="flex items-center justify-between group/btn text-white font-medium text-sm border border-wood-500/20 rounded-full px-8 py-4 hover:bg-wood-500 transition-all duration-500">
                  Detaljnije
                  <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                </Link>
              </div>
            </motion.div>

            {/* Crates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-wood rounded-[2.5rem] overflow-hidden group border-wood-500/5 hover:border-wood-500/20 transition-all duration-500"
            >
              <div className="h-80 relative overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/crates/800/600"
                  alt="Drvene gajbice"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-4xl font-serif font-bold text-white mb-2">Drvene gajbice</h3>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-wood-500"></span>
                    <p className="text-wood-300 font-medium text-sm">Za voće i povrće</p>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <ul className="space-y-4 text-wood-100/50 mb-10 font-light">
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-wood-500" /> Jednoredne i dvoredne konstrukcije</li>
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-wood-500" /> Patosi i elementi vrhunske završne obrade</li>
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-wood-500" /> Optimizovano za transport osetljivih plodova</li>
                  <li className="flex items-center gap-3"><CheckCircle size={16} className="text-wood-500" /> Kapacitet od 15.000 komada na dan</li>
                </ul>
                <Link href="/proizvodi/gajbice" className="flex items-center justify-between group/btn text-white font-medium text-sm border border-wood-500/20 rounded-full px-8 py-4 hover:bg-wood-500 transition-all duration-500">
                  Detaljnije
                  <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                </Link>
              </div>
            </motion.div>

            {/* Lumber */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-wood rounded-[2.5rem] overflow-hidden group md:col-span-2 border-wood-500/5 hover:border-wood-500/20 transition-all duration-500"
            >
              <div className="grid md:grid-cols-2">
                <div className="h-80 md:h-auto relative overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/lumber/800/600"
                    alt="Rezana građa"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <h3 className="text-4xl font-serif font-bold text-white mb-4 tracking-tight">Rezana građa</h3>
                  <p className="text-wood-100/40 mb-10 font-light leading-relaxed">Hrast i Topola vrhunskog kvaliteta za nameštaj i građevinsku industriju. Prerađeno sa preciznošću.</p>
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="text-wood-400 font-bold mb-2 text-sm">Sirova ili sušena</h4>
                      <p className="text-sm text-wood-100/30 font-light">Vlažnost 8-10% (sušara) ili 22% (vazdušno).</p>
                    </div>
                    <div>
                      <h4 className="text-wood-400 font-bold mb-2 text-sm">Dimenzije</h4>
                      <p className="text-sm text-wood-100/30 font-light">Debljine: 25-50mm.<br />Dužine: 0.3 - 4m.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mb-10">
                    <span className="px-4 py-1.5 bg-wood-950/50 rounded-full text-xs font-medium text-wood-200 border border-wood-800/30">Klasa A</span>
                    <span className="px-4 py-1.5 bg-wood-950/50 rounded-full text-xs font-medium text-wood-200 border border-wood-800/30">Klasa B</span>
                  </div>
                  <Link href="/proizvodi/rezana-gradja" className="flex items-center justify-between group/btn text-white font-medium text-sm border border-wood-500/20 rounded-full px-8 py-4 hover:bg-wood-500 transition-all duration-500">
                    Detaljnije
                    <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </Link>
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

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Sertifikovani kvalitet</h2>
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
      <section id="kontakt" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="glass-wood p-12 md:p-16 rounded-[3rem] border-wood-500/10 relative overflow-hidden backdrop-blur-3xl">
            <div className="relative z-10 grid md:grid-cols-2 gap-16">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight"
                >
                  Započnimo <span className="text-wood-500 italic font-light">saradnju</span>
                </motion.h2>
                <p className="text-wood-100/40 mb-10 font-light leading-relaxed">
                  Naš tim stručnjaka je spreman da odgovori na sve vaše zahteve u najkraćem roku. Pozovite nas ili pošaljite upit putem forme.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-wood-500/10 flex items-center justify-center text-wood-500">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-wood-100/30">Telefon</p>
                      <p className="text-white font-medium">+381 (0) XX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-wood-500/10 flex items-center justify-center text-wood-500">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-wood-100/30">Email</p>
                      <p className="text-white font-medium">office.poplukic@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-wood-100/40 ml-1">Vaše ime</label>
                  <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-wood-500/50 transition-all font-light" placeholder="Petar Perić" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-wood-100/40 ml-1">Email adresa</label>
                  <input type="email" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-wood-500/50 transition-all font-light" placeholder="petar@gmail.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-wood-100/40 ml-1">Vaša poruka</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-wood-500/50 transition-all font-light resize-none" placeholder="Kako vam možemo pomoći?"></textarea>
                </div>
                <button type="button" className="w-full bg-wood-600 hover:bg-wood-500 text-white font-bold py-5 rounded-2xl transition-all duration-500 shadow-xl flex items-center justify-center gap-3 group">
                  Pošalji upit <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
