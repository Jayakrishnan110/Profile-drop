import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "card-expanded": "white", // Or your desired background color
      },
      height: {
        "card-expanded": "200px", // Adjust as needed
      },
      overflow: {
        "card-expanded": "hidden", // Hide overflowing content
      },
    },
  },
  plugins: [],
};
export default config;
