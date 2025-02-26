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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        neutral: {
          '01': {
            DEFAULT: '#FEFEFE',
            '95': '#F2FEFEFE', // 95% непрозрачности
            '20': '#33FEFEFE', // 20% непрозрачности
            '10': '#1AFEFEFE', // 10% непрозрачности
          },
          '02': {
            DEFAULT: '#F3F5F7',
            '50': '#80F3F5F7', // 50% непрозрачности
          },
          '03': {
            DEFAULT: '#E8ECEF',
            '75': '#BFE8ECEF', // 75% непрозрачности
            '50': '#80E8ECEF', // 50% непрозрачности
          },
          '04': {
            DEFAULT: '#6C7275',
            '75': '#BF6C7275', // 75% непрозрачности
            '50': '#806C7275', // 50% непрозрачности
            '25': '#406C7275', // 25% непрозрачности
            '15': '#266C7275', // 15% непрозрачности
          },
          '05': {
            DEFAULT: '#343839',
            '50': '#80343839', // 50% непрозрачности
          },
          '06': {
            DEFAULT: '#232627',
            '95': '#F2232627', // 95% непрозрачности
            '90': '#E6232627', // 90% непрозрачности
            '50': '#80232627', // 50% непрозрачности
          },
          '07': {
            DEFAULT: '#141718',
            '95': '#F2141718', // 95% непрозрачности
            '50': '#80141718', // 50% непрозрачности
          },
        },
        primary: {
          green: '#3FDD78',
          blue: {
            DEFAULT: '#0084FF',
            '5': '#0D0084FF', // 5% непрозрачности
            '10': '#1A0084FF', // 10% непрозрачности
            '50': '#800084FF', // 50% непрозрачности
          },
        },
        accents: {
          yellow: '#DDA73F',
          orange: '#D84C10',
          blue: '#3E90F0',
          purple: {
            DEFAULT: '#8E55EA',
            muted: '#8C6584',
          },
        },
        code: {
          blue: '#46DEFF',
          green: '#FB692A',
          orange: '#FF9F43',
          pink: '#FF97E8',
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
