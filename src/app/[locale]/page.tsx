'use client';

import { Link } from '@/i18n/routing';
import LocalSwitcher from '@/widgets/local-switcher/ui/local-switcher';
import { Button } from '@heroui/react';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('IndexPage');

  return (
    <>
      <h1>sdaasd</h1>
      <Link href="/product">Product</Link>
      <Button className="bg-primary-green">Click me</Button>
      <Button className="bg-primary-blue">Click me</Button>
      <Button className="bg-gray">Click me</Button>
      <Button className="bg-accents-yellow text-body2-uppercase">
        Click me
      </Button>
      <Button className="bg-neutral-01-95 text-h1">Click me</Button>
      <h1 className="text-body2-uppercase">Click me</h1>
      <LocalSwitcher />
    </>
  );
}
