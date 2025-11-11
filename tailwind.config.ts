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

        // From Screen 8 & 10
        "primary-navy": "#003366",
        "secondary-grey": "#F0F2F5",
        "accent-coral": "#FF7F50",
        "text-dark-blue": "#333333",
        "text-light-blue": "#617c89",

        // Dark mode from screen 10
        "dm-primary": "#0A192F",
        "dm-secondary": "#172A45",
        "dm-text-primary": "#E6F1FF",
        "dm-text-secondary": "#A8B2D1",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
