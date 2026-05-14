import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IMEX Internacional | Ganchos y Colgadores para la Industria Textil en Perú",
  description:
    "Importación y exportación de ganchos y colgadores para la industria textil. Calidad y variedad para tu negocio en Perú.",
  openGraph: {
    title: "IMEX Internacional",
    description: "Ganchos y colgadores para la industria textil en Perú.",
    siteName: "IMEX Internacional",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased bg-white text-dark-bg">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
