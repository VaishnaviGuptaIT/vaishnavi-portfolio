import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        bg: "#07070F",
        bg2: "#0E0E1A",
        surface: "#111124",
        purple: "#8B5CF6",
        pink: "#EC4899",
        cyan: "#06B6D4",
        "off-white": "#F8F8FF",
        gray: "#94A3B8",
      },
      animation: {
        spin20: "spin 20s linear infinite",
        spin20r: "spin 20s linear infinite reverse",
        pulse2: "pulse2 2s infinite",
        load: "load 1.8s ease forwards",
        modalIn: "modalIn 0.3s ease",
      },
      keyframes: {
        pulse2: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.4)" },
        },
        load: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        modalIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
