import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="sr" className="scroll-smooth">
      <body className={inter.className}>
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
