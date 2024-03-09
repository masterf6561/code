import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "white": "#ffffff",
      "bringBackground": '#2b3135',
      "bringSecondaryBackground": "#728790",
      "bringHighlight": '#f16a68',
      "bringHighlightHover": "#c95957",
      "bringSecondary": "#338a7e",
      "bringSecondaryHover": "#2d756b"
    }
  },
  plugins: [],
  darkMode: "class",
};
export default config;
