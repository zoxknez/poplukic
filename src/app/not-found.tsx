import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950 text-white">
      <div aria-hidden className="absolute inset-0 -z-10 bg-blueprint opacity-70" />
      <div className="mx-auto w-full max-w-[90rem] px-4 pt-20 sm:px-6 lg:px-10">
        <p className="eyebrow text-gold-400">[ Greška 404 ]</p>
        <h1 className="mt-6 font-display text-[clamp(4rem,14vw,13rem)] leading-[0.82]">
          Ova tura
          <br />
          <span className="accent-serif text-gold-sheen">je zalutala.</span>
        </h1>
        <p className="mt-8 max-w-md leading-relaxed text-white/60">
          Adresa ne postoji ili je premeštena. Vratite se na početnu ili pogledajte proizvodni
          program.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full bg-gold-400 py-2 pl-7 pr-2 text-sm font-semibold text-navy-950 transition hover:bg-gold-300"
          >
            Početna strana
            <span className="flex size-10 items-center justify-center rounded-full bg-navy-950 text-gold-300 transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </Link>
          <Link
            href="/#proizvodi"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-4 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Proizvodni program
          </Link>
        </div>
      </div>
    </section>
  );
}
