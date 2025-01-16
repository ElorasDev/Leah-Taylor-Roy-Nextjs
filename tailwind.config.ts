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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': '#D7171F',
        'secendory': '#660000',
        'neutral': '#413F41',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
