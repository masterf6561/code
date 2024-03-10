import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      "white": "#ffffff",
      "black": "#000000",
      "mediumaquamarine": "#73b9ad",
      "lightskyblue": "#91cef8",
      "bringBackground": '#2b3135',
      "bringBackgroundHover": "#222629",
      "bringSecondaryBackground": "#728790",
      "bringHighlight": '#f16a68',
      "bringHighlightHover": "#c95957",
      "bringSecondary": "#338a7e",
      "bringSecondaryHover": "#2d756b",
      "navbar": "#aaa"
    }
  },
  plugins: [],
};
export default config;
