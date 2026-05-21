import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:    "#0b5cff",
        secondary:  "#E8401C",
        accent:     "#c7c5fd",
        "dark-bg":  "#00031d",
        "mid-blue": "#264cab",
        "mid-gray": "#4A4A6A",
        "light-bg": "#F4F6F9",
        success:    "#27AE60",
      },
      fontFamily: {
        heading: ["var(--font-national2)", "sans-serif"],
        body:    ["var(--font-roobert)", "sans-serif"],
      },
      keyframes: {
        "page-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
            filter: "blur(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        "marquee-horizontal": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--marquee-gap, 1rem)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--marquee-gap, 1rem)))" },
        },
      },
      animation: {
        "page-in": "page-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "marquee-horizontal":
          "marquee-horizontal var(--marquee-duration, 40s) linear infinite",
        "marquee-vertical":
          "marquee-vertical var(--marquee-duration, 40s) linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
