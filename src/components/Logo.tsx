import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const sizes = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
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
      alt={`${siteConfig.name} - ${siteConfig.address.city}`}
      width={192}
      height={192}
      priority={priority}
      className={cn(sizes[size], "shrink-0 rounded-lg object-cover", className)}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} className="inline-flex shrink-0">
      {image}
    </Link>
  );
}
