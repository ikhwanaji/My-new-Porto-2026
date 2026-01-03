// tailwind.config.ts
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
        // Menggunakan Slate untuk nuansa dark mode yang premium
        background: "#020617", // slate-950 (Deep background)
        surface: "#0f172a",    // slate-900 (Card background)
        primary: "#6366f1",    // indigo-500 (Accent/Button)
        secondary: "#94a3b8",  // slate-400 (Muted text)
        foreground: "#f8fafc", // slate-50 (Main text)
      },
      fontFamily: {
        sans: ["var(--font-sans)"], // Akan di-hook ke Google Fonts nanti
        display: ["var(--font-display)"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
export default config;