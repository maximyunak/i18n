'use client';

import { ChangeEvent, useState, useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { Switch } from '@heroui/react';
import { useLocale, useTranslations } from 'next-intl';

export default function LocalSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const [isEng, setIsEng] = useState(locale === 'en');

  const t = useTranslations('LocalSwitcher');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const nextLocale = isChecked ? 'en' : 'ru';
    setIsEng(isChecked);

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div>
      <Switch
        isSelected={isEng}
        onChange={onChange}
        defaultSelected={isEng}
        // startContent={<span>en</span>}
        // endContent={<span>ru</span>}
      >
        <span className="text-sm">{t('switch')}</span>
      </Switch>
    </div>
  );
}
