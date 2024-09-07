/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#2662D6",
        secondary: "#3DB8B1",
        tertiary:"#002241"
      },
      dropShadow:{
        primaryShadow: "10px 10px 13px hsla(0, 0%, 0%, 0.25)",
      }
    },
  },
  plugins: [],
}