import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Drvena ambalaža i rezana građa`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "drvene palete",
    "drvene gajbice",
    "rezana građa",
    "ISPM 15",
    "FSC",
    "transport",
    "Banatsko Veliko Selo",
    "Srbija",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Drvena ambalaža`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Drvena ambalaža`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`scroll-smooth ${dmSans.variable} ${libreBaskerville.variable}`}>
      <body className={`${dmSans.className} antialiased bg-cream text-wood-950`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-wood-900 focus:text-white focus:text-sm focus:font-semibold"
        >
          Preskoči na sadržaj
        </a>
        <JsonLd />
        <Navbar />
        <main id="main-content" className="min-h-screen pt-16 md:pt-[4.25rem]">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
