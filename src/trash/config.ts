// Определяем поддерживаемые локали
export const locales = ['en', 'ru'] as const;
export type Locales = (typeof locales)[number]; // 'en' | 'ru'

// Определяем пути с переводами для каждой локали
export const pathnames = {
  '/': {
    en: '/',
    ru: '/',
  },
  '/product': {
    en: '/product',
    ru: '/product', // Можно перевести, например, в '/продукт'
  },
} as const;

// Тип для pathnames
export type Pathnames = typeof pathnames;

// Префикс локали в URL
export const localePrefix = 'always' as const;
