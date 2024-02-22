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
        primary: "#232931",
        secondary: "#393E46",
        accent: "#4ECCA3",
        light: "#EEEEEE",
      },
      fontFamily: {
        body: ["Assistant", "sans-serif"],
      },
      fontSize: {
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
        "5xl": "96px",
      },
      lineHeight: {
        normal: "1.5",
        tight: "1.25",
        loose: "2",
      },
      letterSpacing: {
        normal: "normal",
        wide: "0.1em",
        wider: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
