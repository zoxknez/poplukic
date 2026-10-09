import Image from "next/image";
import { Factory, ShieldCheck, Truck } from "lucide-react";
import { CountUp, MaskLines, Reveal } from "@/components/motion";

const pillars = [
  {
    icon: Factory,
    tag: "Kapacitet",
    title: "Serijska proizvodnja bez zastoja u sezoni",
    desc: "Do 15.000 gajbica dnevno i kontinuirana proizvodnja paleta po međunarodnim standardima.",
    value: "15.000+",
    unit: "kom / dan",
  },
  {
    icon: ShieldCheck,
    tag: "Sertifikati",
    title: "Dokumentacija spremna za carinu i EU",
    desc: "ISPM 15 termički tretman u sopstvenim komorama i FSC™ sirovina iz održivih izvora.",
    value: "100%",
    unit: "sertifikovano",
  },
  {
    icon: Truck,
    tag: "Logistika",
    title: "Od pogona do rampe, bez posrednika",
    desc: "Šleperi i solo kamioni - isporuka paleta i gajbica širom Srbije i regiona uz CMR.",
    value: "24-48h",
    unit: "isporuka",
  },
];

export function Capacity() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      {/* Foto sa parallax-om (scroll-timeline) */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="sd-parallax absolute inset-0">
          <Image
            src="/images/palete.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[30%_center] opacity-35 grayscale-[35%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/70 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_40%,rgb(216_180_106/0.16),transparent)]" />
        <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-6 md:py-36 lg:px-10">
        <Reveal className="flex items-center gap-4">
          <span className="eyebrow text-gold-400">(02)</span>
          <span className="eyebrow text-white/50">Zašto POP-LUKIĆ</span>
        </Reveal>

        {/* Ogroman broj - širina fonta raste dok se skroluje */}
        <div className="mt-10 md:mt-14">
          <p className="sd-widen font-display text-[clamp(5.5rem,22vw,22rem)] leading-[0.8] text-transparent [-webkit-text-stroke:1px_rgb(216_180_106/0.7)]">
            <CountUp value="15.000" />
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end">
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] md:col-span-7">
              <MaskLines
                lines={[
                  "gajbica svakog dana,",
                  <span key="b" className="accent-serif text-gold-300 text-[1.05em]">
                    pod jednim krovom.
                  </span>,
                ]}
              />
            </h2>
            <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
              <p className="leading-relaxed text-white/60">
                Kapacitet, kvalitet i logistika na jednom mestu - manje koordinacije za kupca i
                veća sigurnost isporuke kada berba ne čeka.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Stubovi */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:mt-28 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal
                key={p.tag}
                delay={i * 0.1}
                className="group relative flex flex-col bg-navy-950/90 p-7 backdrop-blur-sm transition-colors duration-500 hover:bg-navy-900 md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-gold-400">
                    {String(i + 1).padStart(2, "0")} / {p.tag}
                  </span>
                  <Icon
                    size={22}
                    strokeWidth={1.25}
                    className="text-white/40 transition-colors duration-500 group-hover:text-gold-300"
                  />
                </div>
                <p className="mt-12 font-display text-6xl text-white md:text-7xl">
                  <CountUp value={p.value} />
                </p>
                <p className="eyebrow mt-2 text-white/40">{p.unit}</p>
                <h3 className="mt-10 text-xl font-semibold leading-snug text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{p.desc}</p>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold-400 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
