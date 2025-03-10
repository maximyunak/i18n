import { Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { HeroUIProvider } from '@heroui/system';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '../globals.css';

import { Metadata } from 'next';

import { Providers } from '../providers';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1',
  title: 'aaa',
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
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
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <HeroUIProvider>
              <main className="container mx-auto min-h-screen px-4 text-sm font-bold">
                {children}
              </main>
            </HeroUIProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
