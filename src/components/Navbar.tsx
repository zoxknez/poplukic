"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { siteConfig, navLinks } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-wood-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <div className="w-10 h-10 rounded-xl bg-wood-800 flex items-center justify-center shadow-sm group-hover:bg-wood-700 transition-colors">
              <span className="font-serif font-bold text-white text-lg">P</span>
            </div>
            <div>
              <span className="font-serif font-bold text-wood-950 text-lg leading-none block">
                {siteConfig.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if ("children" in link && link.children) {
                return (
                  <div key={link.name} className="relative group">
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname.startsWith("/proizvodi")
                          ? "text-wood-800 bg-wood-100"
                          : "text-stone-600 hover:text-wood-900 hover:bg-stone-100"
                      )}
                    >
                      {link.name}
                      <ChevronDown size={14} className="opacity-60" />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="bg-white border border-stone-200 rounded-xl shadow-wood-lg py-2 min-w-[220px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-wood-50 hover:text-wood-900"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive(link.href)
                      ? "text-wood-800 bg-wood-100"
                      : "text-stone-600 hover:text-wood-900 hover:bg-stone-100"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="hidden xl:flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-wood-800"
            >
              <Phone size={15} />
              {siteConfig.phone}
            </a>
            <Button href="/kontakt" size="sm">
              Slanje upita
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-stone-200 text-stone-700"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-6 py-5 shadow-lg">
          <div className="flex flex-col items-center gap-1 text-center">
            {navLinks.map((link) => {
              if ("children" in link && link.children) {
                return (
                  <div key={link.name}>
                    <button
                      type="button"
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="flex w-full max-w-xs items-center justify-center gap-2 py-3 text-sm font-semibold text-stone-800"
                    >
                      {link.name}
                      <ChevronDown size={16} className={cn("transition-transform", productsOpen && "rotate-180")} />
                    </button>
                    {productsOpen && (
                      <div className="pb-2 space-y-1 w-full max-w-xs">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2.5 text-sm text-stone-600 hover:text-wood-800"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3.5 w-full max-w-xs text-sm font-semibold text-stone-800 border-b border-stone-100"
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href={siteConfig.phoneHref}
              className="py-3 text-sm font-medium text-wood-700 inline-flex items-center justify-center gap-2"
            >
              <Phone size={15} />
              {siteConfig.phone}
            </a>
            <Button href="/kontakt" className="mt-4 w-full max-w-xs" onClick={() => setOpen(false)}>
              Slanje upita
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
