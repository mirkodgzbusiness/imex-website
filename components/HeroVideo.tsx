"use client";

import { useEffect, useRef } from "react";

export const HERO_VIDEO_HLS =
  "https://customer-cps5jrevd1ex7gds.cloudflarestream.com/e473a01f40d34c5acc6a0fcf4983e56e/manifest/video.m3u8";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HERO_VIDEO_HLS;
      return;
    }

    let hls: import("hls.js").default | null = null;

    import("hls.js").then(({ default: Hls }) => {
      if (!Hls.isSupported() || !videoRef.current) return;
      const instance = new Hls();
      instance.loadSource(HERO_VIDEO_HLS);
      instance.attachMedia(videoRef.current);
      hls = instance;
    });

    return () => {
      hls?.destroy();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
      aria-hidden
    />
  );
}
