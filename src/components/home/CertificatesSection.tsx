import { ShieldCheck, TreePine } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { PageHeader } from "@/components/ui/PageHeader";

export function CertificatesSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-wood-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_120%,rgba(194,126,78,0.2),transparent)]" />
      <div className="absolute inset-0 grain-overlay opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <PageHeader
          label="Sertifikati"
          title="Međunarodni standardi"
          titleBold="kvaliteta"
          description="Dokumentovana usklađenost za domaće tržište i izvoz u Evropsku uniju."
          align="center"
          light
          className="mb-12 md:mb-16"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {siteConfig.certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 text-center hover:bg-white/8 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-wood-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border ${
                  cert.id === "fsc"
                    ? "bg-forest-900/40 border-forest-500/30"
                    : "bg-wood-800/60 border-wood-500/30"
                }`}
              >
                {cert.id === "fsc" ? (
                  <TreePine className="text-forest-300" size={36} strokeWidth={1.25} />
                ) : (
                  <ShieldCheck className="text-wood-300" size={36} strokeWidth={1.25} />
                )}
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">{cert.name}</h3>
              <p className="text-stone-400 text-sm mt-3 leading-relaxed max-w-xs mx-auto">
                {cert.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
