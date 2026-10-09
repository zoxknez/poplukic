import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

type ContentBlockProps = {
  title?: string;
  index?: string;
  children: React.ReactNode;
  className?: string;
  flush?: boolean;
};

export function ContentBlock({ title, index, children, className, flush = false }: ContentBlockProps) {
  return (
    <Reveal
      className={cn(
        "overflow-hidden rounded-xl border border-ink/10 bg-pine-50 shadow-[0_24px_48px_-36px_rgb(7_12_28/0.35)]",
        className
      )}
    >
      {title && (
        <div className="flex items-end justify-between gap-4 border-b border-ink/10 px-6 pb-5 pt-6 md:px-8 md:pt-8">
          <h2 className="font-display text-3xl text-navy-900 md:text-4xl">{title}</h2>
          {index && <span className="eyebrow pb-1 text-ink/40">{index}</span>}
        </div>
      )}
      <div className={cn(!flush && "p-6 md:p-8")}>{children}</div>
    </Reveal>
  );
}
