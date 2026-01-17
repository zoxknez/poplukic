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
        wood: {
          50: '#fdfaf6',
          100: '#f7edde',
          200: '#eedabf',
          300: '#e1bf95',
          400: '#d39d6e',
          500: '#c27e4e',
          600: '#ab653d',
          700: '#8e5135',
          800: '#73432f',
          900: '#5e3829',
          950: '#321c15',
        },
        forest: {
          50: '#f2f8f3',
          100: '#e1eee3',
          200: '#c5ddcb',
          300: '#9bc1a6',
          400: '#6c9f7a',
          500: '#4a825b',
          600: '#386948',
          700: '#2e543b',
          800: '#264431',
          900: '#21392a',
          950: '#0e1f16',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
