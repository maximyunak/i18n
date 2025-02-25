'use client';

// import { Link } from '@/i18n/routing';
// import { useTranslations } from 'next-intl';
// import { unstable_setRequestLocale } from 'next-intl/server';

// export default function IndexPage({ params }: { params: { locale: string } }) {
//   unstable_setRequestLocale(params.locale);
//   const t = useTranslations('IndexPage');
//   return (
//     <div>
//       {t('title')}
//       {t.rich('description', {
//         b: (chunks) => <b>{chunks}</b>,
//       })}
//       <Link href="/product">Product</Link>
//     </div>
//   );
// }
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('IndexPage');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <Link href="/product" className="text-blue-500 hover:underline">
        {t('product')}
      </Link>
    </div>
  );
}
