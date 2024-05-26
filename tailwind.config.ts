import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "simon-dark": "url('/dark-simon.jpeg')",
        "simon-light": "url('/light-simon.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "secondary": "#f7f7f7",
        "dark-secondary": "#1c1c1e",
        "tridary": "#EDEDED",
        "dark":"#000",
        "night": "#0D1929",
      },

      borderColor: { night: "#0D1929" },
    },
  },
  plugins: [nextui()],
};
export default config;
