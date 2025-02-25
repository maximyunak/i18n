'use client';

import { Link } from '@/i18n/routing';
import LocalSwitcher from '@/widgets/local-switcher/ui/local-switcher';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('IndexPage');

  return (
    <>
      <h1>sdaasd</h1>
      <Link href="/product">Product</Link>
      <LocalSwitcher />
    </>
  );
}
