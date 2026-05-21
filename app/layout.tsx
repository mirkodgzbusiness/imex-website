import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { national2, roobert } from "@/lib/fonts";

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
    url: "https://imexinternacional.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMEX Internacional | Ganchos y Colgadores",
    description: "Importación y exportación de ganchos y colgadores para la industria textil en Perú.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IMEX Internacional",
  url: "https://imexinternacional.com",
  description: "Importación y exportación de ganchos y colgadores para la industria textil en Perú.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PE",
    addressLocality: "Lima",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${national2.variable} ${roobert.variable}`}>
      <body className="font-body antialiased bg-white text-dark-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Splash síncrono: corre antes de React, sin flash */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){if(location.pathname!=='/')return;var s=document.createElement('style');s.textContent='@keyframes _sp{to{transform:rotate(360deg)}}';document.head.appendChild(s);var o=document.createElement('div');o.style.cssText='position:fixed;inset:0;z-index:9999;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none;';var i=new Image();i.src='/logo.png';i.style.cssText='width:144px;height:auto;object-fit:contain;margin-bottom:32px;';o.appendChild(i);var w=document.createElement('div');w.style.cssText='position:relative;width:32px;height:32px;';var r=document.createElement('div');r.style.cssText='position:absolute;inset:0;border-radius:50%;border:2px solid rgba(11,92,255,.15);';var sp=document.createElement('div');sp.style.cssText='position:absolute;inset:0;border-radius:50%;border:2px solid transparent;border-top-color:#0b5cff;animation:_sp 1s linear infinite;';w.appendChild(r);w.appendChild(sp);o.appendChild(w);document.body.appendChild(o);setTimeout(function(){o.style.transition='opacity .55s ease';o.style.opacity='0';setTimeout(function(){o.remove();s.remove();},600);},1800);})();` }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
