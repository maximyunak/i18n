'use client';

import { HeroUIProvider } from '@heroui/react';

import { TanstackProvider } from './tanstack-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TanstackProvider>
      <HeroUIProvider>{children}</HeroUIProvider>
    </TanstackProvider>
  );
}
