import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Добавьте другие настройки Next.js здесь
};

export default withNextIntl(nextConfig);
