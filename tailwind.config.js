/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b1a',
          50: '#fff3eb',
          100: '#ffe6d6',
          200: '#ffc6a3',
          300: '#ffa56f',
          400: '#ff7a32',
          500: '#ff6b1a',
          600: '#e05400',
          700: '#b84200',
          800: '#8f3400',
          900: '#6c2700'
        },
        dark: '#1f2933'
      },
      fontFamily: {
        heading: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
};
