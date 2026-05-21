"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function HomeSplash() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "done">("in");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t1 = setTimeout(() => setPhase("hold"), 200);   // fade in rápido
    const t2 = setTimeout(() => setPhase("out"), 1800);   // visible 1.6s
    const t3 = setTimeout(() => setPhase("done"), 2350);  // fade out 550ms
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!mounted || phase === "done") return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        pointerEvents: "none",
        opacity: phase === "hold" ? 1 : 0,
        transition:
          phase === "in"
            ? "opacity 0.2s ease"
            : phase === "out"
            ? "opacity 0.55s ease"
            : "none",
      }}
    >
      <Image
        src="/logo.png"
        alt="IMEX Internacional"
        width={160}
        height={56}
        className="w-36 h-auto object-contain mb-8"
        priority
      />
      <div style={{ position: "relative", width: 32, height: 32 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid rgba(11,92,255,0.15)",
          }}
        />
        <div
          className="animate-spin"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid transparent",
            borderTopColor: "#0b5cff",
          }}
        />
      </div>
    </div>,
    document.body
  );
}
