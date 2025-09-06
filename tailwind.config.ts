import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
        sans: ['"Termina Test"', 'sans-serif'],
      },
      colors: {
        "gray-light": "#f1f1f1",
        black: "#000",
        primary: "#00ff",
        background: "var(--background)",
        title: "#011936",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "540px",
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          DEFAULT: "1600px",
        },
      },
      backgroundImage: {
        "banner-gradient":
          "linear-gradient(270deg, rgba(255,255,255, 1) 0%, rgba(255, 255,255,1) 40%)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
