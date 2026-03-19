/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Pretendard Variable", "Pretendard", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        cream: { DEFAULT: "#FFFBF5", dark: "#FFF8ED" },
        ink: { DEFAULT: "#1A1A2E", light: "#2D2D44", muted: "#6B7280" },
        violet: { DEFAULT: "#7C3AED", light: "#A78BFA", dark: "#5B21B6" },
        coral: { DEFAULT: "#FB923C", light: "#FDBA74" },
        mint: { DEFAULT: "#2DD4BF", light: "#5EEAD4" },
        pink: { DEFAULT: "#EC4899", light: "#F472B6" },
        lemon: { DEFAULT: "#FACC15", light: "#FDE68A" },
        sky: "#38BDF8",
        lime: "#84CC16",
        navy: { DEFAULT: "#0F172A", light: "#1E293B", lighter: "#334155" },
      },
    },
  },
  plugins: [],
};
