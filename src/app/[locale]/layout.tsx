import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { HeroUIProvider } from '@heroui/system';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

import '../globals.css';

import { Providers } from '../providers';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'localeLayout' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = (await params).locale;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <HeroUIProvider>
              <main className="container mx-auto px-4 text-sm font-bold">
                {children}
              </main>
            </HeroUIProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
