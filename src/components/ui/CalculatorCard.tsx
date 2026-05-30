import { cn } from "@/lib/utils";

type CalculatorCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  accent?: "wood" | "forest" | "amber";
};

const accents = {
  wood: "from-wood-600 via-wood-400 to-wood-200",
  forest: "from-forest-700 via-forest-500 to-forest-200",
  amber: "from-amber-700 via-amber-500 to-amber-200",
};

export function CalculatorCard({
  title,
  description,
  children,
  className,
  accent = "wood",
}: CalculatorCardProps) {
  return (
    <div
      className={cn(
        "panel-warm relative rounded-3xl border border-wood-200/50 overflow-hidden shadow-wood-md",
        className
      )}
    >
      <div className={cn("absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r", accents[accent])} />
      <div className="absolute top-0 right-0 w-32 h-32 bg-wood-400/5 rounded-full blur-2xl pointer-events-none" />
      <div className="relative p-6 md:p-8 lg:p-9 space-y-6">
        <div className="text-center md:text-left pb-2 border-b border-wood-200/30">
          <h3 className="font-serif text-xl md:text-2xl font-bold text-wood-950">{title}</h3>
          {description && (
            <p className="text-sm text-stone-500 mt-2 leading-relaxed max-w-md mx-auto md:mx-0">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
