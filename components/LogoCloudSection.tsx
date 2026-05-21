"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { MotionPreset } from "@/components/ui/motion-preset";

type BrandLogo = {
  image: string;
  name: string;
};

const brandLogos: BrandLogo[] = [
  {
    image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-logo.png",
    name: "Retail & comercio",
  },
  {
    image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/amazon-logo.png",
    name: "Distribución",
  },
  {
    image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/hubspot-logo.png",
    name: "Industria textil",
  },
  {
    image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/walmart-logo.png",
    name: "Tiendas por departamento",
  },
  {
    image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-logo.png",
    name: "Corporativo",
  },
  {
    image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/airbnb-logo.png",
    name: "Hospitality",
  },
  {
    image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/fedex-logo.png",
    name: "Logística",
  },
  {
    image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/adobe-logo.png",
    name: "Moda & diseño",
  },
  {
    image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/shopify-logo.png",
    name: "E-commerce",
  },
  {
    image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/ola-logo.png",
    name: "Lavandería industrial",
  },
  {
    image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/huawei-logo.png",
    name: "Manufactura",
  },
  {
    image: "https://cdn.shadcnstudio.com/ss-assets/brand-logo/bookmyshow-logo.png",
    name: "Exhibición retail",
  },
];

function LogoCard({ logo }: { logo: BrandLogo }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white py-6 shadow-md shrink-0">
      <div className="flex flex-col items-center px-9 gap-2">
        <Image
          src={logo.image}
          alt={logo.name}
          width={120}
          height={24}
          className="h-6 w-auto object-contain opacity-70"
          unoptimized
        />
        <span className="text-[10px] font-semibold uppercase tracking-wider text-mid-gray whitespace-nowrap">
          {logo.name}
        </span>
      </div>
    </div>
  );
}

export default function LogoCloudSection() {
  const rowOne = brandLogos.slice(0, 7);
  const rowTwo = brandLogos.slice(7);

  return (
    <section className="bg-light-bg py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center sm:mb-16">
          <MotionPreset
            fade
            slide={{ direction: "down", offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full border border-primary/20 bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
              Sectores que atendemos
            </span>
          </MotionPreset>

          <MotionPreset
            component="h2"
            className="font-heading text-2xl text-dark-bg md:text-3xl lg:text-4xl"
            fade
            slide={{ direction: "down", offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
          >
            Confianza de empresas en retail y textil
          </MotionPreset>

          <MotionPreset
            component="p"
            className="mx-auto max-w-2xl text-lg text-mid-gray"
            fade
            blur
            slide={{ direction: "down", offset: 50 }}
            transition={{ duration: 0.5 }}
            delay={0.6}
          >
            Más de 500 clientes en Perú eligen nuestros ganchos y colgadores para
            exhibir sus prendas con calidad y durabilidad.
          </MotionPreset>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-light-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-light-bg to-transparent" />

          <div className="w-full overflow-hidden">
            <Marquee pauseOnHover duration={20} gap={1.5}>
              {rowOne.map((logo, index) => (
                <LogoCard key={`row1-${index}`} logo={logo} />
              ))}
            </Marquee>
          </div>
          <div className="w-full overflow-hidden mt-2">
            <Marquee pauseOnHover duration={20} gap={1.5} reverse>
              {rowTwo.map((logo, index) => (
                <LogoCard key={`row2-${index}`} logo={logo} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
