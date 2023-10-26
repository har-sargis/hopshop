import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue-dark": "#403689",
        "brand-blue-light": "#7673DC",
        "brand-orange": "#EC613E",
        black: "#000000",
        "gray-1": "#202020",
        "gray-2": "#404040",
        "gray-3": "#D9D9D9",

        "state-red": "#D90101",
        "state-purple": "#7673DC",
      },
      borderColor: {
        grey: "#D9D9D9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "10": "0.625rem",
        "11": "2.5rem",
      },
      boxShadow: {
        custom: "-28px -4px 168px 65px rgba(0,0,0,0.33)",
      },
      height: {
        v9: "95vh",
        v8: "85vh",
      },
    },
  },
  plugins: [],
};
export default config;
