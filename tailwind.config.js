/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esto le dice a Tailwind que busque clases en tus archivos de React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}