/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./hooks/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)", // Uses your neon blue accent globally
      },
      boxShadow: {
        glow: "0 0 25px rgba(var(--accent-rgb), 0.5)",
        soft: "0 0 10px rgba(255,255,255,0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
    },
  },
  plugins: [],
};
