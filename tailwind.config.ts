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
        "primary": "#00A99D", // Deep Teal from Screen 15
        "background-dark": "#121212", // Dark charcoal from Screen 15
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
