import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#FF0000",
          secondary: "#FFF700",
          tartary: "#FF3F09 ",
        },
        black: {
          main: "#000000",
          secondary: "#111111",
        },
        gray: {
          main: "#A7A7A7",
        },
      },
      boxShadow: {
        main: "rgba(255, 143, 15, 0.5) 0px 10px 20px 0px",
        yellow: "3px 14px 41px -14px rgba(216,210,26,0.75)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
