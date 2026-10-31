/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#060608",
        surface: "#0d0d12",
        "surface-light": "#15151e",
        border: "#20202a",
        "border-light": "#2e2e3d",
        chrome: {
          50: "#fafafa",
          100: "#f0f2f5",
          200: "#e2e5eb",
          300: "#c7ccd6",
          400: "#9ba3b4",
          500: "#6e778a",
          600: "#4b5364",
          700: "#323844",
          800: "#1e222a",
          900: "#0f1115",
        },
        accent: {
          DEFAULT: "#e2b714", // Titanium warm gold/amber accent used very sparingly
          cyan: "#38bdf8",
          orange: "#ff5e3a",
        }
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
      }
    },
  },
  plugins: [],
}

