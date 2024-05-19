/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FCE5A2',
          DEFAULT: '#F3B101',
          dark: '#B37800',
        },
        secondary: {
          light: '#181818',
          DEFAULT: '#0C0C0C',
          dark: '#000000',
        },
        text: {
          primary: '#111827',
          secondary: '#6b7280',
        },
        gradient: `linear-gradient(135deg, #FCE5A2 #FCE5A2 0%, #F3B101 100%)`,
      },
      backgroundImage: {
        "gradient-text-primary": `linear-gradient(135deg, #FCE5A2 #FCE5A2 0%, #F3B101 100%)`,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
