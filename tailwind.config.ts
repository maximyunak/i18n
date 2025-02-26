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
            '95': '#F2FEFEFE',
            '20': '#33FEFEFE',
            '10': '#1AFEFEFE',
          },
          '02': {
            DEFAULT: '#F3F5F7',
            '50': '#80F3F5F7',
          },
          '03': {
            DEFAULT: '#E8ECEF',
            '75': '#BFE8ECEF',
            '50': '#80E8ECEF',
          },
          '04': {
            DEFAULT: '#6C7275',
            '75': '#BF6C7275',
            '50': '#806C7275',
            '25': '#406C7275',
            '15': '#266C7275',
          },
          '05': {
            DEFAULT: '#343839',
            '50': '#80343839',
          },
          '06': {
            DEFAULT: '#232627',
            '95': '#F2232627',
            '90': '#E6232627',
            '50': '#80232627',
          },
          '07': {
            DEFAULT: '#141718',
            '95': '#F2141718',
            '50': '#80141718',
          },
        },
        primary: {
          green: '#3FDD78',
          blue: {
            DEFAULT: '#0084FF',
            '5': '#0D0084FF',
            '10': '#1A0084FF',
            '50': '#800084FF',
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
      fontSize: {
        'caption1-medium': [
          '0.75rem',
          { lineHeight: '1.25rem', fontWeight: '500' },
        ],
        'caption1-semibold': [
          '0.75rem',
          { lineHeight: '1.25rem', fontWeight: '600' },
        ],
        'caption1-bold': [
          '0.75rem',
          { lineHeight: '1.25rem', fontWeight: '700' },
        ],
        caption2: ['0.6875rem', { lineHeight: '1rem', fontWeight: '400' }],
        base2: ['0.875rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'base2-semibold': [
          '0.875rem',
          { lineHeight: '1.5rem', fontWeight: '600' },
        ],
        'base1-semibold': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }],
        base1: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        h1: ['4rem', { lineHeight: '4.5rem', fontWeight: '400' }],
        h2: ['3rem', { lineHeight: '3.5rem', fontWeight: '400' }],
        h3: ['2.5rem', { lineHeight: '3rem', fontWeight: '400' }],
        h4: ['1.75rem', { lineHeight: '2.5rem', fontWeight: '400' }],
        'h4-small': ['2rem', { lineHeight: '3rem', fontWeight: '400' }],
        h5: ['1.5rem', { lineHeight: '2.5rem', fontWeight: '400' }],
        h6: ['1.125rem', { lineHeight: '2rem', fontWeight: '400' }],
        body1: ['1.5rem', { lineHeight: '2.25rem', fontWeight: '400' }],
        'body1-small': [
          '1.375rem',
          { lineHeight: '1.75rem', fontWeight: '400' },
        ],
        body2: ['1.0625rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'body2-bold': [
          '1.0625rem',
          { lineHeight: '1.5rem', fontWeight: '700' },
        ],
        'body2-underline': [
          '1.0625rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
        ],
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
