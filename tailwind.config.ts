import { text } from "stream/consumers";
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
        primary: "#234189",
        secondary: "#ee3647",
        teritiary: "#d8dada",
        grey: "#666666",
      },
      backgroundImage: {
        hero: "url('/hero.png')",
        banner: "url('/Group 584.png')",
      },
    },
  },
  plugins: [],
};
export default config;
