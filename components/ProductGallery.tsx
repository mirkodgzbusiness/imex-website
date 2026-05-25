"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

const ZOOM = 2.5;

type Props = { images: string[]; productName: string; thumbnailLabels?: string[] };

export default function ProductGallery({ images, productName, thumbnailLabels }: Props) {
  const [selected, setSelected] = useState(0);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [zooming, setZooming] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - r.top) / r.height) * 100));
    setPos({ x, y });
  }, []);

  if (!images.length) return null;

  // Lens size = 1/ZOOM of the container
  const lensSize = 100 / ZOOM;
  // Lens top-left so it stays inside the container
  const lensLeft = pos.x * (1 - 1 / ZOOM);
  const lensTop  = pos.y * (1 - 1 / ZOOM);

  return (
    <div className="space-y-4">
      <div className="relative">
        {/* ── Main image ── */}
        <div
          ref={ref}
          className="relative h-80 lg:h-96 w-full bg-light-bg rounded-2xl overflow-hidden cursor-crosshair select-none"
          onMouseEnter={() => setZooming(true)}
          onMouseLeave={() => setZooming(false)}
          onMouseMove={onMove}
        >
          <Image
            src={images[selected]}
            alt={productName}
            fill
            className="object-contain p-4 pointer-events-none"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />

          {/* Lens overlay */}
          {zooming && (
            <div
              className="absolute pointer-events-none border-2 border-primary/60 bg-primary/10 rounded"
              style={{
                width:  `${lensSize}%`,
                height: `${lensSize}%`,
                left:   `${lensLeft}%`,
                top:    `${lensTop}%`,
              }}
            />
          )}
        </div>

        {/* ── Zoom panel (desktop only, floats to the right) ── */}
        {zooming && (
          <div
            className="absolute top-0 left-[calc(100%+12px)] z-50 w-80 h-80 lg:w-96 lg:h-96 rounded-2xl border border-gray-200 shadow-2xl hidden lg:block bg-white"
            style={{
              backgroundImage:    `url(${images[selected]})`,
              backgroundRepeat:   "no-repeat",
              backgroundSize:     `${ZOOM * 100}%`,
              backgroundPosition: `${pos.x}% ${pos.y}%`,
            }}
          />
        )}
      </div>

      {/* ── Thumbnails ── */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setSelected(i)}
              className={`relative w-20 h-20 bg-light-bg rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                i === selected
                  ? "border-primary"
                  : "border-transparent hover:border-primary/50"
              }`}
              aria-label={`Ver imagen ${i + 1} de ${productName}`}
              aria-pressed={i === selected}
            >
              <Image
                src={img}
                alt={`${productName} vista ${i + 1}`}
                fill
                className="object-contain p-2"
                sizes="80px"
              />
              {(() => {
                const label = thumbnailLabels?.[i] ?? (i === 1 ? "Manual de uso" : "");
                return label ? (
                  <span className="absolute bottom-0 inset-x-0 bg-dark-bg/70 text-white text-[9px] font-semibold text-center py-0.5 leading-tight">
                    {label}
                  </span>
                ) : null;
              })()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
