/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        secondary: '#EA580C',
        dark: '#0B0B0B',
        gray: {
          800: '#1F2937',
          900: '#111827'
        }
      }
    },
  },
  plugins: [],
}
