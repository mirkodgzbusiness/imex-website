"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/galeria/GanchoDisneyBaby.jpeg",   alt: "Gancho Disney Baby" },
  { src: "/galeria/GanchoDosPedacitos.jpeg", alt: "Gancho Dos Pedacitos" },
  { src: "/galeria/GanchoOechsle.jpeg",      alt: "Gancho Oechsle" },
  { src: "/galeria/GanchoPlazaVea.jpeg",     alt: "Gancho Plaza Vea" },
  { src: "/galeria/GanchoTottus.jpeg",       alt: "Gancho Tottus" },
];

export default function GaleriaSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div className="relative bg-light-bg rounded-2xl h-80 overflow-hidden select-none">
      {/* Image */}
      <Image
        key={current}
        src={images[current].src}
        alt={images[current].alt}
        fill
        className="object-contain p-6"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      {/* Prev */}
      <button
        onClick={prev}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dark-bg rounded-full w-9 h-9 flex items-center justify-center shadow transition-colors"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Imagen siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dark-bg rounded-full w-9 h-9 flex items-center justify-center shadow transition-colors"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a imagen ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-primary" : "bg-dark-bg/30"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <span className="absolute top-3 right-4 text-xs text-dark-bg/50 font-medium">
        {current + 1} / {images.length}
      </span>
    </div>
  );
}
