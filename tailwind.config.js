/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0f12",
        surface: "#14171d",
        "surface-elevated": "#1a1e26",
        border: "rgba(255, 255, 255, 0.08)",
        "border-subtle": "rgba(255, 255, 255, 0.04)",
        "border-hover": "rgba(255, 255, 255, 0.16)",
        accent: {
          DEFAULT: "#ea580c",
          subtle: "rgba(234, 88, 12, 0.12)",
          hover: "#f97316",
        },
        primary: "#f3f4f6",
        secondary: "#9ca3af",
        muted: "#6b7280",
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tight: "-0.015em",
        normal: "0em",
        wide: "0.025em",
      },
      lineHeight: {
        relaxed: "1.7",
      }
    },
  },
  plugins: [],
}
