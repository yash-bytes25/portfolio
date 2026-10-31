/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#101214",
        "deep-black": "#08090A",
        "warm-white": "#F1F0EA",
        "muted-steel": "#8C9298",
        "signal-orange": "#FF5A1F",
        background: "#101214",
        surface: "#14171a",
        "surface-dark": "#0c0e10",
        "surface-raised": "#1a1e22",
        border: "rgba(140, 146, 152, 0.16)",
        "border-subtle": "rgba(140, 146, 152, 0.08)",
        "border-bright": "rgba(140, 146, 152, 0.32)",
        "border-orange": "rgba(255, 90, 31, 0.4)",
        steel: {
          100: "#F1F0EA",
          200: "#d9dcd6",
          300: "#b5bac0",
          400: "#8C9298",
          500: "#697077",
          600: "#495057",
          700: "#2d3339",
          800: "#1a1e22",
          900: "#101214",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.02em",
        widest: "0.25em",
        ultra: "0.35em",
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}


