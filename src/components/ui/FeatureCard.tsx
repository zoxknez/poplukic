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
        "card-nested-hover p-5 md:p-6 text-center md:text-left group",
        className
      )}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-3">
        <span
          className="mx-auto md:mx-0 w-1.5 h-8 rounded-full bg-gradient-to-b from-wood-500 to-wood-300 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-lg font-bold text-wood-950 group-hover:text-wood-800 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">{description}</p>
        </div>
      </div>
    </article>
  );
}
