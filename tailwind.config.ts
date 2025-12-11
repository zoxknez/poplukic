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
          100: '#F5E6D3',
          200: '#E6CCB2',
          300: '#DDB892',
          400: '#B08968',
          500: '#9C6644',
          600: '#7F5539',
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723',
        },
        forest: {
          100: '#E8F5E9',
          300: '#81C784',
          500: '#4CAF50',
          700: '#388E3C',
          900: '#1B5E20',
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
