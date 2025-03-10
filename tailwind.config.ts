import { heroui } from '@heroui/react';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/components/(input|modal|toggle|form).js',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#222222',
        gray: {
          DEFAULT: '#656084',
          medium: '#b0aad0',
          light: '#ebe8ff',
          superLight: '#f7f6ff',
        },
        red: {
          DEFAULT: '#ff4343',
          light: '#ffdbdb',
        },
        orange: {
          DEFAULT: '#fba457',
          light: '#ffeddd',
        },
        green: {
          light: '#d7ffec',
          DEFAULT: '#1dbf73',
        },
        purple: {
          light: '#f2f0fe',
        },
        blue: {
          light: '#f6fafd',
        },
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#0070f3',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#0070f3',
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
