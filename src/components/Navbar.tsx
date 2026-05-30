"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig, navLinks } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
    setDesktopProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  useEffect(() => {
    if (!desktopProductsOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDesktopProductsOpen(false);
    };

    const onClick = (event: MouseEvent) => {
      if (!productsRef.current?.contains(event.target as Node)) {
        setDesktopProductsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClick);
    };
  }, [desktopProductsOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-wood-200/60 transition-all duration-300",
        scrolled && "nav-scrolled"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          className={cn(
            "flex items-center h-16 md:h-[4.25rem]",
            pathname === "/"
              ? "max-lg:justify-center lg:justify-between"
              : "justify-between"
          )}
        >
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 group min-w-0",
              pathname === "/" && "max-lg:hidden"
            )}
            onClick={() => setOpen(false)}
          >
            <Logo size="md" href="" priority className="group-hover:shadow-md" />
            <div className="min-w-0 hidden sm:block">
              <span className="font-serif font-bold text-wood-950 text-base md:text-lg leading-none block truncate">
                {siteConfig.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium truncate block">
                {siteConfig.tagline}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Glavna navigacija">
            {navLinks.map((link) => {
              if ("children" in link && link.children) {
                return (
                  <div key={link.name} className="relative" ref={productsRef}>
                    <button
                      type="button"
                      aria-expanded={desktopProductsOpen}
                      aria-haspopup="menu"
                      onClick={() => setDesktopProductsOpen((value) => !value)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname.startsWith("/proizvodi") || desktopProductsOpen
                          ? "text-wood-800 bg-wood-100"
                          : "text-stone-600 hover:text-wood-900 hover:bg-stone-100"
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={cn("opacity-60 transition-transform", desktopProductsOpen && "rotate-180")}
                      />
                    </button>
                    {desktopProductsOpen && (
                      <div
                        role="menu"
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white border border-stone-200 rounded-xl shadow-wood-lg py-2 min-w-[220px]">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              onClick={() => setDesktopProductsOpen(false)}
                              className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-wood-50 hover:text-wood-900"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
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

          <div className="flex items-center gap-2.5 md:gap-3">
            <div className="flex lg:hidden items-center gap-2.5">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center size-11 sm:size-12 rounded-2xl bg-white border border-stone-200/90 text-wood-800 shadow-sm hover:bg-wood-50 hover:border-wood-300/80 hover:text-wood-900 active:scale-[0.97] transition-all duration-200"
                aria-label={`Pozovite ${siteConfig.phone}`}
              >
                <Phone size={22} strokeWidth={2} className="shrink-0" />
              </a>
              <button
                type="button"
                className={cn(
                  "flex items-center justify-center size-11 sm:size-12 rounded-2xl border shadow-sm active:scale-[0.97] transition-all duration-200",
                  open
                    ? "bg-wood-900 border-wood-900 text-white shadow-wood-md"
                    : "bg-white border-stone-200/90 text-wood-800 hover:bg-wood-50 hover:border-wood-300/80 hover:text-wood-900"
                )}
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label={open ? "Zatvori meni" : "Otvori meni"}
              >
                {open ? (
                  <X size={22} strokeWidth={2} className="shrink-0" />
                ) : (
                  <Menu size={22} strokeWidth={2} className="shrink-0" />
                )}
              </button>
            </div>
            <a
              href={siteConfig.phoneHref}
              className="hidden xl:flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-wood-800"
            >
              <Phone size={15} />
              {siteConfig.phone}
            </a>
            <Button href="/kontakt" size="sm" className="hidden md:inline-flex">
              Slanje upita
            </Button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-6 py-5 shadow-lg">
          <div className="flex flex-col items-center gap-1 text-center">
            {navLinks.map((link) => {
              if ("children" in link && link.children) {
                return (
                  <div key={link.name} className="w-full max-w-xs">
                    <button
                      type="button"
                      onClick={() => setProductsOpen(!productsOpen)}
                      aria-expanded={productsOpen}
                      className="flex w-full items-center justify-center gap-2 py-3 text-sm font-semibold text-stone-800"
                    >
                      {link.name}
                      <ChevronDown size={16} className={cn("transition-transform", productsOpen && "rotate-180")} />
                    </button>
                    {productsOpen && (
                      <div className="pb-2 space-y-1 w-full">
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
