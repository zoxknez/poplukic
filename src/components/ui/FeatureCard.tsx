import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({ title, description, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group relative rounded-lg border border-ink/10 bg-white/60 p-5 transition-colors duration-500 hover:border-gold-500/50 hover:bg-white md:p-6",
        className
      )}
    >
      <span
        aria-hidden
        className="absolute left-0 top-6 h-8 w-0.5 bg-gold-500 transition-all duration-500 group-hover:h-12"
      />
      <h3 className="text-lg font-semibold leading-snug text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{description}</p>
    </article>
  );
}
