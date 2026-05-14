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
        heading: ["var(--font-poppins)", "sans-serif"],
        body:    ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
