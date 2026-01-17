import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "POP-LUKIĆ DOO | Premium Wood Processing & Transport",
  description: "Vrhunska proizvodnja paleta, gajbica i rezane građe. ISPM 15 sertifikovano. Banatsko Veliko Selo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`scroll-smooth ${outfit.variable} ${playfair.variable}`}>
      <body className={`${outfit.className} antialiased`}>
        <ThreeBackground />
        <Navbar />
        <div className="relative z-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
