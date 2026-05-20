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
        primary:   "#1B3A6B",
        secondary: "#E8401C",
        accent:    "#00A8CC",
        "dark-bg": "#1A1A2E",
        "mid-gray":"#4A4A6A",
        "light-bg":"#F4F6F9",
        success:   "#27AE60",
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
      },
      animation: {
        "page-in": "page-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
