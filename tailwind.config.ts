import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5e6',
          100: '#ffe6cc',
          200: '#ffcc99',
          300: '#ffb366',
          400: '#ff9933',
          500: '#ff6f01',
          600: '#cc5901',
          700: '#994301',
          800: '#662c00',
          900: '#331600',
        },
        secondary: {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b0ff',
          400: '#3396ff',
          500: '#004aad',
          600: '#003b8a',
          700: '#002c68',
          800: '#001e45',
          900: '#000f23',
        },
        accent: {
          50: '#fffef0',
          100: '#fffde0',
          200: '#fffbc2',
          300: '#fff9a3',
          400: '#fff785',
          500: '#fed800',
          600: '#cbad00',
          700: '#988200',
          800: '#665600',
          900: '#332b00',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#4a4a4a',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
