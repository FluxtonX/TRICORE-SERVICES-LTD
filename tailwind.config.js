/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        brass: "#A9791F",
        "brass-ink": "#7A5716",
        "hero-bg": "#12181F",
        "hero-fg": "#F3EFE4",
        "cream-bg": "#F6F4EE",
        "slate-ink": "#14191F",
        "slate-text": "#545B66",
        "border-line": "#DEDACD",
        primary: "#059669", // bg-primary (emerald-600)
        "primary-hover": "#047857", // bg-primary-hover (emerald-700)
        "primary-light": "#ecfdf5", // bg-primary-light (emerald-50)
        "primary-text": "#059669", // text-primary-text
        "primary-50": "#ecfdf5",
        "primary-100": "#d1fae5",
        "primary-200": "#a7f3d0",
        "primary-300": "#6ee7b7",
        "primary-400": "#34d399",
        "primary-500": "#10b981",
        "priamary-600": "#059669",
        "primary-600": "#059669",
        "primary-700": "#047857",
        "primary-800": "#065f46",
        "primary-900": "#064e3b",
        "dark-surface": "#022c22",
      },
    },
  },
  plugins: [],
}
