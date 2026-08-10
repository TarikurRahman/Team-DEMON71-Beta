import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // ডার্ক মোড ক্লাসের মাধ্যমে হ্যান্ডেল হবে
  theme: {
    extend: {
      colors: {
        brand: {
          lightBg: "#ffffff",
          darkBg: "#000000",
          textDark: "#1e293b",
          red1: "#a81e16",
          red2: "#de4030",
        },
      },
    },
  },
  plugins: [],
};
export default config;
