import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function IndexPage({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations('IndexPage');
  return (
    <div>
      {t('title')}
      {t.rich('description', {
        b: (chunks) => <b>{chunks}</b>,
      })}
      <Link href="/product">Product</Link>
    </div>
  );
}
