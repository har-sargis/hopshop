import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
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
        "gray-4": "#f3f3f3",
        "gray-5": "#3b3d50",
        "gray-6": "rgb(59, 61, 80)",
        "gray-7": "#f7f7fa",
        "gray-8": "#D7D7E4",
        "state-red": "#D90101",
        "state-purple": "#7673DC",
      },
      borderColor: {
        grey: "#D9D9D9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grey-wrapper": "url('/assets/images/fon.png')",
      },
      backgroundSize: {
        "contain-100": "100% 100%",
      },
      borderRadius: {
        "10": "0.625rem",
        "11": "2.5rem",
        "12": "1rem",
      },
      boxShadow: {
        custom: "-28px -4px 168px 65px rgba(0,0,0,0.33)",
      },
      height: {
        v9: "95vh",
        v8: "85vh",
        18: "72px",
      },
      width: {
        18: "72px",
      },
      translate: {
        "full/2": "150%",
      },
      minHeight: {
        "50": "50px",
      },
    },
  },
  plugins: [],
};
export default config;