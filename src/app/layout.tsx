import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`scroll-smooth ${dmSans.variable} ${libreBaskerville.variable}`}>
      <body className={`${dmSans.className} antialiased bg-cream text-wood-950`}>
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-[4.25rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
