/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff6b00",
          dark: "#d45500",
          light: "#ff8c32"
        },
        charcoal: "#1f1f1f",
        smoke: "#f6f7fb"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"]
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};
