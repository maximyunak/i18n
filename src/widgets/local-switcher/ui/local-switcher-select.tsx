'use client';

import { useTransition } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { usePathname } from '@/navigation';

type Props = {
  children: any;
  defaultValue: string;
  label: string;
};

export default function LocalSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(`/${nextLocale}${pathname}`);
    });
  };

  return (
    <div>
      <label className={`relative ${isPending ? 'opacity-50' : ''}`}>
        <span className="sr-only">{label}</span>
        <select
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={isPending}
          className="appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 pr-8 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {children}
        </select>
      </label>
    </div>
  );
}
