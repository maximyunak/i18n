import { locales } from '@/config';
import { useLocale, useTranslations } from 'next-intl';

import LocalSwitcherSelect from './local-switcher-select';

export default function LocalSwitcher() {
  const t = useTranslations('LocalSwitcher');
  const locale = useLocale();
  return (
    <div>
      <LocalSwitcherSelect defaultValue={locale} label={t('label')}>
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </LocalSwitcherSelect>
    </div>
  );
}
