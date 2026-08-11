/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: "#1d4ed8", // bg-primary
        "primary-hover": "#2563eb", // bg-primary-hover
        "primary-light": "#eff6ff", // bg-primary-light
        "primary-text": "#2563eb", // text-primary-text
        "primary-50": "oklch(97% 0.014 254.604)",
        "primary-100": "oklch(93.2% 0.032 255.585)",
        "primary-500": "#0084D1",
        "primary-300": "#8EC5FF",
        "primary-400": "#51A2FF",
        "priamary-600": "#155DFC",
        "primary-700": "#1E3A8A",
        "primary-800": "oklch(44.3% 0.11 240.79)",
        "primary-900": "#1C398E",
      },
    },
  },
  plugins: [],
}
