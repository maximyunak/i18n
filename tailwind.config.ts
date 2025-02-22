import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";
// import heroui from "@heroui/react/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(input|form).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#0070f3",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#0070f3",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;