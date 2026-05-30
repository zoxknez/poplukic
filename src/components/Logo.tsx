import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const sizes = {
  sm: "h-9 w-9",
  md: "h-11 w-11 md:h-12 md:w-12",
  lg: "h-14 w-14 md:h-16 md:w-16",
  xl: "h-20 w-20 md:h-24 md:w-24",
  hero: "h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28",
} as const;

type LogoProps = {
  size?: keyof typeof sizes;
  className?: string;
  href?: string;
  priority?: boolean;
};

export function Logo({ size = "md", className, href = "/", priority = false }: LogoProps) {
  const image = (
    <Image
      src="/images/logo.png"
      alt={`${siteConfig.name} – ${siteConfig.address.city}`}
      width={256}
      height={256}
      priority={priority}
      className={cn(
        sizes[size],
        "rounded-xl object-cover shadow-sm ring-1 ring-wood-200/30 transition-shadow hover:ring-wood-300/50",
        className
      )}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} className="inline-flex shrink-0">
      {image}
    </Link>
  );
}
