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
        "primary": "#4FD1C5",
        "background-light": "#FFFFFF",
        "background-dark": "#1A2E35",
        "text-primary": "#1A2E35",
        "text-secondary": "#718096",
        "accent-light": "#E6FFFA",
        "container-dark": "#242424", // Lighter grey for cards from Screen 15
        "text-light": "#EAEAEA",
        "text-muted-dark": "#A0A0A0",
        "border-dark": "#3b4b54",
        "success": "#0bda57",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
